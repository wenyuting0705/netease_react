import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
 // eslint-disable-next-line
import './stylus/footerNav.styl'


class FooterNav extends Component{
  
  render (){
    const path = this.props.location.pathname
    return(
      <div className="footer_nav"> 
        <div onClick={()=>this.props.history.replace('/home')} className={path==='/home'?'on':''}>
          <span className="icon home"></span>
          <span>首页</span>
        </div>
        <div onClick={()=>this.props.history.replace('/shiwu')} className={path==='/shiwu'?'on':''}>
            <span className="icon shiwu"></span>
            <span>识物</span>
        </div>
        <div onClick={()=>this.props.history.replace('/categorys')} className={path==='/categorys'?'on':''}>
          <span className="icon categorys"></span>
          <span>分类</span>
        </div>
        <div onClick={()=>this.props.history.replace('/shopcart')} className={path==='/shopcart'?'on':''}>
          <span className="icon shopcart"></span>
          <span>购物车</span>
        </div>
        <div onClick={()=>this.props.history.replace('/profile')} className={path==='/profile'?'on':''}>
            <span className="icon profile"></span>
            <span>个人</span>
        </div>
      </div>
    )
  }
}
export default withRouter(FooterNav)