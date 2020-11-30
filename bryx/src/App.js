import React, { Component } from 'react';
import PropertyDisplay from './components/containers/PropertyDisplay'
import Layout from './components/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <PropertyDisplay/>
        </Layout>
      </div>
    );
  }
}

export default App;
