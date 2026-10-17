import { apiClient } from '../client';
import { ENDPOINTS } from '../endpoints';

export const contactService = {
  submit: (data) => apiClient.post(ENDPOINTS.CONTACT_LIST_CREATE, data),
};
