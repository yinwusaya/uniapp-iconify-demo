<template>
	<view 
		class="l-icon l-class l-icon--image is-inherit" 
		:style="[styles, lStyle]" 
		@click="onClick">
		<image hidden class="l-icon__image" :src="iconUrl" @load="imageLoad" @error="imageError"></image>
	</view>
</template>

<script>
  export default {
    props: {
      name: String,
      color: String,
      size: String,
      prefix: String,
      lStyle: Object
    },
    data() {
      return {
        iconUrl: ""
      }
    },
    computed: {
      styles(){
        return {
          'font-size': '16px',
          'color': this.color,
          '--l-icon': `url("/static/icon/my-icons/${this.name}.svg")`
        }
      },
      classes() {
        return {}
      }
    },
    created() {
      this.iconUrl = `/static/icon/my-icons/${this.name}.svg"`
    },
    methods: {
      imageLoad() {

      },
      imageError() {

      },
      
    },
  }
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>