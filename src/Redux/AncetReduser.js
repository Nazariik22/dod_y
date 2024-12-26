const CREATE = 'CREATE'
const initialState = [

]


const ancetsReduser = (state = initialState, action) => {  
    switch (action.type) {  
        case CREATE:  
            return [   
                ...action.data  
            ]  
        default:  
            return state  
    }  
}

const createAncetsAC = (data) => ({
    type: CREATE,
    data: data,
})

export { ancetsReduser, createAncetsAC, deleteAncetsAC }