import React,{Component} from 'react'

class LifyChild extends Component{
    render(){
        console.log("最好的你")
        return(
            <div>
                要努力做一个最好的你 
                {this.props.value}
            </div>
        )
    }
    //当属性将要发生变化时会被触发，17版的react里它会被删除
//     componentWillReceiveProps(){
//         console.log("nihao")
//     }
}

export default LifyChild