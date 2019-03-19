<template>
  <div>
    <x-header title="商品管理"></x-header>
    <div style="width: 100%;background: white">
      <div class="nav-desc">
        <span v-for="item in navWord" :class="item.status ? 'actClass' : 'norClass'" @click="changeStatus(item.desc)">{{item.desc}}</span>
      </div>
      <div class="search-desc">
        <input placeholder="款号、品名" v-model="keyword"></input>
        <button @click="goSearch()">搜索</button>
      </div>
    </div>
    <div class="prod-data" style="height: 500px">
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
        keyword:'',
        navWord:[
          {'desc':'出售中','status':true},
          {'desc':'待审核','status':false},
          {'desc':'不通过','status':false},
          {'desc':'下架','status':false},
          {'desc':'全部','status':false}],
        prodData:[
          {'img':'url','number':'SEO-123456|1','name':'平纹布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-123456|1','name':'平纹布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-123456|1','name':'平纹布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-123456|1','name':'平纹布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-123456|1','name':'平纹布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-123456|1','name':'平纹布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-123456|1','name':'平纹布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
          {'img':'url','number':'SEO-123456|1','name':'平纹布','bulk':'123.00元/公斤','sample':'150.00元/公斤','datetime':'2018-01-22 10:23','status':'已上架','type':'现货'},
      ],
     }
    },
    methods:{
      changeStatus(desc){
        this.navWord.forEach( i => {
          if(i.desc === desc){
            i.status = true;
          }else {i.status = false}
        })
      },
      goSearch(){
        alert(this.keyword)
      },
      goDetail(pro){
        this.$router.push({name:'ProductDetail',params:{'pro':pro}})
      },
      back(){
        console.log(22222);
        alert(22);
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
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
    /* placeholder颜色  */
    color: #aab2bd;
    /* placeholder字体大小  */
    font-size: 12px;
    /* placeholder位置  */
    /*text-align: right;*/
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
