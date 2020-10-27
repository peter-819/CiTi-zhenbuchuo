<template>
  <div class="container1">
    <img  @click="closeChoosePop"  class="close" src="../../static/HomePage/close.png" />
    <div class="title">请选择你的操作</div>
    <div class="actions">
      <div @click="jumpToSignIn" class="action">登录</div>
      <div class="action">注册</div>
    </div>
  </div>
</template>

<script>
  export default{
  	name :"choosePop",
  	components: {
  	},
    data() {
    },
    methods:{
  	  closeChoosePop:function () {
        this.$parent.isChosen = !this.$parent.isChosen;
      },
      jumpToSignIn:function () {
        this.$router.push({path: '/signIn'})
      }
    }
  }
</script>

<style>
  .container1{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    background: rgba(112,112,112,0.65);
    border-radius: 15px;
  }

  .close{
    margin-top: 30px;
    margin-left: 90%;
    width:30px;
    height: auto;
  }
  .title{
    margin-top: 80px;
    font-size: 44px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #FFFFFF;
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    opacity: 0.9;
  }
  .actions{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    margin-top: 127px;
  }
  .action{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:17%;
    height: 80px;
    margin-bottom: 44px;
    background-color: #FFFFFF;
    color:#2CB8B9;
    border-radius: 10px;
    font-size: 34px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 80px;
  }
</style>
