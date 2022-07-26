import { UPDATE_TAGS } from '../constants/Endpoints/EditTagEndPoint';
import { CallAPI } from './axiosBase';

export const UpdateTag = (data) => CallAPI(`${UPDATE_TAGS}/${data.id}`, 'put', data.data);
