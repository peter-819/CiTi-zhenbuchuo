<template>
  <div id="creditStatus">
    <div class="presentCredit">
      <div style="display: flex;flex-direction: row;align-items: center;line-height: 51px;margin-top: 0px;">
        <img src="/static/CreditHomePage/pic90.png">
        <div class="title">当前借贷额度</div>
      </div>
      <div style="width: 742px;height: 30px;margin-top: 30px;">
        <el-progress :percentage="percentage" :format="format" :color="customColor" :text-inside="true" :stroke-width="20"></el-progress>
      </div>
      <div style="display: flex;flex-direction: row;align-items: center;margin-top: 67px;">
        <div class="usedQuota" :usedQuota="usedQuota">当前已借：{{usedQuota}}万</div>
        <div class="quota" :quota="quota" style="margin-left: 74px">最高借款额度：{{quota}}万</div>
      </div>
      <div class="tips">温馨提示：18万需在2021年8月30日前还清</div>
    </div>
    <div class="creditInfo">
      <div style="display: flex;flex-direction: row;align-items: center;line-height: 51px;margin-top: 0;">
        <img src="/static/CreditHomePage/pic90.png">
        <div class="title" style="width: 257px">企业借贷机制资料</div>
      </div>
      <div style="display: flex;flex-direction: row;justify-content: center;">
        <div style="display: flex;flex-direction: column;align-items: center;">
          <div v-for="value in infoList1">
            {{+':'+value}}
          </div>
          <div style= "display: flex;flex-direction: column;align-items: center;">
            <div v-for="(key,value) in infoList2">
              {{key+':'+value}}
            </div>
          </div>
        </div>
      </div>
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
          percentage:'60',
          customColor:'#2CB8B9',
          usedQuota:'18',
          quota:'30',
          infoList1:{
            firmName:'不错子有限公司',
            firmSignInfo:'不错子有限公司',
            signAsset:'130000',
            firmAddr:'xx省xx市xx区',
          },
          infoList2:{
            firmScale:'中',
            artificialPerson:'不错子',
            industryType:'农林业',
            firmTele:'xxxxxxxxxxxxx'
          }
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
    margin-left: 372px;
    margin-top:28px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title{
    width: 192px;
    height: 51px;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 51px;
    color: #2CB8B9;
    margin-left: 27px;
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
    margin-left: 400px;
  }
  .creditInfo{
    width: 1488px;
    height: 533px;
    margin-top:23px;
    margin-left: 372px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .detailInfo{
    width: 85px;
    height: 20px;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 34px;
    color: #707070;
  }
</style>
