<template>
	<view class="indexContent flex">
		<view class="indexChild">
			<view class="indexImg">
				<image src="https://oss.shop.eduwork.cn/product/2020-0820-5f3e084e2b714.png" mode="widthFix">
				</image>
			</view>
			<view class="indexText u-padding-left-10 u-padding-right-10">
				<view class="indexTle u-line-1">
					<text>
						js程序设计
					</text>
				</view>
				<view class="indexPrice flex u-margin-top-15">
					<text class="da">
						￥59
					</text>
					<text>
						0人购买
					</text>
				</view>
			</view>
		</view>

	</view>

</template>
<script>

</script>
<style>
    .indexContent {
		justify-content: space-between;
		padding: 0px 5px;
	}

	.flex {
		display: flex;
		flex-wrap: wrap;
	}

	.indexChild {
		width: 50%;
		padding: 10px;
		box-shadow: 0px 0px 0px 4px #f3f3f3c2;
	}

	.indexImg,
	.indexText {
		width: 100%;
	}

	.indexImg {
		overflow: hidden;
	}

	.indexImg uni-image {
		max-width: 90%;
	}

	.indexText {
		flex-direction: column;
	}

	.indexText text {
		font-size: 10rpx;
	}

	.indexPrice {
		align-items: center;
		justify-content: space-between;
	}

	.da {
		color: #da0909;
	}
</style>
