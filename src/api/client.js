// ─── API Client ───────────────────────────────────────────────────
// All HTTP communication with the Django REST backend goes through here.
// Change API_BASE to point to your backend server.

export const API_BASE = 'http://127.0.0.1:8000/api';

// ── Helpers ──────────────────────────────────────────────────────

function getToken() {
  return localStorage.getItem('tvs_token');
}

export function setToken(token) {
  if (token) {
    localStorage.setItem('tvs_token', token);
  } else {
    localStorage.removeItem('tvs_token');
  }
}

function buildHeaders(extra = {}) {
  const headers = { 'Content-Type': 'application/json', ...extra };
  const token = getToken();
  if (token) {
    headers['Authorization'] = `Token ${token}`;
  }
  return headers;
}

export function flattenErrors(payload) {
  if (!payload) return 'An unknown error occurred.';
  if (typeof payload === 'string') return payload;
  if (payload.detail) return payload.detail;
  if (payload.non_field_errors) return [].concat(payload.non_field_errors).join(' ');
  const parts = [];
  Object.keys(payload).forEach((key) => {
    parts.push(`${key}: ${[].concat(payload[key]).join(' ')}`);
  });
  return parts.join(' | ');
}

// ── Generic request ───────────────────────────────────────────────

async function request(method, path, body = null) {
  const options = {
    method,
    headers: buildHeaders(),
  };
  if (body !== null) {
    options.body = JSON.stringify(body);
  }

  try {
    const res = await fetch(`${API_BASE}${path}`, options);
    const payload = await res.json().catch(() => ({}));

    if (res.ok) return { data: payload, error: null };
    return { data: null, error: flattenErrors(payload) || `Request failed (${res.status})` };
  } catch {
    return { data: null, error: 'Could not reach the server. Please make sure the backend is running.' };
  }
}

export const apiClient = {
  get:    (path)        => request('GET',    path),
  post:   (path, body)  => request('POST',   path, body),
  put:    (path, body)  => request('PUT',    path, body),
  patch:  (path, body)  => request('PATCH',  path, body),
  delete: (path)        => request('DELETE', path),
};
