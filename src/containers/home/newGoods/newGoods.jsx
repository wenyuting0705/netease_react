import React,{Component} from 'react'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'
import './newGoods.styl'

class NewGoods extends Component{
  static propTypes={
    newItemList:PropTypes.array.isRequired
  }
  componentDidMount(){
    this._initNewGoodsScroll()
  }
  _initNewGoodsScroll(){
    const lis = document.querySelectorAll('.new_goods_container>ul>li')
    const ul = document.querySelector('.newGoodsList')
    let liWidth = 0;
    for(let i = 0;i<lis.length;i++){
      liWidth = lis[i].clientWidth
    }
    const liSize = lis.length
    ul.style.width = (liWidth + 31)*liSize  +'px'
    
    new BScroll('.new_goods_container',{
      click:true,
      scrollX:true,
      scrollY:false
    })
  }
  render(){
    const {newItemList} = this.props
    return(
      <div className="new_goods">
        <header className="new_header">
          <div>新品首发</div>
          <div className="lookAll">
            查看全部
            <span></span>
          </div>
        </header>
        <div className="new_goods_container" ref='newGoodsCon'>
          <ul className="newGoodsList">
          {
            newItemList.map((newItem,index)=>(
              <li key={index}>
                <div className="new_goods_img">
                  <img src={newItem.listPicUrl} alt=''/>
                </div>
                <div className="new_goods_tags" key={index}>
                  {
                    newItem.itemTagList.length?(
                      newItem.itemTagList.map((tag,index)=>(
                        <p key={index}>
                            {tag.name}
                        </p>
                      ))
                    ):null
                  }
                </div>
                <div className="new_goods_name"><span>{newItem.name}</span></div>
                <div className="new_goods_info"><span>{newItem.simpleDesc}</span></div>
                <div className="new_goods_price">￥{newItem.retailPrice}</div>
                {
                  newItem.productPlace ? (
                    <div className="productPlace">
                      {newItem.productPlace}
                    </div>
                  ):null
                }
                
              </li>
            ))
          }
            <li className="more_new_goods">
              <span>查看更多</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default NewGoods