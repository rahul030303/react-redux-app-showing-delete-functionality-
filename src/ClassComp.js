import React,{Component} from 'react';


class ClassComp extends Component{

    constructor(props){
        super(props);
        this.state ={
            classCount:0
        }
    }

    render(){
        return(
            <div>
                <h1>This is class component, the count value is {this.state.classCount}</h1>  
                <button onClick = {()=>{this.setState({
                    classCount:this.state.classCount - 1
                })}}>decrement</button>
            </div>
        )
    }
  
}

export default ClassComp;
