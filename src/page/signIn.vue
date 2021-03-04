<template>
  <div>
    <div><heading style="background-color: rgb(74,73,76);"></heading></div>
    <div class="all">
      <div class="container1">
        <div class="title">用户登录</div>
        <div class="form1">
          <div class="hang1">
            <div class="label1">输入账号</div>
            <el-input v-model="account" placeholder="请输入账号" id="cinput"></el-input>
          </div>
          <img src="../../static/signup/xuxian.png"></img>
          <div class="hang1">
            <div class="label2">输入密码</div>
            <el-input v-model="password" placeholder="请输入密码" id="cinput" show-password></el-input>
          </div>
        </div>

        <div class="last">
          <el-button style="background-color: #2CB8B9;margin-top: 32px;color: #FFFFFF;font-size:22px;width: 165px;height: 65px;border-radius: 10px"
           type="success" @click="signup">登 录</el-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import heading from "../components/heading.vue"
  	export default{
  		name :"signIn",
  		components: {
  		  heading,
  		},
      data() {
        return {
          account:"",
          password:"",
          identify:""
        }
      },
      created(){
        this.identify = this.$route.params.identify;
      },
      mounted() {
        console.log(this.identify)
      },
      methods:{
        signup(){
          let _this = this;
          if (this.identify === "bank"){
            this.$http.get(
              'http://127.0.0.1:19527/login/bank',
              {
                params:{
                  "password":_this.password,
                  "userName":_this.account
                }
              }
            ).then(function(res){
              console.log(_this.identify)
              if(res.body.code === '00000'){
                console.log("login success");
                this.$router.push({
                  path:'/bankLendRequire'
                });
              }
            }).catch(function(res){
              console.log(res);
            });
          } else {
            this.$http.get(
              'http://127.0.0.1:19527/login/enterprise',
              {
                params:{
                  "password":_this.password,
                  "userName":_this.account
                }
              }
            ).then(function(res){
              console.log(_this.identify)
              if(res.body.code === '00000'){
                console.log("login success");
                this.$router.push({
                  path:'/bankLendRequire'
                });
              }
            }).catch(function(res){
              console.log(res);
            });
            this.$router.push({
              path:'/CreditHomePage'
            });
          }
          location.reload();
        }
      }
  	}
</script>

<style>
  .all{
  	display: flex;
  	flex-direction: column;
    align-items: center;
  }
  .container1{
    display: flex;
    flex-direction: column;
    align-items: center;
  	width: 75%;
  	height: 760px;
  	margin-top: 50px;
    background-color: #F5F6FA;
    border:1px solid #2CB8B9;
    border-radius: 15px;
  }
  .title{
    margin-top: 100px;
    font-size: 35px;
    color: #2CB8B9;
    font-weight: 700;
  }
   .form1{
     display: flex;
     flex-direction: column;
     align-items: center;
     width: 542px;
     height: auto;
     margin-top: 90px;
     background-color: #FFFFFF;
   }
   .inputkuai{
     display: flex;
     flex-direction: column;
     align-items: center;
   }
   .hang1{
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     margin-top: 15px;
     margin-bottom: 5px;
     height:40px
   }
   .label1{
     width: 160px;
     font-size: 22px;
     margin-left: 50px;
     color: #707070;
   }
  .label2{
    width: 160px;
    font-size: 22px;
    margin-left: 65px;
    color: #707070;
  }
   #cinput{
     width: 70%;
     height: 40px;
     font-size: 20px;
     border: #FFFFFF;
     -webkit-appearance:none;
     -moz-appearance: none;

   }

  .last{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width:100%;
    height: 70px;
    margin-top: 54px;
  }
</style>
