import { useParams } from 'react-router-dom';
import { useFetchData } from '../customHooks/useFetchData';
import { covenantsResource1, covenantsResource2 } from '../config/endpoints';
import '../css/covenantDetails.css';

export function CovenantDetails(){
  var { id } = useParams(),
    url = covenantsResource1 + id + covenantsResource2,
    actionType = 'SET_COVENANT_DETAILS',
    { state } = useFetchData(url, actionType),
    description = null,
    renownRewards = null,
    noData = null;

    if(state.covenantData.renownRewards){
        description = <div className="covenant-details-description tablet:covenant-details-description-mobile">{ state.covenantData.description }</div>;

        renownRewards = state.covenantData.renownRewards.map(renownReward => 
            <div key={renownReward.reward.id} className="covenant-details-reward">
                <span>Level {renownReward.level}:</span> <span>{renownReward.reward.name}</span>
            </div>
        );
    }
    else{
        noData = <div>Something went wrong, please refresh!</div>
    }

    return (
        <div className="covenant-details-container">
            { description }
            <div className="covenant-details-title"> { !noData ? 'Renown rewards:' : null}</div>
            { renownRewards }
            { noData }
        </div>
    );
}