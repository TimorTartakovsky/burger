import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as Q from 'q';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload: {
            error: error
        }
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        const defer = Q.defer();
        defer.resolve();
        defer.promise
            .delay(expirationTime)
            .then(() => dispatch(logout()));
    };
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBoHRreZIMN4QJvm81sBMlHi591dAGWfLk';
        if (!isSignUp) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBoHRreZIMN4QJvm81sBMlHi591dAGWfLk';
        }
        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data));
                dispatch(checkAuthTimeout(response.data.expiresIn * 1000));
            })
            .catch(err => {
                dispatch(authFail(err));
            })

    };
};

export const setAuthRedirectPath  = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        payload: { path },
    }
}



