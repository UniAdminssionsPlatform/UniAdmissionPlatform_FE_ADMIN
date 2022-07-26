import {CallAPI} from './axiosBase';
import {GET_ALL_FOR_COMBOBOX, CREATE_HIGH_SCHOOL_PROFILE_ENDPOINT} from '../constants/Endpoints/HighSchoolEnpoint';

export const getAllForCombobox = () => CallAPI(`${GET_ALL_FOR_COMBOBOX}?limit=200`, "get");
export const createProfile = (data) => CallAPI(`${CREATE_HIGH_SCHOOL_PROFILE_ENDPOINT}`, 'post', data);