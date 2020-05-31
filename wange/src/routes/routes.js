// 引入
import Home from '../pages/Home'
import Catelist from '../pages/Item/Catelist'
import Topic from '../pages/Topic'
import Cart from '../pages/Cart'
import UCenter from '../pages/UCenter'

export default [
	// 首页
	{
		path: '/home',
		name: 'home',
		component: Home,
	},
	// 分类
	{
		path: '/item/catelist/:category?',
		name: 'catelist',
		component: Catelist,
	},
	// 值得买
	{
		path: '/topic/index',
		name: 'topic',
		component: Topic,
	},
	// 购物车
	{
		path: '/cart',
		name: 'cart',
		component: Cart,
	},
	// 个人中心
	{
		path: '/ucenter',
		name: 'ucenter',
		component: UCenter,
	},
	// 重定向
	{
		path: '/',
		redirect: '/home',
	},
]
