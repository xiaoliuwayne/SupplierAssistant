<template>
  <div class="notic">
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
