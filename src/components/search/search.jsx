import React,{Component} from 'react'
import './stylus/search.styl'

export default class Search extends Component{
  render(){
    return(
      <div className="search">
        <div className="search_icon"></div>
        <div className="search_text">搜索商品, 共13113款好物</div>
      </div>
    )
  }
}