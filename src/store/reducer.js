import{UPDATE_STORE_VALUE,INSERT_LIST_DATE,REMOVE_LIST_DATE} from "./actionTypes"

const defaultState ={
    value : "",
    list : []
}
//reducer是一个函数
//reducer是一个方法，他会暴露两个参数 1.状态 
// 2.行为，动作 它是用来接收diapatch传递过来的action的
export default (state=defaultState,action)=>{
    let newState = JSON.parse(JSON.stringify( state ))  //深拷贝
    switch(action.type){
        case UPDATE_STORE_VALUE:  
            newState.value = action.value
            return newState 
        case INSERT_LIST_DATE:
            newState.list.push(newState.value)
            newState.value = ""
            return newState 
        case REMOVE_LIST_DATE:
            newState.list.splice(action.index,1)
            return newState 
        default:
            return state
    }
}
