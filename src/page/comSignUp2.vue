<template>
  <div>
    <div><heading style="background-color: rgb(74,73,76);"></heading></div>
    <div class="all">
      <div class="container1">
        <div class="title">用户注册</div>
        <div class="progress">
          <img src="../../static/signup/bpoint.png" class="point">
          <img src="../../static/signup/bline.png" class="line">
          <img src="../../static/signup/bpoint.png" class="point">
          <img src="../../static/signup/gline.png" class="line">
          <img src="../../static/signup/gpoint.png" class="point">
        </div>
        <div class="progress_name">
          <div class="text1">个人信息</div>
          <div class="text1">企业信息</div>
          <div class="text2">完成注册</div>
        </div>

        <div class="form1">
          <div class="inputs">
            <div v-for="(item,index) in input" class="inputBlock" :key="index">
              <div class="hang1">
                <div class="label1">{{item.name}}</div>
                <el-input v-model="item.getInfo" :placeholder="item.ph" id="cinput"></el-input>
              </div>
              <img src="../../static/signup/xuxian.png" width="85%">
            </div>
          </div>
          <div class="details" style="height: 100%;">
            <img src="../../static/signup/question.png" style="margin-top: 85px;">
            <img src="../../static/signup/question.png"style="margin-top: 230px;">
          </div>
        </div>

        <div class="form2">
          <div class="hang2">
            <div class="label2">上传营业执照</div>
            <img class="IDCard" src="../../static/signup/card.png">
          </div>
        </div>

        <div class="last">
          <img  @click="backTo1" class="button" src="../../static/signup/last.png">
          <img  @click="jumpTo3" class="button" src="../../static/signup/next.png">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import heading from "../components/heading.vue"
  export default{
  	name :"comSignUp2",
  	components: {
  	  heading,
  	},
    data() {
      return {
        input:[
          {name:"企业名称", getInfo:"", ph:"请输入企业名称"},
          {name:"企业规模", getInfo:"", ph:"(大/中/小）"},
          {name:"工商注册信息", getInfo:"", ph:"请输入工商注册信息"},
          {name:"企业法人", getInfo:"", ph:"请输入企业法人"},
          {name:"注册资本", getInfo:"", ph:"请输入注册资本"},
          {name:"行业分类", getInfo:"", ph:"请输入行业分类"},
          {name:"公司地址", getInfo:"", ph:"请输入公司地址"},
          {name:"公司电话", getInfo:"", ph:"请输入公司联系电话"},
        ],
        name : this.$route.query.name,
        email : this.$route.query.email,
        tel : this.$route.query.tel,
      }
    },
    methods:{
  	  backTo1: function () {
        this.$router.push({path:'/comSignUp1'})
      },
      jumpTo3:function () {
        this.$router.push({
          path:'/comSignUp3',
          query:{
            name:this.data.name,
            eamil:this.data.eamil,
            tel:this.data.tel,
            cname:this.$data.input[0].getInfo,
            scale:this.$data.input[1].getInfo,
            registerInfo:this.$data.input[2].getInfo,
            legalPeople:this.$data.input[3].getInfo,
            capital:this.$data.input[4].getInfo,
            kind:this.$data.input[5].getInfo,
            conAddress:this.$data.input[6].getInfo,
            comtel:this.$data.input[7].getInfo,
          }
        })
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
  	height: auto;
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
     width: 170px;
     height: 24px;
     font-size: 24px;
     font-family: Source Han Sans CN;
     font-weight: 400;
     line-height: 41px;
     color: #2CB8B9;
     text-align: center;
   }
   .text2{
     width: 170px;
     height: 24px;
     font-size: 24px;
     margin-left: -1px;
     font-family: Source Han Sans CN;
     font-weight: 400;
     line-height: 41px;
     color: #CACBCD;
     text-align: center;
   }
   .form1{
     display: flex;
     flex-direction: row;
     width: 542px;
     height: 500px;
     margin-top: 45px;
     background-color: #FFFFFF;
   }
   .inputBlock{
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
     width: 230px;
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
   .icons{
     width: 70%;
     display: flex;
     flex-direction: row;
     align-items: center;
   }
   .icon{
     margin-left: 10px;
     margin-right: 10px;
   }
  .form2{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 542px;
    height: 170px;
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
