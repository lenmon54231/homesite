<template>
  <div class="resumeCon">
    <img class="resumeImg" src="https://limengtupian.oss-cn-beijing.aliyuncs.com/%E7%AE%80%E5%8E%86/Document-page-001.jpg" alt="简历" />
    <h3>
      <a href="https://limengtupian.oss-cn-beijing.aliyuncs.com/%E7%AE%80%E5%8E%86/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88_%E6%9D%8E%E8%92%99.pdf">pdf版本下载地址</a>
    </h3>
  </div>
</template>

<script>
export default {
  name: "resume",
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
