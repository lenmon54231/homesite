<template>
  <div class="imgCon">
      <img class="miniImg" src="../../public/images/mini.jpg" alt="小程序" />
      <img class="miniIcon" src="../../public/images/miniCon.png" alt="小程序" />
  </div>
</template>
<script>
export default {
  name: "minipro"
};
</script>
<style scoped>
.imgCon {
  position: fixed;
  bottom: 150px;
  right: 3%;
  z-index: 100;
  cursor: pointer;
}
.imgCon:hover> .miniImg {
  display: block;
}
.miniIcon {
    position: absolute;
    top: 0;
    right: 0;
  width: 32px;
  height: 32px;
}
.miniImg {
  display: none;
  position: absolute;
  top: 0;
  right: 32px;
  width: 130px;
  height: 130px;
}
</style>
