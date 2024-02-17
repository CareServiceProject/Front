import http from './instance';

const API_URL = '/api';
export const matemypage = async () =>
  await http.get(`${API_URL}/mate/careHistory`);
