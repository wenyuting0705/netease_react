import React,{Component} from 'react'
import FooterNav from '../../components/footerNav/footerNav'
import './shopcart.styl'
export default class ShopCart extends Component{
  render(){
    return (
      <div>
        <div className="shopCart">
    <div className="shopCart_header">
      <span className="title">购物车</span>
      <span className="coupon">领券</span>
    </div>
    <div className="service">
      <ul className="service_list">
        <li>
          <span className="circle"></span>
          <span className="service_title">30天无忧退货</span>
        </li>
        <li>
          <span className="circle"></span>
          <span className="service_title">48小时快速退款</span>
        </li>
        <li>
          <span className="circle"></span>
          <span className="service_title">满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div className="shopCart_main">
      <div className="shopCart_img"></div>
      <div className="shopCart_add">去添加点什么吧</div>
      <div className="shopCart_login">登录</div>
    </div>
  </div>
        <FooterNav/>
      </div>
    )
  }
}