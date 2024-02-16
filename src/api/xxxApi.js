import http from "./instance";

// 이렇게 이름을 지어서  instance 폴더에 Index 임포트 하셔서 각 메서드마다 제가 다 짜놨거든요,
// 그거 바로 가져다 사용해야 토큰이 자동으로 헤더에 들어가거든요
// 그래서 api 요청할 때 토큰이 있어야 되거든요..

export const 이름 = (파라미터) => http.메서드(`유알엘`, 파라미터);
