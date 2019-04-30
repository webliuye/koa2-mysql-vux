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

body {
  background-color: #fbf9fe;
  width: 100%;
  height: 100%;
  background: rgba(68, 168, 235, 0.438);
}
#app {
  width: 100%;
  height: 100%;
}
</style>
