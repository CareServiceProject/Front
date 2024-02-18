import http from "./instance";

//GET_유저,메이트 리스트
export const getUserList = () => http.get(`/api/master/user`);
export const getMateList = () => http.get(`/api/master/mate`);
//GET_유저,메이트 상세리스트
export const getUserDetail = (userCid) =>
  http.get(`/api/master/user/${userCid}`);
export const getMateDetail = (mateCid) =>
  http.get(`/api/master/mate/${mateCid}`);

//POST_메이트 승인미승인
export const approveMate = (mateCid) =>
  http.post(`/api/master/approve/${mateCid}`);
export const unapproveMate = (mateCid, reason) =>
  http.post(`/api/master/unapprove/${mateCid}`);

//PUT_블랙리스트 요청
export const userBlacklisted = (userCid, isBlacklisted) =>
  http.putParam(`/api/master/user/${userCid}`, { isBlacklisted });

export const mateBlacklisted = (mateCid, isBlacklisted) =>
  http.putParam(`/api/master/mate/${mateCid}`, { isBlacklisted });
