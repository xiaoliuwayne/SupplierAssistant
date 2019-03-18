<template>
  <div>
   <x-header @on-click-back="true"
             @right-options.showMore="true"
             class="header-color">供应商助手</x-header>
    <group class="xgroup">
      <x-input title="账号" v-model="account"></x-input>
      <x-input title="密码"  type="password" v-model="pwd"></x-input>
    </group>
    <x-button class="bt-desc" @click.native="goLogin">登录</x-button>
    <div class="desc">
      <p >
        该工具为衣布到位合作供应商管理工具，需要授权后才能登录。
      </p>
      <p >
        需要与衣布到位合作请联系 公司电话
      </p>
      <p >
        忘记密码请联系 公司电话
      </p>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
      return{
        pwd:'',
        account:'',
       }
      },
      methods:{
        goLogin(){
          if(this.account && this.pwd){
            this.$router.push('/index')
          }
        }
      }
    }
</script>

<style scoped>
  .header-color{
   background: #353535;
 }
  .xgroup{
    margin: 4vw 0 0 0;
  }

  .bt-desc {
    margin: 8vw auto;
    width: 89vw;
    height: 13vw;
    background-color: #1aad19;
    border-radius: 1vw;
    border: solid 0vw rgba(5, 5, 5, 0.08);
    color: white;
  }
  .desc{
    /*margin-top: 61px;*/
    width: 92vw;
    height: 24vw;
    font-family: PingFangSC-Regular,serif;
    font-size: 4vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0;
    color: #888888;
    white-space:normal;
  }
  .desc p{
    margin: 0 10px;
  }
</style>
