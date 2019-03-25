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
  import {hex_md5} from '../../static/js/md5.js'
  import {perapara,getQueryString,getSessionStorage,setSessionStorage,setLocalStorage,getUser,getRate,getOauth
    ,getwxappid} from '../assets/js/common.js'
  const querystring = require('querystring');
    export default {
      data(){
      return{
        pwd:'123456',
        account:'13242309898',
       }
      },
      created(){
        // this.goLogin()
        this.init()
      },
      methods:{
        getWechatCode(){
          let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?';
          let redirect_url = encodeURIComponent('http://ts.ebdaowei.com/web/new/ybdw/index.html#/login');//后台界面
          let formData = {
            'appid':'wxba30c13c429b18aa',
            'redirect_uri': redirect_url,
            'response_type':'code',
            'scope':'snsapi_userinfo#wechat_redirect',//snsapi_base
            // 'state':'',
          };
          this.axios.post(url,querystring.stringify((formData)),{
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(
            response => {
              console.log('open.weixin.qq.com response: ',response);
            }
          )
        },
        init(){
          console.log(1);
          let User = getUser();
          let code = getQueryString('code');
          let url = '/ebuapi/userSession?appName=3';
          this.axios.get(url).then(
            res => {
              setSessionStorage("loadindex",parseInt(getSessionStorage("loadindex")||0)+1);
              if (getSessionStorage("loadindex")<=6){		//防止不停刷页
                console.log(2);
                console.log('Sessionres',res);//res.data.User.userId=28189//res.data.User.status=0
                if(res.data.exId!=null){//正常的情况下，是否存在exId？？
                  console.log('userSession=>res.data11: ',res.data);
                  console.log(3);
                  if(code!=null){
                    //oauth
                    console.log(4);
                    console.log('code: ',code);
                    let myUrl = window.location.href;
                    myUrl = encodeURI(myUrl);
                    let tmpUrl = '/ebuapi/oauth.do';
                    let tmpData = {
                      'appName':'3',
                      'code':code,
                      'returnUrl':myUrl
                    };
                    this.axios.post(tmpUrl,querystring.stringify(tmpData),
                      {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                      }).then(response => {
                      console.log(5);
                      console.log('has code and post to oauth:',response);
                      //跑到这一步
                      // if(response!=null && response.openId!=null){///
                      //   console.log(6);
                      //   let myUrl = window.location.href;
                      //   myUrl = myUrl.substring(0,myUrl.indexOf("?"));
                      //   console.log('response!=null && response.openId!=null==>myUrl:',myUrl);
                      //   console.log(7);
                      //   window.location.href = myUrl;
                      // }else{
                      //   alert(response.exDesc + ", 请再试一次？");
                      //   console.log(8);
                      //   console.log('response.exDesc:',response.exDesc + ", 请再试一次？");//response.exDesc: undefined, 请再试一次？
                      //   return false;
                      // }
                    })
                  }
                  if(code==null){
                    console.log(9);
                    let myUrl = window.location.href;
                    // let myUrl = 'http://ts.ebdaowei.com/weixin/ebdw/provider/index.html';
                    console.log(10);
                    // myUrl = myUrl + (myUrl.indexOf("?")> -1 ? "&" : "?");
                    console.log('code==null==>myUrl',myUrl);
                    // myUrl = encodeURI(myUrl + (myUrl.indexOf("?")> -1 ? "&" : "?"));
                    myUrl = myUrl.split('#')[0];
                    myUrl = encodeURI(myUrl);
                    console.log('encodeURI(code==null==>myUrl)',myUrl);
                    let getcodeparas = {
                      appid: getwxappid(),
                      redirect_uri: myUrl,
                      response_type: "code",
                      scope: 'snsapi_userinfo',//"",
                      connect_redirect:'1',
                      // state: "1",
                    };
                    console.log(11);
                    console.log('getcodeparas: ',getcodeparas);
                    console.log("https://open.weixin.qq.com/connect/oauth2/authorize?" + perapara(getcodeparas, true)+'#wechat_redirect');
                    alert("https://open.weixin.qq.com/connect/oauth2/authorize?" + perapara(getcodeparas, true)+'#wechat_redirect');
                    window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?" + perapara(getcodeparas, true)+'#wechat_redirect';
                    console.log('code==null window.location.href##: ',window.location.href)
                  }
                }else{
                  console.log(-2);
                  console.log('res exId is null,res.data: ',res.data);
                  setSessionStorage("User", JSON.stringify(res));
                  setSessionStorage("loadindex",0);
                  setLocalStorage("Rate_KRW",100);
                  User = getUser();
                  let userId = res.data.User.userId;
                  let status = res.data.User.status;
                  console.log('userId',userId);
                  console.log('status',status);
                  console.log(-3);
                  //需要登录
                  if(userId && userId===-1){
                    //获得了openId
                    console.log(-4);
                    let openId = res.data.openId;
                    console.log('openId',openId);
                    let loginUrl = '/ebuapi/Login';
                    //md5加密并全部转为大写字母
                    let hexPwd = hex_md5(this.pwd).toUpperCase();
                    console.log('hexPwd',hexPwd);
                    let tmpData = {
                      'type':'3',
                      'user':this.account,
                      'pwd':hexPwd,
                      'appName':'3',
                      'openId':openId,
                    };
                    let querystring = require('querystring');
                    console.log(-5);
                    this.axios.post(loginUrl,querystring.stringify(tmpData),
                      {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                      }).then(
                      res => {
                        console.log('loginres',res);
                        console.log(-6);
                        if(res.userId !== -1){
                          // this.$router.push('/index')
                          this.$router.push({name:'Index',params:{'sessionData':res.data}})
                        }
                      }
                    )
                  }else{
                   //有session直接登录
                    console.log(-7);
                    // this.$router.push('/index')
                    this.$router.push({name:'Index',params:{'sessionData':res.data}})
                  }
                }
               }else{
                console.log('userSession=>res.data22: ',res.data);
                alert("校验失败，请再试一次？");
                return false;
              }

              // if(res.data.exId!=null){
              //   let tmpUrl = '/ebuapi/oauth.do';
              //   let tmpData = {};
              //   let returnUrl = window.location.href;
              //   // let returnUrl = '';
              //   console.log('returnUrl',returnUrl);
              //   if(code!=null){
              //     console.log('code not null',code);
              //     tmpData = {
              //       'code':code,
              //       'returnUrl':returnUrl,
              //       'appName':'3'
              //     };
              //   }else{
              //     console.log('code is null');
              //     tmpData = {
              //       'returnUrl':returnUrl,
              //       'appName':'3',
              //       // 'code':'',
              //    };
              //   }
              //   this.axios.post(tmpUrl,querystring.stringify(tmpData),
              //       {
              //         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              //       }).then(res => {
              //         // this.$vux.alert.show({content:returnUrl});
              //         // window.location.href = res;
              //         console.log('oauth res',res);
              //         let url_agn = '/ebuapi/userSession?appName=3';
              //         this.axios.get(url_agn).then(
              //           res => {
              //             console.log('res user session again',res)
              //            }
              //         )
              //   })
              // }else{
              //   console.log('userSession response no exId')
              // }
              // else{
              //   //
              //   let tmpUrl = '/ebuapi/Login';
              //   //md5加密并全部转为大写字母
              //   let hexPwd = hex_md5(this.pwd).toUpperCase();
              //   console.log('hexPwd',hexPwd);
              //   let tmpData = {
              //     'type':'3',
              //     'user':this.account,
              //     'pwd':hexPwd,
              //     'appName':'3',
              //     'openId':'',
              //   };
              //   let querystring = require('querystring');
              //   this.axios.post(tmpUrl,querystring.stringify(tmpData),
              //     {
              //        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              //     }).then(
              //    res => {
              //      console.log('loginres',res)
              //    }
              //   )
              // }
            }
          )
          },
        goLogin(){
          if(this.account && this.pwd){
            this.init();
            // this.getWechatCode()
          }
        }
      },
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
