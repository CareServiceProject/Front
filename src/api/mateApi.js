import http from "./instance";

const API_URL = "/api";

// 대기중 목록
export const fetchWaitingCareList = async () =>
  await http.get(`${API_URL}/mate/waitingCarelist`);

// 메이트 내가 접수한 건목혹 (3가지 상태)
export const mateCareHistory = (careStatus) =>
  http.get(`/api/mate/careHistory`, careStatus);
//상세
export const waitingDetail = (cid) => http.get(`/api/mate/detailCare/${cid}`);
// 접수하기
export const mateApply = (id) => http.put(`/api/mate/apply/${id}`);
// 마이페이지
export const mateMy = (id) => http.get(`/api/mate/mypage`);
// 완료하기
export const mateFinish = (id) => http.put(`/api/mate/finish/${id}`);
