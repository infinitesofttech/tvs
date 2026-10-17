// ─── API Endpoints ────────────────────────────────────────────────
// All backend REST endpoint paths are defined here.
// Do NOT hard-code paths inside components; import from here.

export const ENDPOINTS = {
  // Contact
  CONTACT_LIST_CREATE: '/contact/',
  CONTACT_DETAIL: (id) => `/contact/${id}/`,

  // Appointment
  APPOINTMENT_LIST_CREATE: '/appointment/',
  APPOINTMENT_AVAILABILITY: '/appointment/availability/',
  APPOINTMENT_DETAIL: (id) => `/appointment/${id}/`,

  // Auth
  REGISTER: '/auth/register/',
  LOGIN: '/auth/login/',
  LOGOUT: '/auth/logout/',
  PROFILE: '/auth/profile/',
};
