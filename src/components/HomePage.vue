<template>
  <div id="HomePage">
    <heading></heading>
    <div id="block"></div>
    <div id="introContexts" style="width: 1920px;height:1000px ">
     <intro-context id="context1"></intro-context>
    </div>
  </div>

</template>

<script>
  import heading from "./heading";
  import introContext from "./introContext";
    export default {
      name: "HomePage",
      components:{
        heading,
        introContext
      }
    }
</script>

<style scoped>
 #block{
   width: 1920px;
   height: 927px;
   background: #29282D;
   opacity: 1;
 }
  #context1{
    position: relative;
    top:222px;
    left:96px;
  }
</style>
