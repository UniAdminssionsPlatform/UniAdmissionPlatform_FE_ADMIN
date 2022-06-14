import {CallAPI} from './axiosBase';
import {GET_LIST_CERTIFICATE_ENDPOINT} from '../constants/Endpoints/CertificateEndpoint';

export const getListCertificate = () => CallAPI(`${GET_LIST_CERTIFICATE_ENDPOINT}`);