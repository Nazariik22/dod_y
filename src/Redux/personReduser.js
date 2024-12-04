const AUTO = 'AUTO';
const UPPDATE = 'UPPDATE'
const initialState = {
    auto: true,
    city: "Броди",
    lastname: "Крутяк",
    login: "111",
    name: "Назарій",
    password: "111",
    tel: "+380966495",
    id: 1,
}

const personReduser = (state = initialState, action) => {
    switch (action.type) {
        case AUTO:
            return {
                ...action.state,
                auto: true,
            }
        case UPPDATE:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
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

export { personReduser,
     autoAC ,updateUserAC}