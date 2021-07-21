<template>
	<div id="bar">
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: "Bar"
  }
</script>

<style scoped>
	#bar #barChilren{
		display: flex;
		background: #e7e7e7;

		text-align: center;
		flex: 1;/*多项平均分布*/

		position: fixed;
		left: 0px;
		right: 0px;
		bottom: 0px;

		height: 49px;

		box-shadow: 0 -1px 1px rgba(100,100,100,.5);
	}
</style>