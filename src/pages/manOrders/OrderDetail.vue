<template>
  <div class="ord-detail">
    <div class="order-info">
      <span class="hder">
        <span>订单号：{{orderRecord.orderNo}}</span>
        <span>{{orderRecord.orderTime}}</span>
        <span>{{orderRecord.orderStatus}}</span>
      </span>
      <div v-for="order in orderData"  class="detail-order">
        <img src="../../assets/logo.png" style="width: 80px;height: 80px;margin: 5px 10px">
        <span>
          <p>款号：{{order.number}}</p>
          <p>品名：{{order.name}}</p>
          <p>色号：{{order.colorNum}}</p>
          <p>剪版：{{order.sample}}</p>
        </span>
        <span>
          <p>类型：{{order.type}}</p>
          <p>数量：{{order.quantities}}</p>
          <p>小计：{{order.sum}}</p>
        </span>
      </div>
      <span class="hder" style="margin: 0 0 10px 0">
        <span>{{'采购总金额'}}</span>
        <span style="text-align: right">{{'￥12,280.00'}}</span>
      </span>
    </div>
    <div class="receiver-info">
      <div v-for="(v,k) in receiver">
        <span style="width: 80px;padding-left: 5px">{{k}}</span><span>{{v}}</span>
      </div>
    </div>
    <textarea rows="4" class="remark" v-model="remark" name="rrr">
    </textarea>
    <div style="display: flex;">
      <button style="background: #353535">填写物料单号</button>
      <button style="background: #1aad19">发货</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "OrderDetail",
      data(){
        return{
          title:'订单详情',
          orderRecord:{},
          remark:'订单备注',
          orderData:[
            {'img':'url','number':'SEO-123456','name':'平纹布','colorNum':'1#','sample':'12.00','type':'剪版','quantities':'2米','sum':'24.00'},
            {'img':'url','number':'SEO-123456','name':'平纹布','colorNum':'1#','sample':'12.00','type':'剪版','quantities':'2米','sum':'24.00'},
            {'img':'url','number':'SEO-123456','name':'平纹布','colorNum':'1#','sample':'12.00','type':'剪版','quantities':'2米','sum':'24.00'},
          ],
          receiver:{'收货人':'阮XX','联系电话':'152 1234 1234','地址':'北京市 东城区 南村镇 雅居乐剑桥郡19栋2303'}
        }
      },
      created(){
        let record = this.$route.params.record;
        this.orderRecord = this.$route.params.record;
        this.init(record)
      },
      methods:{
        init(record){ //请求获取订单号的详情
          console.log('record',record)
        }
      }
    }
</script>

<style scoped>
  .ord-detail{
  }
  .hder{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: table;
    margin: 10px 0 0 0;
    border-bottom: #adadad 1px solid;
  }
  .hder span{
    display: table-cell;
    background: white;
    vertical-align: center;
    padding-left: 5px;
  }
  .detail-order{
    display: flex;
    min-height: 90px;
    border-bottom: black 1px solid;
    background: white;
  }
  .detail-order span{
    margin: 5px 10px;
  }
  .detail-order p{
    font-size: 12px;
    margin: 3px;
  }
  .receiver-info{
    background: white;
  }
  .receiver-info div{
    border-bottom: #e5e5e5 1px solid;
    width: 100%;
    min-height: 35px;
    line-height: 35px;
    display: table;
  }
  .receiver-info span{
    margin: 5px 10px;
    vertical-align: center;
    height: 100%;
    display: table-cell;
  }
  .remark{
    width: 99%;
    border-width: 0;
    margin: 0 auto;
  }
  .ord-detail button{
    width: calc(100vw / 2);
    height: 40px;
    margin: 5px 0 0 0;
    border-width: 0;
    color: white;
  }
</style>
