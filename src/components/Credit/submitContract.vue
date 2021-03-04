<template>
  <div id="submitContract">
    <div class="contract">
      <div style="display: flex;flex-direction: row;align-items: center;">
        <img src="/static/CreditHomePage/pic146.png">
        <div style="width: 127px;height: 51px;font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;line-height: 51px;color: #2CB8B9;">借贷合同</div>
      </div>
      <div class="contractContent">
        <div style="width: 523px;height: 18px;font-size: 18px;font-family: Source Han Sans CN;font-weight: 400;line-height: 31px;color: #707070;margin-left: 389px;margin-top: 45px;">
          （借贷合同内容，借款金额和其他要填写的东西都放在这里）
        </div>
        <el-upload
          style="display:flex;flex-direction:column;align-items:center;justify-content: center;margin-top: 150px"
          ref="upload"
          multiple
          action="#"
          accept=".jpg,.pdf.,.png"
          :on-change="handleChange"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <div class="el-upload__text"><em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png/pdf文件，且不超过10MB</div>
        </el-upload>
      </div>
      <el-button style="background-color: #2CB8B9;margin-top: 32px;color: #FFFFFF;font-size:22px;width: 130px;height: 46px;border-radius: 10px" type="success" @click="submitUpload">提交</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "submitContract",
      data(){
        return{
          fileList:[]
        }
      },
        methods:{
          uploadFile(item,policyData) {
            console.log(item);
            var formData = new FormData();
            formData.append("OSSAccessKeyid", policyData.accessid);
            formData.append("key", policyData.dir + Date.parse(new Date()) + this.getSuffix(item));
            formData.append("policy", policyData.policy);
            formData.append("success_action_status", '200');
            formData.append("signature", policyData.signature);
            formData.append("file", item.raw);
            this.$ajax.post(
              policyData.host,
              formData
            )
            .then(
              result => {
                console.log(result.status)
              }
            )
            .catch(
              function (result) {
                console.log(result)
              }
            )
          },
          getPolicy(item) {
            if(this.getSuffix(item) == '.jpg' || this.getSuffix(item) == '.png') {
              return this.$ajax.get('http://127.0.0.1:19527/policy/image');
            }
            else{
              return this.$ajax.get('http://127.0.0.1:19527/policy/file');
            }
          },
          submitUpload() {
            for(let item of this.fileList){
              // this.$refs.upload.submit();
              this.getPolicy(item).then(
                (res)=>{this.uploadFile(item,res.data.data);}
              ).then((res)=>{
                this.fileList.splice(0,this.fileList.length);
              })
              .catch(
                function (result) {
                  console.log(result)
                }
              )
            }

          },
          // 用户选择文件的的闭包
          handleChange(file, fileList) {
            console.log(file)
            console.log(fileList)
            this.fileList.push(file)
          },
          handleRemove(file, fileList) {
            this.fileList.splice(this.fileList.indexOf(file),1)
            console.log(file, fileList);
          },
          beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
          },
          handlePreview(file) {
            console.log(file);
          },
          beforeUpload(file){
            var suffix = this.getSuffix(file)
            const isJPG = suffix === 'jpg'
            const isPNG = suffix === 'png'
            const isPDF = suffix === 'pdf'
            const isLt10M = file.size / 1024 / 1024 < 10;
            if (!isJPG && !isPNG && !isPDF) {
              this.$message.error('上传文件只能是jpg，png或pdf格式!');
            }
            if (!isLt10M) {
              this.$message.error('上传文件大小不能超过10MB!');
            }
            return isLt10M;
          },
          getSuffix(file){
            return '.' + file.name.substring(file.name.lastIndexOf('.')+1)
          }

      }
    }
</script>

<style scoped>
  #submitContract{
    width: 100%;
    height: 100%;
  }
 .contract{
   width: 1488px;
   height: 840px;
   margin-left: 394px;
   margin-top: 28px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #FFFFFF;
 }
  .contractContent{
    width: 1327px;
    height: 655px;
    background: #FFFFFF;
    border: 1px solid #707070;
  }

</style>
