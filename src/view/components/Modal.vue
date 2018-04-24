<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close" v-show="show">
      <div class="modal" @click.stop role="dialog" aria-labelledby="modalTile" arial-describedby="modalDescription">
        <div class="modal-header" id="modalTitle">
          <slot name="header">
            <h2>这是Modal弹框的标题</h2>
            <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
          </slot>
        </div>

        <div class="modal-body" id="modalDescription">
          <slot name="body">
            这是Modal弹框的主体
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            这是Modal弹框的脚部
            <button type="button" class="btn-green" @click="close" aria-label="Close modal">关闭</button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: ['show'],
  data () {
    return {

    }
  },
  methods: {
    close: function () {
      this.$emit('close');
    }
  }
}
</script>
<style scoped lang="scss">
@import url(../components/modal.scss);
</style>
