<template>
	<div class="wrap">
		<navbar title="AAA"></navbar>
		<section class="container"></section>
	<button type="button" class="btn" @click="showModal">打开Modal</button>
	<modal v-show="isModalVisible" @close="closeModal">
      <div slot="header">
        <h3>Publish your site</h3>
        <button type="button" class="btn-close" @click="closeModal" aria-label="Close modal">x</button>
      </div>
      <div class="content" slot="body">
        <p>Ready to publish your site to the web? Awesome! Use Twitter, Facebook, or your email to save your site. You can always make edits to your site later.</p>
        <div class="action">
          <button type="button">Use Twitter</button>
          <button type="button">Use Facebook</button>
        </div>
        <div class="form">
          <div class="form-control">
            <label for="email">Your email</label>
            <input type="email" placeholder="Your email" id="email" name="email">
          </div>
          <div class="form-control">
            <label for="password">Choose a password</label>
            <input type="password" placeholder="Choose a password" id="password" name="password">
          </div>
        </div>
      </div>
      <button type="button" slot="footer" @click="closeModal" aria-label="Close modal" class="btn-green">publish site</button>
    </modal>
</div>
</template>
<script>
	import Modal from '../components/Modal.vue'
	export default {
	  name: 'App',
	  components: {
	    Modal
	  },
	  data () {
	    return {
	      isModalVisible: false
	    }
	  },
	  methods: {
	    showModal: function () {
	      this.isModalVisible = true
	    },
	    closeModal: function () {
	      this.isModalVisible = false
	    }
	  }
	}
</script>

<style lang="scss">
@import url(../components/modal.scss);
</style>
