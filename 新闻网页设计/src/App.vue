<template>
  <div class="fenlei">
    <div class="item">
      <router-link :to="{path:'/TNews',query:{id:'接口连接成功'}}">体育新闻</router-link></div>
    <div class="item">
      <router-link :to="{path:'/CarNews',query:{id:'接口连接成功'}}">汽车新闻</router-link></div>
    <div class="item">
      <router-link :to="{path:'/FinanceNews',query:{id:'接口连接成功'}}">财经新闻</router-link></div>
    <div class="item">
      <router-link :to="{path:'/FenleiNews',query:{id:'接口连接成功'}}">国内新闻</router-link></div>
    <div class="item">
      <router-link :to="{path:'/EnvironmentalConsulting',query:{id:'接口连接成功'}}">环保新闻</router-link></div>
    <div class="item">
      <router-link :to="{path:'/EsportsConsulting',query:{id:'接口连接成功'}}">电竞新闻</router-link></div>
  </div>
  <router-view/>
</template>

<style>
/*
link 没有访问
hover active
 */
a:link{
  color: #1531be;
  font-weight: 600;
}
a:active{
  color: antiquewhite;
}
.fenlei{
  display: flex;
  width: 100vw;
  height: 8vh;
  background-color: #1ff5ce;
}
.fenlei .item{
  flex:1;
  color: white;
}
body{
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
</script>