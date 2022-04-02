import { Link } from 'react-router-dom'
import { useFetchData } from '../customHooks/useFetchData'
import { covenantsResource1, covenantsResource2 } from '../config/endpoints'
import kyrian from '../assets/kyrian.jpg'
import venthyr from '../assets/venthyr.jpg'
import nightFae from '../assets/nightFae.jpg'
import maldraxxus from '../assets/maldraxxus.jpg'
import '../css/index.css'
//import axios from 'axios'

//import { useContext } from 'react'
//import { Context } from '../state/store'

var images = {
    '1': kyrian,
    '2': venthyr,
    '3': nightFae,
    '4': maldraxxus
}

export function CovenantsMenu(props){
    //const [globalState, dispatch] = useContext(Context)
    let url = covenantsResource1 + 'index' + covenantsResource2,
        actionType = 'SET_COVENANTS',
        { state } = useFetchData(url, actionType),
        covenants = null,
        noData = null

    /*function getCovenants(){
        axios.get('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
            .then(response => {
                console.log('response', response)
                dispatch({ type: 'SET_TEST', payload: response.data })
            })
    }*/

    if(state.covenants){
        covenants = state.covenants.map(covenant => 
            <div key={covenant.id}>
                <Link key={covenant.id} to={`/details/${covenant.id}`} className="inline-block text-center p-10 hover:filter-grayscale">
                    <img src={images[covenant.id]} className="h-24 rounded-md" alt={covenant.name}/>
                    <div className="text-xl">{covenant.name}</div>
                </Link>
            </div>
        )
    }
    else {
        noData = <div>Something went wrong, please refresh!</div>
    }

    return (
        <div className="flex phone:block">
            { covenants }
            { noData }
        </div>
    )
}