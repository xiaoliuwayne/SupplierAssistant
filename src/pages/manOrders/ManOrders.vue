<template>
  <div>
    <x-header title="订单管理"></x-header>
    <div style="width: 100%;background: white">
      <div class="nav-desc">
        <span v-for="item in navWord" :class="item.status ? 'actClass' : 'norClass'" @click="changeStatus(item.desc)">{{item.desc}}</span>
      </div>
      <group class="search-desc">
        <x-input placeholder="搜索单号" v-model="keyword" class="xinput-search"></x-input>
        <button @click="goSearch(keyword)">搜索</button>
      </group>
    </div>
    <div class="order-data">
      <div class="header">
        <span v-for="h in header">{{h}}</span>
      </div>
      <div v-for="record in orderData"  class="detail-order-data" @click="goDetail(record)">
        <span>{{record.orderNo}}</span>
        <span>{{record.money}}</span>
        <span>{{record.orderStatus}}</span>
        <span>{{record.orderTime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Orders",
    data(){
      return{
        title:"订单管理",
        keyword:'',
        header:['订单号','金额','状态','下单时间'],
        navWord:[{'desc':'待发货','status':true},{'desc':'已发货','status':false}],
        orderData:[
          {'orderNo':'123456','money':'5200.60','orderStatus':'待发货','orderTime':'03-28 15:00'},
          {'orderNo':'111111','money':'5200.60','orderStatus':'待发货','orderTime':'03-28 15:00'},
          {'orderNo':'112222','money':'5200.60','orderStatus':'待发货','orderTime':'03-28 15:00'},
          {'orderNo':'222222','money':'5200.60','orderStatus':'待发货','orderTime':'03-28 15:00'},
          {'orderNo':'33333','money':'5200.60','orderStatus':'待发货','orderTime':'03-28 15:00'},
          {'orderNo':'44211','money':'5200.60','orderStatus':'待发货','orderTime':'03-28 15:00'},
        ],
        bckData:[],
      }
    },
    created(){
      //深拷贝一个完整数据
      let _ = require('lodash');
      this.bckData = _.cloneDeep(this.orderData);
    },
    methods:{
      changeStatus(desc){
        this.navWord.forEach( i => {
          if(i.desc === desc){
            i.status = true;
          }else {i.status = false}
        })
      },
      goSearch(keyword){
        let _ = require('lodash');
        this.orderData = _.cloneDeep(this.bckData);
        let tmp = [];
        this.orderData.forEach(item => {
          if(item.orderNo && item.orderNo.indexOf(keyword)!==-1){
            tmp.push(item)
          }
        });
        this.orderData = tmp;
      },
      goDetail(record){
        this.$router.push({name:'OrderDetail',params:{'record':record}})
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
  .search-desc{
    width: 100%;
    height: 40px;
    margin: 10px 0;
    line-height: 40px;
  }
  .search-desc input{
    margin: 0 1vw 0 2vw;
    width: 74vw;
    height: 7vw;
    background-color: #ffffff;
    border-radius: 2px;
    border: solid 1px #e6e6ea;
    vertical-align: center;
  }
  .search-desc button{
    width: 16vw;
    height: 9vw;
    background-color: #1aad19;
    border-radius: 6px;
    border: solid 1px rgba(5, 5, 5, 0.08);
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
    left: 20px;
  }
  input::-ms-input-placeholder {
    color: #aab2bd;
    font-size: 12px;
    margin-left: 20px;
  }

  .order-data{
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
    width: calc(100vw / 4);
    text-align: center;
    vertical-align: center;
    border-bottom: black 1px solid;
  }
  .detail-order-data{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: table;
  }
  .detail-order-data span{
    display: table-cell;
    text-align: center;
    vertical-align: center;
    font-size: 14px;
    width: calc(100vw / 4);
    border-bottom: black 1px solid;
  }

</style>
