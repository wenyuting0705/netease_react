import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './recommends.styl'
class Recommends extends Component{
  static propTypes={
    recommendOne:PropTypes.object.isRequired,
    recommendTwo:PropTypes.object.isRequired,
    recommendThree:PropTypes.object.isRequired
  }
  render(){
    const {recommendOne,recommendTwo,recommendThree} = this.props
    return(
      <div className="recommends">
        <div className="rcmd_container">
          <header>为你推荐</header>
          <div className="mainPosItem">
            <div className="img_container" style={{backgroundImage:'url('+recommendOne.picUrl+')'}}>
              <div className="topic_tag">{recommendOne.typeName}</div>
            </div>
            <div className="topicInfo">
              <div className="info_title">
                <span className="title">{recommendOne.title}</span>
                <span>{recommendOne.priceInfo}元起</span>
              </div>
              <div className="info_desc">
                {recommendOne.subtitle}
              </div>
            </div>
          </div>
          <div className="minorPosItem">
            <div className="topicInfo">
              <div className="author_container">
                <div className="avatar" style={{backgroundImage:'url('+recommendTwo.avatar+')'}}></div>
                <div className="nickName">{recommendTwo.nickname}</div>
              </div>
              <div className="title">{recommendTwo.title}</div>
              <div className="subTitle">{recommendTwo.subtitle}</div>
            </div>
            <div className="minorPic" style={{backgroundImage:'url('+recommendTwo.picUrl+')'}}>
              <div className="topic_tag">{recommendTwo.typeName}</div>
            </div>
          </div>
          <div className="minorPosItem">
            <div className="topicInfo">
              <div className="author_container">
                <div className="avatar" style={{backgroundImage:'url('+recommendThree.avatar+')'}}></div>
                <div className="nickName">{recommendThree.nickname}</div>
              </div>
              <div className="title">{recommendThree.title}</div>
              <div className="subTitle">{recommendThree.subtitle}</div>
            </div>
            <div className="minorPic" style={{backgroundImage:'url('+recommendThree.picUrl+')'}}>
              <div className="topic_tag">{recommendThree.typeName}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Recommends