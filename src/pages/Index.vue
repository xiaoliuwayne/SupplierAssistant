<template>
  <div>
    <router-view></router-view>
    <tabbar @on-index-change="onIndexChange" class="tabbar-style">
      <tabbar-item link="/home" v-model="itemIndex">
        <img slot="icon" src="../assets/img/home.png">
        <img slot="icon-active" src="../assets/img/home-ed.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/products">
        <img slot="icon" src="../assets/img/home.png">
        <img slot="icon-active" src="../assets/img/home-ed.png">
        <span slot="label">商品管理</span>
      </tabbar-item>
      <tabbar-item  link="/orders">
        <img slot="icon" src="../assets/img/home.png">
        <img slot="icon-active" src="../assets/img/home-ed.png">
        <span slot="label">订单管理</span>
      </tabbar-item>
      <tabbar-item  link="/accounts">
        <img slot="icon" src="../assets/img/home.png">
        <img slot="icon-active" src="../assets/img/home-ed.png">
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
            itemIndex:0,
          }
      },
      //计算属性
      // computed:mapGetters({
      //   ''
      // }),
      created(){
      },
      mounted(){
          console.log(444)
        if(window.TABBAR_STATUS !== -1){
          this.itemIndex = window.TABBAR_STATUS;
          console.log(555)
       }
      },
      // 监听,当路由发生变化的时候执行
      watch:{
        $route(to,from){
          console.log('$route',this.$route);
          console.log('to',to,'from',to);
          if((window.TABBAR_STATUS !== -1) && (from.path == '/orderdetail' || from.path == '/productdetail')){
            this.itemIndex = window.TABBAR_STATUS;
            console.log('this.itemIndex',this.itemIndex)
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
