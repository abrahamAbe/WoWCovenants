import './css/App.css';
import { CovenantsMenu } from './components/covenantsMenu';
import { CovenantDetails } from './components/covenantDetails';
import React, { useContext, useEffect } from 'react';
import { getOauthToken } from './config/oauth';
import { Context } from './state/store';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

function App() {

  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    getOauthToken.then(response => {
      dispatch({type: 'SET_ACCESS_TOKEN', payload: response.data });
    })
    .catch(error => {
        dispatch({type: 'SET_HTTP_ERROR', payload: error});
    });
  }, []);

  var covenants = state.accessToken ? <CovenantsMenu /> : null,
      covenantDetails = state.accessToken ? <CovenantDetails /> : null;

  return (
    <div className="app app-header">
      
        <Switch>
          {/* home page*/}
          <Route exact path="/">
            { covenants }
          </Route>

          {/* covenant details page*/}
          <Route path="/details/:id">
            { covenantDetails }
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;
