const AUTO = 'AUTO';
const UPPDATE = 'UPPDATE'
const REDIRECT = 'REDIRECT'
const initialState = {

}

const personReduser = (state = initialState, action) => {
    switch (action.type) {
        case AUTO:
            return {
                ...action.data,
                auto: true,
            }
        case UPPDATE:
            return {
                ...state,
                ...action.data,
            }
        case REDIRECT:
            return {
                auto: false
            }
        default:
            return state;
    }
}
const autoAC = (data) => ({
    type: AUTO,
    data: data
})
const updateUserAC = (data) => ({
    type: UPPDATE,
    data: data
})
const redirectUserAC = (data) => ({
    type: REDIRECT,
})

export {
    personReduser,
    autoAC, updateUserAC, redirectUserAC
}