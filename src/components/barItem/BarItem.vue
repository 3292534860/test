<template>
	<div id="item" @click="clickRouter()">
		<div v-if="isShow && switchVall">
			<slot name="activeImg"></slot>
		</div>
		<div v-else-if="isShow && !switchVall" id="imgParent">
			<slot name="activeImg"></slot>
		</div>
		<div v-else>
			<slot name="img"></slot>
		</div>
		<div :style="ActiveColor" v-if="!(isShow && !switchVall)">
			<slot name="context"></slot>
		</div>
	</div>
</template>

<script>

  export default {
    name: "BarItem",
    props: {
      path: String,
      activeFont: {
        type: String,
        default: "blue"
      },
      ifGood: {
        type: String
      }
    },
    methods: {
      clickRouter() {
        this.$router.replace(this.path);
      },
    },
    computed: {
      isShow() {
        return this.$route.path.indexOf(this.path) != -1;
      },
      ActiveColor() {
        return this.isShow ? {color: this.activeFont} : {};
      },
      switchVall() {
        return this.ifGood == "true";
      }
    }
  }
</script>

<style scoped>
	#item {
		flex: 1;
		text-align: center;
		font-size: 10px;
	}

	#item img {
		margin-top: 5px;
		width: 24px;
		height: 24px;
	}

	#item #imgParent img {
		margin-top: 6px;
		width: 35px;
		height: 35px;
	}

</style>