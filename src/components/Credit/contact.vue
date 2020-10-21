<template>
  <div id="contact">
    <JwChat-index
      :taleList="list"
      @enter="bindEnter"
      v-model="inputMsg"
      :toolConfig="tool"
    />
  </div>
</template>

<script>
    export default {
        name: "contact"
    }
</script>

<style scoped>
  #contact{
    width: 1488px;
    height: 307px;
    margin-left: 372px;
    margin-top: 28px;
  }
</style>
