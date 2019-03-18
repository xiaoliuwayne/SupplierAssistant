<template>
 <div>
   <h5>基础信息</h5>
   <div class="base-info">
     <span>
       <p>
         <span class="base-info-wid">款号</span>
         <span>{{baseInfo.number}}</span>
       </p>
       <p>
         <span class="base-info-wid">品名</span>
         <span>{{baseInfo.name}}</span>
       </p>
       <p>
         <span class="base-info-wid">布封</span>
         <span>{{baseInfo.clothWid}}</span>
       </p>
       <p>
         <span class="base-info-wid">成分</span>
         <span>{{baseInfo.ctn}}</span>
       </p>
       <p>
         <span class="base-info-wid">类型</span>
         <span>{{baseInfo.type}}</span>
       </p>
       <p>
         <span class="base-info-wid">大货价</span>
         <span>{{baseInfo.bulkPrice}}</span>
       </p>
       <p>
         <span class="base-info-wid">纸筒</span>
         <span>{{baseInfo.paperTube}}</span>
       </p>
       <p>
         <span class="base-info-wid">1卷数量</span>
         <span>{{baseInfo.oneRoll}}</span>
       </p>
     </span>
     <span>
       <p>
         <span class="base-info-wid">待审核</span>
         <span>{{baseInfo.check1}}</span>
       </p>
       <p>
         <span class="base-info-wid">待审核</span>
         <span>{{baseInfo.check2}}</span>
       </p>
       <p>
         <span class="base-info-wid">待审核</span>
         <span>{{baseInfo.check3}}</span>
       </p>
       <p>
         <span class="base-info-wid">质检证明</span>
         <span>{{baseInfo.qc}}</span>
       </p>
       <p>
         <span class="base-info-wid">计量单位</span>
         <span>{{baseInfo.unit}}</span>
       </p>
       <p>
         <span class="base-info-wid">散件价</span>
         <span>{{baseInfo.samplePrice}}</span>
       </p>
       <p>
         <span class="base-info-wid">空差</span>
         <span>{{baseInfo.deviation}}</span>
       </p>

     </span>
   </div>
   <h5>属性</h5>
   <!--<div class="property">-->
     <!--<span class="property-row">-->
       <!--<span class="property-left">-->
         <!--<span  style="width: 50px;background: blue">纱支</span>-->
         <!--<span>{{'纱支'}}</span>-->
       <!--</span>-->
       <!--<span class="property-right">-->
         <!--<span class="property-wid">密度</span>-->
         <!--<span>{{'密度'}}</span>-->
       <!--</span>-->
     <!--</span>-->
     <!--<span></span>-->
     <!--<span></span>-->
     <!--<span></span>-->
     <!--<span></span>-->
   <!--</div>-->
   <div class="base-info" style="margin: 0">
     <span>
       <p>
         <span class="base-info-wid">纱支</span>
         <span>{{property.shazhi}}</span>
       </p>
       <p>
         <span class="base-info-wid">织物结构</span>
         <span>{{property.zhiwujiegou}}</span>
       </p>
       <p>
         <span class="base-info-wid">染整工艺</span>
         <span>{{property.ranzhenggongyi}}</span>
       </p>
       <p>
         <span class="base-info-wid">织造工艺</span>
         <span>{{property.zhizaogongyi}}</span>
       </p>
       <p>
         <span class="base-info-wid">针数</span>
         <span>{{property.zhenshu}}</span>
       </p>
     </span>
     <span>
       <p>
         <span class="base-info-wid">密度</span>
         <span>{{property.midu}}</span>
       </p>
       <p>
         <span class="base-info-wid">织物组织</span>
         <span>{{property.zhiwuzuzhi}}</span>
       </p>
       <p>
         <span class="base-info-wid">花型工艺</span>
         <span>{{property.huaxinggongyi}}</span>
       </p>
       <p>
         <span class="base-info-wid">机织工艺</span>
         <span>{{property.jizhigongyi}}</span>
       </p>
       <p>
         <span class="base-info-wid">具体用途</span>
         <span>{{property.jutiyongtu}}</span>
       </p>
     </span>
   </div>
   <h5 style="margin: 10px 0 0 0">图片</h5>
   <div class="img">
     <span class="img-desc img-desc-wid">主图</span>
     <span v-for="url in mainPic" class="img-desc">
       <img :src="url">
     </span>
   </div>
   <div class="img">
     <span class="img-desc img-desc-wid">1#</span>
     <span v-for="url in pic1" class="img-desc">
       <img :src="url">
     </span>
   </div>
   <div class="img">
     <span class="img-desc img-desc-wid">2#</span>
     <span v-for="url in pic2" class="img-desc">
       <img :src="url">
     </span>
   </div>
   <div class="img">
     <span class="img-desc img-desc-wid">3#</span>
     <span v-for="url in pic3" class="img-desc">
       <img :src="url">
     </span>
   </div>
   <p style="text-align: center;color: #adadad">没有更多</p>
   <div class="pro-btn">
     <button style="background: #353535">审核不通过</button>
     <button style="background: #1aad19">审核通过并上架</button>
   </div>
 </div>
</template>

<script>
    export default {
      name: "ProductDetail",
      data(){
        return{
          title:'商品详情',
          product:{},
          baseInfo:{
            'number':'AVR-000046','name':'乱纹羊毛','clothWid':'120厘米','ctn':'棉90%细纤10%',
            'type':'现货','bulkPrice':'123.00','paperTube':'-','oneRoll':'100公斤','check1':'化纤-细纤',
            'check2':'羊毛','check3':'12g/m2','qc':'-','unit':'公斤','samplePrice':'150.00','deviation':'-'
          },
          property:{
            'shazhi':'-','zhiwujiegou':'-','ranzhenggongyi':'-','zhizaogongyi':'-','zhenshu':'-','midu':'-',
            'zhiwuzuzhi':'-', 'huaxinggongyi':'-','jizhigongyi':'-','jutiyongtu':'-'
          },
          mainPic:[require("../../assets/logo.png"),require("../../assets/logo.png"),require("../../assets/logo.png"),require("../../assets/logo.png")],
          pic1:[require("../../assets/logo.png"),require("../../assets/logo.png"),require("../../assets/logo.png"),require("../../assets/logo.png")],
          pic2:[require("../../assets/logo.png"),require("../../assets/logo.png"),require("../../assets/logo.png"),require("../../assets/logo.png")],
          pic3:[require("../../assets/logo.png"),require("../../assets/logo.png"),require("../../assets/logo.png"),require("../../assets/logo.png")],
        }
      },
      created(){
        let pro = this.$route.params.pro;
        this.product = this.$route.params.pro;
        this.init(pro)
      },
      methods:{
        init(pro){
          console.log('pro',pro)
        }
      }
    }
</script>

<style scoped>
  h5{
    background: white;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    padding: 0 5px;
    margin: 0;
    height: 40px;
    line-height: 40px;
    vertical-align: center;
    border-bottom: #dddddd 1px solid;
  }
  .base-info{
    background: white;
    margin: 10px 0;
    display: table;
    width: 100%;
  }
  .base-info span{
    display: table-cell;
    /*background: aquamarine;*/
    /*width: 50%;*/
    padding: 0 3px;
  }
  .base-info p{
    width: 100%;
    height: 30px;
    margin: 5px 0;
    border-bottom: #dddddd 1px solid;
    /*border-right: black 1px solid;*/
    display: table;
    line-height: 30px;
    vertical-align: center;
  }
  .base-info p span{
    display: table-cell;
    height: 100%;
  }
  .base-info-wid{
    width: 70px;
  }
  .property{
    background: white;
    margin: 0;
    display: table;
    width: 100%;
  }
  .property-row{
    display: table;
    height: 30px;
    width: 100%;
    line-height: 30px;
    vertical-align: center;
    padding: 0 5px;
    border-bottom: 1px solid #dddddd ;
  }
  .property-row .property-left{
    display: table-cell;
    width: 50vw;
  }
  .property-row .property-right{
    display: table-cell;
    width: 50vw;

  }
  .property-row .property-wid{
    width: 70px;
  }
  .img{
    display: table;
    background: white;
    border-bottom: black 1px solid;
  }
  .img-desc{
    display: table-cell;
    border-right: black 1px solid;
  }
  .img-desc img{
    width: calc((100vw - 40) / 4);
    height: 80px;
    line-height: 80px;
    vertical-align: middle;
  }
  .img-desc-wid{
    width: 40px;
    padding: 0 3px;
  }
  .pro-btn{
    display: flex;
  }
  .pro-btn button{
    width: calc(100vw / 2);
    height: 40px;
    margin: 5px 0 0 0;
    border-width: 0;
    color: white;
  }
</style>
