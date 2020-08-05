export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADDBYFIVE = "ADDBYFIVE";
export const SUBBYFIVE = "SUBBYFIVE";
export const SAVE_RESULT = 'SAVE_RESULT';
export const REMOVE = 'REMOVE';


/**Action creator* */

export const increment = () =>{
    return {
        type: 'INCREMENT'
    }
}
export const decrement = () =>{
    return {
        type: 'DECREMENT'
    }
}

export const addByFive = (val) =>{
    return {
        type: 'ADDBYFIVE',
        value: val
    }
}
export const subByFive = (val) =>{
    return {
        type: 'SUBBYFIVE',
        value: val
    }
}
export const saveResult = (res) =>{
    return {
        type: 'SAVE_RESULT',
        payload: res

    }
}
export const remove = (id) =>{
    return {
        type: 'REMOVE',
        payload: id
    }
}

export const saveResultMiddleware = (res) =>{
    return (dispatch)=>{

        setTimeout(()=>{
            dispatch(saveResult(res));
        },2000)

    }
}

