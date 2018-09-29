import axios from '../axios-service';
import {HTTP_ORDER_CONST, FIREBASE_ROOT_URL} from "../../consts/httpConsts";

class OrderHttpService {

    static createNewOrder(order, token) {
        return axios.post(`${ FIREBASE_ROOT_URL + HTTP_ORDER_CONST.createOrderUrl}?auth=${token}`, order);
    }

    static fetchAllOrders(queryParams) {
        return axios.get( `${ FIREBASE_ROOT_URL + HTTP_ORDER_CONST.createOrderUrl + queryParams }` );
    }

}


export default OrderHttpService;


