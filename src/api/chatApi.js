import http from "./instance";

export const enterChattingRoom = (chatRoomCid) =>
  http.put(`/chatrooms/${chatRoomCid}`);
