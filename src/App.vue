<!-- template for the modal component -->
<template>
  <div id="app">
    <!-- <loading :show='loading' :text='loadingText' ></loading> -->
    <router-view ></router-view>
    <!-- <div class="loading-circle"><i></i></div> -->
  </div>
</template>

<script>
	import Tabs from "./components/Footer"
  export default {
    name: 'app',
	components: {Tabs},
    beforeCreate(){
    },
    watch: {
    },
    data () {
      return {
      }
    },
    computed: {
    }
  }
</script>
<script src="https://cdn.bootcss.com/zepto/1.2.0/zepto.js"></script>
<script src="./assets/js/base.js"></script>

<style>
	@import "assets/css/base.scss";
  @import "assets/css/css.css";
  @import "assets/css/modal.css";
</style>
