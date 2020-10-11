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
export default {
  name: 'App'
}
</script>

<style>
#app {
}
</style>
