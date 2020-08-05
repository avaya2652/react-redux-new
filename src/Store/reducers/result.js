import * as actionType from '../Action/Action';
import {updateObject} from '../Utility';

const initialState = {
    result:[]
}
let initialId = 0;

const remove = (state, action) =>{
    const updatedVal = state.result.filter((result)=>{
        return result.id !== action.payload.id;
    });
    return updateObject(state,{result: updatedVal});
}

export default function reducer(state=initialState, action){
    switch(action.type){ 
        case actionType.SAVE_RESULT:
            return updateObject(state,{ result: state.result.concat({id:++initialId, val:action.payload.val})})
        case actionType.REMOVE:
            return remove(state, action);
        default:
            return state;
    }
   
    
}