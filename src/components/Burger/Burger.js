import React from 'react';
import classes from './Burger.scss';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import {BURGER_INGREDIENTS_CONST} from "../../consts/application_consts";
import ApplicationMessages from "../../messages/ApplicationMessages";


const transformIngredients = (ingredients) => {
    if (!!ingredients) {
        return Object.keys(ingredients)
            .map( ingredientKey => {
                return [...Array(ingredients[ingredientKey])]
                    .map((_, index) => {
                        return <BurgerIngredient key={ ingredientKey + index } type={ ingredientKey }/>
                    });
            })
            .reduce((mainArray, element) => {
                return mainArray.concat(element);
            }, []);
    }
}

const burger = ( props ) => {

    let transformedIngredients = transformIngredients(props.ingredients);

    if (!Array.isArray(transformedIngredients)) {
        transformedIngredients = <p>{ ApplicationMessages.burgerBuilder.noIngredients }</p>
    }

    return (
       <div className={classes.burger}>
           <BurgerIngredient type={ BURGER_INGREDIENTS_CONST.breadTop } />
           { transformedIngredients }
           <BurgerIngredient type={ BURGER_INGREDIENTS_CONST.breadBottom } />
       </div>
   )
}

export default burger;

