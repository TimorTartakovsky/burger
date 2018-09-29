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


export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        OrderHttpService.createNewOrder(JSON.stringify(orderData), token)
            .then(response => {
                dispatch(purchaseOrderSuccess(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseOrderFail(error));
            });
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT,
    }
};

export const fetchOrderSuccess = (orders) => {
  return {
      type: actionTypes.FETCH_ORDERS_SUCCESS,
      payload: {
          orders: orders,
      }
  }
};

export const fetchOrderFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        payload: {
            error: error,
        }
    }
};

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START,
    }
};

export const fetchOrders = (token) => {
    return dispatch => {
        dispatch(fetchOrderStart());
        OrderHttpService.fetchAllOrders(token)
            .then( res => {
                const fetchedOrders = [];
                for ( let key in res.data ) {
                    fetchedOrders.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchOrderSuccess(fetchedOrders));
            } )
            .catch( err => {
                dispatch(fetchOrderFail(err));
            } );
    };
}

