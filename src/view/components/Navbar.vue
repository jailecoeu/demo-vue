<template>
	<div class="head">
		<div class="h-left">
			<a @click="handleExchange" v-if="!hidesBackButton"><</a>
		</div>
	    <h1 class="h-title">{{ title }}</h1>
	    <slot></slot>
	</div>
</template>

<script>
export default {
	props: ['title', 'hidesBackButton'],
	methods: {
		handleExchange() {
			///this.$router.go(-1);
      		this.$router.back();
		}
	}
}
</script>
