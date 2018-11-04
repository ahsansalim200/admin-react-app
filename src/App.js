import React, { Component } from 'react';
import './css/master.css';
import TopNav from './components/topNav';
import TopSubNav from "./components/topSubNav";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <TopNav></TopNav>
            <TopSubNav></TopSubNav>
            <Main/>
        </React.Fragment>

    );
  }
}

export default App;
