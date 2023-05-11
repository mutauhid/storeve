const API_VERSION = "api/v1";
import { LoginTypes } from "./DataTypes";
import callAPI from "@/config/api";
const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function setSignup(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}

export async function setSignin(data: LoginTypes) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}
