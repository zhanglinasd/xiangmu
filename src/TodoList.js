import React,{Component,Fragment} from 'react';
import List from "./List.jsx"

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            listArr :[],
            value: " "
        }
        this.arr = this.arr.bind(this)
        this.nh = this.nh.bind(this)
    }

    arr(){
        // console.log(this.refs.btn)
        // console.log(this.state.value)
        // this.state.listArr.push(this.state.value)
        const listArr = [...this.state.listArr,this.state.value]
        this.setState(_=>{
            return{
                listArr,
                value: " "
            }
        })

    }
    nh(e){
        // console.log(e.target.value)
        const value = e.target.value
        this.setState( (prev) =>{
            return{
                value
            }
        })
    }
    sc(i){
        // console.log(i)
        this.setState((prev)=>{
            prev.listArr.splice( i, 1)
            // console.log(prev.listArr)
            return {
                listArr: prev.listArr
            }
        })
    }


    render(){
        console.log("nihao")
        return(
            <Fragment>
            <div>
                <input type="text" value={this.state.value} onChange={this.nh}/>
                <button ref="btn" onClick={this.arr}>发送</button>{/*  ref就是获取元素的真实dom节点 */}
                <ul>
                    {
                        this.state.listArr.map((item,index)=>{
                            return (
                                <List 
                                key={index} 
                                item={item} 
                                ind={index} 
                                sc={this.sc.bind(this)}/>//把属性传给子组件，相当于给子组件写了一个属性
                            )
                                
                        })
                    }
                </ul>
            </div>
            <div>
                123
            </div>
            </Fragment>
            
        )  
    }
    shouldComponentUpdate(){
        console.log("状态改变")
        return true
    }
}
export default TodoList













