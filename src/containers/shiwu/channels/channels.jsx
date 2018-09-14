import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Swiper from 'swiper'
import './channels.styl'
class Channels extends Component{
  static propTypes = {
    column:PropTypes.array.isRequired
  }
  componentDidMount(){
    new Swiper('.shiwu_channels .swiper-container',{
      slidesPerView: 'auto',
    })
  }
  render(){
    return(
      <div className="shiwu_channels">
        <div className="swiper-container">
          <div className="swiper-wrapper">
          {
            this.props.column.map((item,index)=>(
              <div className="swiper-slide" key={index}>
                <img src={item.picUrl} alt=''/>
                <div className="topNum">{item.articleCount}</div>
                <div className="channel_title">{item.title}</div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    )
  }
}
export default Channels