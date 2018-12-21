import React, { Component } from 'react';
import Counter from './LifeCycleCounter';
// import { Button, ButtonGroup } from 'react-bootstrap';

// import logo from './logo.svg';

import './App.css';

const divStyle = {
    color: 'blue',
    padding:20,
    margin:20,
    // backgroundImage: 'url(' + imgUrl + ')',
};


class LifeCycleEntry extends Component {
    constructor(props){
        console.log('Constructor of LifeCycleEntry');
        // console.log('-------------------');

        super(props);
        this.state={
            mount:true,
            ignoreProp:0,
            seed:40,
            showErrorComponent:false,
        };
        this.mountCounter=()=> this.setState({mount:true});
        this.unmountCounter=()=> this.setState({mount:false});
        this.ignoreProp=()=> this.setState({ignoreProp:Math.random()});
        this.seedGenerator=()=> this.setState({seed:Number.parseInt(Math.random()*100)});
        this.toggleError=()=> this.setState({showErrorComponent:!this.state.showErrorComponent});

    }
    render() {

        // console.log('render of LifeCycleEntry');
        // console.log('-------------------');
        return (
            <div style={divStyle}>
                <button
                    // style={{color:'crimson',marginRight:'10px'}}
                    onClick ={this.mountCounter}
                    disabled ={this.state.mount}>Mount Counter
                </button>
                {/*style={{color:'crimson',marginRight:'10px',}}*/}
                <button   onClick ={this.unmountCounter}
                        disabled ={!this.state.mount} >Unmount Counter </button>
                <button style={{color:'crimson',marginRight:'10px',fontSize: 42}}
                        onClick={this.ignoreProp}>Ignore Prop </button>

                <button style={{color:'crimson',marginRight:'10px',fontSize: 42}}
                        onClick={this.seedGenerator}>Generate Seed </button>
                <button style={{color:'violet',marginRight:'10px',fontSize: 32}}
                        onClick={this.toggleError}>Toggle Error </button>

                {this.state.mount ?
                    <Counter
                        ignoreProp={this.state.ignoreProp}
                        seed={this.state.seed}
                        showErrorComponent={this.state.showErrorComponent}
                    />:
                    null}
                {/*<h1> Hello world</h1>*/}
            </div>);
    }
}

export default LifeCycleEntry;
