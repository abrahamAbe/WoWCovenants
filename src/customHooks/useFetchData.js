import { useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../state/store';

let useFetchData = (url, actionType) => {
    
    let [state, dispatch] = useContext(Context)
    useEffect(() => {
        axios.get(url + state.accessToken)
        .then(response => {
            console.log('response', response);
            dispatch({ type: actionType, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: 'SET_HTTP_ERROR', payload: error });
        });
    }, [url, actionType]);

    return { state }
}

export { useFetchData }