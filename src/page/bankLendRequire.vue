<template>
  <div id="all">
    <heading style="background-color: rgb(74,73,76);" v-bind:credit="{sty1:'font-weight:500; color: #2CB8B9;',sty2:''}"></heading>
    <credit-aside v-model:selected="selected" @select="selectedIndexChange"></credit-aside>
    <div :is="forms[selected]"></div>
  </div>
</template>

<script>
  import heading from "../components/heading.vue"
  import bankLRAside from "../components/bankCredit/bankLRAside.vue"
  import bankLRinfo from "../components/bankCredit/bankLRinfo.vue"
  import Network from "../components/bankCredit/Network.vue"
  export default{
  	name :"bankLendRequire",
  	components: {
  	  bankLRAside,
      heading,
      bankLRinfo,
      Network,
  	},
    data() {
      return {
        search_key:"",
        selected: 0,
        forms: ['bankLRinfo','Network'],

      }
    },
    methods: {
      selectedIndexChange: function (index) {
        this.selected = index;
      }
    }
  }
</script>

<style>
  #all{
    width: 100%;
    height: 100%;
    background-color: #F5F6FA;
  }
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #F5F6FA;
  }
</style>
