// Frontend <-> Backend API integration
(function () {
    "use strict";

    var API_BASE = "http://127.0.0.1:8000/api";
    window.TVS_API_BASE = API_BASE;

    function showMessage(el, type, text) {
        if (!el) { return; }
        el.style.display = "block";
        el.style.padding = "12px 16px";
        el.style.borderRadius = "6px";
        el.style.background = type === "error" ? "#fdecea" : "#e7f6ec";
        el.style.color = type === "error" ? "#b71c1c" : "#1b5e20";
        el.style.border = "1px solid " + (type === "error" ? "#f5c6cb" : "#c3e6cb");
        el.innerText = text;
    }

    function flattenErrors(payload) {
        if (!payload) { return ""; }
        if (typeof payload === "string") { return payload; }
        if (payload.detail) { return payload.detail; }
        if (payload.non_field_errors) { return [].concat(payload.non_field_errors).join(" "); }
        var parts = [];
        Object.keys(payload).forEach(function (key) {
            parts.push(key + ": " + [].concat(payload[key]).join(" "));
        });
        return parts.join(" | ");
    }

    function submitJSON(url, data, onSuccess, onError) {
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(function (res) {
            return res.json().catch(function () { return {}; }).then(function (payload) {
                if (res.ok) { onSuccess(payload); }
                else { onError(flattenErrors(payload) || "Request failed (" + res.status + ")"); }
            });
        }).catch(function () {
            onError("Could not reach the server. Please make sure the backend is running.");
        });
    }

    document.addEventListener("DOMContentLoaded", function () {

        // Contact Us form
        var contactForm = document.getElementById("contactForm");
        if (contactForm) {
            contactForm.addEventListener("submit", function (e) {
                e.preventDefault();
                var alertBox = document.getElementById("contactAlert");
                var data = {};
                ["name", "company_name", "email", "phone", "select_market", "role_hiring_requirement", "message"].forEach(function (n) {
                    var f = contactForm.querySelector('[name="' + n + '"]');
                    if (f) { data[n] = f.value.trim(); }
                });
                submitJSON(API_BASE + "/contact/", data, function () {
                    showMessage(contactAlert, "success", "Thanks! Your message was sent successfully.");
                    contactForm.reset();
                }, function (err) {
                    showMessage(contactAlert, "error", err || "Something went wrong. Please try again.");
                });
            });
        }

        // Book An Appointment form
        var appointmentForm = document.getElementById("appointmentForm");
        if (appointmentForm) {
            appointmentForm.addEventListener("submit", function (e) {
                e.preventDefault();
                var alertEl = document.getElementById("apptAlert");
                var data = {};
                ["name", "email", "phone", "company_name", "select_market",
                    "role_hiring_requirement", "service_type", "preferred_expert",
                    "message", "appointment_date", "appointment_time"].forEach(function (name) {
                    var field = appointmentForm.querySelector('[name="' + name + '"]');
                    if (field) { data[name] = field.value.trim(); }
                });
                if (!data.appointment_date || !data.appointment_time) {
                    showMessage(alertEl, "error", "Please pick a date and a time slot from the calendar.");
                    return;
                }
                submitJSON(API_BASE + "/appointment/", data, function () {
                    showMessage(alertEl, "success", "Your appointment has been scheduled. We will contact you soon.");
                    ["name", "email", "phone", "company_name", "message"].forEach(function (name) {
                        var field = appointmentForm.querySelector('[name="' + name + '"]');
                        if (field) { field.value = ""; }
                    });
                    if (window.tvsOnAppointmentBooked) { window.tvsOnAppointmentBooked(); }
                }, function (err) {
                    showMessage(alertEl, "error", flattenErrors(err) || "Something went wrong. Please try again.");
                });
            });
        }

        // Login form
        var loginForm = document.getElementById("loginForm");
        if (loginForm) {
            loginForm.addEventListener("submit", function (e) {
                e.preventDefault();
                var msg = document.getElementById("loginMessage");
                var identifier = document.getElementById("loginIdentifier");
                var password = document.getElementById("loginPassword");
                submitJSON(API_BASE + "/auth/login/", {
                    identifier: identifier ? identifier.value.trim() : "",
                    password: password ? password.value : ""
                }, function (payload) {
                    if (payload && payload.token) {
                        localStorage.setItem("tvs_token", payload.token);
                    }
                    showMessage(msg, "success", "Logged in successfully. Redirecting...");
                    window.setTimeout(function () { window.location.href = "index.html"; }, 800);
                }, function (err) {
                    showMessage(msg, "error", err || "Invalid credentials.");
                });
            });
        }

        // Register form
        var registerForm = document.getElementById("registerForm");
        if (registerForm) {
            registerForm.addEventListener("submit", function (e) {
                e.preventDefault();
                var msg = document.getElementById("registerMessage");
                var data = {
                    username: (document.getElementById("registerUsername") || {}).value || "",
                    email: (document.getElementById("registerEmail") || {}).value || "",
                    password: (document.getElementById("registerPassword") || {}).value || "",
                    confirm_password: (document.getElementById("registerConfirmPassword") || {}).value || ""
                };
                data.username = data.username.trim();
                data.email = data.email.trim();
                if (data.password !== data.confirm_password) {
                    showMessage(msg, "error", "Passwords do not match.");
                    return;
                }
                submitJSON(API_BASE + "/auth/register/", data, function () {
                    showMessage(msg, "success", "Account created successfully. You can now log in.");
                    registerForm.reset();
                }, function (err) {
                    showMessage(msg, "error", flattenErrors(err) || "Registration failed. Please try again.");
                });
            });
        }
    });
})();
