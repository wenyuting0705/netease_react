import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './zhen.styl'
class Zhen extends Component{
  static propTypes={
    zhenOne:PropTypes.object.isRequired,
    zhenTwo:PropTypes.object.isRequired,
    zhenThree:PropTypes.object.isRequired
  }
  render(){
    const {zhenOne,zhenTwo,zhenThree} = this.props
    return(
      <div className="recommends">
        <div className="rcmd_container">
          <header>严选甄品</header>
          <div className="mainPosItem">
            <div className="img_container" style={{backgroundImage:'url('+zhenOne.picUrl+')'}}>
              <div className="topic_tag">{zhenOne.typeName}</div>
            </div>
            <div className="topicInfo">
              <div className="info_title">
                <span className="title">{zhenOne.title}</span>
                <span>{zhenOne.priceInfo}元起</span>
              </div>
              <div className="info_desc">
                {zhenOne.subtitle}
              </div>
            </div>
          </div>
          <div className="minorPosItem">
            <div className="topicInfo">
              {/* <div className="author_container">
                <div className="avatar" style={{backgroundImage:'url('+zhenTwo.avatar+')'}}></div>
                <div className="nickName">{zhenTwo.nickname}</div>
              </div> */}
              <div className="title">{zhenTwo.title}</div>
              <div className="subTitle">{zhenTwo.subtitle}</div>
            </div>
            <div className="minorPic" style={{backgroundImage:'url('+zhenTwo.picUrl+')'}}>
              <div className="topic_tag">{zhenTwo.typeName}</div>
            </div>
          </div>
          <div className="minorPosItem">
            <div className="topicInfo">
              {/* <div className="author_container">
                <div className="avatar" style={{backgroundImage:'url('+zhenThree.avatar+')'}}></div>
                <div className="nickName">{zhenThree.nickname}</div>
              </div> */}
              <div className="title">{zhenThree.title}</div>
              <div className="subTitle">{zhenThree.subtitle}</div>
            </div>
            <div className="minorPic" style={{backgroundImage:'url('+zhenThree.picUrl+')'}}>
              <div className="topic_tag">{zhenThree.typeName}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Zhen