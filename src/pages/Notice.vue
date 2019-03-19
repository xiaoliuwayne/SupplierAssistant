<template>
  <div class="notic">
    <x-header @on-click-back="true"
              @right-options.showMore="true"
              class="header-color">公告
    </x-header>
    {{content}}
  </div>
</template>

<script>
    export default {
      name: "Notice",
      data(){
        return{
          content:'公告内容后台设置....',
        }
      }
    }
</script>

<style scoped>
  .notic{
    margin: 30px auto;
    background: white;
    min-width: 300px;
    min-height: 500px;
  }
</style>
