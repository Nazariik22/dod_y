const CREATEUSERS = 'CREATEUSERS'
const UPPDATE = 'UPPDATE'
const initialState = [
    {
        city: "Броди",
        lastname: "Адамович",
        login: "111",
        name: "Юлія",
        password: "111",
        tel: "+38096649500",
        id: 1,
    },
    {
        city: "Броди",
        lastname: "Федякова",
        login: "111",
        name: "Ірина",
        password: "222",
        tel: "+3809664334595",
        id: 2,
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