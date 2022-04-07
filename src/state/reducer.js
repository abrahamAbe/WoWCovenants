let Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_COVENANTS':
            return {
                ...state,
                covenants: action.payload.covenants
            }
        case 'SET_COVENANT_DETAILS':
            return {
                ...state,
                covenantData: {
                    description: action.payload.description,
                    renownRewards: action.payload.renown_rewards
                }
            }
        case 'SET_HTTP_ERROR':
            return {
                ...state,
                httpError: action.payload
            }
        case 'SET_TEST':
            return {
                ...state,
                testing: action.payload
            }
        default:
            return state
    }
}

export default Reducer;