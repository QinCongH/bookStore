<template>
	<view>
		<u-swiper :list="imgList">

		</u-swiper>
		<u-tabs :list="tabList" :is-scroll="false" :current="current"  @change="change" :bar-width="70"
			active-color="#e67061">
		</u-tabs>

		<index-content/>
	</view>
</template>

<script>
	import IndexContent from '../../components/index/IndexContent.vue'
	export default {
		data() {
			return {
				imgList: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				tabList: [{
					name: '默认'
				}, {
					name: '销量'
				}, {
					name: '推荐',
				}, {
					name: '最新'
				}],
				current: 0
			}
		},
		components: {
			IndexContent
		},
		methods: {
			change(index) {
				// console.log(index)
				this.current = index;
			}
		},
		onLoad() {}
	}
</script>

<style>

</style>
