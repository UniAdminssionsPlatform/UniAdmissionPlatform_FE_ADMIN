import { CallAPI } from './axiosBase';
import { GET_aLL_FOR_COMBOBOX, CREATE_UNIVERSITY_PROFILE_ENDPOINT } from '../constants/Endpoints/UniversityEndpoint';

export const getAllForCombobox = () => CallAPI(`${GET_aLL_FOR_COMBOBOX}?limit=200`, 'get');
export const createProfile = (data) => CallAPI(`${CREATE_UNIVERSITY_PROFILE_ENDPOINT}`, 'post', data);
