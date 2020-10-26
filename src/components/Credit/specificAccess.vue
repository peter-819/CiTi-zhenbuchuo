<template>
  <div id="specificAccess">
    <div class="block">
      <div style="display: flex;flex-direction: row;align-items:center;margin-left:615px;margin-top: 11px">
        <img src="/static/CreditHomePage/pic152.png">
        <div style="width: 192px;height: 51px;font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;line-height: 51px;color: #2CB8B9;">抗疫专项通道</div>
      </div>
      <div style="width: 224px;height: 30px;font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;line-height: 30px;color: #707070;margin-left: 103px;margin-top: 40px;">
        上传记录证明：
      </div>
      <el-upload
        style="margin-left:103px;margin-top: 23px;width: 364px"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        ref="upload"
        multiple
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png/pdf文件，且不超过10MB</div>
      </el-upload>
      <div style="width: 224px;height: 30px;font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;line-height: 30px;color: #707070;margin-left: 103px;margin-top: 40px;">
        添加声明：
      </div>
      <el-input
        class="annotation"
        action="https://jsonplaceholder.typicode.com/posts/"
        type="textarea"
        :autosize="{ minRows: 6, maxRows: 6}"
        placeholder="请输入内容"
        v-model="textarea2"
        maxlength="500"
        show-word-limit>
      </el-input>
      <el-button style="background-color: #2CB8B9;color: #FFFFFF;font-size:22px;width: 130px;height: 46px;border-radius: 10px;margin-left: 658px;margin-top: 98px" type="success" @click="submitUpload">提交</el-button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "specificAccess",
      data(){
        return{
          fileList:[]
        }
      },
      methods:{
        submitUpload() {
          this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        handleSuccess(res, file) {
          this.url = URL.createObjectURL(file.raw);
        },
        beforeUpload(file){
          const isJPG = file.type === 'image/jpg';
          const isPNG = file.type === 'image/png';
          const isPDF = file.type === 'text/pdf'
          const isLt10M = file.size / 1024 / 1024 < 10;

          if (!isJPG & !isPNG && !isPDF) {
            this.$message.error('请上传正确格式的文件');
          }
          if (!isLt10M) {
            this.$message.error('上传文件大小不能超过10MB!');
          }
          return (isJPG || isPDF || isPNG) && isLt10M;
        }
      },

      data(){
        return{
          textarea2:''
        }
      }
    }
</script>

<style scoped>
  #specificAccess{
    width: 100%;
    height: 100%;
  }
  .block{
    width: 1488px;
    height: 840px;
    background-color: #FFFFFF;
    margin-left: 394px;
    margin-top: 28px;
  }
  .annotation {
    width: 1282px;
    height: 149px;
    background: #FFFFFF;
    margin-top: 30px;
    margin-left: 103px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
  }
</style>
