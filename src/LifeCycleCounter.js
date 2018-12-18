import React  from 'react'


export  default class Counter extends React.Component {


    constructor(props){
        console.log('Constructor of Counter');
        // console.log('-------------------');
        super (props);

        this.state={
            counter:0,
        }

        // this.increment =()=>this.setState({counter:this.state.counter})
        this.increment =()=>this.setState({counter:this.state.counter + 1})
        this.decrement =()=>this.setState({counter:this.state.counter - 1})
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('Component Did Update of Counter')
         // console.log('-------------------')
    }


    componentDidMount(){
        console.log('Component Did Mount of Counter')
         console.log('-------------------')
    }

    shouldComponentUpdate(nextProps,nextState){

        //generally returns true; default.
        return true;
    }

    render(){
        console.log('Render of Counter');
        // console.log('-------------------');

        return (<div>
            <button onClick={this.increment}> Increment </button>
            <button onClick={this.decrement}> Decrement </button>
            <div className="counter">
                Counter: {this.state.counter}
            </div>
            </div>
            )

    }




    componentWillUnmount(prevProps,prevState,snapshot){
        console.log('Component will UnMount of Counter')
        console.log('-------------------')
    }

}