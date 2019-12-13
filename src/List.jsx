import React,{Component} from "react"
import propTypes from "prop-types"
// this.props在子组件内部可以接受父组件内自身组件上传来的属性

class List extends Component{
    render(){
        console.log("我是第二个")
        const {ind,item,name} = this.props
        return (
            <li id={ind} >
                {item} 
                 {/* {this.props.item} 父组件传递过来的属性 */}
                li
                <span
                className="span" 
                onClick={this.childRemove.bind(this,ind)}>X</span>
                - {name}
            </li>
        )
    }
    childRemove(i){
        const {sc} = this.props
        sc(i)
        
        
    }
    //组件将要被销毁时触发的生命周期函数
    componentWillUnmount(){
        console.log("销毁")
    }
    //可以拿它的第一个参数来做判断
    //父组件render 子组件也会跟着重新render，所以尽量不要做判断
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState)
        // if(nextProps.ind === 1){
        //     return true
        // }else{
        //     return false
        // }
        
    }
}
//语法校验
//可以让传递的值更规范
//当前属性如果不存在，它不会做校验，会自动剔除了
List.propTypes = {
    ind : propTypes.number,
    sc : propTypes.func,
    name : propTypes.number.isRequired //sRequired如果不是你定义的类型就会报错
}

//做一个默认值的添加
List.defaultProps = {
    name : 123
}

export default List