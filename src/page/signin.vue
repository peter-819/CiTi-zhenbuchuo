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
            <div class="label1">输入密码</div>
            <el-input v-model="password" placeholder="请输入密码" id="cinput"></el-input>
          </div>
        </div>

        <div class="last">
          <img class="button" src="../../static/signup/signin.png"></img>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import heading from "../components/heading.vue"
  	export default{
  		name :"signin",
  		components: {
  		  heading,
  		},
      data() {
        return {
          account:"",
          password:"",
        }
      },
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
  	height: 900px;
  	margin-top: 30px;
    margin-bottom: 30px;
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
     width: 40%;
     height: auto;
     margin-top: 128px;
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
  .button{
    width:13%;
    height: auto;
    margin-bottom: 45px;
  }
</style>
