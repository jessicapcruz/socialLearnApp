export const actionTypes = {
    CHANGE: 'CHANGE',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
}

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const registerError = (payload) => ({
    type: actionTypes.ERROR,
    payload
})

export const success = (payload) => ({
    type: actionTypes.SUCCESS,
    payload
})


