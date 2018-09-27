import * as actionTypes from '../actions/actionTypes';
import {INGREDIENT_PRICES} from "../../consts/application_consts";

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const burgerReducer = (state = initialState, action) => {

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
        case actionTypes.SET_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    salad:  action.payload.ingredients.salad,
                    bacon:  action.payload.ingredients.bacon,
                    cheese:  action.payload.ingredients.cheese,
                    meat:  action.payload.ingredients.meat,
                },
                error: false
            };
            break;
        case actionTypes.FETCH_INGREDIENT_FAIL:
            return {
                ...state,
                error: true
            };
            break;
        default: return state;
    }

};


export default burgerReducer;
