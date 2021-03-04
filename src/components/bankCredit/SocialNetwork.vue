<template>
  <div class="main">
    <div class="container">
        <charts></charts>
    </div>
  </div>
</template>

<script>
  import charts from "../../page/charts";
  export default {
    name: "Network",
    components: {charts},
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
