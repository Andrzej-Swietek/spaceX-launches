import React from 'react';
import apolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Assets
import './App.css';
import logo from './logo.jpg'

// Components
import Launches from './components/Launches';
import Launch from './components/Launch';

// GraphQL Server Client
const client = new apolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          {/* <h1> SpaceX </h1> */}
            <img src={logo} alt="SpaceX" style={{width: 300, display: 'block', margin: 'auto'}}/>
            {/* <Lauches/> */}
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
