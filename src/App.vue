<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import '@vant/touch-emulator'
  import 'element-ui/lib/theme-chalk/index.css'
  import ElementUI from 'element-ui'
  import Vue from 'vue'


  Vue.use(ElementUI);

  import Chat from 'jwchat'

  Vue.use(Chat)
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    overflow: hidden;
  }

  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
</style>
