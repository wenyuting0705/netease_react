import React,{Component} from 'react'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'
import './recommends.styl'

class Recommends extends Component{
  static propTypes={
    popularItemList:PropTypes.array.isRequired
  }
  componentDidMount(){
    this._initRecommendScroll()
  }
  _initRecommendScroll(){
    const lis = document.querySelectorAll('.recommend_container>ul>li')
    const ul = document.querySelector('.recommendList')
    let liWidth = 0;
    for(let i = 0;i<lis.length;i++){
      liWidth = lis[i].clientWidth
    }
    const liSize = lis.length
    ul.style.width = (liWidth + 32)*liSize +'px'
    new BScroll('.recommend_container',{
      click:true,
      scrollX:true,
      scrollY:false
    })
  }
  render(){
    const {popularItemList} = this.props
    return(
      <div className="recommend">
          <header className="recommend_header">
            <div>人气推荐 · 好物精选</div>
            <div className="lookAll">
              查看全部
              <span></span>
            </div>
          </header>
          <div className="recommend_container">
            <ul className="recommendList">
            {
              popularItemList.map((popularItem,index)=>(
                <li key={index}>
                <div className="recommend_img">
                  <img src={popularItem.listPicUrl} alt=''/>
                </div>
                <div className="recommend_tags" key={index}>
                {
                    popularItem.itemTagList.length?(
                      popularItem.itemTagList.map((tag,index)=>(
                        <p key={index}>
                            {tag.name}
                        </p>
                      ))
                    ):null
                  }
                </div>
                <div className="recommend_name"><span>{popularItem.name}</span></div>
                <div className="recommend_info"><span>{popularItem.simpleDesc}</span></div>
                <div className="recommend_price">￥{popularItem.retailPrice}</div>
                {
                  popularItem.productPlace ? (
                    <div className="productPlace">
                      {popularItem.productPlace}
                    </div>
                  ):null
                }
              </li>
              ))
            }
              <li className="more_recommends">
                <span>查看更多</span>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}
export default Recommends