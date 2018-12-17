import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import Counter from './LifeCycleCounter';
// import React, { Component } from 'react';
import logo from './logo.svg';
// import Sidebar from "react-sidebar";
import './App.css';
// import Home2 from './Home2';
// import RenderProps from './Renderprops';

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
