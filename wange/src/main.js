import Vue from 'vue'
import App from './App.vue'
import {
	Button,
	Col,
	Row,
	Image as VanImage,
	Search,
	Tabbar,
	TabbarItem,
	Icon,
	Tab,
	Tabs,
	Popup,
	Swipe,
	SwipeItem,
	Lazyload,
	Collapse,
	CollapseItem,
	Grid,
	GridItem,
	CountDown,
	Card,
	Tag,
} from 'vant'

Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(VanImage)
Vue.use(Search)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Popup)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Grid)
Vue.use(GridItem)
// 倒计时
Vue.use(CountDown)
// 商品信息卡片
Vue.use(Card)
// 标签标记
Vue.use(Tag)

Vue.config.productionTip = false

new Vue({
	render: (h) => h(App),
}).$mount('#app')
