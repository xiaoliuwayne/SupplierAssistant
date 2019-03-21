<template>
  <div>
    <router-view></router-view>
    <tabbar @on-index-change="onIndexChange" class="tabbar-style" v-model="itemIndex" slot="bottom">>
      <tabbar-item link="/home">
        <img slot="icon" src="../assets/img/home.png">
        <img slot="icon-active" src="../assets/img/home-ed.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/products">
        <img slot="icon" src="../assets/img/goods.png">
        <img slot="icon-active" src="../assets/img/goods-ed.png">
        <span slot="label">商品管理</span>
      </tabbar-item>
      <tabbar-item  link="/orders">
        <img slot="icon" src="../assets/img/order.png">
        <img slot="icon-active" src="../assets/img/order-ed.png">
        <span slot="label">订单管理</span>
      </tabbar-item>
      <tabbar-item  link="/accounts">
        <img slot="icon" src="../assets/img/pay.png">
        <img slot="icon-active" src="../assets/img/pay-ed.png">
        <span slot="label">对账结算</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  // import {mapGetters} from 'vuex'
    export default {
        name: "Index",
      data(){
          return{
            itemIndex:-1,
          }
      },
      //计算属性
      // computed:mapGetters({
      //   ''
      // }),
      created(){
        if(window.TABBAR_STATUS !== -1){
          this.itemIndex = window.TABBAR_STATUS;
        }else{
          this.itemIndex=0
        }
      },
      mounted(){
      },
      // 监听,当路由发生变化的时候执行
      watch:{
        $route(to,from){
          console.log('to.path',to.path,'from.path',from.path);
          switch (to.path) {
            case '/home':
              window.TABBAR_STATUS = 0;
              this.itemIndex = window.TABBAR_STATUS;
              break;
            case '/products':
              window.TABBAR_STATUS = 1;
              this.itemIndex = window.TABBAR_STATUS;
              break;
            case '/orders':
              window.TABBAR_STATUS = 2;
              this.itemIndex = window.TABBAR_STATUS;
              break;
            case '/accounts':
              window.TABBAR_STATUS = 3;
              this.itemIndex = window.TABBAR_STATUS;
              break;
            default :
              console.log('no match anything!')
          }
        }
      },
      methods:{
        onIndexChange(newIndex, oldIndex){
          console.log('new',newIndex, 'old',oldIndex);
        }
      }
    }
</script>

<style scoped>
  .tabbar-style{
    background: #e5e5e5;
  }
</style>
