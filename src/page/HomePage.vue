<template>
  <div id="HomePage">
    <div
      style="width: 100%;height: 927px;background-color: #29282D;display: flex;flex-direction: column;align-items: center;justify-content: center">
      <heading style="position: absolute;top: 0" :activated="0"></heading>
      <img src="static/HomePage/hrightup.png" style="width: 39%;height:auto;top:0;right:30px;position: absolute;">
      <img src="static/HomePage/hleft.png" style="width: 40%;height:auto;position: absolute;left: 17px;top: 246px;">
      <img src="static/HomePage/hrightdown.png" style="width: 36%;height:auto;position: absolute;right: 0;top: 412px;">

      <div style="text-align: center;width: 50%;height: auto">
        <p style="color: #FFFFFF;font-size: 56px;font-weight: 400;letter-spacing: 10px;opacity: 0.9;">为后疫情时代小微企业融资问题提供最温情的智能解决方案</p>
        <p style="color: #FFFFFF;font-size: 30px;font-weight: 400;letter-spacing: 5px;opacity: 0.65;margin-top: 36px;">
          后疫情时代中小企业信用评级管理系统</p>
      </div>

      <div
        style="margin-top: 120px;display: flex;align-items: center;justify-content: center;flex-direction: column;">
        <button
          style="z-index:7;width: 233px;height: 63px;border: 3px solid #2CB8B9;border-radius: 10px;background: none;display: flex;align-items: center;justify-content: center;color: #2CB8B9;font-size: 24px;letter-spacing: 8px;"
          @click="showLogPop">
          LOGIN
        </button>
        <img style="width: 59px;height: 27px;margin-top: 44px" src="static/HomePage/arrow_down.png"/>
      </div>
      <div style="z-index:77;position: absolute;display:flex;align-items:center;height: 704px;width: 70%;background-color: rgba(0,0,0,0.65);" v-if="logInPop">
        <log-pop></log-pop>
      </div>
      <div style="z-index:777;position: absolute;display:flex;align-items:center;height: auto;width: 70%;background-color: rgba(0,0,0,0.65);" v-show="isChosen">
        <choose-pop></choose-pop>
      </div>
    </div>

    <div>
      <h1 class="TitleFont">系统特点</h1>
      <div style="display:flex; justify-content:center;">
        <img src="/static/HomePage/Polygon1.png" style="width:29px;height:14px;color:#F5F6FA;"/>
      </div>
      <el-row class="introContexts">
        <el-col :span="8" style="display: flex;align-items: center;justify-content: center;"><intro-context class="context" :contents="context1"></intro-context></el-col>
        <el-col :span="8" style="display: flex;align-items: center;justify-content: center;"><intro-context class="context" :contents="context1"></intro-context></el-col>
        <el-col :span="8" style="display: flex;align-items: center;justify-content: center;"><intro-context class="context" :contents="context1"></intro-context></el-col>
      </el-row>
    </div>
    <div>
      <h1 class="TitleFont">新闻政策</h1>
      <div style="display:flex; justify-content:center;">
        <img src="/static/HomePage/Polygon1.png" style="width:29px;height:14px;color:#2CB8B9;">
      </div>
      <div style="display: flex;justify-content: center;">
        <news :news = "context2"></news>
      </div>
    </div>
    <div style="margin-top: 147px"><bottom></bottom></div>


  </div>

</template>

<script>
  import heading from "../components/heading.vue";
  import introContext from "../components/introContext.vue";
  import bottom from "../components/bottom.vue";
  import News from "../components/news";
  import logPop from "../components/logPop";
  import choosePop from "../components/choosePop";

  export default {
    name: "HomePage",
    inject: ['reload'],
    data(){
      return{
        logInPop:false,
        isChosen:false,
        temp:'',
        context1:{
          Title:'技术亮点',
          Content:'这里放具体的内容内容内容 <br> 这里放具体的内容内容内容 <br> 这里放具体的内容内容内容 <br> 这里放具体的内容内容内容 <br> 这里放具体的内容内容内容<br>',
          ImageSrc:'/static/HomePage/Bulb.png'
        },
        context2:[
          {
            Title:'新闻标题',
            Content: '这里放新闻或政策的内容简要介绍，简要介绍不要太长了不要太长了'
          },
          {
            Title:'新闻标题',
            Content: '这里放新闻或政策的内容简要介绍，简要介绍不要太长了不要太长了'
          },
          {
            Title:'新闻标题',
            Content: '这里放新闻或政策的内容简要介绍，简要介绍不要太长了不要太长了'
          },
          {
            Title:'新闻标题',
            Content: '这里放新闻或政策的内容简要介绍，简要介绍不要太长了不要太长了'
          }
          ]
      }
    },
    components: {
      heading,
      introContext,
      bottom,
      News,
      logPop,
      choosePop
    },
    methods: {
      showLogPop: function () {
        this.logInPop = !this.logInPop ;
      }
    }
  }
</script>

<style>
  #HomePage{
    position: relative;
  }
  .introContexts {
    display: flex;
    -webkit-flex-direction: row;
    width: 100%;
    height: 1000px;
  }

  .context {
    margin: 98px 49px;
    width: 509px;
    height:540px;
  }

  .TitleFont {
    font-size: 44px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 75px;
    color: #29282D;
    opacity: 1;
    text-align: center;
  }

</style>
