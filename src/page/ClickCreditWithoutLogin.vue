<template>
    <div id="ClickCreditWithoutLogin">
      <div>
        <heading
          style="background-color:#29282D;"
          v-bind:my-val="{sty1:'font-weight:500; color: #2CB8B9;',sty2:''}">
        </heading>
      </div>
      <div class="loginFirst">请先登陆 / 注册以查看更多</div>
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

<style scoped>
  .loginFirst{
    width: 309px;
    height: 25px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 41px;
    color: #2CB8B9;
  }
</style>
