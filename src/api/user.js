import http from "./instance";

export const applyRequest = (data) =>
  http.postJSON(`/api/users/service-apply`, data);

export const userMyPage = () => http.get(`/api/users/mypage`);

export const userGetServiceList = (data) => http.get(`/api/users/status`, data);
