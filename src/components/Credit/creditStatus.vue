<template>
  <div id="creditStatus">
    <div class="presentCredit">
      <div style="display: flex;flex-direction: row;align-items: center;line-height: 51px;margin-top: 20px;">
        <img src="/static/CreditHomePage/pic90.png">
        <div class="title">当前借贷额度</div>
      </div>
      <div style="width: 742px;height: 30px;margin-top: 38px;">
        <el-progress :percentage="percentage" :format="format" :color="customColor" :text-inside="true" :stroke-width="20"></el-progress>
      </div>
      <div style="display: flex;flex-direction: row;align-items: center;margin-top: 39px;">
        <div class="usedQuota" :usedQuota="usedQuota">当前已借：{{usedQuota}}万</div>
        <div class="quota" :quota="quota" style="margin-left: 74px">最高借款额度：{{quota}}万</div>
      </div>
      <div class="tips" :loanNeedToPay="loanNeedToPay" :timeNeedToPay="timeNeedToPay">温馨提示：{{loanNeedToPay}}万需在{{timeNeedToPay}}前还清</div>
      <img src="/static/CreditHomePage/line43.png" style="margin-top: 9px;margin-left: 400px;">
    </div>
    <div class="creditInfo">
      <div style="display: flex;flex-direction: row;align-items: center;line-height: 51px;margin-top: 0px;">
        <img src="/static/CreditHomePage/pic90.png">
        <div class="title" style="width: 257px">企业借贷机制资料</div>
      </div>
      <div style="display: flex;flex-direction: row;justify-content: center;margin-top: 58px;">
        <div style="display: flex;flex-direction:column;float: left;">
          <div v-for="(item)  in infoList1" :Title="item.Title" :Content="item.Content">
            <p><span class="detailTitle">{{item.Title}}</span>:<span class="detailInfo"> {{item.Content}}</span></p>
          </div>
        </div>
        <div style= "display: flex;flex-direction:column;float: left;margin-left: 153px">
          <div v-for="(item) in infoList2" :Title="item.Title" :Content="item.Content">
            <p><span class="detailTitle" >{{item.Title}}</span>:<span class="detailInfo"> {{item.Content}}</span></p>
          </div>
        </div>
      </div>
      <div style="display: flex;flex-direction: row;align-items: center;margin-top: 78px;">
        <img src="/static/CreditHomePage/pic95.png">
      </div>
    </div>
    <div class="socialWeb">
      <div style="display: flex;flex-direction: row;justify-content:center;align-items: center;line-height: 51px;margin-top: -200px;">
        <img src="/static/CreditHomePage/pic90.png">
        <div class="title" style="width: fit-content">企业社会网络表现</div>
      </div>
      <div style="width: 484px;height: 30px;font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;line-height: 51px;color: #2CB8B9;margin-top: 143px;">
        （备注：社会网络展示放在此处）
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
          loanNeedToPay:'18',
          timeNeedToPay:'2020年11月1日',
          infoList1:[
            {
              Title:'企业名称',
              Content:'不错子有限公司'
            },
            {
              Title:'企业工商注册信息',
              Content: '不错子有限公司'
            },
            {
              Title: '注册资本',
              Content: '130000',
            },
            {
              Title: '公司地址',
              Content:'xx省xx市xx区'
            }
          ],
          infoList2:[
            {
              Title:'企业规模',
              Content:'中'
            },
            {
              Title:'企业法人',
              Content: '不错子'
            },
            {
              Title: '行业分类',
              Content: '农林业',
            },
            {
              Title: '企业联系电话',
              Content:'xxxxxxxxxxxxxxxx'
            }
          ],
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
    font-size: 22px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 24px;
    color: #EB84B0;
    margin-top: 32px;
    margin-left: 400px;
  }
  .creditInfo{
    width: 1488px;
    height: 500px;
    margin-top:23px;
    margin-left: 372px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .detailTitle{
    width: 85px;
    height: 20px;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 34px;
    color: #707070;
  }
  .detailInfo{
    width: 168px;
    height: 24px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 41px;
    color: #707070;
  }
  .socialWeb{
    width: 1488px;
    height: 512px;
    background-color: #FFFFFF;
    margin-top: 23px;
    margin-left: 372px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


</style>
