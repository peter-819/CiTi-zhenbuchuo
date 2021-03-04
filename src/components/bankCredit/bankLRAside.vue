<template>
  <div id="bankAside">
    <div>
      <div v-for="(item,index) in blockList" :class="selectedIndex===index ? clickedBC : defaultBC" @click="onclicked(index)">
        <div :class="selectedIndex===index ? clickedCC : defaultCC">{{item.context}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: "bankLRAside",
  props:['selected'],
  data(){
    return {
      selectedIndex:this.selected || 0,
      clickedBC : 'clickedBlock',
      clickedCC : 'clickedContext',
      defaultBC : 'asideBlock',
      defaultCC : 'context',
      blockList : [
        {context:'静态交往关系网络', ImageSrc:'/static/CreditHomePage/lendRequire.png'},
        {context:'动态资金流动网络', ImageSrc:'/static/CreditHomePage/network.png'},
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
  #bankAside{
    width: 350px;
    height: 160px;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 172px;
    background-color: #F5F6FA;
  }
  .context{
    width: 180px;
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
    width: 180px;
    height: 80px;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 600;
    line-height: 77px;
    color: #FFFFFF;
  }
</style>
