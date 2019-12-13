import React , {Component} from "react";
import LifyChild from './LifyChild'
import axios from "axios"; //npm i axios -D
class Lify extends Component{
    //构造器 constructor是一个生命周期函数，但它不是react独有的生命周期函数 是es6新增的 并且她是最先运行的
    constructor(props){
        super(props)
        this.state = {
            value : ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            value : e.target.value
        })
    }

    //组件将要挂载的时候触发的生命周期函数 即将删除 尽量避免使用它
    componentWillMount(){
        console.log("componentWillMount")
    }

    //挂载 render没有默认项必须是自己手动去定义的一个生命周期函数 ，它是用来组件渲染
    render(){
        console.log("render")
        return(
            <div>
                <input value={this.state.value} onChange={this.handleChange}/>
                <LifyChild value={this.state.value}/>
            </div>
        )
            
    }
    //组件渲染完成后会触发这个函数 1.可以做真实节点操作 2.一般比较合理的是在这里调用ajax
    componentDidMount(){
        
        axios("https://acs.m.taobao.com/h5/mtop.taobao.guang.detail.related.get/1.0").then(res=>{
            alert("成功")
        }).catch(err=>{
            alert("失败")
        })
        console.log("componentDidMount")
    }

    //当状态将要改变时触发的生命周期函数
    //控制组件是否可以渲染的生命周期函数 true表示你可以去渲染 flase表示你不可以去渲染
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }
    //组件将要更新时触发的生命周期函数，即将删除
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    //组件更新完成是触发
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
}

export default Lify



//生命周期函数就是在组件经历了某些阶段后自动触发的函数
//生命周期的书写顺序不会影响它的执行顺序

//第一个阶段 挂载前*******
//componentWillMount:
// 在组件挂载到DOM前调用，且只会被调用一次，在这边调用this.setState不会引起组件重新渲染，
// 也可以把写在这边的内容提前到constructor()中，所以项目中很少用。

// render:
// 根据组件的props和state（无两者的重传递和重赋值，论值是否有变化，都可以引起组件重新render） ，
// return 一个React元素（描述组件，即UI），不负责组件实际渲染工作，之后由React自身根据此元素去渲染出页面DOM。
// render是纯函数（Pure function：函数的返回结果只依赖于它的参数；函数执行过程里面没有副作用），
// 不能在里面执行this.setState，会有改变组件状态的副作用。

// componentDidMount:
// 组件挂载到DOM后调用，且只会被调用一次

//第二阶段 更新阶段**************
// 此阶段分为componentWillReceiveProps，shouldComponentUpdate，componentWillUpdate，render，componentDidUpdate

// componentWillReceiveProps(nextProps)
// 此方法只调用于props引起的组件更新过程中，参数nextProps是父组件传给当前组件的新props。
// 但父组件render方法的调用不能保证重传给当前组件的props是有变化的，
// 所以在此方法中根据nextProps和this.props来查明重传的props是否改变，
// 以及如果改变了要执行啥，比如根据新的props调用this.setState出发当前组件的重新render

// shouldComponentUpdate(nextProps, nextState)
// 此方法通过比较nextProps，nextState及当前组件的this.props，this.state，
// 返回true时当前组件将继续执行更新过程，返回false则当前组件更新停止（下面所有的生命周期函数就都不会触发），以此可用来减少组件的不必要渲染，优化组件性能。

// ps：这边也可以看出，就算componentWillReceiveProps()中执行了this.setState，更新了state，
// 但在render前（如shouldComponentUpdate，componentWillUpdate），
// this.state依然指向更新前的state，不然nextState及当前组件的this.state的对比就一直是true了。

// componentWillUpdate(nextProps, nextState)
// 此方法在调用render方法前执行，在这边可执行一些组件更新发生前的工作，一般较少用。

// render
// render方法在上文讲过，这边只是重新调用。

// componentDidUpdate(prevProps, prevState)
// 此方法在组件更新后被调用，可以操作组件更新的DOM，prevProps和prevState这两个参数指的是组件更新前的props和state

// 第三个阶段：卸载阶段************
// 此阶段只有一个生命周期方法：componentWillUnmount

// componentWillUnmount
// 此方法在组件被卸载前调用，可以在这里执行一些清理工作，
// 比如清楚组件中使用的定时器，清楚componentDidMount中手动创建的DOM元素等，以避免引起内存泄漏。

//写接口的 esaymock，charles
//找webpack文件 npm run eject  只要展开就没办法在合上


