import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './homeList.styl'

class HomeList extends Component{
  static propTypes = {
    cateList:PropTypes.array.isRequired
  }
  render(){
    const {cateList} = this.props
    return(
      <div>
        {
          cateList.map((cate,index)=>(
            <div className="home_nav_item" key={index}>
              <header className="nav_item_title">{cate.name}好物</header>
              <ul className="item_list">
              {
                cate.itemList.map((item,index)=>(
                <li key={index}>
                  <div className="item_img">
                    <img src={item.listPicUrl} alt=''/>
                    <div className="item_info">{item.simpleDesc}</div>
                  </div>
                  {
                    item.promTag ? (
                      <div className="item_tips">
                        <p>{item.promTag}</p>
                      </div>
                    ):null
                  }
                  <div className="item_name">{item.name}</div>
                  <div className="item_price">￥<span>{item.retailPrice}</span></div>
                </li>
                ))
              }
                <li className="more">
                  <div className="more_text">
                    <span>更多</span><span>{cate.name}好物</span>
                  </div>
                  <span className="more_icon"></span>
                </li>
              </ul>
        </div>
          ))
        }
        
    </div>
    )
  }
}
export default HomeList