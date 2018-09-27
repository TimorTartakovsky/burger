import * as actionTypes from './actionTypes';
import OrderHttpService from "../../services/orders/http-order-service";


export const purchaseOrderSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        payload: {
            orderId: id,
            orderData: orderData
        }
    }
};

export const purchaseOrderFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        payload: {
            error: error,
        }
    }
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    }
};


export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        OrderHttpService.createNewOrder(JSON.stringify(orderData))
            .then(response => {
                dispatch(purchaseOrderSuccess(response.data));
            })
            .catch(error => {
                dispatch(purchaseOrderFail(error));
            });
    }
};





