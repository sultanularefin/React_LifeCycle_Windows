import React, {Component} from 'react';

import { Button } from 'react-bootstrap';

class Home2 extends React.Component {
    render() {
        return <h1>Hello, {" Arefin"}</h1>;

        // return <Toolbar theme="dark" />;
    }
}

// function Toolbar(props) {
//     // The Toolbar component must take an extra "theme" prop
//     // and pass it to the ThemedButton. This can become painful
//     // if every single button in the app needs to know the theme
//     // because it would have to be passed through all components.
//     return (
//         <div>
//             <ThemedButton theme={props.theme} />
//         </div>
//     );
// }
//
// class ThemedButton extends React.Component {
//     render() {
//         return <Button theme={this.props.theme} bsStyle="primary" bsSize="large" active />;
//     }
// }


export  default Home2;