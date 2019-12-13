import React,{Component} from "react";
import store from "./store/store"
import {getAction,getActionClick,getActionRemove} from "./store/action"
import Uifenli from "./store/Uifenli"

class Reduxapp extends Component{
constructor(props){
    super(props)
    this.state = store.getState()
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleChild = this.handleChild.bind(this)
    //监控状态改变
    store.subscribe(this.handleStoreChange)
}

//三个关键点 store最重要的三个方法 
// getState，获取状态
// subscribe，监听状态变化
// dispatch 事件派发


handleStoreChange(){
    console.log("zhuangtaibeixiugai")
    // console.log(store.getState())
    this.setState(store.getState())
}
handleChange(e){
    
    const action = getAction(e.target.value)
    //dispatch 派发 派发状态，派发事件
    store.dispatch( action )
    // console.log( action )
}
handleClick(){
    // console.log(store.getState())
    const action = getActionClick()
    store.dispatch(action)
}
handleChild(i){
    // this.state.list.splice(i,1)
    // this.setState({
    //     list : this.state.list
    // })
    const action = getActionRemove(i)
    store.dispatch(action)
}


    render (){
        let {value,list} = this.state
        return(
            
            <Uifenli 
            value={value}
            list={list}
            handleChange={this.handleChange}
            handleChild={this.handleChild}
            handleClick={this.handleClick}
            />
        )
    }
}

export default Reduxapp