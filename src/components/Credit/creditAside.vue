<template>
  <div id="creditAside">
    <div>
      <div v-for="(item,index) in blockList" :class="selectedIndex===index ? clickedBC : defaultBC" @click="onclicked(index)">
        <img :src="item.ImageSrc">
        <div :class="selectedIndex===index ? clickedCC : defaultCC">{{item.context}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "creditAside",
    props:['selected'],
    data(){
      return {
        selectedIndex:this.selected,
        clickedBC : 'clickedBlock',
        clickedCC : 'clickedContext',
        defaultBC : 'asideBlock',
        defaultCC : 'context',
        blockList : [
          {context:'当前借贷情况', ImageSrc:'/static/CreditHomePage/pic84.png'},
          {context:'提交借贷合同', ImageSrc:'/static/CreditHomePage/pic86.png'},
          {context:'抗疫专项通道', ImageSrc:'/static/CreditHomePage/pic152.png'},
          {context:'还款通道', ImageSrc:'/static/CreditHomePage/pic153.png'},
          {context:'联系咨询', ImageSrc:'/static/CreditHomePage/pic87.png'}
        ]
      }
    },
    methods:{
      onclicked:function(index){
        this.$emit('select',index);
        this.selectedIndex = index;
      }
    }
  }
</script>

<style scoped>
  #creditAside{
    width: 345px;
    height: 400px;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 172px;
    background-color: #F5F6FA;
  }
  .context{
    width: 150px;
    height: 80px;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 600;
    line-height: 77px;
    color: #707070;
  }
  .clickedBlock{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    line-height: 77px;
    background-color: #2CB8B9;
  }
  .asideBlock{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    line-height: 77px;
  }
  .clickedContext{
    width: 150px;
    height: 80px;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 600;
    line-height: 77px;
    color: #FFFFFF;
  }
</style>
