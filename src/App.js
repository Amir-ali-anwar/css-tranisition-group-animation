import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state={
    openModal:false
  }
   showmodal=()=>{
    this.setState({ openModal:true})
  }
  closemodal=()=>{
    this.setState({ openModal:false})
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {this.state.openModal?<Modal show={this.state.openModal} closed={this.closemodal}/>:null}
        {this.state.openModal?<Backdrop show={this.state.openModal} />:null}
        <button className="Button" onClick={this.showmodal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
