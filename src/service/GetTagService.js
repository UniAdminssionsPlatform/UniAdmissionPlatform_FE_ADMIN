import {GET_LIST_TAGS} from "../constants/Endpoints/GetTagEndPoint";
import {CallAPI} from "./axiosBase";

export const ListTags = (data) => CallAPI(`${GET_LIST_TAGS}?page=${data.page}&limit=${data.limit}`, "get");
