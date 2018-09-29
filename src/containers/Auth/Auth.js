import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from  'react-router-dom';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.scss';
import * as actions from '../../store/actions/index';
import {AUTH_DEFAULT_STATE} from "../../consts/authConsts";
import {BTN_TYPES} from "../../consts/applicationConsts";
import ApplicationMessages from "../../messages/ApplicationMessages";
import Spinner from '../../components/UI/Spinner/Spinner';
import {INTERNAL_ROADS} from "../../consts/roudListConst";

class Auth extends Component {
    state = {
        controls: AUTH_DEFAULT_STATE,
        isSignUp: true,
    };

    componentDidMount() {
        if (!!this.props.buildingBurger && this.props.authRedirectPath !== INTERNAL_ROADS.default) {
           this.props.onSetAuthRedirectPath(INTERNAL_ROADS.default);
        }
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    };

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    };

    switchAuthModeHandler = () => {
        this.setState(
            previousState => {
                return { isSignUp: !previousState.isSignUp }
            }
        );
    }

    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                id={ 'key' + formElement.id }
                key={'key' + formElement.id }
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        if (this.props.loading) {
            form = (<Spinner />)
        }

        let errorMessage = null;

        if (!!this.props.error) {
            errorMessage = (<p>{ this.props.error.message }</p>);
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = (<Redirect to={ this.props.authRedirectPath } />);
        }

        return (
            <div className={classes.auth}>
                { authRedirect }
                { errorMessage }
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType={ BTN_TYPES.success }>
                        { ApplicationMessages.auth.btnSubmit }
                    </Button>
                </form>
                <Button btnType={ BTN_TYPES.danger }
                        clicked={ this.switchAuthModeHandler }>
                    { this.state.isSignUp ? ApplicationMessages.auth.btnSignIn : ApplicationMessages.auth.btnSignUp }
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.authReducer.loading,
        error: state.authReducer.error,
        isAuthenticated: !!state.authReducer.token,
        buildingBurger: state.burgerReducer.building,
        authRedirectPath: state.authReducer.authRedirectPath,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);