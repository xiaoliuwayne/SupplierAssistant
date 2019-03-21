<template>
  <div>
    <x-header title="商品管理"></x-header>
    <div style="width: 100%;background: white">
      <div class="nav-desc">
        <span v-for="item in navWord" :class="item.status ? 'actClass' : 'norClass'" @click="changeStatus(item.desc)">{{item.desc}}</span>
      </div>
      <group class="search-desc">
        <x-input placeholder="款号、品名" v-model="keyword" class="xinput-search"></x-input>
        <button @click="goSearch(keyword)">搜索</button>
      </group>
    </div>
    <div class="prod-data" style="height: 442px">
      <div v-for="pro in prodData"  class="detail-pro-data" @click="goDetail(pro)">
        <img src="../../assets/logo.png" style="width: 80px;height: 80px;margin: 5px 10px">
        <span>
          <p>款号：{{pro.number}}</p>
          <p>品名：{{pro.name}}</p>
          <p>大货：{{pro.bulk}}</p>
          <p>剪版：{{pro.sample}}</p>
        </span>
        <span>
          <p>{{pro.datetime}}</p>
          <p>状态：{{pro.status}}</p>
          <p>类型：{{pro.type}}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Products",
    data(){
      return{
        title:"商品管理",
        keyword:'',
        navWord:[
          {'desc':'出售中','status':true},
          {'desc':'待审核','status':false},
          {'desc':'不通过','status':false},
          {'desc':'下架','status':false},
          {'desc':'全部','status':false}],
        bckData:'',
        prodData:[
          {'img':'url','number':'SEO-123456|1','name':'平纹布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-123456|1','name':'雕纹布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-222222|1','name':'帆布布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-133333|1','name':'平纹布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-123444|1','name':'绒布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-123555|1','name':'水洗布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-666666|1','name':'平纹布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-777777|1','name':'磨砂布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
      ],
     }
    },
    created(){
      let _ = require('lodash');
      this.bckData = _.cloneDeep(this.prodData);
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
        this.prodData = _.cloneDeep(this.bckData);
        let tmp = [];
        this.prodData.forEach(item => {
          if((item.number && item.number.indexOf(keyword)!==-1) || (item.name && item.name.indexOf(keyword)!==-1)){
            tmp.push(item)
          }
        });
        this.prodData = tmp;
      },
      goDetail(pro){
        this.$router.push({name:'ProductDetail',params:{'pro':pro}})
      },
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
  .prod-data{
    background: white;
    width: 100%;
    overflow-y:auto;
    /*height: calc(100vh - 13vw - 103 - 10);*/
  }
  .prod-data div{
    border-bottom: black 1px solid;
  }
 .prod-data p{
  font-size: 12px;
   margin: 3px;
}
 .detail-pro-data{
   display: flex;
   min-height: 90px;
 }
  .detail-pro-data span{
    margin: 5px 10px;
  }
</style>
