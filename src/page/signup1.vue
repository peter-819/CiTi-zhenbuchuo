<template>
  <div>
    <div><heading></heading></div>
    <div class="all">
      <div class="container1">
        <div class="title">用户注册</div>
      </div>
    </div>
  </div>
</template>

<script>
	import heading from "../components/heading.vue"
	export default{
		name :"signup1",
		components: {
		  heading,
		}
	}
</script>

<style>
	.all{
		display: flex;
		flex-direction: column;
	}
	.container1{
    display: flex;
    flex-direction: column;
		width: 100%;
		height: 88%;
		margin-top: 10px;
    background-color: #F5F6FA;
	}
  .title{
    font-size: 35px;
    color: #2CB8B9;
    font-weight: 700;
  }
</style>
