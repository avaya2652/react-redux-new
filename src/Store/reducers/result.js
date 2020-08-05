import * as actionType from '../Action/Action'
const initialState = {
    result:[]
}
let initialId = 0;

export default function reducer(state=initialState, action){
    // console.log('Actions', action);
    // console.log(action);
    switch(action.type){
        
        case actionType.SAVE_RESULT:
            return{
                ...state,
                result: state.result.concat({id:++initialId, val:action.payload.val})
            } ;
        case actionType.REMOVE:
            return{
                ...state,
                result: state.result.filter((result)=>{
                    return result.id !== action.payload.id;
                })
            } ;
        default:
            return state;
    }
   
    
}