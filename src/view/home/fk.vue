<template>
<div class="account user-reg">
    <section class="reg-content container">
      <form @submit.prevent="handleSubmit" v-if="showRegStep1===true">
        <li>
            <label>
              <i class="iconfont icon-phone"/></i>
            </label>
            <input type="tel" oninput="if(value.length>11)value=value.slice(0,11)" v-model="mobile" placeholder="请输入手机号"/>
        </li>
        <li>
            <span class="get-code" v-tap="{methods:handleVerifyCode}" v-text="sendVerifyBtnText"> 获取验证码</span>
        </li>
        <button class="submit" type="submit" name="next" >下一步</button>
      </form>
    </section>
</div>
</template>
<script>
  import Vue from 'vue'

  export default{
  	beforeCreate(){
//      console.log( getCookie("ru") )
    },
    created() {
      document.getElementsByTagName('body')[0].scrollTop = 0;
    },
    methods: {
	  countdown() {
        if (this.sendVerifySecond === 0) {
          this.sendVerifySecond = 60;
        } else {
          setTimeout(() => {
            this.sendVerifyBtnText = `${this.sendVerifySecond}`
            this.sendVerifySecond--;
            this.countdown();
          }, 1000);
        }
      },
    },
    data() {
      return {
        sendVerifySecond: 60,
        processing: false,
      }
    }
  }
</script>
