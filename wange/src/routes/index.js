// 引入vue
import Vue from 'vue'
// 引入 vue-router
import VueRouter from 'vue-router'
// 引入 routes
import routes from './routes'

/* 
	整体解决 
		同一路由多次跳转同一路由时，
		控制台会报错
	的问题
	解决方案 ：
	重写 push replace 方法 
*/
// 定义一个变量 储存 push 原型方法
const originPush = VueRouter.prototype.push
// 重写 push 原型方法
VueRouter.prototype.push = function(location, onComplete = () => {}, onAbort) {
	// console.log(this)
	return originPush.call(this, location, onComplete, onAbort)
}
// 定义一个变量 储存 replace 原型方法
const originReplace = VueRouter.prototype.replace
// 重写 replace 原型方法
VueRouter.prototype.replace = function(
	location,
	onComplete = () => {},
	onAbort
) {
	return originReplace.call(this, location, onComplete, onAbort)
}

// 声明使用路由
Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes,
})
