import { CallAPI } from "./axiosBase";
import {
  GET_LIST_ACCOUNT_REPRESENTATIVES_ENDPOINT,
  CHANGE_STATUS_ACCOUNT_ENDPOINT,
} from "../constants/Endpoints/AccountRepresentativesEndpoint";

export const getAllAccount = (data) =>
  CallAPI(GET_LIST_ACCOUNT_REPRESENTATIVES_ENDPOINT, "get", "", data);
export const changeStatusAccount = (data) =>
  CallAPI(`${CHANGE_STATUS_ACCOUNT_ENDPOINT}/${data}`, "put");
