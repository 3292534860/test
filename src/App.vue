<template>
  <div id="app">
    <global>
      <div slot="bottom" id="barChilren">
        <bar-item path="/profile" active-font="red" if-good="false">
          <img slot="activeImg" src="./assets/img/profileActive.svg">
          <img slot="img" src="./assets/img/profile.svg">
          <div slot="context">首页</div>
        </bar-item>
        <bar-item path="/moneyManage" active-font="blue" if-good="false">
          <img slot="activeImg" src="./assets/img/moneyManageActive.svg">
          <img slot="img" src="./assets/img/moneyManage.svg">
          <div slot="context">理财</div>
        </bar-item>
        <bar-item path="/avaluate" active-font="pink" if-good="false">
          <img slot="activeImg" src="./assets/img/avaluateActive.svg">
          <img slot="img" src="./assets/img/avaluate.svg">
          <div slot="context">口碑</div>
        </bar-item>
        <bar-item path="/message" active-font="green" if-good="false">
          <img slot="activeImg" src="./assets/img/messageActive.svg">
          <img slot="img" src="./assets/img/message.svg">
          <div slot="context">消息</div>
        </bar-item>
        <bar-item path="/my" active-font="purple" if-good="false">
          <img slot="activeImg" src="./assets/img/myActive.svg">
          <img slot="img" src="./assets/img/my.svg">
          <div slot="context">我的</div>
        </bar-item>
      </div>
    </global>
  </div>
</template>

<script>
  import Global from "./components/barItem/Global";
  import BarItem from "./components/barItem/BarItem";
  export default {
    name: "App",
    components: {
      BarItem,
      Global
    }
  }
</script>
<style>

</style>
