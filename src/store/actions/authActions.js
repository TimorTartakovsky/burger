import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as Q from 'q';
import * as localStorageService from "../../services/localStorageService/localStorageService";

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
    localStorageService.removeAllLocalStorageData();
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
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);

                localStorageService.setNewLocalStorageData({
                    token: response.data.idToken,
                    exp: expirationDate,
                    localId: response.data.localId,
                });
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


const checkDispatchExpirationDatePassed = (dispatch, expDate, token) => {
    if (expDate.getTime() < new Date().getTime()) {
        dispatch(logout());
    } else {
        const userId = localStorageService.getLocalIdFromLocalStorageData();
        dispatch(authSuccess({
            idToken: token,
            localId: userId
        }));
        dispatch(checkAuthTimeout((expDate.getTime() - new Date().getTime()) / 1000));
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token =  localStorageService.getTokenFromLocalStorageData();
        if (token) {
            const a = localStorageService.getExpFromLocalStorageData();
            const expirationDate = new Date(a);
            checkDispatchExpirationDatePassed(dispatch, expirationDate, token);
        } else {
            dispatch(logout());
        }
    };
};




