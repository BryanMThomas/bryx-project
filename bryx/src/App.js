import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import {Layout} from './components/Layout'
import {Listings} from './components/Listings'
import {Search} from './components/Search'
import {NoMatch} from './components/NoMatch'
import {NavigationBar} from './components/NavigationBar/NavigationBar'

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path ="/" component={Search} />
            <Route exact path ="/listings" component={Listings} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
