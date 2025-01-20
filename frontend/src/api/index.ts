import axios from 'axios';
import { BASE_URL } from '../utils/constant.ts';

export const axiosInstance = axios.create({ baseURL: BASE_URL });
