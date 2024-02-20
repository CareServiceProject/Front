import http from './instance';

const API_URL = '/api';

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
//취소하기
export const mateCancel = (careCid) => http.put(`/api/mate/cancel/${careCid}`);
//나의 정보
export const mateInfo = () => http.get(`/api/mate/mateInfo`);

//나의 정보 수정
export const editMateInfo = (data) => http.putForm(`/api/mate/mateInfo`, data);

export const completePayment = (careCid) =>
  http.put(`/api/mate/iscompletedPayment/${careCid}`);
