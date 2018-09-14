import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import './mock/mockServer'
import './assets/css/reset.css'
// import './assets/css/iconfont.css'
import './assets/css/swiper.css'

import Home from './containers/home/home'
import Shiwu from './containers/shiwu/shiwu'
import Categorys from './containers/categorys/categorys'
import ShopCart from './containers/shopcart/shopcart'
import Profile from './containers/profile/profile'


ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        {/* <Route path='/home' component={Home}/> */}
        <Route path='/categorys' component={Categorys}/>
        <Route path='/shiwu' component={Shiwu}/>
        <Route path='/shopcart' component={ShopCart}/>
        <Route path='/profile' component={Profile}/>
        <Route component={Home}/>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));

