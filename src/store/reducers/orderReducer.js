import * as actionTypes from '../actions/actionTypes';
import * as utils from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDERS_START:
            return utils.updateObject(state, { loading: true });
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return utils.updateObject(state, { loading: false, orders: action.payload.orders });
        case actionTypes.FETCH_ORDERS_FAIL:
            return utils.updateObject(state, { loading: false });
        case actionTypes.PURCHASE_INIT:
            return utils.updateObject(state, { purchased: true });
        case actionTypes.PURCHASE_BURGER_START:
            return utils.updateObject(state, { loading: true });
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return utils.updateObject(
                    state,
                    {
                        loading: false,
                        purchased: true,
                        orders: state.orders.concat(action.payload),
                    }
                );
        case actionTypes.PURCHASE_BURGER_FAIL:
            return utils.updateObject(state, { loading: false });
        default: return state;
    }
}


export default reducer;

