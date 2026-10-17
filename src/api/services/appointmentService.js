import { apiClient } from '../client';
import { ENDPOINTS } from '../endpoints';

export const appointmentService = {
  book: (data) => apiClient.post(ENDPOINTS.APPOINTMENT_LIST_CREATE, data),

  getAvailability: (dateStr) =>
    apiClient.get(`${ENDPOINTS.APPOINTMENT_AVAILABILITY}?date=${dateStr}`),
};
