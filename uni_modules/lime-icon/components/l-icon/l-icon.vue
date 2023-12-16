<template>
	<!-- #ifndef UNI-APP-X -->
	<view 
		class="l-icon l-class" 
		:class="classes" 
		:style="[styles, lStyle]" 
		:aria-hidden="ariaHidden"
		:aria-label="ariaLabel" 
		:aria-role="ariaRole" 
		@click="onClick">
		<image v-if="iconUrl" hidden class="l-icon__image" :src="iconUrl" @load="imageLoad" @error="imageError"></image>
	</view>
	<!-- #endif -->
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * LimeIcon 图标
	 * @description ICON集
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=14057
	 * @property {String} name 图标名称
	 * @property {String} color 颜色
	 * @property {String} size 尺寸
	 * @property {String} prefix 字体图标前缀  
	 * @property {Boolean} inherit 是否继承颜色 
	 * @event {Function} click 加载完成触发
	 */
	// #ifndef UNI-APP-X
	export {default} from './lIcon'
	// #endif
</script>
<style lang="scss">
	@import './index.scss';
</style>