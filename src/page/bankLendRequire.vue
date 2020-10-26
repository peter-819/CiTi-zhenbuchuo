<template>
  <div id="all">
    <heading style="background-color: rgb(74,73,76);" v-bind:credit="{sty1:'font-weight:500; color: #2CB8B9;',sty2:''}"></heading>
    <div class="search">
      <el-input  v-model="search_key" placeholder="   搜索借贷请求" id="searchinput"></el-input>
    </div>
    <div class="container">
      <credit-aside v-model:selected="selected" @select="selectedIndexChange"></credit-aside>
      <div :is="forms[selected]"></div>
    </div>
  </div>
</template>

<script>
  import heading from "../components/heading.vue"
  import bankLRAside from "../components/bankCredit/bankLRAside.vue"
  import bankLRinfo from "../components/bankCredit/bankLRinfo.vue"
  export default{
  	name :"bankLendRequire",
  	components: {
  	  bankLRAside,
      heading,
      bankLRinfo,
  	},
    data() {
      return {
        search_key:"",
        selected: 0,
        forms: ['bankLRinfo'],

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
  .search{
    width:100%;
    height:58px;
    margin-top: 40px;
  }
  #searchinput{
    width:21%;
    height:58px;
    margin-left: 48%;
    border: 2px solid #2CB8B9;
    border-radius: 31px;
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
