import React,{Component} from 'react'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'
import {getShiwuData} from '../../redux/actions'
import FooterNav from '../../components/footerNav/footerNav'
import HeaderCom from '../../components/headerCom/headerCom'
import ShiwuSwiper from './shiwuSwiper/shiwuSwiper'
import Channels from './channels/channels'
import Recommends from './recommends/recommends'
import TenFifteen from './tenFifteen/tenFifteen'
import Zhen from './zhen/zhen'
import Look from './look/look'
import More from './more/more'
import './shiwu.styl'
class Shiwu extends Component{
  state={
    isShowArrow:false
  }
  componentDidMount(){
    this.props.getShiwuData()
    this._initShiwuScroll()
  }
  _initShiwuScroll(){
    // const showArrEle = document.querySelector('.tenFifteen')
    this.shiwuScroll = new BScroll('.scroll_container',{
      click:true,
      scrollY:true,
      probeType:3,
      scrollbar:true
    })
    // const top = showArrEle.offsetTop
    // this.shiwuScroll.on('scroll',({x,y})=>{
    //   if(-y >= top){
    //     this.setState({
    //       isShowArrow:true
    //     })
    //   }else{
    //     this.setState({
    //       isShowArrow:false
    //     })
    //   }
    // })
  }
  render(){
    const {
      banner,
      column,
      recommendOne,
      recommendTwo,
      recommendThree,
      tenfifteen,
      zhenOne,
      zhenTwo,
      zhenThree,
      yxLook,
      findMore
    } = this.props.shiwuData
    return (
      <div>
        <HeaderCom/>
        <div className="shiwu_container">
          <div className="scroll_container">
            <div className="scroll_wrapper">
              {banner ? <ShiwuSwiper banner={banner}/> : null}
              {column? <Channels column={column}/> : null}
              {recommendOne&&recommendTwo&&recommendThree ? <Recommends recommendOne={recommendOne}
              recommendTwo={recommendTwo} recommendThree={recommendThree}/> :null} 
              {tenfifteen ? <TenFifteen tenfifteen={tenfifteen}/> : null}
              {zhenOne&&zhenTwo&&recommendThree ? <Zhen zhenOne={zhenOne}
              zhenTwo={zhenTwo} zhenThree={zhenThree}/> :null} 
              {yxLook ? <Look yxLook={yxLook}/> : null}
              {findMore ? <More findMore={findMore}/> : null}
              {/* <Zhen/>
              <Look/>
              <More/> */}
            </div>
          </div>
          <div className="gotoTop"></div>
        </div>
        <FooterNav/>
      </div>
    )
  }
}
export default connect(
  state => ({shiwuData:state.shiwuData}),
  {getShiwuData}
)(Shiwu)