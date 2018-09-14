import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './more.styl'
class More extends Component{
  static propTypes = {
    findMore:PropTypes.array.isRequired
  }
  render(){
    const {findMore} = this.props
    return(
      <div className="shiwu_More">
        <header>
          <div>更多精彩</div>
        </header>
        <ul className="more_content">
        {
          findMore.map((item,index)=>(
            <li className="content_item" key={index}>
            <img src={item.itemPicUrl} alt=''/>
            <div className="content_title">{item.subTitle}</div>
          </li>
          ))
        }
        </ul>
      </div>
    )
  }
}
export default More