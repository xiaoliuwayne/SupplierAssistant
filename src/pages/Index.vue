<template>
  <div>
    <tabbar @on-index-change="onIndexChange" class="tabbar-style" >
      <tabbar-item selected link="/home">
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
    export default {
        name: "Index",
      data(){
          return{

          }
      },
      methods:{
        onIndexChange(newIndex, oldIndex){
          console.log(newIndex, oldIndex);
        }
      }
    }
</script>

<style scoped>
  .tabbar-style{
    background: #e5e5e5;
  }
</style>
