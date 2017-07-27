<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import "../static/css/main.css";
@import "../static/iconfont/iconfont.css";
#app{max-width: 500px;margin: 0 auto}
</style>
