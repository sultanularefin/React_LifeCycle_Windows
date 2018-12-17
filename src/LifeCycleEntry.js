import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Counter from './LifeCycleCounter';




class LifeCycleEntry extends Component {
    render() {
        return (
 <div>
     <Counter/>
 </div>
        );
    }
}

export default LifeCycleEntry;
