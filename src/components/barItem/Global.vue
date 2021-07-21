<template>
  <div id="app">
    <router-view></router-view>
    <bar>
      <slot name="bottom"></slot>
    </bar>
  </div>
</template>

<script>
  import Bar from "../bar/Bar";
  export default {
    name: "Global",
    components: {
      Bar
    }
  }
</script>
<style>

</style>
