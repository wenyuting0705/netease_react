import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './brandProvide.styl'

class BrandProvide extends Component{
  static propTypes = {
    tagList:PropTypes.array.isRequired
  }
  state = {
    tagArr:[]
  }
  componentDidMount(){
    const arr = this.props.tagList.slice(0,4)
    this.setState({
      tagArr : arr
    })
  }
  render(){
    // const {tagList} = this.props
    return(
      <div className="brand_provide">
          <header className="title">
            <span>品牌制造商直供</span>
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png" alt=''/>
          </header> 
          <div className="brand_content">
            <ul>
              {
                this.state.tagArr.map((tag,index)=>(
                  <li key={index}>
                    <div className="brand_text">
                      <div className="provider_name">{tag.name}</div>
                      <div className="price">{tag.floorPrice}元起</div>
                      <div className="new" v-show="tag.newOnShelf"></div>
                    </div>
                    <img src={tag.picUrl} alt=''/>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
    )
  }
}
export default BrandProvide