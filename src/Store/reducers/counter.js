import * as actionType from '../Action/Action';
import {updateObject} from '../Utility';

const initialState = {
    count: 0
}
// let initialId = 0;

export default function reducer(state=initialState, action){
    // console.log('Actions', action);
    switch(action.type){
        case actionType.INCREMENT: 
        return updateObject(state, {count: state.count+1});
            // return{
            //     ...state,
            //     count: state.count+1
            // } ;
        case actionType.DECREMENT:
            return updateObject(state, {count: state.count-1}); 
        case actionType.ADDBYFIVE:
            return updateObject(state, {count: state.count+action.value});
        case actionType.SUBBYFIVE:
            return updateObject(state, {count: state.count-action.value});
        default:
            return state;
    }
   
    
}