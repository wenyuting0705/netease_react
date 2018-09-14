import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import './headerCom.styl'

class HeaderCom extends Component{
  render(){
    return(
      <div className="header">
      <div className="header_con">
        <span className="header_home" onClick={()=>this.props.history.replace('/home')}></span>
        <span className="header_logo"></span>
        <span className="header_search"></span>
        <span className="header_cart" onClick={()=>this.props.history.replace('/shopcart')} ></span>
      </div>
  </div>
    )
  }
}
export default withRouter(HeaderCom)