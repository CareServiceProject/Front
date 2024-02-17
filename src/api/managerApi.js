import http from "./instance";

export const getUserList = () => http.get(`/api/master/user`);
export const getMateList = () => http.get(`/api/master/mate`);
export const getUserDetail = (userCid) =>
  http.get(`/api/master/user/${userCid}`);
export const getMateDetail = (mateCid) =>
  http.get(`/api/master/mate/${mateCid}`);
