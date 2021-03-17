import { useParams, Link } from 'react-router-dom';
import { useFetchData } from '../customHooks/useFetchData';
import { covenantsResource1, covenantsResource2 } from '../config/endpoints';

export function CovenantDetails(){
  let { id } = useParams(),
    url = covenantsResource1 + id + covenantsResource2,
    actionType = 'SET_COVENANT_DETAILS',
    { state } = useFetchData(url, actionType),
    name = null,
    description = null;

    if(state.covenantData.name){
        name = <div>{ state.covenantData.name } :</div>;
        description = <div>{ state.covenantData.description }</div>;
    }

    return (
        <div>
            <Link to={`/`}>Go back</Link>
            { name } 
            { description }
        </div>
    );
}