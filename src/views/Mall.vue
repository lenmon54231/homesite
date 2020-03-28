<template>
  <div class="mainbody">
    <Nav></Nav>
    <main>
      <keep-alive exclude="detailPage">
        <router-view></router-view>
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
  mounted() {
    document.getElementById("appLoading").style.display = "none";
  },
  beforeDestroy() {
    document.getElementById("appLoading").style.display = "block";
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
.nav {
  left: 0 !important;
  width: 100%;
  opacity: 0.5;
}

/* carousel */

.carousel {
  height: 540px;
  background-color: lightblue;
  position: relative;
  overflow: hidden;
}

.linkToIndex {
  position: absolute;
  bottom: 5%;
  left: 50%;
  width: 20%;
  height: 4%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  border: 1px white solid;
}

.linkToIndex li {
  flex: 1;
  height: 100%;
  width: 25%;
  text-align: center;
  cursor: pointer;
  background-color: rgba(56, 68, 82, 0.1);
  border-right: 1px white solid;
}
.linkToIndex li:nth-child(4) {
  border-right: none;
}

.rollImg {
  width: 100%;
}

.toleft,
.toright {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 100%;
  cursor: pointer;
}
.toleft:hover,
.toright:hover {
  background-color: rgba(56, 68, 82, 0.1);
}

.toleft {
  left: 0;
}

.toleft::after {
  content: "";
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateX(-50%, -50%);
  background-image: url(../assets/left.png);
  background-size: 50px auto;
}
.toright {
  right: 0;
}
.toright::after {
  content: "";
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateX(-50%, -50%);
  background-image: url(../assets/right.png);
  background-size: 50px auto;
}

/* allTag */

.allTag {
  background-color: lightgreen;
  height: 300px;
}

/* mainLoading */
.mainLoading {
  min-height: 100vh;
}

.mainLoading h2 {
  text-align: center;
  line-height: 100vh;
}

/* allMovie */

.allMovie {
  background-color: lightyellow;
}

.mainMovie {
  border-bottom: black 2px solid;
}

.mainMovie ul li {
  padding: 15px;
}

.movieCategory {
  position: absolute;
  top: 6%;
  left: 50%;
  width: 20%;
  height: 25px;
  line-height: 25px;
  background-color: red;
  text-align: center;
  z-index: 100;
  margin-left: -48%;
}

.movieCategory::after {
  content: "";
  border-left: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid darkred;
  border-top: 5px solid darkred;
  position: absolute;
  left: 0;
  bottom: -10px;
}

.movieImg {
  position: relative;
  display: block;
  width: 270px;
  height: 400px;
  background-size: 100% auto;
}

.movieName {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}
.movieName > span {
  flex: 80%;
  margin-left: 20%;
}
.movieName .like {
  flex: 20%;
}

.movieDetail {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.movieDetail div {
  flex: 1;
  text-align: center;
}

.indexLists {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* lilist */

/* footer */
.footer {
  background-color: rgba(56, 68, 82, 0.8);
}

/* 媒体查询 */
@media screen and (max-width: 1700px) {
  .carousel {
    height: 370px;
    position: relative;
    overflow: hidden;
  }
  .rollImg {
    width: 100%;
  }
}

@media screen and (max-width: 1200px) {
  .carousel {
    height: 310px;
    position: relative;
    overflow: hidden;
  }
  .rollImg {
    width: 100%;
  }
}

@media screen and (max-width: 990px) {
  .movieImg {
    position: relative;
    display: block;
    width: 270px;
    height: 400px;
    background-size: 100% auto;
  }
  .carousel {
    height: 240px;
    position: relative;
    overflow: hidden;
  }
  .rollImg {
    width: 100%;
  }
  .linkToIndex {
    position: absolute;
    bottom: 5%;
    left: 50%;
    width: 40%;
    height: 4%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    border: 1px white solid;
  }
}

@media screen and (max-width: 768px) {
  .movieImg {
    position: relative;
    display: block;
    width: 135px;
    height: 200px;
    background-size: 100% auto;
  }
  .carousel {
    height: 240px;
    overflow: hidden;
  }
  .rollImg {
    height: 240px;
    width: 900px;
  }
}
</style>