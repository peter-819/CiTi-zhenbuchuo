<template>
  <div id="all">
    <heading
      style="background-color:#49484B;"
      v-bind:credit="{sty1:'font-weight:500; color: #2CB8B9;',sty2:''}" :activated="1">
    </heading>
    <bank-l-r-aside v-model:selected="selected" @select="selectedIndexChange"></bank-l-r-aside>
    <div :is="forms[selected]"></div>
  </div>
</template>

<script>
  import heading from "../components/heading.vue"
  import bankLRAside from "../components/bankCredit/bankLRAside.vue"
  import bankLRinfo from "../components/bankCredit/bankLRinfo.vue"
  import SocialNetwork from "../components/bankCredit/SocialNetwork.vue"
  import KnowledgeGraph from "../components/bankCredit/KnowledgeGraph";
  export default{
  	name :"bankLendRequire",
  	components: {
  	  bankLRAside,
      heading,
      bankLRinfo,
      SocialNetwork,
      KnowledgeGraph
  	},
    data() {
      return {
        selected: 0,
        forms: ['KnowledgeGraph','SocialNetwork'],

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
    height: auto;
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
