import http from "./instance";

export const applyRequest = (data) =>
  http.postJSON(`/api/users/service-apply`, data);

export const userMyPage = () => http.get(`/api/users/mypage`);

export const userGetServiceList = (data) => http.get(`/api/users/status`, data);

export const userCancelService = (data) =>
  http.put(`/api/users/cancel-service/${data}`);

export const getUserInfo = () => http.get(`/api/user/userInfo`);

export const editUserInfo = (formdata) =>
  http.putForm(`/api/user/userInfo`, formdata);
