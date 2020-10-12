<template>
    <div id="introContext">
      <img :src="Contents.ImageSrc"></img>
      <h1 class="ICTitleFont">{{Contents.Title}}</h1>
      <p class="ICContentFont" v-html="Contents.Content"></p>
    </div>
</template>

<script>
    export default {
      name: "introContext",
      props:{
        Contents:{
          Title:{
            type: String,
            require: true
          },
          Content:{
            type: String,
            require: true
          },
          ImageSrc:{
            type: String,
            require: true
          }
        }
      },
      data(){
        return{

        };
      }
    }
</script>

<style scoped>
  #introContext{
    background: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(112, 112, 112, 0.16);
    opacity: 1;
    border-radius: 15px;
    display:flex;
    flex-direction:column;
    align-items: center;
  }
  .ICTitleFont{
    font-size: 34px;
    font-family: Soucrce Han Sans CN;
    font-weight: 400;
    line-height: 58px;
    color: #2CB8B9;
    opacity: 1;
  }
  .ICContentFont{
    font-size: 22px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 37px;
    color: #707070;
    opacity: 0.65;
  }
</style>
