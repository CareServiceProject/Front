import http from './instance';

const API_URL = '/api';

// export const fetchWaitingCareList = async () => {
//   try {
//     const response = await http.get(`${API_URL}/mate/waitingCarelist`);
//     return response;
//   } catch (error) {
//     console.error('Error fetching waiting care list:', error);
//     throw error;
//   }
// };
export const fetchWaitingCareList = async () =>
  await http.get(`${API_URL}/mate/waitingCarelist`);
