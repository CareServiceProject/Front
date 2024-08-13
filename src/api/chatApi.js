import http from "./instance";

export const enterChattingRoom = (chatRoomCid) =>
  http.put(`/chatrooms/${chatRoomCid}`);

//   메이트 채팅 history 조회
export const mateChatList = () => http.get(`/chatrooms/mateChatList`);

//   유저 채팅 history 조회
export const userChatList = () => http.get(`/chatrooms/userChatList`);
