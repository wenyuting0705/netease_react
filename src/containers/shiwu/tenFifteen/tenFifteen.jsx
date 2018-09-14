import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Swiper from 'swiper'
import './tenFifteen.styl'
class TenFifteen extends Component{
  static propTypes = {
    tenfifteen:PropTypes.array.isRequired
  }
  componentDidMount(){
    new Swiper('#teeFifteen',{
      // slidesPerView: 'auto',
    })
  }
  render(){
    const {tenfifteen} = this.props
    return(
      <div className="tenFifteen">
          <header>十点一刻</header>
          <div className="tenFifteen_swiper">
            <div className="swiper-container" id="teeFifteen">
              <div className="swiper-wrapper">
              {
                tenfifteen.map((item,index)=>(
                  <div className="swiper-slide" key={index}>
                  <div className="tf_subtitle">
                    <span>—</span>
                      今日话题
                    <span>—</span>
                  </div>
                  <div className="tf_title">{item.title}</div>
                  <div className="tf_desc">{item.desc}</div>
                  <div className="joinInfo">
                    <div className="inner">
                      <div className="avatars">
                        <div className="avatar">
                          <img src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt=''/>
                        </div>
                        <div className="avatar">
                          <img src={item.participantAvatar[1]} alt=''/>
                        </div>
                        <div className="avatar">
                          <img src={item.participantAvatar[2]} alt=''/>
                        </div>
                        <div className="avatar">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div className="join">{item.participantNum}人参与话题</div>
                    </div>
                  </div>
                </div>
                ))
              }
                
                <div className="swiper-slide">
                  <div className="look_more">
                    查看全部话题
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default TenFifteen