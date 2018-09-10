import axios from 'axios';
import { FIREBASE_ROOT_URL } from "../consts/http_consts";

const instance = axios.create({
    baseURL: FIREBASE_ROOT_URL,
    timeout: 100000,
});

export default instance;


