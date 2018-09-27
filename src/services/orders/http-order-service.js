import axios from '../axios-service';
import {HTTP_ORDER_CONST} from "../../consts/http_consts";

class OrderHttpService {

    static createNewOrder(order) {
        return axios.post(HTTP_ORDER_CONST.createOrderUrl, order);
    }

    static fetchAllOrders() {
        return axios.get( '/orders.json' );
    }

}


export default OrderHttpService;


