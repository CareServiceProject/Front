import http from "./instance";

export const applyRequest = (data) =>
  http.postJSON(`/api/users/service-apply`, data);
