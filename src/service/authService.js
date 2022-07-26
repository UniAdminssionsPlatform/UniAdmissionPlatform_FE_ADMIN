import {LOGIN_BY_FIREBASE_ENDPOINT} from "../constants/Endpoints/AuthEndpoint";
import {CallAPI} from "./axiosBase";

export const loginByFirebase = (data) => CallAPI(LOGIN_BY_FIREBASE_ENDPOINT, 'post', data);
