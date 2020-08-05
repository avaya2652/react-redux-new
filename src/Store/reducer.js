
// Not in use and this reducer has been splited into two reducers.



import * as actionType from './Action'
const initialState = {
    count: 0,
    result:[]
}
let initialId = 0;

export default function reducer(state=initialState, action){
    // console.log('Actions', action);
    switch(action.type){
        case actionType.INCREMENT: 
            return{
                ...state,
                count: state.count+1
            } ;
        case actionType.DECREMENT:
            return{
                ...state,
                count: state.count-1
            } ;
        case actionType.ADDBYFIVE:
            return{
                ...state,
                count: state.count+action.value
            } ;
        case actionType.SUBBYFIVE:
            return{
                ...state,
                count: state.count-action.value
            } ;
        case actionType.SAVE_RESULT:
            return{
                ...state,
                result: state.result.concat({id:++initialId, val:state.count})
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