import {CallAPI} from './axiosBase';
import {GET_aLL_FOR_COMBOBOX} from '../constants/Endpoints/UniversityEndpoint';

export const getAllForCombobox = () => CallAPI(`${GET_aLL_FOR_COMBOBOX}?limit=200`, "get");