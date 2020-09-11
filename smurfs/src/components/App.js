import React, { Component, useEffect } from "react";
import "./App.css";
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/actions';
import Smurfs from './Smurfs'
import AddSmurf from './AddSmurf'

class App extends Component{
render(){
// function App ({getSmurfs})
//  {
//     useEffect(() =>{
//       getSmurfs();
//     }, [getSmurfs]);

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
      <Smurfs/>
      <AddSmurf/>
      </div>
    );
    }
}

function mapStateToProps(state){
  return{
    loadingMessage: state.loadingMessage
  }
}


export default connect(mapStateToProps, {getSmurfs})(App);
