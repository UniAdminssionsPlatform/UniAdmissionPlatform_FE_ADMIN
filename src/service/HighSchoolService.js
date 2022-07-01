import {CallAPI} from './axiosBase';
import {GET_ALL_FOR_COMBOBOX} from '../constants/Endpoints/HighSchoolEnpoint';

export const getAllForCombobox = () => CallAPI(`${GET_ALL_FOR_COMBOBOX}?limit=200`, "get");