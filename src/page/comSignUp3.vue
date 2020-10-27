<template>
  <div>
    <div>
      <heading style="background-color: rgb(74,73,76);"></heading>
    </div>
    <div class="all">
      <div class="container1">
        <div class="title">用户注册</div>
        <div class="progress">
          <img src="../../static/signup/bpoint.png" class="point">
          <img src="../../static/signup/bline.png" class="line">
          <img src="../../static/signup/bpoint.png" class="point">
          <img src="../../static/signup/bline.png" class="line">
          <img src="../../static/signup/bpoint.png" class="point">
        </div>
        <div class="progress_name">
          <div class="text" style="margin-right: 100px;">个人信息</div>
          <div class="text" style="margin-right: 100px;">企业信息</div>
          <div class="text">完成注册</div>
        </div>

        <div class="form1">
          <div class="hang1">
            <div class="label1">设置密码</div>
            <el-input v-model="password1" placeholder="请输入密码" id="cinput" show-password></el-input>
          </div>
          <img src="../../static/signup/xuxian.png">
          <div class="hang1">
            <div class="label1">确认密码</div>
            <el-input v-model="password2" placeholder="请输入密码" id="cinput" show-password></el-input>
          </div>
        </div>

        <div class="last">
          <img @click="backTo2" class="button" src="../../static/signup/last.png">
          <img @click="signup" class="button" src="../../static/signup/finished.png">
        </div>

      </div>
    </div>
  </div>
</template>

<script src="js/vue.js"></script>
<script src="js/vue-resource.js"></script>
<script>
  import heading from "../components/heading.vue"
  export default {
    name: "comSignUp3",
    components: {
      heading,
    },
    data() {
      return {
        password1: "",
        password2: "",
        name : this.$route.params.name,
        email : this.$route.params.email,
        tel : this.$route.params.tel,
        cname : this.$route.params.cname,
        scale : this.$route.params.scale,
        registerInfo : this.$route.params.registerInfo,
        legalPeople : this.$route.params.legalPeople,
        capital: this.$route.params.capital,
        kind: this.$route.params.kind,
        conAddress: this.$route.params.conAddress,
        comTel: this.$route.params.comtel,
      }
    },
    methods: {
      backTo2: function() {
        this.$router.push({
          path: '/comSignUp2'
        })
      },
      signup: function() {
        this.$http({
          url: 'http://host.tanhuiri.cn:19527/registration/bank',
          method: 'POST',
          // 请求体重发送的数据
          data: {
            "address": this.$data.conAddress,
            "avatar":"",
            "businessLicenseUrl": "string",
            "businessRegistrationInfo": this.$data.registerInfo,
            "email": this.$data.eamil,
            "enterpriseCategory": this.$data.kind,
            "enterpriseLegalPerson": this.$data.kind,
            "enterpriseName": this.$data.cname,
            "enterpriseScale": this.$data.scale,
            "enterpriseTel": this.$data.comTel,
            "idCardBackUrl": "string",
            "idCardFrontUrl": "string",
            "name": this.$data.name,
            "neo4jId": 0,
            "password": this.$data.password1,
            "phone": this.$data.tel,
            "registeredCapital": 0
          },
          // 设置请求头
          headers: {
            'Content-Type': 'x-www-from-urlencoded'
          }
        }).then(function() {
          // 请求成功回调
          console.log("注册成功")
        }, function() {
          // 请求失败回调
        });
      }

    }
  }
</script>

<style>
  .all {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: 900px;
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #F5F6FA;
    border: 1px solid #2CB8B9;
    border-radius: 15px;
  }

  .title {
    margin-top: 30px;
    font-size: 35px;
    color: #2CB8B9;
    font-weight: 700;
  }

  .progress {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 80px;
  }

  .point {
    width: 30px;
    height: 30px;
  }

  .line {
    width: 150px;
    height: 1px;
  }

  .progress_name {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .text {
    width: 102px;
    height: 24px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 41px;
    color: #2CB8B9;
  }

  .form1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 542px;
    height: auto;
    margin-top: 45px;
    background-color: #FFFFFF;
  }

  .hang1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 5px;
    height: 40px
  }

  .label1 {
    width: 160px;
    font-size: 22px;
    margin-left: 50px;
    color: #707070;
  }

  #cinput {
    width: 70%;
    height: 40px;
    font-size: 20px;
    border: #FFFFFF;
    -webkit-appearance: none;
    -moz-appearance: none;

  }

  .last {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 30%;
    height: 70px;
    margin-top: 50px;
  }

  .button {
    width: 44%;
    height: auto;
    margin-right: 50px;
    margin-bottom: 45px;
  }
</style>
