import axios from "axios";
import { localToken } from "../../utils/auth";
import { Toast } from "antd-mobile";

const base_url = "http://43.203.89.178:8080";

//인스턴스 생성
const instance = axios.create({
  baseURL: base_url,
  timeout: 6000,
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    if (!config.headers) {
      return;
    }
    config.headers["time-zone"] =
      Intl.DateTimeFormat().resolvedOptions().timeZone;

    const token = localToken.get();

    let auth = "";

    if (token) {
      auth = "Bearer " + token;
    }

    if (auth) {
      config.headers.Authorization = auth;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행

    const { data, status, config } = response;

    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    const { response } = error;
    if (response) {
      if (response.status === 401) {
        localToken.remove();

        //TODO: history에 푸쉬, 로그인 뒤에 원래 있던 페이지로 이동
      } else if (response.status === 503) {
      } else {
        Toast.show({
          content: response.data.message,
        });
      }
      return response;
    }
    return Promise.reject(error);
  }
);
export default instance;
