import React,{Component} from 'react'
import Swiper from 'swiper'
import PropTypes from 'prop-types'
import './choiceness.styl'
class Choiceness extends Component{
  static propTypes ={
    topicList:PropTypes.array.isRequired
  }
  componentDidMount(){
    new Swiper('.choiceness_slide .swiper-container',{
      slidesPerView: 'auto',
      spaceBetween: 25,
    })
  }
  render(){
    const {topicList} = this.props
    return(
      <div className="choiceness">
      <header className="choiceness_title">
        <span className="title_text">专题精选</span>
        <span className="title_icon"></span>
      </header>
      {/* <!-- 专题精选轮播图 --> */}
      <div className="choiceness_slide">
          <div className="swiper-container">
            <div className="swiper-wrapper" ref="swiper">
            {
              topicList.map((topic,index)=>(
                <div className="inner_item swiper-slide" key={index}>
                  <img src={topic.itemPicUrl} alt=''/>
                  <div className="swiper_item_title"> 
                    <div className="title_text">{topic.subtitle}</div>
                    <div className="item_title_price">
                      <span>{topic.priceInfo}</span>
                      <span>元起</span>
                    </div>
                  </div>
                  <div className="swiper_item_info">{topic.title}</div>
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
export default Choiceness