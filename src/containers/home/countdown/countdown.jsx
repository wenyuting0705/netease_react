import React,{Component} from 'react'
import './countdown.styl'

class Countdown extends Component{
  render(){
    return(
      <div className="countDown">
      <div className="countDown_time">
        <div className="countDown_title">严选限时购</div>
        <div className="countDown_time_change">
          <span className="hours">01</span>
          <span className="colon">:</span>
          <span className="minutes">01</span>
          <span className="colon">:</span>
          <span className="second">01</span>
        </div>
        <div className="next_countdown">
            下一场10:00开始
        </div>
      </div>
      <div className="countDown_info">
        <div className="countDown_price">
          <span>￥216</span>
          <div>
            <span>￥</span><span className="oldPrice">239</span>
          </div>
        </div>
      </div>
    </div>
    )
   
    
  }
}
export default Countdown