<template>
  <div class="container">
    <h1 class="welcome">欢迎来到新闻咨询</h1>
    <img class="dynamic-img" src="@/assets/s.jpg" alt="动态图片" />
    <p class="z">做新闻，我们是专！业！！的！！！</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh; /* 使内容垂直居中 */
  background-color: #f0f0f0; /* 背景颜色 */
}
.welcome {
  font-size: 3rem;
  color: #1b8da1;
  margin-bottom: 5px; /* 文字与图片的距离 */
  text-shadow: 2px 2px 5px rgba(169, 17, 17, 0.5); /* 文字阴影 */
  animation: glow 1.5s infinite alternate; /* 使用动画 */
  display: inline-block; /* 使动画效果更明显 */

}
.description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 10px; /* 文字与图片的距离 */
}
.dynamic-img {
  width: 900px; /* 图片宽度 */
  height: auto; /* 自适应高度 */
  animation: bounce 2s infinite; /* 动画效果 */
}
.z {
  font-size: 3rem;
  font-weight: bold;
  color: #5f1ea4; /* 字体颜色 */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* 文字阴影 */
  animation: glow 1.5s infinite alternate; /* 使用动画 */
  display: inline-block; /* 使动画效果更明显 */
}

@keyframes glow {
  0% {
    text-shadow: 0 0 5px #ff5733, 0 0 10px #ff5733, 0 0 15px #ff5733;
    opacity: 1; /* 正常透明度 */
  }
  100% {
    text-shadow: 0 0 20px #ff5733, 0 0 30px #ff5733, 0 0 40px #ff5733;
    opacity: 0.8; /* 渐变透明度 */
  }
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>

<script setup>
</script>