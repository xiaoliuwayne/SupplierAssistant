<template>
  <div class="main">
    <div id="content1">列表一内容</div>
    <div id="content2">列表er内容</div>
    <ul class="tab">
      <li><a href="#content1" v-model="stu1" @click="change">列表一</a></li>
      <li><a href="#content2" v-model="stu2" @click="change">列表二</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "TabNar",
      data(){
          return{
            stu1:true,
            stu2:false
          }
      },
      methods:{
          change(){
            // this.
          }
      }
    }
</script>

<style scoped>
  .main{
    position: absolute;
    left:50%;
    top:30%;
    /*transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜*/
    /*translate(x,y) 	定义 2D 转换。*/
    transform: translate(-50%,-50%);
  }
  .tab{
    margin: 0;
    padding: 0;
    /*overflow 	规定当内容溢出元素框时发生的事情。*/
    overflow: hidden;
    /*list-style-type 	设置列表项标记的类型*/
    list-style-type: none;
  }

  .tab li{
    float: left;
  }

  .tab li a{
    /*text-decoration 	添加到文本的装饰效果*/
    text-decoration: none;
    color: black;
    background: #ddd;
    display: inline-block;
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }

  #content1,#content2{
    display: none;
    width: 240px;
    height: 100px;
    border:1px #ddd solid;
    position: absolute;
    top:40px;
    padding: 40px;
    /*box-sizing 	允许您以确切的方式定义适应某个区域的具体内容。*/
    box-sizing: border-box;
  }
  /*关键部分*/
  /*:target 是 CSS3 新增的一个伪类，可用于选取当前活动的目标元素。
  当 URL 末尾带有锚名称 #，就可以指向文档内某个具体的元素。这个被链接的元素就是目标元素(target element)。
  它需要一个 id 去匹配文档中的 target 。*/
  #content1:target,
  #content2:target{
    display: block;
  }
  /*触发变色*/
  /*兄弟选择符 ~*/
  /*E~F{ cssRules } ，CSS3 兄弟选择符(E~F) ，选择 E 元素后面的所有兄弟元素 F*/
  /*E~F 只能选择 E 元素 之后 的 F 元素，所以顺序就显得很重要了*/
  /*CSS3 :nth-child() 选择器*/
  /*:nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。*/
  /*n 可以是数字、关键词或公式。*/
  #content1:target ~ .tab li:nth-child(1) a{
    background: skyblue;
    color: #fff;
  }
  #content2:target ~ .tab li:nth-child(2) a{
    background: skyblue;
    color:#fff;
  }
</style>
