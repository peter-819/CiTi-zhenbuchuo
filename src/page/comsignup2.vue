<template>
  <div>
    <div><heading></heading></div>
    <div class="all">
      <div class="container1">
        <div class="title">用户注册</div>
        <div class="progress">
          <img src="../../static/signup/bpoint.png" class="point"></img>
          <img src="../../static/signup/bline.png" class="line"></img>
          <img src="../../static/signup/bpoint.png" class="point"></img>
          <img src="../../static/signup/gline.png" class="line"> </img>
          <img src="../../static/signup/gpoint.png" class="point"></img>
        </div>
        <div class="progress_name">
          <div class="text1">个人信息</div>
          <div class="text1">企业信息</div>
          <div class="text2">完成注册</div>
        </div>
        <div class="form1">
          <div class="hang1">
            <div class="label1">企业名称</div>
            <el-input v-model="comname" placeholder="请输入企业名称" id="cinput"></el-input>
          </div>
          <img src="../../static/signup/xuxian.png" style="z-index: 99;  width:85%"></img>
          <div class="hang1">
            <div class="label1">企业规模</div>
            <div class="icons">
              <img src="../../static/signup/middle.png" class="icon" style="margin-left: 20px;"> </img>
              <img src="../../static/signup/small.png" class="icon"> </img>
              <img src="../../static/signup/xsmall.png" class="icon" style="margin-right: 80px;"> </img>
              <img src="../../static/signup/question.png" class="icon" style=""></img>
            </div>
          </div>
          <img src="../../static/signup/xuxian.png" style="z-index: 99; width:85%"></img>
          <div class="hang1">
            <div class="label1">工商注册信息</div>
            <el-input v-model="signinfo" placeholder="请输入工商注册信息" id="cinput"></el-input>
          </div>
          <img src="../../static/signup/xuxian.png" style="z-index: 99; width:85%"></img>
          <div class="hang1">
            <div class="label1">企业法人</div>
            <el-input v-model="legalperson" placeholder="请输入企业法人代表" id="cinput"></el-input>
          </div>
          <img src="../../static/signup/xuxian.png" style="z-index: 99; width:85%"></img>
          <div class="hang1">
            <div class="label1">注册资本</div>
            <el-input v-model="capital" placeholder="请输入企业注册资本" id="cinput"></el-input>
          </div>
          <img src="../../static/signup/xuxian.png" style="z-index: 99; width:85%"></img>
          <div class="hang1">
            <div class="label1" style="margin-right: -13px;">行业分类</div>
            <el-input v-model="kind" placeholder="可点击右侧标识查看" id="cinput"></el-input>
            <img src="../../static/signup/question.png"></img>
          </div>
          <img src="../../static/signup/xuxian.png" style="z-index: 99; width:85%"></img>
          <div class="hang1">
            <div class="label1">公司地址</div>
            <el-input v-model="comaddress" placeholder="请输入详细地址" id="cinput"></el-input>
          </div>
          <img src="../../static/signup/xuxian.png" style="z-index: 99; width:85%"></img>
          <div class="hang1">
            <div class="label1">联系电话</div>
            <el-input v-model="comtel" placeholder="请输入有效联系电话" id="cinput"></el-input>
          </div>
        </div>

        <div class="form2">
          <div class="hang2">
            <div class="label2">上传营业执照</div>
            <img class="IDCard" src="../../static/signup/card.png"></img>
          </div>
        </div>

        <div class="last">
          <img class="button" src="../../static/signup/last.png"></img>
          <img class="button" src="../../static/signup/next.png"></img>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import heading from "../components/heading.vue"
  export default{
  	name :"comsignup2",
  	components: {
  	  heading,
  	},
    data() {
      return {
         comname: '',
         scale:'',
         signinfo:'',
         legalperson:'',
         capital:'',
         kind:'',
         comaddress:'',
         comtel:'',
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
     flex-direction: column;
     align-items: center;
     width: 40%;
     height: 400px;
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
    width: 40%;
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
