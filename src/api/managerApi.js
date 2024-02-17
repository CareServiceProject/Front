import http from "./instance";

export const getUserList = () => http.get(`/api/master/user`);
