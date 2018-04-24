<template>
  <div class="index">
    <ul>
		<li>
			<a href="#/a">AAA</a>
		</li>
		<li>
			<a href="#/b">BBB</a>
		</li>
		<li>
			<a href="#/c">CCC</a>
		</li>
	</ul>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    created(){
      // store.commit('updateLoading', false)
    	document.body.scrollTop = 0;
    },
    beforeDestroy () {

    },

    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
    },
    mounted () {

    },
    components: {
    }
  };
</script>
