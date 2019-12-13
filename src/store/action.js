import{UPDATE_STORE_VALUE,INSERT_LIST_DATE,REMOVE_LIST_DATE} from "./actionTypes"

export const getAction = (value)=>({
    type : UPDATE_STORE_VALUE, //是action里默认的属性
    value 
})
export const getActionClick = ()=>({
    type : INSERT_LIST_DATE
})

export const getActionRemove = (index)=>(
    {
        type : REMOVE_LIST_DATE,
        index
    }
)