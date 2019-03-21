<template>
  <div>
   <x-header title="登录页" class="xheader"></x-header>
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
        pwd:'123456',
        account:'13242309898',
       }
      },
      created(){
        // this.goLogin()
      },
      methods:{
        goLogin(){
          if(this.account && this.pwd){
            let url = '/ebuapi/userSession?appName=3';
            this.axios.get(url).then(
              res => {
                console.log('Sessionres',res);
                if(res.data.exId && res.data.exId!==-33){//有session，直接登录
                  this.$router.push('/index')
                }else{//需要登录
                  let tmpUrl = '/ebuapi/Login';
                  let hexPwd = hex_md5(this.pwd);
                  console.log('hexPwd',hexPwd);
                  let tmpData = {
                    'type':3,
                    'user':this.account,
                    'pwd':hexPwd,
                    'appName':'1'
                  };
                  let querystring = require('querystring');
                  this.axios.post(tmpUrl,querystring.stringify(tmpData),
                    {
                       headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).then(
                   res => {
                     console.log('loginres',res)
                   }
                  )
                }
              }
            )
          }
          // if(this.account && this.pwd){
          //   this.$router.push('/index')
          // }
        //   console.log(111);
        //   this.axios.post('/news/index',{acc:this.account,pwd:this.pwd})
        //     .then(res => {
        //       console.log('res',res)
        // });
        //   console.log(222);
      }
     }
    }
</script>

<style scoped>
  @import "../assets/css/mycss.css";
  .xgroup{
    margin: 4vw 0 0 0;
    height: 24vw;
    width: 100vw;
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
