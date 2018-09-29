
const LOCAL_STORAGE_CONSTS = {
    tokenKey: 'tokenKey',
    expKey: 'exp',
    localId: 'localId',
}

export const setNewLocalStorageData = (storageData) => {
    localStorage.setItem(LOCAL_STORAGE_CONSTS.tokenKey, storageData.token);
    localStorage.setItem(LOCAL_STORAGE_CONSTS.expKey, storageData.exp);
    localStorage.setItem(LOCAL_STORAGE_CONSTS.localId, storageData.localId);
}

export const removeAllLocalStorageData = () => {
    localStorage.clear();
}

export const getExpFromLocalStorageData = () => {
    return localStorage.getItem(LOCAL_STORAGE_CONSTS.expKey);
}

export const getTokenFromLocalStorageData = () => {
    return localStorage.getItem(LOCAL_STORAGE_CONSTS.tokenKey);
}

export const getLocalIdFromLocalStorageData = () => {
    return localStorage.getItem(LOCAL_STORAGE_CONSTS.localId);
}



