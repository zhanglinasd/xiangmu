//创建store
import {createStore} from "redux"
import reducer from "./reducer"//引入reducer

//传入reducer  reducer管理store（仓库）的state（状态）
//让reducer告诉它（store），它当前仓库里存了哪些state
let store = createStore(reducer)


export default store