<template>
  <div class="container">
    <div class="newsList">
      <div class="item" v-for="news in newsList">
        <div class="left">
          <router-link :to="{path:'/NewsDetail',query:{ctime:news.ctime,description:news.description,picUrl:news.picUrl,source:news.source,title:news.title,url:news.url}}">
            <img :src="news.picUrl" alt="" width="100%" height="100%"/>
          </router-link>
        </div>
        <div class="right">{{news.title}}<br>
          {{news.ctime}}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newsList{
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.newsList .item{
  width: 99vw;
  height: 15vh;
  background-color: white;
  boder:1px solid gray;
  display: flex;
  flex-direction: row;
}
.newsList .item .left{
  flex: 3;
  border:1px solid gray;
}
.newsList .item .right{
  flex: 7;
  border: 1px solid gray;
}
</style>

<script setup>
import {onMounted, onUpdated, ref} from 'vue';
import {useRoute} from "vue-router";
//定义空数组用来后续接收
let newsList=ref([])
let route=useRoute();
onMounted(()=>{
  alert(route.query.id)
  //发网络请求
  fetch('https://apis.tianapi.com/auto/index?key=20e84cb76ba31c3032c970d3ef8d4223&num=10')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        newsList.value=data.result.newslist
      })
      .catch(error => console.error('Error:', error));
})
</script>