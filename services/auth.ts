const API_VERSION = "api/v1";
import axios from "axios";
const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function setSignup(data) {
  const URL = "auth/signup";

  const response = await axios.post(`${ROOT_API}/${API_VERSION}/${URL}`, data);
  const axiosResponse = response.data;
  return axiosResponse.data;
}
