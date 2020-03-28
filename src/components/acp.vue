<template>
  <div class="resumeCon">
    <img class="resumeImg" src="https://limengtupian.oss-cn-beijing.aliyuncs.com/%E7%AE%80%E5%8E%86/%E9%98%BF%E9%87%8C%E4%BA%91ACP%E8%AF%81%E4%B9%A6.jpg" alt="简历" />
    <h3>
      <a href="https://limengtupian.oss-cn-beijing.aliyuncs.com/%E7%AE%80%E5%8E%86/%E9%98%BF%E9%87%8C%E4%BA%91ACP%E8%AF%81%E4%B9%A6.jpg">图片下载地址</a>
    </h3>
  </div>
</template>

<script>
export default {
  name: "acp",
  mounted() {
    document.getElementById("appLoading").style.display = "none";
  }
};
</script>

<style scoped>
.resumeCon {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}
.resumeCon .resumeImg {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  min-width: 620px;
  max-width: 1240px;
  border-bottom: teal 1px solid;
}
.resumeCon > h3{
    margin: 20px 0;
}
</style>
