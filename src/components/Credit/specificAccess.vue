<template>
  <div id="specificAccess" style="overflow: auto">
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
        <div style="display: flex;flex-direction: column;align-items: center">
          <img src="/static/CreditHomePage/submit.png">
          <div class="el-upload__tip" slot="tip">只能上传jpg/png/pdf文件，且不超过10MB</div>
        </div>

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
      <el-button style="background-color: #2CB8B9;color: #FFFFFF;font-size:22px;width: 130px;height: 46px;border-radius: 10px;margin-left: 658px;margin-top: 98px;margin-bottom: 90px" type="success" @click="submitUpload">提交</el-button>
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
      methods: {
        uploadFile(item, policyData) {
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
          if (this.getSuffix(item) == '.jpg' || this.getSuffix(item) == '.png') {
            return this.$ajax.get('http://host.tanhuiri.cn:19527/policy/image');
          } else {
            return this.$ajax.get('http://host.tanhuiri.cn:19527/policy/file');
          }
        },
        submitUpload() {
          for (let item of this.fileList) {
            // this.$refs.upload.submit();
            this.getPolicy(item).then(
              (res) => {
                this.uploadFile(item, res.data.data);
              }
            ).then((res) => {
              this.fileList.splice(0, this.fileList.length);
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
          this.fileList.splice(this.fileList.indexOf(file), 1)
          console.log(file, fileList);
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${file.name}？`);
        },
        handlePreview(file) {
          console.log(file);
        },
        beforeUpload(file) {
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
        getSuffix(file) {
          return '.' + file.name.substring(file.name.lastIndexOf('.') + 1)
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
    height: auto;
  }
  .block{
    width: 1488px;
    height: auto;
    background-color: #FFFFFF;
    margin-left: 394px;
    margin-top: 28px;
  }
  .annotation {
    width: 1282px;
    height: 120px;
    background: #FFFFFF;
    margin-top: 30px;
    margin-left: 103px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
  }
</style>
