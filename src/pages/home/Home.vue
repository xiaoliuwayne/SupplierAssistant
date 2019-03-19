<template>
  <div>
    <x-header title="首页"></x-header>
    <div class="user-info">
      <img src="../../assets/logo.png" class="headImg">
      <span>
        <p class="comp">{{'XXXXXXX公司'}}</p>
        <p class="nick">{{'微信昵称'}}</p>
      </span>
    </div>
    <div class="notice" v-show="true">
      <router-link :to="{ name: 'Notice' }">
        {{"公告公告公告公告公告公告公告公告公告公告公告"}}
      </router-link>
    </div>
    <div class="show-data">
      <div class="detail-data">
        <p class="p1">{{'23,234.00'}}元</p>
        <p class="p2">{{'今日订单金额'}}</p>
      </div>
      <div class="detail-data">
        <span>
          <p class="p3">{{'3'}}</p>
          <p class="p2">{{'待发货订单数'}}</p>
        </span>
        <span style="border-right: black 1px solid;border-left: black 1px solid;">
          <p class="p3">{{'2'}}</p>
          <p class="p2">{{'今日订单数'}}</p>
        </span>
        <span>
          <p class="p3">{{'15'}}</p>
          <p class="p2">{{'本月订单数'}}</p>
        </span>
      </div>
      <div class="detail-data">
             <span>
          <p class="p3">{{'5,234.00'}}</p>
          <p class="p2">{{'本周订单金额'}}</p>
        </span>
        <span style="border-right: black 1px solid;border-left: black 1px solid;">
          <p class="p3">{{'45,234.00'}}</p>
          <p class="p2">{{'本月订单金额'}}</p>
        </span>
        <span>
          <p class="p3">{{'345,234.00'}}</p>
          <p class="p2">{{'本年订单金额'}}</p>
        </span>
      </div>
      <div class="detail-data">
             <span>
          <p class="p3">{{'10'}}</p>
          <p class="p2">{{'待审核商品(SPU)'}}</p>
        </span>
        <span style="border-right: black 1px solid;border-left: black 1px solid;">
          <p class="p3">{{'123'}}</p>
          <p class="p2">{{'已上架商品(SPU)'}}</p>
        </span>
        <span>
          <p class="p3">{{'135'}}</p>
          <p class="p2">{{'所有商品'}}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
          return{
            title:'供应商助手',
          }
        },
      methods:{
          back(){
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped>

  .user-info{
    background: #fafaff;
    display: flex;
    margin: 4vw 0 0 0;
    width: 100%;
    height: 18vw;
    /*border: 1px black solid;*/
    border-left-width:0;
  }
  .headImg{
    margin: 3vw 0 2vw 3vw;
    width: 13vw;
    height: 13vw;
    background-color: #ffffff;
    /*border: solid 1px #979797;*/
    display: inline;
  }
  .user-info span{
    height: 100%;
    width: 200px;
    margin-left:20px;
  }
  .user-info span .comp{
    width: 196px;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #000000;
    margin: 8px 0 0 0;
  }
  .user-info span .nick{
    width: 112px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #888888;
    margin: 8px 0 0 0;
  }

  .notice{
    width: 90vw;
    height: 5vw;
    font-family: PingFangSC-Regular;
    font-size: 4vw;
    color: #1aad19;
    margin: 4vw auto;
  }
  .show-data{
    margin: 5vw 0;
    width: 100%;
    min-height: 350px;
  }
  .detail-data{
    height: 80px;
    width: 100%;
    background: white;
    margin-bottom: 8px;
    display: table;
  }
  .p1{
    width: 122px;
    /*height: 41px;*/
    font-family: Arial;
    font-size: 22px;
    line-height: 42px;
    font-weight: bold;
    color: #353535;
    margin: 5px auto;
    text-align: center;
  }
  .p2{
    width: 122px;
    /*height: 16px;*/
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #353535;
    margin: 5px auto;
    text-align: center;
  }
  .p3{
    width: 122px;
    /*height: 48px;*/
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #353535;
    margin: 5px auto;
    text-align: center;
  }
  .detail-data span{
    /*height: 100%;*/
    /*width: 33.3vw;*/
    /*float: left;*/
    display: table-cell;
  }
</style>
