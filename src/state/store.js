import { createContext, useReducer } from 'react'
import Reducer from './reducer'

var initialState = {
    accessToken: '',
    covenants: null,
    covenantData: {},
    httpError: {}
}

var Store = ({children}) => {
    var [state, dispatch] = useReducer(Reducer, initialState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export var Context = createContext(initialState)
export default Store