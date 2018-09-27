import * as actionTypes from './actions';
import {INGREDIENT_PRICES} from "../consts/application_consts";

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: 4
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]: ++state.ingredients[action.payload.ingredientName]
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName],
            };
            break;
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]: --state.ingredients[action.payload.ingredientName]
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload.ingredientName],
            };
            break;
        default: return state;
    }

};


export default reducer;
