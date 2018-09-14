import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './menuDetailItem.styl'
// import categorys from '../categorys';
export default class MenuDetailItem extends Component{
  static propTypes = {
    menuDetails:PropTypes.object.isRequired
  }
  render(){
    const {subCateList,bannerUrl} = this.props.menuDetails
    console.log(subCateList)
    return(
      <div className="menu_detail">
        <div>
          <div className="menu_img" style={{backgroundImage:`url(${bannerUrl})`}}></div>
          <ul className="menu_list">
            {
              subCateList?(
                subCateList.map((subCate,index)=>(
                  <li key={index}>
                    <img src={subCate.wapBannerUrl} alt=''/>
                    <div className="name">{subCate.name}</div>
                  </li>
                ))
              ):null
            }
          </ul>
        </div>
      </div>
    )
  }
}