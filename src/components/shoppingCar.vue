<template>
  <div class="car">
    <div v-show="showUp" class="showUp">
      <div><h4>影院现有{{number}}部电影</h4></div>
      <ul class="carLists">
        <li>
          <div class="movieLists">
            <span class="name">电影名称</span>
            <span class="acount">数量</span>
            <!-- <span>减少</span> -->
          </div>
        </li>
        <li v-for="(item,index) in carMovie" :key="index">
          <div class="movieLists">
            <span class="name">{{item.object.title}}</span>
            <span class="acount">{{item.account}}</span>
            <!-- <span @click="delMovieList(item)">-</span> -->
          </div>
        </li>
      </ul>
      <div class="toShopCar" @click="toPay()"><div>结账去...</div></div>
      <button style="display:none" class="toShopCar" @click="toParent()">点击传值</button>
    </div>
    <div class="carIcon" @click="showDetaid()">
      <span class="movieAcount" v-show="movieAcountLoading">{{totalNumber}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "shoppingCar",
  props: ["number"], //测试父组件向子组件传值
  data() {
    return {
      message: { name: "购物车", color: "red" }, //测试子组件向父组件传值
      showUp: false, // 电影详细列表
      movieAcountLoading: true //购物车上面的数字
    };
  },
  mounted() {},
  updated() {},
  activated(){
    this.showUp = false;
    this.movieAcountLoading = true;
  },
  computed: {
    carMovie() {
      return this.$store.state.carMovie;
    },
    totalNumber() {
      return this.$store.state.totalNumber;
    }
  },
  methods: {
    //测试子组件向父组件传值
    toParent() {
      this.$emit("sendToFather", this.message);
    },
    showDetaid() {
      var reg = this.showUp;
      var reg2 = this.movieAcountLoading;
      this.showUp = !reg;
      this.movieAcountLoading = !reg2;
    },
    toPay() {
      if (this.$store.state.carMovie.length > 0) {
        this.$router.push("/mall/pay");
      }
    }
  }
};
</script>


<style scoped>
/* car容器 */
.car {
  position: fixed;
  bottom: 160px;
  right: 3%;
  z-index: 100;
}

/* 展示所以购物车商品 */
.showUp {
  width: 260px;
  background-color: #ffffff;
}

.showUp>div:nth-child(1){
  border-bottom: 1px black solid;
  height: 45px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.showUp div h4{
  margin: 0;
  color: #2c2c2c;
  width: 90%;
  height: 34px;
  line-height: 34px;
  background-color: #343a40;
  color: #ffffff;
  border-radius: 5px;
}
.carLists{
  margin-bottom: 10px;
}
.carLists>li{
  border-bottom: 1px grey solid;
  margin: 0 5px;
}
.carLists>li:nth-child(1){
  font-size: 18px;
  font-weight: 550;
}

.movieLists {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  line-height: 30px;
}

.movieLists > span {
  flex: 20%;
}

.movieLists > span:nth-child(1) {
  flex: 60%;
  text-indent: 1rem;
}
.movieLists > span:nth-child(2){
  text-align: center;
}
/* 购物车图标 */
.carIcon {
  float: right;
  width: 32px;
  height: 32px;
background-image: url(../assets/car.png);
background-size: 32px auto; 
cursor: pointer;  
}

.movieAcount {
  display: block;
  position: relative;
  right: -50%;
  top: -50%;
  width: 28px;
  height: 22px;
  border-radius: 15px;
  background-color: floralwhite;
  font-size: 18px;
  text-align: center;
  color: red;
}


.toShopCar {
  display: block;
  height: 30px;
  cursor: pointer;
}

.toShopCar>div{
  width: 80%;
  border: 1px gray solid;
  text-align: center;
  margin: 0 auto;
  font-size: 18px;
  background-color: #343a40 !important;
  color: #ffffff;
  border-radius: 5px;
}
.toShopCar>div:hover{
  font-weight: 550;
}
</style>