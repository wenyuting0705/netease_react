import {
  RECEIVE_HOMEDATA,
  RECEIVE_CATEGORYSDATA,
  RECEIVE_SHIWUDATA
} from './reducer-types'
import {
  reqHomeData,
  reqCategorysData,
  reqShiwuData
} from '../api/index'

const receiveHomeData = (homeData)=>({type:RECEIVE_HOMEDATA,data:homeData})
const receiveCatagorysData = (catagorysData)=>({type:RECEIVE_CATEGORYSDATA,data:catagorysData})
const receiveShiwuData = (shiwuData)=>({type:RECEIVE_SHIWUDATA,data:shiwuData})

export const getHomeData = ()=>{
  return async dispatch =>{
    const response = await reqHomeData()
    if(response.code===0){
      dispatch(receiveHomeData(response.data))
    }
  }
}
export const getCatagorysData = ()=>{
  return async dispatch =>{
    const response = await reqCategorysData()
    if(response.code===0){
      dispatch(receiveCatagorysData(response.data))
    }
  }
}
export const getShiwuData = ()=>{
  return async dispatch =>{
    const response = await reqShiwuData()
    if(response.code===0){
      dispatch(receiveShiwuData(response.data))
    }
  }
}