<template>
  <div class="main">
    <div class="search">
      <el-input  v-model="search_key" placeholder="   搜索借贷请求" id="searchinput"></el-input>
    </div>
    <div class="options">
      <div class="option" style="margin-left:43%;">全部</div>
      <div class="option">已处理</div>
      <div class="option">未处理</div>
    </div>

    <div class="requires">
      <div v-for="(item,index) in requires" class="require" :key="index">
        <div v-if="item.status==='0'" class="line1">
          <div class="companyName">{{item.comname}}</div>
          <img src="../../../static/CreditHomePage/wait.png" style="width:100px;height:32px; margin-left: 50%;"></img>
        </div>
        <div v-else class="line1">
          <div class="companyName">{{item.comname}}</div>
          <img src="../../../static/CreditHomePage/already.png" style="width:100px;height:32px; margin-left: 50%;"></img>
        </div>
        <div class="line2">
          <img src="../../../static/CreditHomePage/bpoint.png" style="width: 9px;height:9px">
          <div class="Rmount">请求金额：{{item.Rmount}}万</div>
        </div>
        <div class="line2">
          <img src="../../../static/CreditHomePage/gpoint.png" style="width: 9px;height:9px">
          <div class="Lmount">借贷金额：{{item.Lmount}}万（已借：{{item.already}}万 | 剩余额度：{{item.surplus}}万）</div>
        </div>

        <div class="time">{{item.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bankLRinfo",
    data(){
      return {
        search_key:"",
      requires:[
        {comname:"三四五六七八股份有限公司",Rmount:"39",Lmount:"60",already:"10",surplus:"50",time:"2020年9月8日20：00",status:"0"},
        {comname:"三四五六七八股份有限公司",Rmount:"39",Lmount:"60",already:"10",surplus:"50",time:"2020年9月8日20：00",status:"0"},
        {comname:"三四五六七八股份有限公司",Rmount:"39",Lmount:"60",already:"10",surplus:"50",time:"2020年9月8日20：00",status:"1"},
        {comname:"三四五六七八股份有限公司",Rmount:"39",Lmount:"60",already:"10",surplus:"50",time:"2020年9月8日20：00",status:"1"},
        {comname:"三四五六七八股份有限公司",Rmount:"39",Lmount:"60",already:"10",surplus:"50",time:"2020年9月8日20：00",status:"1"},
        ]
      }
    }
  }
</script>

<style>
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
  .line1{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 8%;
    margin-top: 30px;
  }
  .line2{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    margin-left: 8%;
    margin-top: 25px;
  }
  .title{
    height: 30px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 500;
  }
  .main{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
  }
  .options{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;

  }
  .option{
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    margin-right: 185px;
  }
  .requires{
    width:82%;
    height:auto;
    display:flex;
    flex-direction: column;
    margin-top: 38px;
    margin-left: 345px;
  }
  .require{
    width:86%;
    height:240px;
    margin-left: 128px;
    margin-bottom: 8px;
    background-color: #FFFFFF;
    border-radius: 15px;
  }
  .companyName{
    font-size: 34px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #707070;
  }
  .Rmount{
    margin-left: 20px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #2CB8B9;
  }
  .Lmount{
    margin-left: 20px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #707070;
  }
  .time{
    margin-left: 74%;
    font-size: 22px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #707070;
  }
</style>
