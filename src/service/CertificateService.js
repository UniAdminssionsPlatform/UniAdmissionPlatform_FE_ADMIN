import {CallAPI} from './axiosBase';
import {GET_LIST_CERTIFICATE_ENDPOINT, GET_DETAIL_CERTIFICATE_ENDPOINT, CREATE_CERTIFICATE_ENDPOINT} from '../constants/Endpoints/CertificateEndpoint';

export const getListCertificate = () => CallAPI(`${GET_LIST_CERTIFICATE_ENDPOINT}`);
export const getDetailCertificate = (data) => CallAPI(`${GET_DETAIL_CERTIFICATE_ENDPOINT}/${data}`);
export const createCertificate = (data) => CallAPI(`${CREATE_CERTIFICATE_ENDPOINT}`, 'post', data);