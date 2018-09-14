import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
// import {reqCategorysData} from '../../api'
import {getCatagorysData} from '../../redux/actions'
import FooterNav from '../../components/footerNav/footerNav'
import Search from '../../components/search/search'
import MenuDetailItem from './menuDetailItem/menuDetailItem'
import './categorys.styl'
class Categroys extends Component{
  state={
    initIndex:0,
    menuDetails:{},
    // menuImg:''
  }
  async componentWillMount(){
    await this.props.getCatagorysData()
    const {categoryL1List}= this.props.catagorysData
    const {initIndex} = this.state
    this.setState({
      menuDetails:categoryL1List[initIndex]
    })
  }
  handleClass=(index)=>{
    const lis = document.querySelectorAll('.menu_wrapper li')
      const {categoryL1List}= this.props.catagorysData
      for(let i =0;i<lis.length;i++){
        lis[i].className = ''
      }
      lis[index].className='active'
      this.setState({
        menuDetails:categoryL1List[index]
      })
      console.log(this.state.menuDetails)
      // this.props.history.replace(`/categorys/${categoryL1.id}`)
      
  }
  render(){
    const {categoryL1List} = this.props.catagorysData
    // console.log(this.state.currentIndex)
    // console.log(categoryL1List[this.state.currentIndex])
    const {menuDetails} = this.state
    return (
      <div>
        <div className="categorys">
          <div className="cate_search">
            <Search/>
          </div>
          <div className="cate_container">
            <div className="menu_container">
              <ul className="menu_wrapper">
              {
                categoryL1List ? (
                  categoryL1List.map((categoryL1,index)=>(
                    <li key={index} onClick={()=>this.handleClass(index)}
                      className={this.state.initIndex===index?'active':''}>
                    {categoryL1.name}
                    </li>
                  ))
                ):null   
              }
               
              </ul>
            </div>
            <Switch>
             <Route path='/categorys/:id' Component={MenuDetailItem}/>
            </Switch>
            {menuDetails?<MenuDetailItem menuDetails={menuDetails}/>:''}
            {/* <MenuDetailList :menuDetails="menuDetails" :menuImg='menuImg'/> */}
          </div>
        </div>
        <FooterNav/>
      </div>
    )
  }
}
// export default Categroys
export default connect(
  state=>({catagorysData:state.catagorysData}),
  {getCatagorysData}
)(Categroys)