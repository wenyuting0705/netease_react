import {combineReducers} from 'redux'
import {
  RECEIVE_HOMEDATA,
  RECEIVE_CATEGORYSDATA,
  RECEIVE_SHIWUDATA
} from './reducer-types'

const initHomeData={}
function homeData(state=initHomeData,action){
  switch(action.type){
    case RECEIVE_HOMEDATA:
      return {...action.data};
    default:
      return state;
  }
}

const initCatagorysData = []
function catagorysData(state=initCatagorysData,action){
  switch(action.type){
    case RECEIVE_CATEGORYSDATA:
      return action.data;
    default:
      return state
  }
}
const initShiwuData ={}
function shiwuData(state=initShiwuData,action){
  switch(action.type){
    case RECEIVE_SHIWUDATA:
      return {...action.data}
    default:
      return state
  }
}
export default combineReducers({
  homeData,
  catagorysData,
  shiwuData
})