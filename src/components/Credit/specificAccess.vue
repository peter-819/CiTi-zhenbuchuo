<template>
  <div id="specificAccess">
    <div class="block">
      <div style="display: flex;flex-direction: row;align-items:center;margin-left:615px;margin-top: 11px">
        <img src="/static/CreditHomePage/pic152.png">
        <div style="width: 192px;height: 51px;font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;line-height: 51px;color: #2CB8B9;">抗疫专项通道</div>
      </div>
      <div style="width: 224px;height: 30px;font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;line-height: 30px;color: #707070;margin-left: 103px;margin-top: 40px;">
        上传记录证明：
      </div>
      <img src="/static/CreditHomePage/pic160.png" style="margin-left: 291px;margin-top: 46px">
      <div style="width: 224px;height: 30px;font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;line-height: 30px;color: #707070;margin-left: 103px;margin-top: 40px;">
        添加声明：
      </div>
      <input type="text" class="annotation"></input>
      <img src="/static/CreditHomePage/pic147.png" style="margin-left: 648px;margin-top: 80px">
    </div>
  </div>
</template>

<script>
    export default {
        name: "specificAccess"
    }
</script>

<style scoped>
  #specificAccess{
    width: 100%;
    height: 100%;
  }
  .block{
    width: 1488px;
    height: 840px;
    background-color: #FFFFFF;
    margin-left: 394px;
    margin-top: 28px;
  }
  .annotation{
    width: 1282px;
    height: 149px;
    background: #FFFFFF;
    border: 1px solid #707070;
    margin-top: 30px;
    margin-left: 103px;
  }
</style>
