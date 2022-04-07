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
        const authToken = localStorage.getItem('authToken')

        if(!authToken){
            getOauthToken.then(response => {
                localStorage.setItem('authToken', response.data.access_token)
            })
            .catch(error => {
                dispatch({ type: 'SET_HTTP_ERROR', payload: error.response.statusText })
            })
        }
    }, [])

    return (
        <div className="flex justify-center font-pangolin">
            <Router>
                <Switch>
                    {/* covenants menu page */}
                    <Route exact path="/">
                        <CovenantsMenu testing={ true } />
                    </Route>

                    {/* covenant details page */}
                    <Route path="/details/:id">
                        <CovenantDetails />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App