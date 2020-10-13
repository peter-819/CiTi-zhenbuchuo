<template>
    <div id="ClickCreditWithoutLogin">
      <div>
        <heading
          style="background-color:#29282D;"
          :activated="1">
        </heading>
      </div>
      <div class="loginFirst" style="margin-top: 160px;">请先登陆 / 注册以查看更多</div>
      <div class ="reminder" style="margin-top: 50px">
        <img src="/static/ClickCreditWithoutLogin/undraw_reminder_pa79.png" style="width: 650px;height: 520px;">
      </div>
    </div>
</template>

<script>
  import heading from "../components/heading.vue";
  export default {
    name: "ClickCreditWithoutLogin",
    components:{
      heading
    }
  }
</script>

<style>
  .loginFirst{
    width: 100%;
    height: 50px;
    font-size: 22px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 41px;
    color: #2CB8B9;
    letter-spacing: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .reminder{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
