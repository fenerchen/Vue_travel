<template>
  <div id="app">
    <!-- 使用 keep-alive时，再次进入页面调用activited周期函数，不调用mounted-->
    <keep-alive>
       <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  //  name: 'App'，只做导出使用，具体叫什么名字无所谓，在使用的时候也可以重新起名
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
