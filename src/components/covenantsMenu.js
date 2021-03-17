import { Link } from 'react-router-dom';
import { useFetchData } from '../customHooks/useFetchData';
import { covenantsResource1, covenantsResource2 } from '../config/endpoints';

export function CovenantsMenu(){
  let url = covenantsResource1 + 'index' + covenantsResource2,
      actionType = 'SET_COVENANTS',
      { state } = useFetchData(url, actionType),
      covenants = null;

  if(state.covenants){
    covenants = state.covenants.map(covenant => 
      <Link key={covenant.id} to={`/details/${covenant.id}`}>
        <div>{covenant.name}</div>
      </Link>
    );
  }

  return (
    <div>
        { covenants }
    </div>
  );
}