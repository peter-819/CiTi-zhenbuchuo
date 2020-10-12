<template>
  <div id="news">
    <div class="square"></div>
    <div style="display:flex; flex-direction: column;align-items: center;margin-left: 94px">
      <div v-for="(item,i) in news">
        <h2 class="newsTitleFont">{{item.Title}}</h2>
        <p class="newsContentFont">{{item.Content}}</p>
      </div>
    </div>
    <div style="display:flex;flex-direction: column;align-items: center;margin-left: 185px">
      <img src="/static/HomePage/oval.png">
      <img src="/static/HomePage/oval1.png" style="margin-top: 20px">
    </div>
    <div
      style="width: 137px;height: 30px;border: 3px solid #2CB8B9;border-radius: 10px;background: none;display: flex;
      align-items: center;justify-content: center;color: #2CB8B9;font-size: 18px;letter-spacing: 4px;margin-left: -100px;margin-top: 600px">
      更多新闻
    </div>
  </div>
</template>

<script>
  export default {
    name: "news",
    props:{
      news:{
        type: Array,
        require:true
      }
    },
    data(){
      return{

      };
    }
  }
</script>

<style scoped>
  #news{
    width: 1727px;
    height: 707px;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(112, 112, 112, 0.16);
    opacity: 1;
    border-radius: 15px;
    margin-left: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .newsTitleFont{
    height: 28px;
    font-size: 28px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 48px;
    color: #707070;
    opacity: 1;
  }
  .newsContentFont{
    height: 22px;
    font-size: 22px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 37px;
    color: #707070;
    opacity: 0.64;
  }
  .square{
    width: 560px;
    height: 530px;
    background: #29C7CA;
    box-shadow: 0px 3px 6px rgba(112, 112, 112, 0.16);
    opacity: 0.35;
    border-radius: 15px;
    margin-left: 6.25%;
  }
</style>
