import React from 'react';
import classes from './Burger.scss';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import {BURGER_INGREDIENTS_CONST} from "../../consts/application_consts";

const burger = ( props ) => {
   return (
       <div className={classes.burger}>
           <BurgerIngredient type={ BURGER_INGREDIENTS_CONST.breadTop.toString() } />
           <BurgerIngredient type={BURGER_INGREDIENTS_CONST.cheese.toString()} />
           <BurgerIngredient type={BURGER_INGREDIENTS_CONST.meat.toString()} />
           <BurgerIngredient type={BURGER_INGREDIENTS_CONST.breadBottom.toString()} />
       </div>
   )
}

export default burger;

