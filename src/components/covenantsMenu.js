import { Link } from 'react-router-dom';
import { useFetchData } from '../customHooks/useFetchData';
import { covenantsResource1, covenantsResource2 } from '../config/endpoints';
import '../css/covenantsMenu.css';
import kyrian from '../assets/kyrian.jpg';
import venthyr from '../assets/venthyr.jpg';
import nightFae from '../assets/nightFae.jpg';
import maldraxxus from '../assets/maldraxxus.jpg';

var images = {
  '1': kyrian,
  '2': venthyr,
  '3': nightFae,
  '4': maldraxxus
};

export function CovenantsMenu(){
  let url = covenantsResource1 + 'index' + covenantsResource2,
      actionType = 'SET_COVENANTS',
      { state } = useFetchData(url, actionType),
      covenants = null,
      noData = null;

  if(state.covenants){
    covenants = state.covenants.map(covenant => 
      <Link key={covenant.id} to={`/details/${covenant.id}`} className="covenant-menu-item phone:covenant-menu-item-mobile hover:filter-grayscale">
        <img src={images[covenant.id]} className="covenant-menu-image" alt={covenant.name}/>
        <div className="covenant-menu-text">{covenant.name}</div>
      </Link>
    );
  }
  else{
    noData = <div>Something went wrong, please refresh!</div>
  }

  return (
    <div className="covenant-menu-container phone:covenant-menu-container-mobile">
        { covenants }
        { noData }
    </div>
  );
}