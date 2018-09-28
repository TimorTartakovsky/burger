import * as actionTypes from '../actions/actionTypes';
import * as utils from '../utility';

const initialState = {
    token: null,
    localId: null,
    error: null,
    registered: false,
    email: '',
    loading: false
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
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
