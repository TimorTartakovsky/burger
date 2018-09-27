import * as actionTypes from './actionTypes';
import IngredientsHttpService from "../../services/ingredients/http-ingredients-service";


export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: {
            ingredientName: name
        }
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: {
            ingredientName: name
        }
    }
}

export const fetchIngredientsFail = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAIL,
    }
}

export const setIngredients = ingredients => {
    return {
        type: actionTypes.SET_INGREDIENT,
        payload: {
            ingredients: ingredients,
        }
    };
}

export const initIngredients = () => {
    return dispatch => {
        IngredientsHttpService.getAllIngredients()
            .then(response => {
               dispatch(setIngredients(response.data));
            })
            .catch(() => {
                dispatch(fetchIngredientsFail());
            });
    }
}




