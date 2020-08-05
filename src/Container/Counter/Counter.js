import React, { Component } from 'react';
import CounterComponent from '../../Component/Counter/Counter';
import classes from './Counter.module.css'
// import {connent} from 'react-redux';
import { connect } from 'react-redux';

import CounterDisplay from '../../Component/CountderDisplay/CounterDisplay';
// import * as actionType from '../../Store/Action';
import * as actionCreator from '../../Store/Action/Action';

class Counter extends Component{
    render(){
        return(
            <div className='Container'>
               <CounterDisplay count={this.props.ctr} />
                <div className={classes.ButtonWrapper}>
                    <CounterComponent clickButton={this.props.incrementHandler}>Increment</CounterComponent>
                    <CounterComponent clickButton={this.props.decrementHandler}>Decrement</CounterComponent>
                    <CounterComponent clickButton={this.props.addFiveHandler}>Adding by 5</CounterComponent>
                    <CounterComponent clickButton={this.props.subFiveHandler}>Sub by 5</CounterComponent>
                </div>
                <button onClick={()=>this.props.storeResultHandler(this.props.ctr)}>Store List</button>
                <ul>
                    {this.props.results.map((rst)=>{
                        return <li 
                        key={rst.id} 
                        onClick={()=>this.props.removeHandler(rst.id)}
                        >{rst.val}</li>
                    }

                )}
                </ul>
            </div>
        )
    }
}

const mapStateToProp = (state)=>{ // This state is the reducer state;
    // console.log(state);
    return{
        ctr:state.ctr.count,
        results: state.rst.result
    }
}

const mapDispatchTpProp = dispatch =>{
    return{
        incrementHandler: ()=>dispatch(actionCreator.increment()),
        decrementHandler: ()=> dispatch(actionCreator.decrement()),
        addFiveHandler: ()=>dispatch(actionCreator.addByFive(5)),
        subFiveHandler: ()=>dispatch(actionCreator.subByFive(5)),
        storeResultHandler: (no)=>dispatch(actionCreator.saveResultMiddleware({val:no})),
        removeHandler: (id)=>dispatch(actionCreator.remove({id:id}))
        
    }
}

export default connect(mapStateToProp, mapDispatchTpProp)(Counter);