import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from 'react-transition-group'

class App extends Component {
  state={
    openModal:false,
    showblock:false
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
        <button className="Button" onClick={()=>this.setState(prevState=>({showblock:!prevState.showblock}))}>Toggle</button>
        <Transition in={this.state.showblock} timeout={300}>
        {state=>(
          <div style={{background:'red',margin:'auto',width:100, height:100,transistion:'all 1s ease 0s',opacity:state==='exited'?'0':'1' }}>
          </div>
        )}
        </Transition> 
        <Transition in={this.state.showblock} timeout={300}>
          {
          state=>(
            <Modal show={state} closed={this.closemodal}/>
          )}
        </Transition>
        {this.state.openModal?<Backdrop show={this.state.openModal} />:null}
        <button className="Button" onClick={this.showmodal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
