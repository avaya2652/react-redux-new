import React from 'react';
import classes from './CounterDisplay.module.css';

const CounterDisplay = (props) =>{
    return(
        <div className={classes.ResultWrapper}>
            Counter: {props.count}
        </div>
    )
}
export default CounterDisplay;