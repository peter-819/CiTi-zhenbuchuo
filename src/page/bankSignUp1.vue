<template>
  <div>
    <div><heading style="background-color: rgb(74,73,76);"></heading></div>
    <div class="all">
      <div class="container1">
        <div class="title">用户注册</div>
        <div class="progress">
          <img src="../../static/signup/bpoint.png" class="point">
          <img src="../../static/signup/bline.png" class="line">
          <img src="../../static/signup/gline.png" class="line">
          <img src="../../static/signup/gpoint.png" class="point">
        </div>
        <div class="progress_name">
          <div class="text1">个人信息</div>
          <div class="text2">完成注册</div>
        </div>

        <div class="form1">
          <div v-for="(item,index) in input" class="inputkuai" :key="index">
            <div class="hang1">
              <div class="label1">{{item.name}}</div>
              <el-input v-model="item.getInfo" :placeholder="item.name" id="cinput"></el-input>
            </div>
            <img src="../../static/signup/xuxian.png" width="85%">
          </div>
        </div>

        <div class="form2">
          <div class="hang2">
            <div class="label2">上传工作证件</div>
            <img class="IDCard" src="../../static/signup/card.png">
          </div>
        </div>

        <div class="last">
          <img  @click="backToHome" class="button" src="../../static/signup/last.png"></img>
          <img @click="jumpTo2" class="button" src="../../static/signup/next.png"></img>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import heading from "../components/heading.vue"
  export default{
  	name :"bankSignUp1",
  	components: {
  	  heading,
  	},
    data() {
      return {
        input:[
          {name:"姓名", getInfo:"", ph:"请输入您的姓名"},
          {name:"邮箱", getInfo:"", ph:"请输入您的邮箱"},
          {name:"联系电话", getInfo:"", ph:"请输入您的联系电话"},
          {name:"任职岗位", getInfo:"", ph:"请输入您的工作岗位"},
        ],
      }
    },
    methods:{
      jumpTo2:function () {
        this.$router.push({
          path:'/bankSignUp2',
          query:{
            name:this.$data.input[0].getInfo,
            email:this.$data.input[1].getInfo,
            tel:this.$data.input[2].getInfo,
            position:this.$data.input[3].getInfo,
            }
          })
      },
      backToHome:function(){
        this.$router.push({path:'/'})
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
  	height: 900px;
  	margin-top: 30px;
    margin-bottom: 30px;
    background-color: #F5F6FA;
    border:1px solid #2CB8B9;
    border-radius: 15px;
  }
  .title{
    margin-top: 30px;
    font-size: 35px;
    color: #2CB8B9;
    font-weight: 700;
  }
  .progress{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 80px;
  }
  .point{
    width: 30px;
    height: 30px;
  }
  .line{
    width:150px;
    height: 1px;
  }
  .progress_name{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .text1{
     width: 102px;
     height: 24px;
     font-size: 24px;
     font-family: Source Han Sans CN;
     font-weight: 400;
     line-height: 41px;
     color: #2CB8B9;
   }
   .text2{
     width: 102px;
     height: 24px;
     margin-left: 100px;
     font-size: 24px;
     font-family: Source Han Sans CN;
     font-weight: 400;
     line-height: 41px;
     color: #CACBCD;
   }
   .form1{
     display: flex;
     flex-direction: column;
     align-items: center;
     width: 40%;
     height: auto;
     margin-top: 45px;
     background-color: #FFFFFF;
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
  .form2{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 200px;
    margin-top: 20px;
    background-color: #FFFFFF;
  }
  .hang2{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    height:150px
  }
  .label2{
    width: 250px;
    font-size: 22px;
    margin-left: 50px;
    color: #707070;
  }
  .last{
    display: flex;
    flex-direction: row;
    align-items: center;
    width:30%;
    height: 70px;
    margin-top: 50px;
  }
  .button{
    width:44%;
    height: auto;
    margin-right: 50px;
    margin-bottom: 45px;
  }
</style>
