import React, {Component} from 'react';
import classes from './BurgerIngredient.scss';
import PropTypes from 'prop-types';
import {BURGER_INGREDIENTS_CONST} from "../../../consts/application_consts";


class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case BURGER_INGREDIENTS_CONST.breadBottom:
                ingredient = <div className={classes.breadBottom}></div>;
                break;
            case BURGER_INGREDIENTS_CONST.breadTop:
                ingredient = (<div className={classes.breadTop}>
                    <div className={classes.seeds1}></div>
                    <div className={classes.seeds2}></div>
                </div>);
                break;
            case BURGER_INGREDIENTS_CONST.meat:
                ingredient = <div className={classes.meat}></div>;
                break;
            case BURGER_INGREDIENTS_CONST.cheese:
                ingredient = <div className={classes.cheese}></div>;
                break;
            case BURGER_INGREDIENTS_CONST.salad:
                ingredient = <div className={classes.salad}></div>;
                break;
            case BURGER_INGREDIENTS_CONST.bacon:
                ingredient = <div className={classes.bacon}></div>;
                break;
            default :ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;
