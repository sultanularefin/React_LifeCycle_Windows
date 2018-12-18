import React, { Component } from 'react';
import Counter from './LifeCycleCounter';

// import logo from './logo.svg';

import './App.css';

class LifeCycleEntry extends Component {
   constructor(props){
       console.log('Constructor of LifeCycleEntry');
       // console.log('-------------------');

       super(props);
       this.state={
           mount:true
       }
       this.mountCounter=()=> this.setState({mount:true})
       this.unmountCounter=()=> this.setState({mount:false})

   }
    render() {

        console.log('render of LifeCycleEntry');
        // console.log('-------------------');
        return (
            <div>
                <button onClick ={this.mountCounter} disabled ={this.state.mount}>Mount Counter </button>
                <button onClick ={this.unmountCounter} disabled ={!this.state.mount}>Unmount Counter </button>
                {this.state.mount ? <Counter/>: null}
                {/*<h1> Hello world</h1>*/}
            </div>);
    }
}

export default LifeCycleEntry;
