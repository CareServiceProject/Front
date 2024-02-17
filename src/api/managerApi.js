import http from "./instance";

// GET
export const getUserList = () => http.get(`/api/master/user`);
export const getMateList = () => http.get(`/api/master/mate`);
export const getUserDetail = (userCid) =>
  http.get(`/api/master/user/${userCid}`);
export const getMateDetail = (mateCid) =>
  http.get(`/api/master/mate/${mateCid}`);

//POST
export const approveMate = (mateCid) =>
  http.post(`/api/master/approve/${mateCid}`);
export const unapproveMate = (mateCid) =>
  http.post(`/api/master/unapprove/${mateCid}`);
