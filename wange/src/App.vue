<template>
	<!-- 最外层容器 -->
	<div class="site">
		<!-- 路由展示 -->
		<router-view />
		<!-- 底部标签页导航栏 -->
		<van-tabbar
			route
			v-model="active"
			active-color="#DD1A21"
			inactive-color="#000"
		>
			<!-- 首页 -->
			<van-tabbar-item replace to="/home">
				<span>首页</span>
				<template #icon="props">
					<img
						:src="
							props.active
								? require('./static/img/tabBar-home-active.png')
								: require('./static/img/tabBar-home-inactive.png')
						"
					/>
				</template>
			</van-tabbar-item>
			<!-- 分类 -->
			<van-tabbar-item replace to="/item/catelist">
				<span>分类</span>
				<template #icon="props">
					<img
						:src="
							props.active
								? require('./static/img/tabBar-category-active.png')
								: require('./static/img/tabBar-category-inactive.png')
						"
					/>
				</template>
			</van-tabbar-item>
			<!-- 值得买 -->
			<van-tabbar-item replace to="/topic/index">
				<span>值得买</span>
				<template #icon="props">
					<img
						:src="
							props.active
								? require('./static/img/tabBar-worthbuy-active.png')
								: require('./static/img/tabBar-worthbuy-inactive.png')
						"
					/>
				</template>
			</van-tabbar-item>
			<!-- 购物车 -->
			<van-tabbar-item replace to="/cart">
				<span>购物车</span>
				<template #icon="props">
					<img
						:src="
							props.active
								? require('./static/img/tabBar-shopcart-active.png')
								: require('./static/img/tabBar-shopcart-inactive.png')
						"
					/>
				</template>
			</van-tabbar-item>
			<!-- 个人 -->
			<van-tabbar-item replace to="/ucenter">
				<span>个人</span>
				<template #icon="props">
					<img
						:src="
							props.active
								? require('./static/img/tabBar-personal-active.png')
								: require('./static/img/tabBar-personal-inactive.png')
						"
					/>
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			// 点击切换标签
			active: 0,
		}
	},
}
</script>

<style lang="stylus" scoped>
.site{
	margin:0;
	padding:0;
}
</style>
