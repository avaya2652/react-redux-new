import React from 'react';
import classes from './Counter.module.css';

const CounterComponent = (props)=>{
    // console.log(props);
    return(<div 
        onClick={props.clickButton} 
        className={classes.CounterButton} >
            {props.children}
    </div>)
}

export default CounterComponent;