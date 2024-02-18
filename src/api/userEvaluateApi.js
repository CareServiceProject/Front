import http from './instance';

export const getUserInfo = () => http.get('/api/user/info');

export const userEvaluateApi = (careCid, starCount) =>
  http.put(`/api/users/rating-mate/${careCid}`, { starCount });
