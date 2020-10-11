<template>
  <div id="HomePage">
    <div><heading></heading></div>
    <div class="block">
      <div class="img1container"><img class="img1" src="/static/HomePage/hleft.png"></img></div>
      <div class="img2container"><img class="img2" src="/static/HomePage/hrightup.png"></img></div>
    </div>
      <div>
        <h1 class="TitleFont">系统特点</h1>
        <div style="display:flex; justify-content:center;">
        <img src="/static/HomePage/Polygon1.png" style="width:29px;height:14px;color:#F5F6FA;"></img>
      </div>
      <div class="introContexts">
        <intro-context class="context" :contents="context1"></intro-context>
        <intro-context class="context" :contents="context1"></intro-context>
        <intro-context class="context" :contents="context1"></intro-context>
        <!-- <intro-context class="context2"></intro-context>
        <intro-context class="context2"></intro-context> -->
      </div>
    </div>
    <div><bottom></bottom></div>
  </div>

</template>

<script>
  import heading from "../components/heading.vue";
  import introContext from "../components/introContext.vue";
  import bottom from "../components/bottom.vue";
  export default {
    name: "HomePage",
    data(){
      return{
        context1:{
          Title:'技术亮点',
          Content:'这里放具体的内容内容内容 <br> 这里放具体的内容内容内容 <br> 这里放具体的内容内容内容 <br> 这里放具体的内容内容内容 <br> 这里放具体的内容内容内容<br>',
          ImageSrc:'/static/HomePage/Bulb.png'
        }
      }
    },
    components:{
      heading,
      introContext,
      bottom
    }
  }
</script>

<style>
 .block{
   width: 100%;
   height: 800px;
   background: #29282D;
   opacity: 1;
 }
 .img1container{
   margin-left: 20px;
   width:41%;
   height:100%;
   display: flex;
   flex-direction: row;
   align-items: center;

 }
 .img1{
      max-width:100%;
      height:auto;
 }
 .img2container{
   margin-top: -74px;
   width:39%;
   height:40%;
   display: flex;
   flex-direction: row;
   align-items: center;
 }
 .introContexts{
   display: flex;
   -webkit-flex-direction: row;
   width: 100%;
   height: 1000px;
   margin-left:49px;
   margin-right:49px;
 }
 .context{
   margin:98px 49px 98px 49px;
  }
  .TitleFont{
    font-size: 44px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 75px;
    color: #29282D;
    letter-spacing: 40;
    opacity: 1;
    text-align: center;
  }

</style>
