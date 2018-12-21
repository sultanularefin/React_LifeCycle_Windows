import React  from 'react'


const ErrorComponent =() =>(<div>{this.props.ignore}</div>);
export  default class Counter extends React.Component {


    constructor(props){
        console.log('Constructor of Counter');
        // console.log('-------------------');
        super (props);

        this.state={
            counter:0,
            seed:0,
            initializing:true,

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

        setTimeout(()=>{

            this.setState({initializing:false});

        },500);
    }

    shouldComponentUpdate(nextProps,nextState){

        // ignoreProp is 0 means false.
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

    getSnapshotBeforeUpdate(prevProps, prevState){

        console.log("Get Snapshot Before Update");
        return null;
    }

    static getDerivedStateFromProps(props, state){

        if(props.seed && state.seed!==props.seed){
            return{
                seed:props.seed,
                counter:props.seed
            }
        }
        return null;
    }

    render(){
        console.log('Render of Counter',this.state.error);
        console.log('Render of Counter');
        // console.log('-------------------');

        if(this.state.initializing){
            return (<div>Initializing...</div>) ;
        }

        console.log("this.state: ",this.state);

        console.log("this.props: ",this.props);


        // if (this.state.error && this.props.showErrorComponent){

        if (this.state.error && this.props.showErrorComponent){
            return (
                <div>
                        We have encountered an error! {this.state.error.message}
                </div>
            );
        }
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
                {this.props.showErrorComponent ?<ErrorComponent/> :null}
            </div>
        )

    }


    componentWillUnmount(){
        console.log('Component will UnMount of Counter')
        console.log('-------------------')
    }

    componentDidCatch(error, info){
        console.log("Component Did catch: --");

        this.setState({error,info});
    }


}