<template>
  <div class="container1">
    <img @click="closeLogPop" class="close" src="../../static/HomePage/close.png"/>
    <div class="title">请选择你的身份</div>
    <div class="roles">
      <div @click="selectCom" class="role" style="margin-right: 100px;">
        <div class="text">企业人员</div>
        <img class="picture" src="../../static/HomePage/company.png"></img>
      </div>
      <div @click="selectBank" class="role">
        <div class="text">银行人员</div>
        <img class="picture" src="../../static/HomePage/banker.png"></img>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "logPop",
    components: {},
    data() {
      return {
        open: true
      }
    },
    methods: {
      closeLogPop: function () {
        this.$parent.logInPop = !this.$parent.logInPop;
      },
      selectCom: function () {
        this.$parent.isChosen = !this.$parent.isChosen;
        this.$parent.logInPop = !this.$parent.logInPop;
      },
      selectBank: function () {
        this.$parent.isChosen = !this.$parent.isChosen;
        this.$parent.logInPop = !this.$parent.logInPop;

      }
    }
  }
</script>

<style>
  .container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    background: rgba(112,112,112,0.65);
    border-radius: 15px;
  }

  .close {
    margin-top: 30px;
    margin-left: 90%;
    width: 30px;
    height: auto;
  }

  .title {
    margin-top: 22px;
    font-size: 44px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #FFFFFF;
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  }

  .roles {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: auto;
    margin-top: 66px;
    margin-bottom: 60px;
  }

  .role {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 454px;
    background-color: #FFFFFF;
    border-radius: 15px;
  }

  .text {
    margin-top: 49px;
    height: 32px;
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 54px;
    color: #2CB8B9;
  }

  .picture {
    margin-top: 61px;
    height: 50%;
    width: auto;
  }
</style>
