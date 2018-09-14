import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './look.styl'
class Look extends Component{
  static propTypes = {
    yxLook:PropTypes.object.isRequired
  }
  state={
    imgUrl:''
  }
  componentDidMount(){
    const imgUrl = this.props.yxLook.mediaList[0].pic.url
    this.setState({
      imgUrl
    })
  }
  render(){
    const {yxLook} = this.props
    const {imgUrl} = this.state
    return(
      <div className="look">
        <header>严选LOOK</header>
        <div className="look_content">
          <div className="img_wrapper">
            <img src={imgUrl} alt=''/>
          </div>
          <div className="topicInfo">
            <div className="author">
              <img src="yxLook.avatar" alt=''/>
              <div className="nickName">{yxLook.nickname}</div>
            </div>
            <div className="look_desc">
              {yxLook.content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Look