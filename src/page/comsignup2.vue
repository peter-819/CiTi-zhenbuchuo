<template>
  <div>
    <div><heading style="background-color: rgb(74,73,76);"></heading></div>
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
          <div v-for="(item,index) in input" class="inputkuai" :key="index">
            <div class="hang1">
              <div class="label1">{{item.name}}</div>
              <el-input v-model="item.modelname" :placeholder="item.ph" id="cinput"></el-input>
            </div>
            <img src="../../static/signup/xuxian.png" width="85%"></img>
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
        input:[
          {name:"企业名称", modelname:"comname", ph:"请输入企业名称"},
          {name:"企业规模", modelname:"scale", ph:"请输入企业规模"},
          {name:"工商注册信息", modelname:"signinfo", ph:"请输入工商注册信息"},
          {name:"企业法人", modelname:"legalperson", ph:"请输入企业法人"},
          {name:"注册资本", modelname:"capital", ph:"请输入注册资本"},
          {name:"行业分类", modelname:"kind", ph:"请输入行业分类"},
          {name:"公司地址", modelname:"comaddress", ph:"请输入公司地址"},
          {name:"公司电话", modelname:"comtel", ph:"请输入公司联系电话"},
        ],
        info:{
          comname: '',
          scale:'',
          signinfo:'',
          legalperson:'',
          capital:'',
          kind:'',
          comaddress:'',
          comtel:'',
        }
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
     flex-direction: column;
     align-items: center;
     width: 40%;
     height: auto;
     margin-top: 45px;
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
