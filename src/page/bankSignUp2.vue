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
          <img src="../../static/signup/bline.png" class="line">
          <img src="../../static/signup/bpoint.png" class="point">
        </div>
        <div class="progress_name">
          <div class="text1" style="margin-right: 100px;">个人信息</div>
          <div class="text1">完成注册</div>
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
<<<<<<< HEAD
          <img @click="backTo1" class="button" src="../../static/signup/last.png"></img>
          <img @click="signup" class="button" src="../../static/signup/finished.png"></img>
=======
          <img @click="backTo1" class="button" src="../../static/signup/last.png">
          <img class="button" src="../../static/signup/finished.png">
>>>>>>> 469cec11215c26908d29e65ba0d3c3401fcca00b
        </div>

      </div>
    </div>
  </div>
</template>

<script src="js/vue.js"></script>
<script src="js/vue-resource.js"></script>
<script>
  import heading from "../components/heading.vue"
<<<<<<< HEAD
  export default {
    name: "banksignup2",
    components: {
      heading,
    },
=======
  export default{
  	name :"bankSignUp2",
  	components: {
  	  heading,
  	},
>>>>>>> 469cec11215c26908d29e65ba0d3c3401fcca00b
    data() {
      return {
        password1: '',
        password2: '',
        name: this.$route.query.name,
        email: this.$route.query.email,
        tel: this.$route.query.tel,
        position: this.$route.query.position,
      }
    },
<<<<<<< HEAD
    mounted() {
      console.log(this.$data.name),
        console.log(this.$data.email)
    },
    methods: {
      backTo1: function() {
        this.$router.push({
          path: '/bankSignUp1'
        })
      },
      signup: function() {
        let vm = this
        this.$http({
          url: 'http://host.tanhuiri.cn:19527/registration/bank',
          method: 'POST',
          // 请求体重发送的数据
          data: {
            "bankName": "zhongguoyinhang",
            "email": vm.$data.email,
            "name": vm.$data.name,
            "password": vm.$data.password1,
            "phone": vm.$data.tel,
            "position": vm.$data.position,
            "workCertificateUrl": "44444444"
          },
          // 设置请求头
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function() {
          // 请求成功回调
          console.log("注册成功！")
        }, function() {
          // 请求失败回调
        });
      },
    },
=======
    methods:{
  	  backTo1:function () {
        this.$router.push({path:'/bankSignUp1'})
      }
    }
>>>>>>> 469cec11215c26908d29e65ba0d3c3401fcca00b
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

  .text1 {
    width: 102px;
    height: 24px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 41px;
    color: #2CB8B9;
  }

  .text2 {
    width: 102px;
    height: 24px;
    margin-left: 100px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 41px;
    color: #CACBCD;
  }

  .form1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 140px;
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
