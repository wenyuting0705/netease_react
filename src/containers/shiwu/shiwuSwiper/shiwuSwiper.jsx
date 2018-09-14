import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Swiper from 'swiper'
import './shiwuSwiper.styl'

class ShiwuSwiper extends Component{
  static propTypes = {
    banner:PropTypes.array.isRequired
  }
  componentDidMount(){
    new Swiper('.banner .swiper-container',{
      slidesPerView: 'auto',
      loop:true
    })
  }
  render(){
    return(
      <div className="banner_wrapper">
        <div className="banner">
          <div className="swiper-container">
            <div className="swiper-wrapper">
            {
              this.props.banner.map((item,index)=>(
                <div className="swiper-slide" key={index}>
                  <img src={item.picUrl} alt=''/>
                  {
                    item.subTitle?(<div className="swiper_content">
                      <div className="swiper_subtitle">
                        <span>—</span>
                        {item.subTitle}
                        <span>—</span>
                      </div>
                      <div className="swiper_title">{item.title}</div>
                      <div className="swiper_desc">{item.desc}</div>
                    </div>):null
                  }
                </div>
              ))
            }
             
            </div>
          </div>
        </div>
    </div>
    )
  }
}
export default ShiwuSwiper