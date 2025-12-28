<script setup>
  import {useRoute} from "vue-router";
  let route=useRoute()
</script>

<template>
<div class="detail">
  <div>
    <a :href="route.query.url">
      {{route.query.title}}
    </a>
    <br>
    {{route.query.ctime}}
  </div>
  <div>
    <img :src="route.query.picUrl"/>
  </div>
  <div>
    {{route.query.source}}
  </div>
  <div>
    {{route.query.description}}
  </div>
</div>
</template>

<style scoped>
.detail{
  width: 100vw;
  height: 100vh;
  border: 1px solid blue;
}
</style>