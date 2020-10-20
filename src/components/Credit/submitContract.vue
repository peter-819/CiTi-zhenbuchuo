<template>
  <div id="submitContract">
    <div class="contract">
      <div style="display: flex;flex-direction: row;align-items: center;">
        <img src="/static/CreditHomePage/pic146.png">
        <div style="width: 127px;height: 51px;font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;line-height: 51px;color: #2CB8B9;">借贷合同</div>
      </div>
      <div class="contractContent">
        <div style="width: 523px;height: 18px;font-size: 18px;font-family: Source Han Sans CN;font-weight: 400;line-height: 31px;color: #707070;margin-left: 389px;margin-top: 45px;">
          （借贷合同内容，借款金额和其他要填写的东西都放在这里）
        </div>
      </div>
      <img src="/static/CreditHomePage/pic147.png">
    </div>
  </div>
</template>

<script>
    export default {
        name: "submitContract"
    }
</script>

<style scoped>
  #submitContract{
    width: 100%;
    height: 100%;
  }
 .contract{
   width: 1488px;
   height: 800px;
   margin-left: 372px;
   margin-top: 60px;;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #FFFFFF;
 }
  .contractContent{
    width: 1327px;
    height: 655px;
    background: #FFFFFF;
    border: 1px solid #707070;
  }
  .bg{
    background-color: #F5F6FA;
    position: fixed;
  }
</style>
