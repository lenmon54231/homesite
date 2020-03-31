<template>
  <div class="mainbody">
    <Nav :class="{navcolor}"></Nav>
    <main>
      <keep-alive exclude="detailPage">
        <router-view @sendToMall="getNavColor"></router-view>
      </keep-alive>
    </main>
    <Footer></Footer>
  </div>
</template>



<script>
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "mall",
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      //顶部nav变色
      navcolor: false
    };
  },
  mounted() {
    document.getElementById("appLoading").style.display = "none";
  },
  beforeDestroy() {
    document.getElementById("appLoading").style.display = "block";
  },
  methods: {
    getNavColor(data) {
      this.navcolor = data;
    }
  }
};
</script>

<style scoped>
html,
body {
  scroll-behavior: smooth;
}
/* 高亮 */
.light {
  background-color: lightsalmon !important;
}

/* main */
main {
  min-height: 100vh;
}

.mainbody {
  background-color: #121212;
}

/* Nav */
.mainbody /deep/ .nav {
  background-color: transparent !important;
}
.navcolor {
  background-color: #1b1e21;
}
.footer{
  background-color: #1b1e21;
}
</style>