import * as actionTypes from '../actions/actionTypes';
import * as utils from '../utility';
import {INTERNAL_ROADS} from "../../consts/roudListConst";

const initialState = {
    token: null,
    localId: null,
    error: null,
    registered: false,
    email: '',
    loading: false,
    authRedirectPath: INTERNAL_ROADS.default
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return utils.updateObject(
                        state,
                        {
                            authRedirectPath: action.payload.path,
                        }
                    );
        case actionTypes.AUTH_LOGOUT:
            return utils.updateObject(
                state,
                {
                    token: null,
                    registered: false,
                    localId: null,
                    email: '',
                }
            );
        case actionTypes.AUTH_START:
            return utils.updateObject(state, { error: null, loading: true });
        case actionTypes.AUTH_SUCCESS:
            return utils.updateObject(
                    state,
                    {
                        error: null,
                        loading: false,
                        token: action.payload.idToken,
                        localId: action.payload.localId,
                        registered: action.payload.registered,
                        email: action.payload.email,
                    }
                );
        case actionTypes.AUTH_FAIL:
            return utils.updateObject(
                state,
                {
                    error: action.payload.error,
                    loading: false,
                    token: null,
                    localId: null,
                    email: '',
                    registered: false,
                }
            );
        default: return state;
    }
}


export default reducer;
