import { useParams } from 'react-router-dom'
import { useFetchData } from '../customHooks/useFetchData'
import { covenantsResource1, covenantsResource2 } from '../config/endpoints'

export function CovenantDetails(){
    let { id } = useParams(), //gets current covenant id to use on the covenant's details request
        url = covenantsResource1 + id + covenantsResource2,
        actionType = 'SET_COVENANT_DETAILS',
        { state } = useFetchData(url, actionType),
        description = null,
        renownRewards = null,
        noData = null

    if(state.covenantData.renownRewards){
        description = <div>{ state.covenantData.description }</div>

        renownRewards = state.covenantData.renownRewards.map(renownReward => 
            <div key={renownReward.reward.id} className="mb-3">
                <span>Level { renownReward.level }:</span> <span>{ renownReward.reward.name }</span>
            </div>
        )
    }
    else{
        noData = <div>Something went wrong, please refresh!</div>
    }

    return (
        <div className="p-5 text-center">
            { description }
            <div className="pt-5 pb-5"> { !noData ? 'Renown rewards:' : null }</div>
            { renownRewards }
            { noData }
        </div>
    )
}