<template>
	<view class="commodity">
		<!-- u-search需配合custom使用 -->
		<u-search v-model="keywords" :focus="true" shape="round" search-icon="none" height="70" :show-action="false"
			@custom="searchBank" @search="searchBank" />
		<vertical>
		</vertical>
	</view>
</template>

<script>
	import vertical from '../../components/index/vertical.vue'
	export default {
		data() {
			return {
				keywords: ''
			}
		},
		components: {
			vertical
		},
		methods: {
			searchBank(value) {
				console.log(value)
			}
		},
		onLoad() {}
	}
</script>

<style>
	.commodity {
		padding: 0px 10px;
	}
</style>
