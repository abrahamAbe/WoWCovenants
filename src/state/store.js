import React, {createContext, useReducer} from 'react';
import Reducer from './reducer';

let initialState = {
    accessToken: '',
    covenants: [],
    covenantData: [],
    httpError: {}
};

let Store = ({children}) => {
    let [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export let Context = createContext(initialState);
export default Store;