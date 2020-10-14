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
            <el-input v-model="name" placeholder="请输入企业名称" id="cinput"></el-input>
          </div>
          <img src="../../static/signup/xuxian.png"></img>
          <div class="hang1">
            <div class="label1">企业规模</div>
            <el-input v-model="email" placeholder="请输入您的邮箱" id="cinput"></el-input>
          </div>
          <img src="../../static/signup/xuxian.png"></img>
          <div class="hang1">
            <div class="label1">工商注册信息</div>
            <el-input v-model="tel" placeholder="请输入工商注册信息" id="cinput"></el-input>
          </div>
          <div class="hang1">
            <div class="label1">企业法人</div>
            <el-input v-model="tel" placeholder="请输入企业法人代表" id="cinput"></el-input>
          </div>
          <div class="hang1">
            <div class="label1">注册资本</div>
            <el-input v-model="tel" placeholder="请输入企业注册资本" id="cinput"></el-input>
          </div>
          <div class="hang1">
            <div class="label1">行业分类</div>
            <el-input v-model="tel" placeholder="可点击右侧标识查看" id="cinput"></el-input>
          </div>
          <div class="hang1">
            <div class="label1">公司地址</div>
            <el-input v-model="tel" placeholder="请输入详细地址" id="cinput"></el-input>
          </div>
          <div class="hang1">
            <div class="label1">企业联系电话</div>
            <el-input v-model="tel" placeholder="请输入有效联系电话" id="cinput"></el-input>
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
         name: '',
         email:'',
         tel:'',
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
     height: 380px;
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
