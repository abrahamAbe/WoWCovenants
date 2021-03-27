let Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return {
                ...state,
                accessToken: action.payload.access_token
            };
        case 'SET_COVENANTS':
            return {
                ...state,
                covenants: action.payload.covenants
            };
        case 'SET_COVENANT_DETAILS':
            return {
                ...state,
                covenantData: {
                    description: action.payload.description,
                    renownRewards: action.payload.renown_rewards
                }
            };
        case 'SET_HTTP_ERROR':
            return {
                ...state,
                httpError: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;