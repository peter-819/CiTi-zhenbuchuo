<template>
  <div id="creditStatus">
    <div class="presentCredit">
      <div style="display: flex;flex-direction: row;align-items: center;line-height: 51px;">
        <img src="/static/CreditHomePage/pic90.png">
        <div class="context1">当前借贷额度</div>
      </div>
      <div style="width: 742px;height: 30px;">
        <el-progress :percentage="percentage" :format="format" :color="customColor" :text-inside="true" :stroke-width="20"></el-progress>
      </div>
      <div style="display: flex;flex-direction: row;align-items: center">
        <div class="usedQuota" :usedQuota="usedQuota">当前已借：{{usedQuota}}万</div>
        <div class="quota" :quota="quota" style="margin-left: 74px">最高借款额度：{{quota}}万</div>
      </div>
      <div class="tips">温馨提示：18万需在2021年8月30日前还清</div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "creditStatus",
      methods: {
        format(percentage) {
          return percentage === 100 ? '30万' : `${percentage}%`;
        }
      },
      data(){
        return{
          percentage:'(usedQuota/quota)',
          customColor:'#2CB8B9',
          usedQuota:'18',
          quota:'30'
        }
      }
    }
</script>

<style scoped>
  #creditStatus{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .presentCredit{
    width: 1488px;
    height: 307px;
    position: absolute;
    left: 327px;
    top:102px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .context1{
    width: 192px;
    height: 51px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 51px;
    color: #2CB8B9;
  }
  .usedQuota{
    background-color: #C8ECFA;
    width: 200px;
    height: 36px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 36px;
    color: #2CB8B9;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .quota{
    background-color: #C8ECFA;
    width: 250px;
    height: 36px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 36px;
    color: #2CB8B9;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .tips{
    width: 498px;
    height: 24px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 24px;
    color: #EB84B0;
    margin-top: 32px;
    margin-left: 450px;
  }
</style>
