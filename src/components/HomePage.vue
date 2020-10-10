<template>
  <div id="HomePage">
    <div><heading></heading></div>
    <div class="block"></div>
    <div class="introContexts">
      <intro-context class="context1"></intro-context>
      <intro-context class="context2"></intro-context>
      <intro-context class="context2"></intro-context>
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

<style>
 .block{
   width: 1920px;
   height: 927px;
   background: #29282D;
   opacity: 1;
 }
 .introContexts{
   display: flex;
   -webkit-flex-direction: row;
   width: 1823px;
   margin-left: 96px;
   margin-top: 222px;
 }
 .context1{
   margin-left:0px;
  }
 .context2{
   margin-left: 100px;
 }

</style>
