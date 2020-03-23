<template>
  <div class="container con">
    <ul class="goodsList">
      <li>
        <div class="img"></div>
        <div class="moreDetail">电影详情</div>
        <div class="price">价格</div>
        <div class="count">版权时间</div>
        <div class="allprice">总价</div>
        <div class="del"></div>
      </li>
      <li v-for="(item,index) in carMovie" :key="index">
        <div class="imgCon">
          <img class="img" :src="item.images.small" alt />
        </div>
        <div class="moreDetail">
          <div class="name">名称：{{item.title}}</div>
          <div class="year">上映年份：{{item.year}}</div>
          <div class="durations">播放时长：{{item.durations[0]}}</div>
        </div>
        <div class="price">
          <span>单价：</span>
          <span>{{item.collect_count | price}}(元)/10年</span>
        </div>
        <div class="count">
          <span>数量：</span>
          <span>
            <span class="reduce" @click="reduceA(index)"></span>
            <span>{{item.account}}0年</span>
            <span class="add" @click="addA(item)"></span>
          </span>
        </div>
        <div class="allprice">
          <span>总价：</span>
          <span>¥ {{item.collect_count * item.account | price}} (元)</span>
        </div>
        <div class="del" @click="delMovieList(index)">
          <div>
            <span class="delText">删除</span>
          </div>
        </div>
      </li>
    </ul>
    <ul class="pay">
      <h3>订单统计</h3>
      <li class="littleC">
        <span>小计:</span>
        <span>
          版权共计
          <span class="payAcount">{{this.$store.state.totalNumber}}</span>年
        </span>
      </li>
      <li class="totalPrice">
        <span>总价:</span>
        <span>¥ {{allPrice | price}}(元)</span>
      </li>
      <button class="payButton" @click="showAtt()">去支付</button>
    </ul>
    <div class="attention" v-if="attentionLoad">
      <div class="close" @click="closeAtt()"></div>
      <div class="attentionCon">
        <h3>注意</h3>
        <div>要获得版权授权需要找享有著作权的人，而电影作品的著作权由制片方享有，但编剧、导演、摄影、作词、作曲等作者享有署名权。</div>
      </div>
      <button class="next">下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "payPage",
  data() {
    return {
      attentionLoad: false,
      totalPrice: 0
    };
  },
  mounted() {
    //加载完毕，loading消失
    document.getElementById("appLoading").style.display = "none";
  },
  updated() {},
  filters: {},
  computed: {
    carMovie() {
      return this.$store.state.carMovie;
    },
    allPrice() {
      var allPrice = 0;
      var carMovie = this.carMovie;
      for (let i = 0; i < this.carMovie.length; i++) {
        allPrice += carMovie[i].collect_count * carMovie[i].account;
      }
      return allPrice;
    }
  },
  methods: {
    showAtt() {
      if (this.carMovie.length > 0) {
        this.attentionLoad = true;
      }
    },
    closeAtt() {
      this.attentionLoad = false;
    },
    //删除相同电影
    delMovieList(index) {
      this.$store.commit("subShopcar", { index: index, subAll: true });
    },
    // 删除一个电影
    reduceA(index) {
      console.log("2")
      this.$store.commit("subShopcar", { index: index, subAll: false });
    },
    // 增加一个电影
    addA(item) {
      this.$store.commit("setShopCar", item);
    }
  }
};
</script>


<style scoped>
.con {
  padding-top: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
}

/* goodsList */

.goodsList {
  margin: 10px;
  flex: 70%;
  font-weight: 550;
}

.goodsList > li {
  margin: 10px;
  background-color: #eee;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
}
.goodsList > li:nth-child(1) {
  font-size: 20px;
}
.goodsList > li > div:nth-child(2),
.goodsList > li > div:nth-child(3),
.goodsList > li > div:nth-child(5),
.goodsList > li > div:nth-child(4) {
  flex: 20%;
}
.goodsList > li > div:nth-child(1),
.goodsList > li > div:nth-child(6) {
  flex: 10%;
}
.goodsList > li > div:nth-child(1) {
  margin: 0 10px;
}
.goodsList > li > div:nth-child(3),
.goodsList > li > div:nth-child(4),
.goodsList > li > div:nth-child(5) {
  text-align: center;
}
.goodsList > li > div > span:nth-child(1) {
  display: none;
}
.img {
  width: 60px;
  height: 80px;
}
.name {
  color: red;
}

.count > span:nth-child(2) {
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}
.count > span:nth-child(2) > span:nth-child(2) {
  font-size: 16px;
  color: red;
}
.add,
.reduce {
  display: inline-block;
  width: 20px;
  height: 20px;
  position: relative;
  top: 5px;
  cursor: pointer;
}
.add {
  background-image: url(../assets/jia.png);
  background-size: 20px auto;
  margin-left: 5px;
}
.reduce {
  background-image: url(../assets/jian.png);
  background-size: 20px auto;
  margin-right: 5px;
}
.del > div {
  width: 30px;
  height: 30px;
  background-image: url(../assets/del.png);
  background-size: 30px;
  margin: 0 auto;
  cursor: pointer;
}
.delText {
  display: none;
}
/* pay */

.pay {
  flex: 30%;
  align-self: flex-start;
  background-color: #eee;
  margin-top: 20px;
  padding-bottom: 10px;
}
.pay > h3 {
  border-bottom: #343a40 1px solid;
  margin-top: 10px;
  padding-bottom: 10px;
  color: black;
}
.pay > li {
  margin: 10px 0;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: #343a40 1px solid;
}
.pay > li > span:nth-child(1) {
  flex: 30%;
  text-align: center;
}
.pay > li > span:nth-child(2) {
  flex: 70%;
}
.payAcount {
  color: red;
}
.payButton {
  display: block;
  margin: 0 auto;
  width: 50%;
  height: 35px;
  background-color: #343a40;
  border: none;
  border-radius: 8px;
  padding: 0 0 10px 0;
  color: #ffffff;
  font-size: 20px;
  line-height: 35px;
  font-weight: 550;
}

/* attention */

.attention {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 300px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: #eee;
  border-radius: 8px;
  border: #343a40 1px solid;
  font-size: 16px;
  text-indent: 2rem;
}
.attentionCon {
  border-top: #343a40 1px solid;
  border-bottom: #343a40 1px solid;
  padding-bottom: 10px;
}
.attentionCon > h3 {
  color: red;
  font-weight: 550;
}
.attentionCon > div {
  padding: 0 10px;
}
.next {
  width: 40%;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #343a40;
  color: #ffffff;
}
.close {
  align-self: flex-end;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background-image: url(../assets/dell.png);
  background-size: 20px auto;
}

@media screen and (max-width: 768px) {
  .con {
    padding-top: 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }

  /* .goodsList  */
  .goodsList {
    margin: 10px;
  }
  .goodsList > li:nth-child(1) > div {
    display: none !important;
  }
  .goodsList > li:nth-child(1) > div:nth-child(2) {
    display: block !important;
    font-size: 25px;
    height: 50px;
    line-height: 50px;
    border-bottom: none;
    text-align: center;
  }
  .goodsList > li {
    margin: 10px;
    background-color: #eee;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }
  .goodsList > li > div:nth-child(1),
  .goodsList > li > div:nth-child(2) {
    border-bottom: 1px gray solid;
    margin: 0;
  }

  .goodsList > li > div:nth-child(3),
  .goodsList > li > div:nth-child(4),
  .goodsList > li > div:nth-child(5),
  .goodsList > li > div:nth-child(6) {
    flex: 100%;
    text-align: center;
    border-bottom: 1px gray solid;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
  }
  .goodsList > li > .imgCon {
    flex: 40%;
    height: 80px;
    position: relative;
  }
  .goodsList > li > .moreDetail {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 60%;
    height: 80px;
  }
  .img {
    width: 60px;
    height: 80px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  .del > div {
    width: 30%;
    height: 30px;
    line-height: 30px;
    background-color: #343a40;
    color: #ffffff;
    margin: 0 auto;
    border-radius: 5px;
    background-image: none;
    cursor: pointer;
  }
  .delText {
    display: block;
    font-size: 14px;
    font-weight: 550;
  }
  /* pay */

  .pay {
    align-self: flex-start;
  }
}
</style>