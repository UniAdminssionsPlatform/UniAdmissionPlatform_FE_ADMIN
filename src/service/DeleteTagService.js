import { DELETE_TAGS } from "../constants/Endpoints/DeleteTagEndPoint";
import { CallAPI } from "./axiosBase";

export const DeleteTag = (data) => CallAPI(`${DELETE_TAGS}/${data}`, "delete");
