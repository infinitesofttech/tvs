import { apiClient, setToken } from '../client';
import { ENDPOINTS } from '../endpoints';

export const authService = {
  login: async (identifier, password) => {
    const result = await apiClient.post(ENDPOINTS.LOGIN, { identifier, password });
    if (result.data?.token) {
      setToken(result.data.token);
    }
    return result;
  },

  register: (data) => apiClient.post(ENDPOINTS.REGISTER, data),

  logout: async () => {
    await apiClient.post(ENDPOINTS.LOGOUT, {});
    setToken(null);
  },

  getProfile: () => apiClient.get(ENDPOINTS.PROFILE),
};
