<template>
	<div>
		<!--渲染模板代码-->
		<!-- 首页头部 -->
		<div class="index_top">
			<div class="index_top_head">
				<!-- logo -->
				<van-image class="index_logo" :src="require('./img/indexLogo.png')" />
				<!-- 搜素栏 -->
				<van-search class="index_search" placeholder="搜索商品,共28156款好物" />
				<!-- 登录按钮 -->
				<van-button class="index_login_btn" color="#DD1A21" plain size="mini"
					>登录</van-button
				>
			</div>

			<!-- 首页头部导航栏 -->
			<div class="index_nav">
				<!-- 可拖动导航 -->
				<div class="wrapper">
					<ul class="content">
						<li class="active">推荐</li>
						<li>居家生活</li>
						<li>服饰鞋包</li>
						<li>美食酒水</li>
						<li>个人清洁</li>
						<li>母婴亲子</li>
						<li>运动旅行</li>
						<li>数码家电</li>
						<li>严选全球</li>
					</ul>
					<!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
				</div>

				<!-- 弹窗全部显示按钮 -->
				<van-image
					class="nav_btn"
					:class="{nav_btn_up: !showNav, nav_btn_down: showNav}"
					:src="require('./img/arrow-down-3-9b31adfa37.png')"
					@click="changeShowNav"
				/>
				<!-- 导航弹窗 -->
				<van-popup v-model="showNav" position="top" :style="{height: '30%'}">
					<!-- 首页头部 -->
					<div class="index_top_head">
						<!-- logo -->
						<van-image
							class="index_logo"
							:src="require('./img/indexLogo.png')"
						/>
						<!-- 搜素栏 -->
						<van-search
							class="index_search"
							placeholder="搜索商品,共28156款好物"
						/>
						<!-- 登录按钮 -->
						<van-button
							class="index_login_btn"
							color="#DD1A21"
							plain
							size="mini"
							>登录</van-button
						>
					</div>
					<p class="nav_text">全部频道</p>
					<!-- 导航列表 -->
					<ul class="nav_navShow">
						<li class="active">推荐</li>
						<li>居家生活</li>
						<li>服饰鞋包</li>
						<li>美食酒水</li>
						<li>个人清洁</li>
						<li>母婴亲子</li>
						<li>运动旅行</li>
						<li>数码家电</li>
						<li>严选全球</li>
					</ul>
				</van-popup>
			</div>
		</div>

		<!-- 首页 展示内容 -->
		<div class="index_content">
			<!-- 轮播图 -->
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item>
					<img
						src="https://yanxuan.nosdn.127.net/b9f61bb570cff5ac179891c2a280f071.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
					/>
				</van-swipe-item>
				<van-swipe-item>
					<img
						src="https://yanxuan.nosdn.127.net/6ee52a4dc77fff9aca8f6bd53dd0dec2.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
					/> </van-swipe-item
				><van-swipe-item>
					<img
						src="https://yanxuan.nosdn.127.net/676ba1c1a7830b1e2f270d154a8b56bd.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
					/> </van-swipe-item
				><van-swipe-item>
					<img
						src="https://yanxuan.nosdn.127.net/2d34b0b3d93b9b4cf20e3d80257ceea5.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
					/> </van-swipe-item
				><van-swipe-item>
					<img
						src="https://yanxuan.nosdn.127.net/1a40d0ab941e53b0ace203d02e128d2c.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
					/>
				</van-swipe-item>
			</van-swipe>

			<!-- 售后链接 -->
			<van-row
				class="index_afterSale"
				type="flex"
				justify="space-around"
				align="center"
			>
				<van-col span="7">
					<a href="###">
						<i
							style="background-image:url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png');"
						></i>
						<span>网易自营品牌</span>
					</a>
				</van-col>
				<van-col span="7">
					<a href="###">
						<i
							style="background-image: url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png');"
						></i>
						<span>30天无忧退货</span>
					</a>
				</van-col>
				<van-col span="7">
					<a href="###">
						<i
							style="background-image: url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png');"
						></i>
						<span>48小时快速退款</span>
					</a>
				</van-col>
			</van-row>

			<!-- 首页 商品图片列表 分类导航 -->
			<van-grid class="index_category" square column-num="5" :border="false">
				<van-grid-item>
					<img
						src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
					/>
					<p>新品首发</p>
				</van-grid-item>
				<van-grid-item>
					<img
						src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png"
					/>
					<p>居家生活</p>
				</van-grid-item>
				<van-grid-item>
					<img
						src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png"
					/>
					<p>服饰鞋包</p>
				</van-grid-item>
				<van-grid-item>
					<img
						src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
					/>
					<p>美食酒水</p>
				</van-grid-item>
				<van-grid-item>
					<img
						src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"
					/>
					<p>个人清洁</p>
				</van-grid-item>
				<van-grid-item>
					<img
						src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"
					/>
					<p>母婴亲子</p>
				</van-grid-item>
				<van-grid-item>
					<img
						src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png"
					/>
					<p>运动旅行</p>
				</van-grid-item>
				<van-grid-item>
					<img
						src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png"
					/>
					<p>数码家电</p>
				</van-grid-item>
				<van-grid-item>
					<img
						src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png"
					/>
					<p>全球特色</p>
				</van-grid-item>
				<van-grid-item>
					<img
						src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif"
					/>
					<p>好货抄底</p>
				</van-grid-item>
			</van-grid>

			<!-- 消息楼 -->
			<div class="index_news">
				<!-- 新人专享 -->
				<div class="new_user">
					<img
						src="https://yanxuan.nosdn.127.net/7fd95465634b18169466121fae470269.png?quality=75&type=webp&imageView&thumbnail=750x0"
					/>
				</div>
				<!-- 防疫特供 -->
				<div class="prevention">
					<img
						src="https://yanxuan.nosdn.127.net/a559dc54fdca5f2c685e8365d4d7f3bd.png?quality=75&type=webp&imageView&thumbnail=750x0"
					/>
				</div>

				<!-- 商品推荐列表 -->
				<ul class="recommend_list">
					<li>
						<img
							src="https://yanxuan.nosdn.127.net/6dcc77404c668228e6a625c9c575820d.png?quality=75&type=webp&imageView&thumbnail=250x0"
						/>
					</li>
					<li>
						<img
							src="https://yanxuan.nosdn.127.net/4041dab6e7020f03a67ee3ba0f5f6040.png?quality=75&type=webp&imageView&thumbnail=250x0"
						/>
					</li>
					<li>
						<img
							src="https://yanxuan.nosdn.127.net/ebe8203633d74fa47e297358b17b1289.png?quality=75&type=webp&imageView&thumbnail=250x0"
						/>
					</li>
				</ul>
			</div>

			<ul class="index_card">
				<!-- 新人专享礼 -->
				<li class="index_newUser_card">
					<p class="card_title">新人专享礼</p>
					<ul class="card_list">
						<li>
							<a href="">
								<p>新人专享礼包</p>
								<img
									src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
									alt=""
								/>
							</a>
						</li>
						<li>
							<a href="">
								<div>
									<p>福利社</p>
									<p>今日特价</p>
								</div>
								<img
									src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?quality=75&type=webp&imageView&thumbnail=200x200"
									alt=""
								/>
							</a>
							<a href="">
								<div>
									<p>新人拼团</p>
									<p>一元起包邮</p>
								</div>
								<img
									src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?quality=75&type=webp&imageView&thumbnail=200x200"
									alt=""
								/>
							</a>
						</li>
					</ul>
				</li>

				<!-- 热销榜 -->
				<li class="index_hotSell_card">
					<p class="card_title">类目热销榜</p>
					<ul>
						<li>
							<a href="###">
								<p>热销榜</p>
								<img
									src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
								/>
							</a>
							<a href="###">
								<p>好评榜</p>
								<img
									src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif"
								/>
							</a>
						</li>
						<li>
							<a href="###">
								<p>居家生活榜</p>
								<img
									src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png"
								/>
							</a>
							<a href="###">
								<p>服饰鞋包榜</p>
								<img
									src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png"
								/>
							</a>
							<a href="###">
								<p>美食酒水榜</p>
								<img
									src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
								/>
							</a>
							<a href="###">
								<p>个人清洁榜</p>
								<img
									src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"
								/>
							</a>
						</li>
						<li>
							<a href="###">
								<p>母婴亲子榜</p>
								<img
									src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"
								/>
							</a>
							<a href="###">
								<p>运动旅行榜</p>
								<img
									src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png"
								/>
							</a>
							<a href="###">
								<p>数码家电榜</p>
								<img
									src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png"
								/>
							</a>
							<a href="###">
								<p>严选全球榜</p>
								<img
									src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png"
								/>
							</a>
						</li>
					</ul>
				</li>

				<!-- 人气推荐 -->
				<li class="index_bestPopular_card">
					<p class="card_title">
						人气推荐<a href="###"><span>更多&gt;</span></a>
					</p>
					<div class="prod">
						<a class="fir_prod" href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
						<div class="prod_list">
							<a href="###">
								<img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="" />
								<div>
									<p class="title">晶彩合金双筷 6双装</p>
									<p class="desc"></p>
									<p class="price">￥<span>49</span></p>
									<van-tag class="tag" round color="#DD1A21" plain
										>特价</van-tag
									>
								</div>
							</a>
							<a href="###">
								<img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="" />
								<div>
									<p class="title">晶彩合金双筷 6双装</p>
									<p class="desc"></p>
									<p class="price">￥<span>49</span></p>
									<van-tag round color="#DD1A21" plain>标签</van-tag>
								</div>
							</a>
							<a href="###">
								<img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="" />
								<div>
									<p class="title">晶彩合金双筷 6双装</p>
									<p class="desc"></p>
									<p class="price">￥<span>49</span></p>
									<van-tag round color="#DD1A21" plain>标签</van-tag>
								</div>
							</a>
						</div>
					</div>
				</li>

				<!-- 限时购 -->
				<li class="index_limitBuy_card">
					<div class="card_title">
						<div class="left">
							<p>限时购</p>
							<van-count-down class="time" :time="time">
								<template v-slot="timeData">
									<span class="block">{{ timeData.hours }}</span>
									<span class="colon">:</span>
									<span class="block">{{ timeData.minutes }}</span>
									<span class="colon">:</span>
									<span class="block">{{ timeData.seconds }}</span>
								</template>
							</van-count-down>
						</div>
						<div class="right">
							<a href="###">
								<span>更多&gt;</span>
							</a>
						</div>
					</div>
					<div class="prod_list">
						<a href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
						<a href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
						<a href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
						<a href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
						<a href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
						<a href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
					</div>
				</li>

				<!-- 新品首发 -->
				<li class="index_newProd_card">
					<p class="card_title">
						新品首发
						<a href="###">
							<span>更多&gt;</span>
						</a>
					</p>
					<div class="prod_list">
						<a href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
						<a href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
						<a href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
						<a href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
						<a href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
						<a href="###">
							<img
								src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
								alt=""
							/>
							<div>
								<p class="title">晶彩合金双筷 6双装</p>
								<p class="desc"></p>
								<p class="price">￥<span>49</span></p>
								<van-tag class="tag" round color="#DD1A21" plain>特价</van-tag>
							</div>
						</a>
					</div>
				</li>

				<!-- 底部 -->
				<div class="index_footer">
					<div class="floor_btn">
						<a href="###">下载APP</a>
						<a href="###">电脑版</a>
					</div>
					<div class="floor_desc">
						<p>网易公司版权所有 1997-2020</p>
						<p>食品经营许可证：JY13301080111719</p>
					</div>
				</div>
			</ul>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
	name: 'Home',
	data() {
		return {
			// 导航标签数据
			index: 0,
			// 是否全部展示
			showNav: false,
			// 倒计时
			time: 30 * 60 * 60 * 1000,
		}
	},
	methods: {
		changeShowNav() {
			this.showNav = !this.showNav
		},
	},
	mounted() {
		new BScroll('.wrapper', {
			scrollX: true,
			scrollY: false,
		})
	},
}
</script>
<style lang="stylus" scoped>
.index_top{
	width:100%;
	height:70px;
	background-color:#fff;
	position:fixed;
	top:0;
	/* 首页头部 */
	.index_top_head {
		width: 100%;
		height: 24px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 10px auto;
		/* logo */
		.index_logo {
			width: 64px;
			height: 20px;
		}

		/* 搜索框 */
		.index_search {
			width: 200px;
			padding:0
		}
	}

	/* 首页头部导航栏 */
	.index_nav {
		padding: 0 10px;
    box-sizing: border-box;
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		/* 可滑动导航栏 */
		.wrapper{
			height:30px;
			line-height:30px;
			text-align:left;
			overflow: hidden;
			.content{
				width: 1500px;
				overflow: hidden;
			}
			.content li{
				float: left;
				width: 100px;
				list-style: none;
				font-size:16px;
				&:nth-child(1){
					width: 60px;
				}
				&.active{
					color:#DD1A21;
				}
			}
		}

		/* 导航展示按钮 */
		.nav_btn {
			height: 20px
			width: 80px;
			position: relative;
			z-index:10000;
		}

		/* 导航展示按钮 - 向上样式 */
		.nav_btn_up {
			transform: rotate(0deg);
			transition: transform 1s;
		}

		/* 导航展示按钮 - 向下样式 */
		.nav_btn_down {
			transform: rotate(180deg);
			transition: transform 1s;
		}

		/* 导航标题 */
		.nav_text{
			position:absolute;
			top:30px;
			left:20px;
			font-size:16px;
		}

		/* 导航展示内容 */
		.nav_navShow{
			height:100px;
			padding-top:40px;
			display:flex;
			flex-wrap:wrap;
			justify-content:space-between;
			align-content:space-between;
			& li{
				width:60px;
				height:25px;
				margin: 5px 10px;
				background-color:#f9f9f9;
				border:1px solid #efefef;
				text-align:center;
				line-height:25px;
				&.active{
					color:#DD1A21;
					border:1px solid #DD1A21;
				}
			}
		}
	}
}
.index_content{
	padding:50px 0;
	z-index: -100;
	position: relative;
	background-color:#efefef;
	/* 首页 轮播图 */
	.my-swipe .van-swipe-item {
		width:100%;
		height:150px;
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
		& img{
			width:100%;
			height:150px;
		}
	}

	/* 首页 售后链接 */
	.index_afterSale{
		background-color:#fff;
		height:30px;
		a{
			color:#000;
			display:flex;
			align-items:center;
			i{
				display:inline-block;
				width:20px;
				height:20px;
				background-size:20px 20px;

			}
		}
	}

	/* 首页 分类导航 */
	.index_category{
		img{
			width:50px;
			height:50px;
		}
		p{
			margin:0;
		}
	}

	/* 首页楼层消息 */
	.index_news{
		width:100%;
		.new_user{
			img{
				width:100%;
				height:100px;
			}
		}
		.prevention{
			width:100%;
			margin: 10px auto;
			display:flex;
			justify-content:center;
			img{
				width:95%;
				height:80px;
			}
		}
		.recommend_list{
			width:95%;
			margin: 10px auto;
			display:flex;
			justify-content:space-around;
			li {
				img{
					width:110px;
					height:110px;
				}
			}
		}
	}

	/* 新人专享礼卡 */
	.index_newUser_card{
		background-color #fff
		padding-bottom 20px
		.card_title{
			text-align center
			font-size 16px
			height 25px
			line-height 25px
			margin 10px
			padding-top 10px
		}
		.card_list{
			display flex
			width: 90%;
			margin: 0 auto
			li{
				flex:1
				display flex
				justify-content space-around
				border-radius 4px
				&:nth-child(1){
					background-color #F9E9CF
					a{
						width 100%
						height 100%
						display flex
						flex-direction column
						justify-content space-around
						align-items center
						color #000
						p{
							font-size 18px
						}
						img{
							width 100px
							height 100px
							margin 10px
						}
					}
				}
				&:nth-child(2){
					display flex
					flex-direction column
					justify-content space-around
					align-items center
					a{
						width 100%
						height 100%
						color #000
						&:nth-child(1){
							background-color #FBE2D3
						}
						&:nth-child(2){
							background-color #FFECC2
						}
						div{
							float left
							p:nth-child(1){
								font-size 16px
							}
							p:nth-child(2){
								font-size 12px
								color #3c3c3c
							}
						}
						img{
							float right
							width 80px
							height 80px
						}
					}
				}
			}
		}
	}

	/* 热销榜 */
	.index_hotSell_card{
		background #fff
		padding-bottom 10px
		.card_title{
			font-size 16px
			height 25px
			line-height 25px
			margin 10px
			padding-top 10px
		}
		ul{
			li{
				width 100%
				display flex
				margin 5px auto
				justify-content space-around
				box-sizing border-box
				padding 0 10px
				&:nth-child(1){
					a{
						display flex
						justify-content space-around
						align-items center
						background #F9F3E4
						border-radius 5px
						color #000
						p{
							font-size 16px
							margin 0 5px
						}
						img{
							height 90px
							width 90px
							margin 10px
						}
					}
				}
				&:nth-child(2),&:nth-child(3){
					a{
						background #eee
						border-radius 5px
						color #000
						p{
							font-size 12px
							margin 0
							text-align center
						}
						img{
							height 60px
							width 60px
							margin 10px
						}
					}
				}
			}
		}
	}

	/* 人气推荐 */
	.index_bestPopular_card{
		display flex
		justify-content space-around
		flex-wrap wrap
		background #fff
		margin-top 10px
		.card_title{
			width 100%
			font-size 16px
			height 25px
			line-height 25px
			margin 10px
			padding-top 10px
			span{
				float right
			}
		}
		div.prod{
			width 100%
			height 100%
			.fir_prod{
					width 95%
					margin 10px
					background #FEF0DF
					display flex
					img{
						width 120px
						height 120px
					}
					div{
						width 100%
						padding 10px
						p.title{
							color #000
							overflow hidden
							text-overflow ellipsis
							white-space nowrap
						}
						p.desc{
							color #3c3c3c
						}
						p.price{
							font-size 18px
							color #DD1A21
						}
					}
			}
			.prod_list{
				display flex
				justify-content space-around
				img{
						width 100px
						height 100px
				}
				div{
					width 100px
					height 100px
					p{
						margin 10px 0
					}
					p.title{
						color #000
						overflow hidden
						text-overflow ellipsis
						white-space nowrap
					}
					p.desc{
						color #3c3c3c
					}
					p.price{
						font-size 18px
						color #DD1A21
					}
				}
			}
		}
	}

	/* 限时购 */
	.index_limitBuy_card{
		background #fff
		padding-bottom 10px
		.card_title{
			display flex
			justify-content space-between
			font-size 16px
			height 25px
			line-height 25px
			margin 10px
			padding-top 10px
			.left{
				display flex
				align-items center
				p{
					margin-right 10px
				}
				.colon {
					display: inline-block;
					margin: 0 4px;
					color: #ee0a24;
				}
				.block {
					display: inline-block;
					width: 22px;
					color: #fff;
					font-size: 12px;
					text-align: center;
					background-color: #ee0a24;
				}
			}
		}
		.prod_list{
				display flex
				flex-wrap wrap
				justify-content space-around
				img{
						width 100px
						height 100px
				}
				div{
					width 100px
					p{
						margin 0
					}
					p.title{
						color #000
						overflow hidden
						text-overflow ellipsis
						white-space nowrap
					}
					p.desc{
						color #3c3c3c
					}
					p.price{
						font-size 18px
						color #DD1A21
					}
				}
		}
	}

	/* 新品首发 */
	.index_newProd_card{
		background #fff
		padding-bottom 10px
		.card_title{
			font-size 16px
			height 25px
			line-height 25px
			margin 10px
			padding-top 10px
			span{
				float right
			}
		}
		.prod_list{
				display flex
				flex-wrap wrap
				justify-content space-around
				img{
						width 100px
						height 100px
				}
				div{
					width 100px
					p{
						margin 0
					}
					p.title{
						color #000
						overflow hidden
						text-overflow ellipsis
						white-space nowrap
					}
					p.desc{
						color #3c3c3c
					}
					p.price{
						font-size 18px
						color #DD1A21
					}
				}
		}
	}

	/* 底部版权信息 */
	.index_footer{
		background #414141
		margin-top 10px
		padding 20px 40px
		.floor_btn{
			a{
				display inline-block
				width 100px
				height 30px
				line-height 30px
				text-align center
				color #fff
				border 1px solid #999
				background-color #414141
				margin 0 20px
			}
		}
		.floor_desc{
			text-align center
			p{
				color #999
				margin 5px
			}
		}
	}
}
</style>
