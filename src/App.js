import React,{Component} from 'react';
import store from './store/store2';
import {addStateNum,minusStateNum} from "./store/number"

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      num : store.getState() 
    }
    store.subscribe( ()=>{
      this.setState({
        num : store.getState()
      })
    })
  
  }
  
  render(){

    return(
      <div>
        <button onClick={()=>{store.dispatch(addStateNum())}}>+</button>
        <span>{this.state.num}</span>
        <button onClick={()=>{store.dispatch(minusStateNum())}}>-</button>
      </div>
    )
  }

}

export default App






























// class MyFirstReactComponent extends Component{   //当前MyFirstReactComponent类继承了react的Component组件，
//       //构造器
//   constructor(props){
//     //super执行MyFirstReactComponent当前所继承的方法，而且只执行一次
//     super(props)
//     //定义数据（状态） 状态一旦发生变化就重新触发render 可以通过事件去修改状态
//     this.state = {
//       test : "你好"
//     }
//     //修改this指向（推荐）
//     this.zl = this.zl.bind(this)
//   }
  
//   //页面的结构全部丢到render里渲染
//   //状态改变不能再render里进行，不然会陷入死循环
//       render(){
//         return (
//           <div>
//             <div>
//               this is my life
//               <p>{this.state.test}</p>
//               <p>zaijian</p>
//               <button onClick={this.zl}>修改</button>
//             </div>
//             <div>
//               zaiyebujian
//             </div>
//           </div>
      
//         )
//     } 
//     //点击时触发的方法
//     zl(e){
//       // alert("你好")
//       //修改状态 推荐用setState方法，setState第二个参数是回调函数，
//       //回调函数可以在状态修改完成后，让它去实现一些功能 可以用来做loding
//       // this.setState({
//       //   test : "再见"
//       // },_=>{
//       //   console.log("修改完成")
//       // })
//       //修改状态的唯一方法
//       this.setState((prev)=>{   //prev是修改之前的数据

//         console.log(prev) // 2
//         return{
//           test : "再见"
//         }
//       },_=>{
//         console.log("修改完成") //异步执行 3
//       })
//       console.log(this) // 1
//     } 
// }

// export default MyFirstReactComponent