import React, { Component, useEffect } from "react";
import "./App.css";
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';
import Smurfs from './Smurfs'

function App({getSmurfs, loadingMessage, errorMessage}) {

useEffect(() =>{
  getSmurfs();
}, [getSmurfs])

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
      {!loadingMessage ? <Smurfs/> : <div>...Just a Moment</div>}
      {errorMessage !== "" ? <div>'{errorMessage}'</div> : null}

      </div>
    );
  
}

function mapStateToProps(state){
  return{
    loadingMessage: state.loadingMessage
  }
}


export default connect(mapStateToProps, {getSmurfs})(App);
