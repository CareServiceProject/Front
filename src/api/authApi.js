import http from "./instance";

export const login = (data) => http.postJSON(`/auth/login`, data);

export const userSignUp = (data) => http.postJSON(`/auth/user/signup`, data);
export const mateSignUp = (data) => http.postJSON(`/auth/mate/signup`, data);
