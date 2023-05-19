import callAPI from "@/config/api";
import axios from "axios";
import { CheckoutTypes } from "./DataTypes";
const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getFeaturedGame() {
  const URL = "players/landing-page";

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function getVoucherDetail(id: any) {
  const URL = `players/${id}/detail`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function getGameCategory() {
  const URL = "players/category";

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function setCheckout(data: CheckoutTypes) {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`;
  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}

export async function getOverview() {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;
  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getMemberTransaction(value: string) {
  let params = "";
  if (value === "all") {
    params = "";
  } else {
    params = `?status=${value}`;
  }
  const url = `${ROOT_API}/${API_VERSION}/players/history${params}`;
  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getTransactionDetail(id: string, token: string) {
  const url = `${ROOT_API}/${API_VERSION}/players/history/${id}/detail`;
  return callAPI({
    url,
    method: "GET",
    serverToken: token,
  });
}
