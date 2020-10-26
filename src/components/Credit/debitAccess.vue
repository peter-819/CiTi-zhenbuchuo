<template>
  <div id="debitAccess">
    <div class="block1">
      <div style="display: flex;flex-direction: row;align-items:center;margin-top: 11px">
        <img src="/static/CreditHomePage/pic155.png">
        <div style="width: 192px;height: 51px;font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;line-height: 51px;color: #2CB8B9;">还款通道</div>
      </div>
      <div :grossLoan="grossLoan" class="waitForPayBack">
        待还总额：{{grossLoan}}(元)
      </div>
      <div class="tips" :loanNeedToPay="loanNeedToPay" :timeNeedToPay="timeNeedToPay">温馨提示：{{loanNeedToPay}}万需在{{timeNeedToPay}}前还清</div>
      <el-input
        class="annotation"
        action="https://jsonplaceholder.typicode.com/posts/"
        type="number"
        placeholder="请输入还款金额"
        v-model="textarea">
      </el-input>
      <img src="/static/CreditHomePage/pic147.png" style="margin-top: 10px;">
    </div>
    <div class="block2">
      <div style="display: flex;flex-direction: row;align-items:center;margin-top: 11px">
        <img src="/static/CreditHomePage/pic155.png">
        <div style="width: 192px;height: 51px;font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;line-height: 51px;color: #2CB8B9;">还款记录</div>
      </div>
      <div class="payBackRecord">
        <el-container style="display: flex;flex-direction: row;">
          <el-container style="align-items: center">
            <el-main style="width: 1240px">
              <p style="width: 201px;height: 32px;font-size: 30px;font-family: Source Han Sans CN;font-weight: 400; line-height: 51px;color: #2CB8B9;">+{{message.payBack}}（元）</p><br>
              <p style="width: 405px;height: 24px;font-size: 24px;font-family: Source Han Sans CN;font-weight: 400;line-height: 41px;color: #707070;opacity: 0.6;">还款日期：{{message.date}}</p>
            </el-main>
          </el-container>
          <el-aside width="200" style="display: flex">
            <div style="width: 144px;height: 63px; border-radius: 10px;background: #2CB8B9;color: #FFFFFF;font-size: 24px;">
            提交
          </div> </el-aside>
        </el-container>
        <img src="/static/CreditHomePage/line128.png">
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "debitAccess",
    data(){
      return{
        grossLoan:'14000',
        loanNeedToPay:'18',
        timeNeedToPay:'2020年11月1日',
        textarea:'',
        message: {
          payBack: '800',
          date: '2020年11月1日',
          url: 'http://www.baidu.com'
        }
      }
    }
  }
</script>

<style scoped>
  #debitAccess{
    width: 100%;
    height: 100%;
  }
  .annotation /deep/   input::-webkit-outer-spin-button,
  .annotation /deep/   input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .annotation /deep/   input[type="number"]{
    -moz-appearance: textfield;
  }
  .block1{
    width: 1488px;
    height: 356px;
    margin-left: 394px;
    margin-top: 28px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .block2{
    width: 1488px;
    height: 599px;
    margin-left: 394px;
    margin-top: 23px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .waitForPayBack{
    height: 24px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 51px;
    color: #707070;
    margin-top: 27px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .tips{
    height: 41px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 41px;
    color: #EB84B0;
    margin-top: 20px;
  }
  .annotation{
    width: 360px;
    height: 80px;
    margin-top: 26px;
  }
</style>
