import Mock from 'mockjs'
import home_data from './home_data.json'
import category_data from './category_data.json'
import shiwu_data from './shiwu_data.json'

Mock.mock('/home_data',{code:0,data:home_data})
Mock.mock('/category_data',{code:0,data:category_data})
Mock.mock('/shiwu_data',{code:0,data:shiwu_data})