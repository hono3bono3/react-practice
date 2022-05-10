import axios from "axios";

export const ResasClient = axios.create({
  baseURL:
    "https://h6rquqaiop55c7a3lboqzkmhpa0rjsso.lambda-url.ap-northeast-1.on.aws/",
  timeout: 1000,
});
