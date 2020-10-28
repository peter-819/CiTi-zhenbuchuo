<template>
  <div class="main">
    <div class="search">
      <el-input  v-model="search_key" placeholder="   搜索企业名称" id="searchinput"></el-input>
    </div>
    <div class="container">
      <div class="chart"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Network",
    data(){
      return {
        search_key:"",
      }
    }
  }
</script>

<style>
  .main{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
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
    width: 1365px;
    height: 800px;
    background: #FFFFFF;
    opacity: 1;
    border-radius: 15px;
    margin-top: 23px;
    margin-left: 280px;
  }
</style>
