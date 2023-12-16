<template>
	<demo-block title="图标" type="ultra">
		<demo-block title="自定义字体图标" type="large">
			<view class="gird">
				<view class="gird-item" v-for="item in customList" :key="item">
					<l-icon prefix="custom" :name="item" @click="onClick(item)"></l-icon>
					<text>{{item}}</text>
				</view>
			</view>
		</demo-block>
		<demo-block title="使用图片URL" type="large">
			<view class="gird">
				<view class="gird-item" v-for="item in imageList" :key="item">
					<l-icon :key="item" :name="item" @click="onClick(item)"></l-icon>
				</view>
			</view>
		</demo-block>
		<demo-block title="iconify" type="large">
			<view class="gird" style="color: blue">
				<view class="gird-item">
					<l-icon name="uil:12-plus" :inherit="false"></l-icon>
					<!-- <text>uil:12-plus</text> -->
				</view>
				<view class="gird-item">
					<l-icon name="icon-park-outline:abdominal"></l-icon>
					<!-- <text>icon-park-outline:abdominal</text> -->
				</view>
				<view class="gird-item">
					<l-icon name="icon-park-outline:acoustic"></l-icon>
					<!-- <text>icon-park-outline:acoustic</text> -->
				</view>
				<view class="gird-item">
					<!-- <l-icon name="ri:aliens-fill"></l-icon>
					<l-icon name="uil:android"></l-icon> -->
					<l-icon name="uil:android-alt"></l-icon>
					<!-- <l-icon name="ri:alarm-fill"></l-icon> -->
					<!-- <text>ri:aliens-fill</text> -->
					
				</view>
			</view>
		</demo-block>
	</demo-block>
</template>
<script lang="ts">
	// @ts-nocheck
	export default {
		data() {
			return {
				customList: [
					'image-fill',
					'image-fail-fill',
					'close-circle-fill',
					'close',
				],
				imageList: [
					'https://tdesign.gtimg.com/miniprogram/images/icon1.png',
					'https://tdesign.gtimg.com/miniprogram/images/icon2.png',
					'https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png',
					"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.999 2.999h12v-1h-12v1zM3.377 10.23l4.11-4.035v8.649h1.01V6.19l4.18 4.077.715-.7-5.05-4.926a.5.5 0 0 0-.7.001L2.66 9.532l.716.697z' fill='%23000' fill-opacity='.9'/%3E%3C/svg%3E"
				]
			}
		},
		methods: {
			onClick(name: string) {
				// #ifndef UNI-APP-X
				uni.setClipboardData({
					data: name,
					success: function() {
						uni.showToast({
							title: name
						})
					}
				})
				// #endif
			}
		}
	}
	// import {defineComponent} from '@/uni_modules/lime-shared/vue';
	// export default defineComponent({
	// 	setup() {
	// 		const customList = [
	// 			'image-fill',
	// 			'image-fail-fill',
	// 			'close-circle-fill',
	// 			'close',
	// 		]
	// 		const imageList = [
	// 			'https://tdesign.gtimg.com/miniprogram/images/icon1.png',
	// 			'https://tdesign.gtimg.com/miniprogram/images/icon2.png',
	// 			'https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png',
	// 			"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.999 2.999h12v-1h-12v1zM3.377 10.23l4.11-4.035v8.649h1.01V6.19l4.18 4.077.715-.7-5.05-4.926a.5.5 0 0 0-.7.001L2.66 9.532l.716.697z' fill='%23000' fill-opacity='.9'/%3E%3C/svg%3E"
	// 		]
	// 		const onClick = (name) => {
	// 			uni.setClipboardData({
	// 				data: name,
	// 				success: function() {
	// 					uni.showToast({
	// 						title: name
	// 					})
	// 				}
	// 			})
	// 		}
			
	// 		return {
	// 			onClick,
	// 			imageList,
	// 			customList
	// 		}
	// 	}
	// })
	
</script>
<style lang="scss" >
	.icon-demo {
		font-size: 52rpx;
	}
	
	.gird {
		font-size: 52rpx;
		/* #ifndef APP-NVUE || UNI-APP-X */
		display: grid;
		// gap: 20rpx;
		grid-row-gap: 40rpx;
		grid-template-columns: repeat(4,1fr);
		/* #endif */
		/* #ifdef APP-NVUE || UNI-APP-X */
		display: flex;
		flex-direction: row;
		/* #endif */
		&-item {
			display: flex;
			flex-direction: column;
			text-align: center;
			align-items: center;
			text {
				padding-top: 10rpx;
				font-size: 22rpx;
				opacity: 0.6;
			}
		}
	}
	
	// 以下为自定义图标
	// 小程序只在全局设置才生效
	/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
	@font-face {
	  font-family: 'iconfont';  /* Project id 2624395 */
	  src:  url('data:font/ttf;charset=utf-8;base64,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Y2E4OwHneTx5eTx5eTx5eTwAAAAAAwAA/9UDqwMrABQAKQA1AAAFIicmJyY0NzY3NjIXFhcWFAcGBwYnMjc2NzY0JyYnJiIHBgcGFBcWFxYTNxcHFwcnByc3JzcCAHRjYTg7OzhhY+hjYTg7OzhhY3RdT00uLi4uTU+6T00uLi4uTU9deTx5eTx5eTx5eTwrOzhhY+hjYTg7OzhhY+hjYTg7Vi4uTU+6T00uLi4uTU+6T00uLgGReTx5eTx5eTx5eTwAAAAAABIA3gABAAAAAAAAABUAAAABAAAAAAABAAgAFQABAAAAAAACAAcAHQABAAAAAAADAAgAJAABAAAAAAAEAAgALAABAAAAAAAFAAsANAABAAAAAAAGAAgAPwABAAAAAAAKACsARwABAAAAAAALABMAcgADAAEECQAAACoAhQADAAEECQABABAArwADAAEECQACAA4AvwADAAEECQADABAAzQADAAEECQAEABAA3QADAAEECQAFABYA7QADAAEECQAGABABAwADAAEECQAKAFYBEwADAAEECQALACYBaQpDcmVhdGVkIGJ5IGljb25mb250Cmljb25mb250UmVndWxhcmljb25mb250aWNvbmZvbnRWZXJzaW9uIDEuMGljb25mb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AAoAaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4BAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPAAppbWFnZS1maWxsD2ltYWdlLWZhaWwtZmlsbBFhcnJvdy1sZWZ0LXMtZmlsbBFhcnJvdy1sZWZ0LXMtbGluZQ9hcnJvdy11cC1zLWZpbGwPYXJyb3ctdXAtcy1saW5lEmFycm93LXJpZ2h0LXMtbGluZRJhcnJvdy1yaWdodC1zLWZpbGwRYXJyb3ctZG93bi1zLWxpbmURYXJyb3ctZG93bi1zLWZpbGwKY2xvc2UtZmlsbBFjbG9zZS1jaXJjbGUtZmlsbBFjbG9zZS1jaXJjbGUtbGluZQAAAAAA') format('truetype');
	}
	
	.custom {
		font-family: 'iconfont' !important; 
	}
	.custom-image-fill::before{
		content: '\e771';
	}
	.custom-image-fail-fill::before{
		content: '\e772';
	}
	.custom-close-circle-fill::before{
		content: '\e766';
	}
	.custom-close::before{
		content: '\e768';
	}
	
</style>
