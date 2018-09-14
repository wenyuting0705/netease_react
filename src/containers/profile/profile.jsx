import React,{Component} from 'react'
import HeaderCom from '../../components/headerCom/headerCom'
// import '../../assets/css/iconfont.css'
import './profile.styl'
export default class Profile extends Component{
  render(){
    return (
       
        <div className="profile">
        <HeaderCom/>
    <div className="profile_login">
      <div className="logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=''/>
      </div>
      <div className="btn_wrap">
        {/* <!-- 手机号登录 --> */}
        <div className="btn phone_login">
          <span className="phone_icon"></span>
          <span className="phone_login_text">手机号码登录</span>
        </div>
        {/* <!-- 邮箱登录 --> */}
        <div className="btn email_login">
          <span className="email_icon"></span>
          <span className="email_login_text">邮箱帐号登录</span>
        </div>
        {/* <!-- 手机号注册 --> */}
        <div className="phone_regist">
          <span className="goRegist">手机号快捷注册</span>
          <span className="arrow"></span>
        </div>
      </div>
      {/* <!-- 选择登录方式 --> */}
      <div className="login_selector">
        <div className="login_item">
          <span><i className="iconfont icon-changyonglogo28"></i></span>微信
        </div>
        <div className="login_item">
          <span><i className="iconfont icon-web-icon-"></i></span>QQ
        </div>
        <div className="login_item">
          <span><i className="iconfont icon-weibo"></i></span>微博
        </div>
      </div>
    </div>
         
      </div>
    )
  }
}