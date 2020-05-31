<template>
	<!--渲染模板代码-->
	<div>
		<!-- 搜索框 -->
		<van-search placeholder="搜索商品,共28156款好物" />
		<!-- 分割线 -->
		<van-divider />
		<div class="nav">
			<!-- 侧边栏 分类导航 -->
			<van-sidebar class="leftNav" v-model="activeKey">
				<van-sidebar-item title="618专区" @click="getCategory" />
				<van-sidebar-item title="爆款专区" @click="getCategory" />
				<van-sidebar-item title="新品专区" @click="getCategory" />
				<van-sidebar-item title="居家生活" @click="getCategory" />
				<van-sidebar-item title="服饰鞋包" @click="getCategory" />
				<van-sidebar-item title="美食酒水" @click="getCategory" />
				<van-sidebar-item title="个人清洁" @click="getCategory" />
				<van-sidebar-item title="母婴亲子" @click="getCategory" />
				<van-sidebar-item title="运动旅行" @click="getCategory" />
				<van-sidebar-item title="数码家电" @click="getCategory" />
				<van-sidebar-item title="严选全球" @click="getCategory" />
			</van-sidebar>
			<div class="rightNav">
				<div class="big_img">
					<img
						src="https://yanxuan.nosdn.127.net/54205f6db78e32eb9c5d1175b7164b01.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
						alt=""
					/>
				</div>
				<ul class="cate_list">
					<li>
						<a href="###">
							<img
								src="https://yanxuan.nosdn.127.net/78218169fef276eb4f03dfbd493105c4.png?quality=75&type=webp&imageView&thumbnail=144x144"
								alt=""
							/>
							<p>99专区</p>
						</a>
					</li>
					<li>
						<a href="###">
							<img
								src="https://yanxuan.nosdn.127.net/78218169fef276eb4f03dfbd493105c4.png?quality=75&type=webp&imageView&thumbnail=144x144"
								alt=""
							/>
							<p>99专区</p>
						</a>
					</li>
					<li>
						<a href="###">
							<img
								src="https://yanxuan.nosdn.127.net/78218169fef276eb4f03dfbd493105c4.png?quality=75&type=webp&imageView&thumbnail=144x144"
								alt=""
							/>
							<p>99专区</p>
						</a>
					</li>
					<li>
						<a href="###">
							<img
								src="https://yanxuan.nosdn.127.net/78218169fef276eb4f03dfbd493105c4.png?quality=75&type=webp&imageView&thumbnail=144x144"
								alt=""
							/>
							<p>99专区</p>
						</a>
					</li>
					<li>
						<a href="###">
							<img
								src="https://yanxuan.nosdn.127.net/78218169fef276eb4f03dfbd493105c4.png?quality=75&type=webp&imageView&thumbnail=144x144"
								alt=""
							/>
							<p>99专区</p>
						</a>
					</li>
					<li>
						<a href="###">
							<img
								src="https://yanxuan.nosdn.127.net/78218169fef276eb4f03dfbd493105c4.png?quality=75&type=webp&imageView&thumbnail=144x144"
								alt=""
							/>
							<p>99专区</p>
						</a>
					</li>
					<li>
						<a href="###">
							<img
								src="https://yanxuan.nosdn.127.net/78218169fef276eb4f03dfbd493105c4.png?quality=75&type=webp&imageView&thumbnail=144x144"
								alt=""
							/>
							<p>99专区</p>
						</a>
					</li>
					<li>
						<a href="###">
							<img
								src="https://yanxuan.nosdn.127.net/78218169fef276eb4f03dfbd493105c4.png?quality=75&type=webp&imageView&thumbnail=144x144"
								alt=""
							/>
							<p>99专区</p>
						</a>
					</li>
					<li>
						<a href="###">
							<img
								src="https://yanxuan.nosdn.127.net/78218169fef276eb4f03dfbd493105c4.png?quality=75&type=webp&imageView&thumbnail=144x144"
								alt=""
							/>
							<p>99专区</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Catelist',
	data() {
		return {
			// 当前选中标签
			activeKey: 0,
		}
	},
	methods: {
		// 获取 categoryId
		getCategory() {
			// 跳转路由
			this.$router.push({path: '/item/catelist', query: {categoryId: '11'}})
		},
	},
}
</script>
<style lang="stylus" scoped>
.nav{
	display flex
	justify-content center
	.leftNav{
		width 230px
		margin-right 10px
		border-right 1px solid #eee
		.van-sidebar-item /deep/ {
			padding 12px
		}
		.van-sidebar-item--select /deep/{
			color #ee0a24
		}
	}
	.rightNav{
		.big_img{
			img{
				width 95%
				height 100px
			}
		}
		.cate_list{
			width 95%
			margin-top 10px
			display flex
			justify-content space-between
			flex-wrap wrap
			li{
				a{
					img{
						height 80px
						width 80px
					}
					p{
						margin 10px 0
						text-align center
					}
				}
			}
		}
	}
}
</style>
