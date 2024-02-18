import http from "./instance";

//GET_유저,사용자 리스트/상세리스트
export const getUserList = () => http.get(`/api/master/user`);
export const getMateList = () => http.get(`/api/master/mate`);
export const getUserDetail = (userCid) =>
  http.get(`/api/master/user/${userCid}`);
export const getMateDetail = (mateCid) =>
  http.get(`/api/master/mate/${mateCid}`);

//POST_mate 승인미승인
export const approveMate = (mateCid) =>
  http.post(`/api/master/approve/${mateCid}`);
export const unapproveMate = (mateCid) =>
  http.post(`/api/master/unapprove/${mateCid}`);

//PUT_블랙리스트
// export const userBlacklisted = (mateCid) =>
//   http.put(`/api/master/user/${mateCid}`);

// export const userBlacklisted = (userCid, isBlacklisted) =>
//   http.put(`/api/master/user/${userCid}`, { blacklisted: isBlacklisted });
export const userBlacklisted = (userCid, isBlacklisted) =>
  http.put(`/api/master/user/${userCid}`, null, {
    params: { blacklisted: isBlacklisted },
  });

// export const mateBlacklisted = (mateCid) =>
//   http.put(`/api/master/mate/${mateCid}`);

export const mateBlacklisted = (mateCid, isBlacklisted) =>
  http.put(`/api/master/mate/${mateCid}`, { blacklisted: isBlacklisted });
