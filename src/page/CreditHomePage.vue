<template>
  <div id="CreditHomePage" class="bg">
    <heading
      style="background-color:#29282D;"
      v-bind:credit="{sty1:'font-weight:500; color: #2CB8B9;',sty2:''}">
    </heading>
    <credit-aside v-model:selected="selected" @select="selectedIndexChange"></credit-aside>
    <div :is="forms[selected]"></div>
  </div>
</template>

<script>
  import heading from "../components/heading.vue";
  import CreditAside from "../components/Credit/creditAside";
  import submitContract from "../components/Credit/submitContract";
  import creditStatus from "../components/Credit/creditStatus";
  import specificAccess from "../components/Credit/specificAccess";
  import debitAccess from "../components/Credit/debitAccess";
  import contact from "../components/Credit/contact";

  export default {
    name: "CreditHomePage",
    components: {
      CreditAside,
      heading,
      submitContract,
      creditStatus,
      specificAccess,
      debitAccess,
      contact
    },
    data() {
      return {
        selected: 0,
        forms: ['creditStatus', 'submitContract', 'specificAccess', 'debitAccess', 'contact']
      }
    },
    methods: {
      selectedIndexChange: function (index) {
        this.selected = index;
      }
    }
  }

</script>

<style scoped>
  #CreditHomePage{
    width: 100%;
    height: auto;
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
  .bg{
    background-color: #F5F6FA;
  }
  </style>
