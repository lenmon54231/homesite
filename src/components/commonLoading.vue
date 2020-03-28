<template>
  <div id="appLoading">
    <div class="loadingText">
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
      <span>部署于新加坡轻量应用服务器，水管较小，加载速度较慢，请稍后......</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {};
  },
  mounted() {
    document.getElementById("appLoading").style.display = "none";
    setTimeout(() => {
      this.$router.push({ path: "/login" });
    }, 2000);
  }
};
</script>

<style scoped>
#appLoading {
  width: 100vw;
  height: 100vh;
  position: relative;
}

#appLoading .loadingText {
  position: absolute;
  display: block;
  font-size: 30px;
  line-height: 30px;
  top: 50%;
  left: 50%;
  text-align: center;
  font-weight: 700;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
}

.spinner {
  margin: 20px auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.spinner > div {
  flex: 0 0 auto;
  background-color: #34495e;
  width: 6px;
  height: 80px;
  margin: 0 5px;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }

  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }

  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>