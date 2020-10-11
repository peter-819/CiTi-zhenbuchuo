<template>
  <div class="bottom">
    <div class="contain">
      <el-row :gutter="20">
        <el-col :span="6"><div class="first">帮助</div></el-col>
        <el-col :span="6"><div class="first">关于我们</div></el-col>
        <el-col :span="12"><div class="first"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="second">获取帮助</div></el-col>
        <el-col :span="6"><div class="second">团队日志</div></el-col>
        <el-col :span="12"><div class="second"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="second">联系我们</div></el-col>
        <el-col :span="6"><div class="second">联系我们</div></el-col>
        <el-col :span="12"><div class="second"></div></el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
  export default{
    name:"bottom",
    data(){
      return{
  
      };
    }
  }
</script>

<style>
  .contain{
    margin-top: 50px;
  }
  .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  .bottom{
    width:100%;
    height: 350px;
    background: #29282D;
    border: 1px solid #29282D;
    opacity: 1;
  }
  .first{
    font-size: 16rem;
    height: 30px;
  }
  .second{
    font-size: 16rem;
    height: 30px;
  }
</style>
