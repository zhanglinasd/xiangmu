
const ADD_STATE_NUM ="ADD_STATE_NUM"
const MTNUS_STATE_NUM = "MTNUS_STATE_NUM"


export default (state=0,action)=>{
    let newState = state
    switch(action.type){
        case ADD_STATE_NUM:
            return newState + 1
        case MTNUS_STATE_NUM:
            return newState -1
        default:
            return state
    }
}

export  function addStateNum(){
    return {
        type : ADD_STATE_NUM
    }
}
export function minusStateNum(){
    return{
        type : MTNUS_STATE_NUM
    }
}