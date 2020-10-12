<template>
  <div class="rectangle">
    <el-row>
      <el-col v-for="(item,index) in cols" :span="item.span" :offset="item.offset" :key="index">
        <div class="HeaderComponent" :style="item.sty" @click="item.func()">
          {{item.context}}
          <img v-if="item.src!=null" :src="item.src">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      let this_ = this
      return {
        cols: [
          {span: "2", context: "名字", offset: "1", sty: "font-size: 20px; opacity:0.9;"},
          {span: "2", context: "首页", offset: "9", sty: "font-weight:500; color: #2CB8B9;"},
          {
            span: "3", context: "借贷业务", func: function () {
              this_.$router.push({path: '/neo4j'})
            }
          },
          {span: "2", context: "新闻"},
          {span: "2", src: "./static/HomePage/message.png", offset: "2", sty: "margin-top:8px;"},
          {span: "1", src: "./static/HomePage/admin.png", sty: "margin-top:8px;"},

        ]
      };
    },
  }

</script>

<style>
  .rectangle {
    width: 100%;
    height: 74px;
    background-color: rgba(112,112,112,0.45);
  }

  .HeaderComponent {
    font-size: 26px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 74px;
    color: #FFFFFF;
  }
</style>
