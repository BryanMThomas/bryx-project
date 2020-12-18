import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import {Listings} from './components/Listings/Listings'
import {Search} from './components/Search/Search'
import {NoMatch} from './components/NoMatch/NoMatch'
import {NavigationBar} from './components/NavigationBar/NavigationBar'

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path ="/" component={Search} />
            <Route exact path ="/listings" component={Listings} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
