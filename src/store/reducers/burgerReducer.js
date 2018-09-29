import * as actionTypes from '../actions/actionTypes';
import {INGREDIENT_PRICES} from "../../consts/applicationConsts";
import * as utils from '../utility';


const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false,
};

const burgerReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const addedIngredient = {[action.payload.ingredientName]: ++state.ingredients[action.payload.ingredientName]};
            const updatedAddedIngredients = utils.updateObject(state.ingredients, addedIngredient);
            const updatedAddedIngredientState = {
                ingredients: updatedAddedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName],
                building: true,
            };
            return utils.updateObject(state, updatedAddedIngredientState);
        case actionTypes.REMOVE_INGREDIENT:
            const removedIngredient = {[action.payload.ingredientName]: --state.ingredients[action.payload.ingredientName]};
            const updatedRemovedIngredients = utils.updateObject(state.ingredients, removedIngredient);
            const updatedRemovedState = {
                ingredients: updatedRemovedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName],
                building: true,
            };
            return utils.updateObject(state, updatedRemovedState);
        case actionTypes.SET_INGREDIENT:
            return utils.updateObject(
                state,
                {
                    ingredients: {
                        salad:  action.payload.ingredients.salad,
                        bacon:  action.payload.ingredients.bacon,
                        cheese:  action.payload.ingredients.cheese,
                        meat:  action.payload.ingredients.meat,
                    },
                    totalPrice: 4,
                    error: false,
                    building: false,
                }
            );

        case actionTypes.FETCH_INGREDIENT_FAIL:
            return utils.updateObject(state, { error: true });
        default: return state;
    }

};


export default burgerReducer;
