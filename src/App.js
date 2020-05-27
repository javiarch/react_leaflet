import React from 'react';
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
//import Planets from "./components/Planets";
//import Search from "./components/Search";
import PlanetSearch from "./components/PlanetSearch";

import './App.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://pgfirst.herokuapp.com/v1/graphql",
  }),
});

//cambiar <Search /><Planets /> por <PlanetSearch />
const App = () => (
  
  <ApolloProvider client={client}>    
    <PlanetSearch />    
  </ApolloProvider>
);

export default App;
