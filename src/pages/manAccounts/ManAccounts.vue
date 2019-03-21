<template>
  <div>
    <x-header title="对账结算"></x-header>
    <div style="width: 100%;background: white">
      <div class="nav-desc">
        <span v-for="item in navWord" :class="item.status ? 'actClass' : 'norClass'" @click="changeStatus(item.desc)">{{item.desc}}</span>
      </div>
      <group class="search-desc">
        <x-input placeholder="搜索单号" v-model="keyword" class="xinput-search"></x-input>
        <button @click="goSearch(keyword)">搜索</button>
      </group>
    </div>
    <div class="acc-data">
      <div class="header">
        <span v-for="h in header">{{h}}</span>
      </div>
      <div v-for="record in accData"  class="detail-data">
        <span>{{record.orderNo}}</span>
        <span>{{record.payType}}</span>
        <span>{{record.pay}}</span>
        <span>{{record.date}}</span>
        <span>{{record.payStatus}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Accounts",
    data(){
      return{
        title:"对账结算",
        keyword:'',
        header:['订单号','结算类型','支付金额','计算日期','结算状态'],
        navWord:[{'desc':'未支付','status':true},{'desc':'已支付','status':false},{'desc':'全部','status':false}],
        accData:[
          {'orderNo':'123456','payType':'月结','pay':'5,200.00','date':'2019.03.01','payStatus':'未支付'},
          {'orderNo':'111111','payType':'月结','pay':'5,200.00','date':'2019.03.01','payStatus':'未支付'},
          {'orderNo':'222222','payType':'月结','pay':'5,200.00','date':'2019.03.01','payStatus':'未支付'},
          {'orderNo':'333333','payType':'月结','pay':'5,200.00','date':'2019.03.01','payStatus':'未支付'},
          {'orderNo':'444444','payType':'周结','pay':'5,200.00','date':'2019.03.01','payStatus':'已支付'},
          {'orderNo':'555555','payType':'月结','pay':'5,200.00','date':'2019.03.01','payStatus':'已支付'},
          {'orderNo':'666666','payType':'月结','pay':'5,200.00','date':'2019.03.01','payStatus':'已支付'},
        ],
        bckData:[]
      }
    },
    created(){
      //深拷贝一个完整数据
      let _ = require('lodash');
      this.bckData = _.cloneDeep(this.accData);
      // console.log('this.bckData',this.bckData);
    },
    methods:{
      changeStatus(desc){
        this.navWord.forEach( i => {
          console.log('i.desc',i.desc);
          console.log('i.status',i.status);
          if(i.desc === desc){
            i.status = true;
          }else {i.status = false}
        })
      },
      goSearch(keyword){
         let _ = require('lodash');
         this.accData = _.cloneDeep(this.bckData);
         let tmp = [];
         this.accData.forEach(item => {
           if(item.orderNo && item.orderNo.indexOf(keyword)!==-1){
             tmp.push(item)
           }
         });
         this.accData = tmp;
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/mycss.css";
  .nav-desc{
    display: table;
    width: 100%;
    height: 50px;
  }
  .actClass{
    border-bottom: 3px #1aad19 solid;
    color: #1aad19;
    display: table-cell;
    text-align: center;
    padding: 15px 10px;
    font-family: PingFangSC-Regular;
    font-size: 4vw;
    height: 100%;
  }
  .norClass{
    /*border-bottom: 3px #494949 solid;*/
    color: #494949;
    display: table-cell;
    text-align: center;
    padding: 15px 10px;
    font-family: PingFangSC-Regular;
    font-size: 4vw;
    height: 100%;
  }

  input::-webkit-input-placeholder {
    color: #aab2bd;
    font-size: 12px;
    /* placeholder位置  */
    /*text-align: right;*/
    margin-left: 20px;
  }
  input::-moz-placeholder {
    color: #aab2bd;
    font-size: 12px;
    text-align: left;
  }
  input::-ms-input-placeholder {
    color: #aab2bd;
    font-size: 12px;
    margin-left: 20px;
  }
  .acc-data{
    background: white;
    width: 100%;
  }
  .header{
    width: 100%;
    height: 50px;
    display: table;
    line-height: 50px;
  }

  .header span{
   display: table-cell;
    width: calc(100vw / 5);
    text-align: center;
    vertical-align: center;
    border-bottom: black 1px solid;
  }
  .detail-data{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: table;
  }
  .detail-data span{
    display: table-cell;
    text-align: center;
    vertical-align: center;
    font-size: 14px;
    width: calc(100vw / 5);
    border-bottom: black 1px solid;
  }

</style>
