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

        if(nextProps.ignoreProp &&
            this.props.ignoreProp!== nextProps.ignoreProp){
            console.log('should Component Update of Counter --- Don\'t render');
            return false;
        }
        else{

            //generally returns true; default.
            console.log('should Component Update of Counter --- Do render');
            return true;
        }


    }

    render(){
        console.log('Render of Counter');
        // console.log('-------------------');

        return (<div>
                <button
                    style={{color:'crimson',marginRight:'10px',fontSize: 20}}
                    onClick={this.increment}> Increment </button>
                <button
                    style={{color:'crimson',marginRight:'10px',fontSize: 20}}
                    onClick={this.decrement}> Decrement
                </button>

                <h1 className="counter" style={{margin:'auto'}}>
                    Counter: {this.state.counter}
                </h1>
            </div>
        )

    }




    componentWillUnmount(prevProps,prevState,snapshot){
        console.log('Component will UnMount of Counter')
        console.log('-------------------')
    }

}