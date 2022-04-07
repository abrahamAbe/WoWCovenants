import { useEffect, useContext } from 'react'
import axios from 'axios'
import { Context } from '../state/store'
import { getOauthToken } from '../config/oauth'

//custom hook, it takes an api and action type whenever it's called
let useFetchData = (url, actionType) => {

    let [state, dispatch] = useContext(Context),
        config = {
            headers: { 
                ...(localStorage.getItem('authToken') && {
                    Authorization: `Bearer ${ localStorage.getItem('authToken') }`
                }) 
            }
        }

    useEffect(() => {
        axios.get(url, config)
        .then(response => {
            dispatch({ type: actionType, payload: response.data })
        })
        .catch(error => {
            //when auth token expires, get a new one
            if(error.response.status === 401){
                getOauthToken.then(response => {
                    localStorage.setItem('authToken', response.data.access_token)
                })
                .catch(error => {
                    dispatch({ type: 'SET_HTTP_ERROR', payload: error.response.statusText })
                })
            }
            else{
                dispatch({ type: 'SET_HTTP_ERROR', payload: error.response.statusText })
            }
        })
    }, [url, actionType]) //it will only run whenever these values change

    return { state }
}

export { useFetchData }