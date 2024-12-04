const CREATEUSERS = 'CREATEUSERS'
const UPPDATE = 'UPPDATE'
const initialState = [
    {
        city: "Броди",
        lastname: "Крутяк",
        login: "111",
        name: "Назарій",
        password: "111",
        tel: "+380966495",
        id: 1,
    }
]

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case CREATEUSERS:

            return [
                ...state,
                action.data
            ]
        case UPPDATE:
            return state.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        ...action.data
                    }
                } else {
                    return item
                }
            })
        default:
            return state
    }
}

const createUsers = (data) => ({
    type: CREATEUSERS,
    data: data,
})
const updateUsersAC = (id,data) => ({
    type: UPPDATE,
    id:id,
    data: data,
})
export { userReduser, createUsers ,updateUsersAC}