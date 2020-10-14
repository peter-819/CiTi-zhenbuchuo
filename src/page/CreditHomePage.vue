<template>
  <div id="CreditHomePage">
    <heading
      style="background-color:#29282D;"
      v-bind:credit="{sty1:'font-weight:500; color: #2CB8B9;',sty2:''}">
    </heading>
    <credit-aside></credit-aside>
    <div class="presentCredit"></div>
    <submit-contract style="margin-left: "></submit-contract>
  </div>
</template>

<script>
  import heading from "../components/heading.vue";
  import CreditAside from "../components/Credit/creditAside";
  import submitContract from "../components/Credit/submitContract";
  export default {
    name: "CreditHomePage",
    components:{
      CreditAside,
      heading,
      submitContract,
    },

  }
</script>

<style scoped>
  #CreditHomePage{
    width: 100%;
    height: 100%;
    background-color: #F5F6FA;
    /*position: fixed;*/
  }
  .context1{
    width: 192px;
    height: 30px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 51px;
    color: #FFFFFF;
  }
  </style>
