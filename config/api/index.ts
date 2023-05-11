import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface CallApiProps extends AxiosRequestConfig {
  token?: boolean;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
}: CallApiProps) {
  let headers = {};
  if (token) {
    const cookies = Cookies.get("token");
    if (cookies) {
      const jwtToken = atob(cookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);
  if (response.status > 300) {
    const res = {
      error: true,
      msg: response.data.msg,
      data: null,
    };
    return res;
  }
  const res = {
    error: false,
    msg: "success",
    data: response.data.data,
  };
  return res;
}
