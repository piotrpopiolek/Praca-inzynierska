import React, { Component } from "react";
import Layout from "./components/Layout";
import RowMatch from "./components/RowMatch";
import FormSale from "./components/FormSale";
import Data from "./data";
import ipfs from "./Ipfs";
import "./App.css";

class App extends Component {
  render() {
    const matches = Data.matches;
    return (
      <Layout>
        {matches.map(match => (
          <RowMatch key={match.id} match={match} />
        ))}
      </Layout>
    );
  }
}

export default App;
