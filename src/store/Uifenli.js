import React,{Component} from "react";

class Uifenli extends Component{
    render(){
        const {value,list,handleChange,handleClick,handleChild} = this.props
        return(
            <div>
                <input type="text" value={value} onChange={handleChange}/>
                <button onClick={handleClick}>发送</button>
                <ul>
                    {
                        list.map((item,index)=>{
                            return<li key={index}>{item} <span onClick={()=>{handleChild(index)}}>删除</span></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Uifenli