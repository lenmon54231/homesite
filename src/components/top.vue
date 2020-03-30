<template>
  <div class="topCon">
    <a class="top" @click="scrollToTop">
      <span></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "top",
  methods: {
    scrollToTop() {
      this.common.toTop(0);
    }
  }
};
</script>

<style scoped>
.topCon {
  position: fixed;
  bottom: 75px;
  right: 3%;
  z-index: 100;
}
.top {
  width: 32px;
  height: 32px;
  background-color: #384452;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  color: #fff;
  border-radius: 12px;
}

.top span {
  display: block;
  width: 30px;
  height: 30px;
  background-image: url(../assets/show_less.png);
  background-size: 30px 30px;
}

.top:hover {
  background-color: #fff;
  color: black;
  font-weight: 700;
}
.top:hover span {
  filter: drop-shadow(20px 0 #000);
  position: relative;
  left: -20px;
}
</style>