import { CovenantsMenu } from './components/covenantsMenu'
import { CovenantDetails } from './components/covenantDetails'
import { useContext, useEffect } from 'react'
import { getOauthToken } from './config/oauth'
import { Context } from './state/store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

    const [state, dispatch] = useContext(Context)

    //getting auth token when app loads
    useEffect(() => {
        getOauthToken.then(response => {
            dispatch({type: 'SET_ACCESS_TOKEN', payload: response.data })
        })
        .catch(error => {
            dispatch({type: 'SET_HTTP_ERROR', payload: error})
        })
    }, [])

    var covenants = state.accessToken ? <CovenantsMenu testing={ true } /> : null,
        covenantDetails = state.accessToken ? <CovenantDetails /> : null

    return (
        <div className="flex justify-center font-pangolin">
            <Router>
                <Switch>
                    {/* covenants menu page */}
                    <Route exact path="/">
                        { covenants }
                    </Route>

                    {/* covenant details page */}
                    <Route path="/details/:id">
                        { covenantDetails }
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App