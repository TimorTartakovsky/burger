import axios from 'axios';
import { FIREBASE_ROOT_URL } from "../consts/http_consts";

const instance = axios.create({
    baseURL: FIREBASE_ROOT_URL,
    timeout: 100000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT"
    }
});

export default instance;


