import React,{Component} from 'react'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import FooterNav from '../../components/footerNav/footerNav'
import Search from '../../components/search/search'
import BrandProvide from './brandProvide/brandProvide'
import NewGoods from './newGoods/newGoods'
import Recommends from './recommends/recommends'
import Countdown from './countdown/countdown'
import Choiceness from './choiceness/choiceness'
import HomeList from './homeList/homeList'
import {getHomeData} from '../../redux/actions.js'
import './stylus/home.styl'

class Home extends Component{
 

  constructor(props) {
    super(props);
    this.state = {
      isShowArrow:false,
      isClose: true
    }
  }
  componentDidMount(){
    this.props.getHomeData()
    new BScroll('.home_nav',{
      click:true,
      scrollX:true
    })
    new Swiper('.show_container .swiper-container',{
      autoplay:true,
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
    this.initMainScroll()
  }
  initMainScroll(){
    const mainHeight = document.documentElement.clientHeight
    const home = document.querySelector('.home')
    home.style.height = (mainHeight*2-258) + 'px'
    this.homeScroll = new BScroll('.home_main',{
      click:true,
      scrollY:true,
      probeType:3,
      scrollbar:true
    })
    
    this.homeScroll.on('scroll',({x,y})=>{
      if(-y >= 700){
        this.setState({
          isShowArrow:true
        })
      }else{
        this.setState({
          isShowArrow:false
        })
      }
    })
  }
  closeMask =()=>{
    this.setState({
      isShowArrow: false,
      isClose: false
    })
    
  }
  toTop = ()=>{
    this.homeScroll.scrollTo(0, 0, 300)
  }
  render(){
    const {
      policyDescList,
      tagList,
      newItemList,
      popularItemList,
      topicList,
      cateList,
      newUserGift
    } = this.props.homeData
    const {isClose,isShowArrow} = this.state
    return (
      <div>
        <div className='home'>
          {/* <!-- 首页头部，logo以及搜索框 --> */}
          <div className="header_header_con">
            <div className="home_header clearfix">
              <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt='homeLogo'/>
              <Search/>
            </div>
            {/* <!-- 首页导航 --> */}
            <div className="home_nav">
              <ul className="home_nav_list">
                <li className="active">推荐</li>
                <li>居家</li>
                <li>鞋包配饰</li>
                <li>服装</li>
                <li>电器</li>
                <li>洗护</li>
                <li>饮食</li>
                <li>餐厨</li>
                <li>婴童</li>
                <li>文体</li>
                <li>特色区</li>
              </ul>
            </div>
          </div>
          <div className="home_main" ref="home">
            <div className="main_scroll">
            {/* <!-- 首页轮播图 --> */}
              <div className="show_container">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                      <div className="swiper-slide"><img src="https://yanxuan.nosdn.127.net/8f283dd0ad76bb48ef9c29a04690816a.jpg?imageView&quality=75&thumbnail=750x0" alt='swiperImg'/></div>
                      <div className="swiper-slide"><img src="https://yanxuan.nosdn.127.net/a7e05880a9b809b88c4228504ff7d1eb.jpg?imageView&quality=75&thumbnail=750x0" alt='swiperImg'/></div>
                      <div className="swiper-slide"><img src="https://yanxuan.nosdn.127.net/aa6e9be1f19acad247ff59f1caee59e5.jpg?imageView&quality=75&thumbnail=750x0" alt='swiperImg'/></div>
                      <div className="swiper-slide"><img src="https://yanxuan.nosdn.127.net/f02e973bd0673b30ee30e08918f9aa5c.jpg?imageView&quality=75&thumbnail=750x0" alt='swiperImg'/></div>
                      <div className="swiper-slide"><img src="https://yanxuan.nosdn.127.net/06b6c3d06bd35bcde539271aa96214c6.jpg?imageView&quality=75&thumbnail=750x0" alt='swiperImg'/></div>
                      <div className="swiper-slide"><img src="https://yanxuan.nosdn.127.net/423e0a203ca30c3ca3877521760ae1d3.jpg?imageView&quality=75&thumbnail=750x0" alt='swiperImg'/></div>
                      <div className="swiper-slide"><img src="https://yanxuan.nosdn.127.net/403e06775da33c355e8e3ff6ff35d77c.jpg?imageView&quality=75&thumbnail=750x0" alt='swiperImg'/></div>
                      <div className="swiper-slide"><img src="https://yanxuan.nosdn.127.net/0b53d08dee6ddca926b155b6e19c3250.jpg?imageView&quality=75&thumbnail=750x0" alt='swiperImg'/></div>
                  </div>
                  {/* <!-- 如果需要分页器 --> */}
                  <div className="swiper-pagination"></div>
                </div>
                <ul className="show_tips">
                  {
                    policyDescList ? (policyDescList.map((policydesc,index)=>(
                      <li key={index}>
                        <span className="tip_icon" style={{backgroundImage:`url(${policydesc.icon})`}}></span>
                        <span className="tip_text">{policydesc.desc}</span>
                      </li>
                      )
                    )):null
                  }
                </ul>
              </div>
              {tagList?<BrandProvide tagList={tagList}/>:null}
              {newItemList?<NewGoods newItemList={newItemList} ref='newGoods'/>:null}
              {popularItemList?<Recommends popularItemList={popularItemList}/>:null}
              <Countdown/>
              <div className="welfare"></div>
              {topicList?<Choiceness topicList={topicList}/>:null}
              {cateList?<HomeList cateList={cateList}/>:null}
              <div className="home_footer">
                <div className="footer_container">
                  <div className="footer_button">
                    <span>下载APP</span>
                    <span>电脑版</span>
                  </div>
                  <div className="company_info">
                    <span>网易公司版权所有 © 1997-</span><span>2018</span><br/>
                    <span>食品经营许可证：JY13301080111719</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gotoTop" style={{display:isShowArrow?'block':'none'}} 
              onClick={()=>this.toTop()}></div>
    {/* <!-- 主页弹框 --> */}
          {
            newUserGift ? (
              <div style={{display:isClose?'block':'none'}} className="newWapUserGiftModal"  >
            <div className="mask">
              <span className="close_btn" onClick={()=>this.closeMask()}></span>
              <div className="new_enjoy">
                <div className="enjoy_content">
                  <div className="title">
                    <span>—</span>
                    新人专享礼
                    <span>—</span>
                  </div>
                  <div className="subTitle">
                      感谢使用网易严选, 已为你准备了一份专享礼
                  </div>
                  <div className="newUserItem">
                    <div className="item_img">
                      <img src={newUserGift.itemPic} alt=''/>
                    </div>
                    <div className="content">
                        <div className="item_title">{newUserGift.itemName}</div>
                        <div className="item_brand">
                          <span>{newUserGift.manuDesc}</span>
                        </div>
                        <div className="item_price">
                          <span className="newPrice">￥{newUserGift.retailPrice}.00</span>
                          <span className="oldPrice">￥{newUserGift.comparePrice}.00</span>
                        </div>
                    </div>
                  </div>
                  <div className="actCouponBtn">
                    领券立减¥{newUserGift.reducePrice}.00
                  </div>
                  <div className="linkBtn">
                    查看更多特惠商品
                  </div>
                </div>
              </div>
            </div>
          </div>
            ):null
          }
        </div>
        <FooterNav/>
      </div>
    )
  }
}
export default connect(
  state=>({homeData:state.homeData}),
  {getHomeData}
)(Home)