<template>
  <div>
    <div class="searchBar">
      <input
        ref="searchMovie"
        id="searchMovie"
        type="text"
        placeholder="请稍等，获取数据中....."
        disabled="disabled"
        @input="doSearch"
      />
    </div>
    <div class="row carousel" ref="carousel">
      <ul class="linkToIndex">
        <li
          v-for="(item, index) in imgList"
          :key="index"
          @click="toIndex(index)"
          class="linkToIndexLi"
        >
          <img class="littleImg" :src="imgList[index].url" />
        </li>
      </ul>
      <div
        v-cloak
        :style="{ backgroundColor: imgList[currentIndex].bc }"
        class="rollImgCon"
        ref="imgBc"
      >
        <img class="rollImg" :src="imgList[currentIndex].url" />
      </div>
      <div class="toleft" @click="toLeft()"></div>
      <div class="toright" @click="toRight()"></div>
    </div>
    <div class="container">
      <div ref="lastMovie" v-if="lastMovie" class="row">
        <div class="col-lg-10 col-lg-offset-1 lastMovie">
          <div class="generalMovieTitle">
            <span style="fontSize: 26px">最新电影</span>
            <span>热播榜</span>
            <span>新片榜</span>
            <span>高分榜</span>
            <span>免费榜</span>
            <span>网大榜</span>
            <span>预告榜</span>
            <span>戏剧榜</span>
            <span>动作榜</span>
          </div>
          <div>
            <ul class="movieUl">
              <li v-for="(item,index) in lastMovie">
                <div @click="handToDetail(item.id)" class="generalMovieIMgCon">
                  <img class="generalMovieIMg" :src="item.images.medium" alt="剧照" />
                </div>
                <div style="fontSize:16px" class="movieTitle">{{item.title | title}}</div>
                <div class="pubdates">首映时间:{{item.pubdates[0] | pubdates}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="newMovie" class="row">
        <div ref="newMovie" class="col-lg-10 col-lg-offset-1 newMovie">
          <div class="generalMovieTitle">
            <span style="fontSize: 26px">即将上映</span>
          </div>
          <div>
            <ul class="movieUl">
              <li v-for="(item,index) in newMovie">
                <div @click="handToDetail(item.id)" class="generalMovieIMgCon">
                  <img class="generalMovieIMg" :src="item.images.medium" alt="剧照" />
                </div>
                <div style="fontSize:16px" class="movieTitle">{{item.title | title}}</div>
                <div class="pubdates">首映时间:{{item.pubdates[0] | pubdates}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div ref="weeklyMovie" v-if="weeklyMovie" class="row">
        <div class="col-lg-10 col-lg-offset-1 weeklyMovie">
          <div class="generalMovieTitle">
            <span style="fontSize: 26px">口碑电影</span>
          </div>
          <div>
            <ul class="movieUl">
              <li v-for="(item,index) in weeklyMovie">
                <div @click="handToDetail(item.id)" class="generalMovieIMgCon">
                  <img class="generalMovieIMg" :src="item.subject.images.medium" alt="剧照" />
                </div>
                <div style="fontSize:16px" class="movieTitle">{{item.subject.title | title}}</div>
                <div class="pubdates">首映时间:{{item.subject.pubdates[0] | pubdates}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div ref="rentMovie" class="col-lg-10 col-lg-offset-1 rentMovie">
          <div class="rentMovieTitle">
            <span style="fontSize: 26px">版权租用专区</span>
            <span class="rentText">在这里，你可以查看到全球评分最高的90部上映电影，并且可以通过租用的方式去获取版权，快去选购你中意的电影吧！</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-md-2 allTag">
            <div class="movieG" :class="{ movieG2: movieG2 }" ref="movieG">
              <h3>TOP90分类</h3>
              <ul ref="movieGul">
                <div v-if="genresLoading">
                  <!-- <li @click="toAll">
                    <span>全部</span>
                  </li> -->
                  <li>
                    <span>犯罪</span>
                  </li>
                  <li>
                    <span>剧情</span>
                  </li>
                  <li>
                    <span>科幻</span>
                  </li>
                  <li>
                    <span>喜剧</span>
                  </li>
                  <li>
                    <span>动画</span>
                  </li>
                  <li>
                    <span>传记</span>
                  </li>
                  <li>
                    <span>奇幻</span>
                  </li>
                  <li>
                    <span>纪录片</span>
                  </li>
                  <li>
                    <span>动作</span>
                  </li>
                </div>
                <li
                  v-else
                  v-for="(item, index) in movieGenres"
                  :key="index"
                  @click="toMovieGenres(index)"
                >
                  <span>{{ item.index }}</span>
                  <span>({{ item.list.length }})</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-10 allMovie">
            <div class="mainLoading" v-if="isLoading">
              <h2 class="mainLoadingTitle">{{ loadingIntext }}</h2>
            </div>
            <div class="mainMovie" v-else>
              <ul class="row sigleMovieList">
                <li v-for="(item, index) in items" :key="index" class="col-md-4 col-sm-4 col-xs-6">
                  <div class="sigleMovie">
                    <div>
                      <img class="movieImg" :src="item.images.small" @click="handToDetail(item.id)" />
                    </div>
                    <span class="movieCategory">{{ item.genres[0] }}</span>
                    <div class="movieName">
                      <span>{{ item.title }}</span>
                      <div class="like">{{ item.rating.average }}分</div>
                    </div>
                    <div class="price">价格：{{ item.collect_count | price }}元/10年</div>
                    <div class="movieDetail">
                      <div class="detail" @click="handToDetail(item.id)">查看内容</div>
                      <div class="buyIt" @click="buyTheMovie(item)">点击购买</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <ul id="indexLists" ref="indexLists">
              <div>
                当前页数:
                <span class="showindex" ref="showindex">{{ this.currentli }}</span>
                页
              </div>
            </ul>
          </div>
        </div>
      </div>
      <Shop :number="allMovie.length" @sendToFather="getChild"></Shop>
      <mini></mini>
    </div>
  </div>
</template>

<script>
import Shop from "@/components/shoppingCar.vue";
import mini from "@/components/minipro.vue";

//防抖函数
function debounce(fn, delay = 2000) {
  //可以放入项目中的公共方法中进行调用（鹅只是省事）
  var timer;
  return function() {
    var args = arguments;
    var ctx = this;
    var num = 0;
    if (timer) {
      clearTimeout(timer);
    }
    this.isLoading = true;
    this.loadingIntext = "搜索中......";
    if (this.$refs.searchMovie.value == "") {
      this.items = this.firstPMovie;
      this.clearLiLists();
      this.createLiLists(8);
      this.isLoading = false;
      this.loadingIntext = "请稍等......";
    } else {
      timer = setTimeout(() => {
        fn.apply(ctx, args); // this 指向vue
      }, delay);
    }
  };
}

var carouselTimer = ""; //定义轮播图变量

//滚轮事件
// 鼠标滚轮事件
function getWheelDelta(event) {
  if (event.wheelDelta) {
    return event.wheelDelta;
  } else {
    // 兼容火狐
    return -event.detail;
  }
}
// 鼠标滚动逻辑（全屏滚动关键逻辑）
function scrollMouse(event) {
  event.preventDefault();
  let delta = getWheelDelta(event);
  let locationNow = document.documentElement.scrollTop;
  if (delta < 0) {
    goDown(locationNow);
  } else {
    goUp(locationNow);
  }
}
function goDown(locationNow) {
  window.scrollTo(0, locationNow + 80);
}
function goUp(locationNow) {
  if (locationNow > 80) {
    window.scrollTo(0, locationNow - 80);
  } else {
    window.scrollTo(0, 0);
  }
}
// 鼠标滚轮监听，火狐鼠标滚动事件不同其他
if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
  document.addEventListener("mousewheel", scrollMouse, { passive: false });
} else {
  document.addEventListener("DOMMouseScroll", scrollMouse);
}

export default {
  name: "movieLists",
  components: {
    Shop,
    mini
  },
  data() {
    return {
      imgList: [
        {
          url:
            "https://limengtupian.oss-cn-beijing.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/1.jpg",
          bc: "rgb(0, 0, 0)"
        },
        {
          url:
            "https://limengtupian.oss-cn-beijing.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/2.jpg",
          bc: "rgb(5, 3, 5)"
        },
        {
          url:
            "https://limengtupian.oss-cn-beijing.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/3.jpg",
          bc: "rgb(17, 9, 1)"
        },
        {
          url:
            "https://limengtupian.oss-cn-beijing.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/4.jpg",
          bc: "rgb(0, 0, 0)"
        }
      ],
      //轮播图
      currentIndex: "0",
      showLight: false,
      timer: "0",
      loadingIntext: "请稍等......",
      isLoading: true,
      genresLoading: true,
      // 分类后的所有电影（包含index和list）
      movieGenres: [],
      // 分类页面中的电影
      movieGenres_index_list: [],
      // 当前页面显示的电影
      items: [],
      // 所有90部电影
      allMovie: [],
      // 全部电影中的第一页电影
      firstPMovie: [],
      //最新电影
      lastMovie: false,
      //即将上映电影
      newMovie: false,
      //口碑电影
      weeklyMovie: false,
      // 下方li的个数
      liIndexList: "",
      //当前第几个li
      currentli: "1",
      //左侧导航随动
      movieG2: false,
      //现在滚动位置
      scrollPosition: 0,
      //屏幕的宽度
      width: window.innerWidth,
      //顶部nav变色
      navcolor: false,
      //跳转顶部高度
      toTopHight:""
    };
  },
  created() {
    //获取最新电影
    this.axios
      .get("/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a")
      .then(res => {
        if (res.status == 200) {
          this.lastMovie = res.data.subjects.splice(0, 8);
        }
      })
      .catch(err => {
        this.lastMovie = false;
      });
    //获取即将上映电影
    this.axios
      .get("/v2/movie/coming_soon")
      .then(res => {
        if (res.status == 200) {
          this.newMovie = res.data.subjects.splice(0, 8);
        }
      })
      .catch(err => {
        this.newMovie = false;
      });
    //获取口碑电影
    this.axios
      .get("/v2/movie/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a")
      .then(res => {
        if (res.status == 200) {
          this.weeklyMovie = res.data.subjects.splice(0, 8);
        }
      })
      .catch(err => {
        this.weeklyMovie = false;
      });
    // 获取top250前12部电影列表
    this.axios.get("/v2/movie/top250?start=0&count=12").then(res => {
      if (res.status == 200) {
        this.items = res.data.subjects;
        this.firstPMovie = res.data.subjects;
        this.isLoading = false;
        this.createLiLists(8);
        this.inputOk();
      }
    });
    // 获取top250前90部电影列表
    this.axios.get("/v2/movie/top250?start=0&count=90").then(res => {
      if (res.status == 200) {
        var movieLists = res.data.subjects;
      }
      this.movieGenres = this.formMovieG(movieLists);
      this.genresLoading = false;
      this.allMovie = movieLists;
    });
  },
  mounted() {
    document.getElementById("appLoading").style.display = "none";
    this.common.toTop(0);
    let ul = this.$refs.movieGul; //再获得数据后，ul首部添加一个li（“全部”）
    let ulfirst = ul.children[0];
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = "全部";
    li.appendChild(span);
    ul.insertBefore(li, ulfirst);
    li.addEventListener("click", () => {
      this.toAll();
    });
  },
  activated() {
    document.getElementById("appLoading").style.display = "none";
    // 默认跳转到之前浏览的位置
    this.scrollPosition = this.$store.state.scrollPosition;
    this.common.toTop(this.scrollPosition);
    // 轮播图片
    carouselTimer = setInterval(() => {
      this.timer++;
      if (this.timer == 3) {
        this.toRight();
        this.timer = 0;
      }
    }, 2000);
    //侧边栏随动
    if (this.width > 990) {
      window.addEventListener("scroll", this.navScroll);
    }
    //顶部nav变色
    window.addEventListener("scroll", this.judgeNavColor);
  },
  updated() {},
  deactivated() {
    window.removeEventListener("scroll", this.navScroll);
    window.removeEventListener("scroll", this.judgeNavColor);
    clearInterval(carouselTimer);
    carouselTimer = null;
  },
  computed: {
  },
  watch: {},
  filters: {
    pubdates: function(value) {
      return value.slice(0, 10);
    },
    title: function(value) {
      if (value.length > 9) {
        return value.slice(0, 9).concat("......");
      } else {
        return value;
      }
    }
  },
  methods: {
    //测试子组件向父组件传值
    getChild(data) {
      console.log(data);
    },
    // // 轮播图
    toIndex(index) {
      this.currentIndex = index;
      this.timer = 0;
    },
    toLeft() {
      if (this.currentIndex == 0) {
        this.currentIndex = 3;
      } else {
        this.currentIndex = this.currentIndex - 1;
      }
      this.timer = 0;
    },
    toRight() {
      if (this.currentIndex == 3) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = parseInt(this.currentIndex) + 1;
      }
      this.timer = 0;
    },
    //跳转到顶部的封装函数(针对屏幕大小跳转)
    linkToTop() {
      if (this.width > 1700) {
        let tem = this.toTopHight - 40
        this.common.toTop(tem);
      } else if (1700 >= this.width && this.width > 1200) {
        this.common.toTop(430);
      } else if (1200 >= this.width && this.width > 990) {
        this.common.toTop(350);
      } else if (990 >= this.width && this.width > 768) {
        this.common.toTop(300);
      } else if (this.width <= 768) {
        this.common.toTop(180);
      }
    },
    // 点击跳转页数
    gotoIndex(e, showindex) {
      var index = document.querySelectorAll(".index");
      this.isLoading = true;
      var out = setInterval(() => {
        if (this.allMovie.length == 90) {
          if (this.liIndexList == 8) {
            this.items = this.allMovie.slice(
              parseInt(e) * 12 - 12,
              parseInt(e) * 12,
              (this.isLoading = false)
            );
          } else {
            this.items = this.movieGenres_index_list.slice(
              parseInt(e) * 12 - 12,
              parseInt(e) * 12,
              (this.isLoading = false)
            );
          }
          clearInterval(out); //单页面应用，定时器并不会自动关闭，需要手动清除
        }
      }, 100);
      this.linkToTop();
      this.currentli = e;
      //排他 清除所有的li高亮，然后添加对应的高亮
      for (let i = 0; i < index.length; i++) {
        index[i].classList.remove("light");
      }
      index[e - 1].classList.add("light");
    },
    // 生成下方li列表
    createLiLists(Lilength) {
      let that = this; //内部函数中调用函数，用that存储this指向，再调用，that.xxx
      var indexlists = this.$refs.indexLists;
      var showindex = this.$refs.showindex;
      for (let i = 1; i < Lilength; i++) {
        var node = document.createElement("li");
        var textIndex = document.createTextNode(i);
        node.appendChild(textIndex);
        indexlists.appendChild(node);
        node.className = "index";
        node.addEventListener("click", function() {
          that.gotoIndex(this.innerText, showindex); // that调用
        });
      }
      this.liIndexList = Lilength;
      this.currentli = "1";
    },
    // 清除li
    clearLiLists() {
      var indexlists = this.$refs.indexLists;
      var liS = indexlists.querySelectorAll(".index");
      // 清除lis，排他
      for (var i = liS.length - 1; i >= 0; i--) {
        indexlists.removeChild(liS[i]);
      }
    },
    // 生成带电影种类数组
    formMovieG(movieLists) {
      var movieGenres = [];
      for (let i = 0; i < movieLists.length; i++) {
        var nowGenres = movieLists[i].genres[0];
        if (toJudge(nowGenres)) {
          movieGenres.push({
            index: nowGenres,
            list: [movieLists[i]]
          });
        } else {
          for (let j = 0; j < movieGenres.length; j++) {
            if (movieGenres[j].index == nowGenres)
              movieGenres[j].list.push(movieLists[i]);
          }
        }
      }
      function toJudge(nowGenres) {
        for (let i = 0; i < movieGenres.length; i++) {
          if (movieGenres[i].index == nowGenres) {
            return false;
          }
        }
        return true;
      }
      return movieGenres;
    },
    // 跳转到对应种类电影
    toMovieGenres(index) {
      this.movieGenres_index_list = this.movieGenres[index].list;
      this.items = this.movieGenres[index].list.slice(0, 12);
      var lilists = parseInt(this.movieGenres[index].list.length / 12) + 2;
      this.clearLiLists();
      this.createLiLists(lilists);
      this.linkToTop();
    },
    // 跳转到全部电影
    toAll() {
      this.items = this.firstPMovie;
      this.clearLiLists();
      this.createLiLists(8);
      this.linkToTop();
    },
    // 点击跳转到详情
    handToDetail(movieId) {
      this.$router.push("/mall/detail/" + movieId);
    },
    //添加到购物车
    buyTheMovie(item) {
      this.$store.commit("setShopCar", item);
    },
    //搜索功能
    doSearch: debounce(function() {
      var searchMovieV = this.$refs.searchMovie.value;
      var res = this.allMovie;
      this.items = [];
      for (let i = 0; i < res.length; i++) {
        if (res[i].title.includes(searchMovieV)) {
          this.items.push(res[i]);
          this.clearLiLists();
          this.currentli = "1";
          this.isLoading = false;
          this.loadingIntext = "请稍等......";
        }
      }
      if (this.items.length == 0) {
        this.loadingIntext = "没有找到结果哟,3秒后自动返回，稍等......";
        this.isLoading = true;
        var setT = setTimeout(() => {
          this.items = this.firstPMovie;
          this.clearLiLists();
          this.createLiLists(8);
          this.isLoading = false;
          this.loadingIntext = "请稍等......";
          clearTimeout(setT);
        }, 3000);
      }
    }),
    //搜索input框能使用
    inputOk() {
      var inputOk = this.$refs.searchMovie;
      const inputOut = setInterval(() => {
        if (this.allMovie.length == 90) {
          inputOk.setAttribute("placeholder", "请输入电影名称搜索......");
          inputOk.disabled = "";
          clearInterval(inputOut);
        }
      }, 500);
      this.$once("hook:beforeDestroy", () => {
        clearInterval(inputOut);
      });
    },
    cleanValue() {
      this.$refs.searchMovie.value = "";
      this.items = this.firstPMovie;
    },
    //侧边栏随动
    navScroll() {
      let h1 = this.$refs.carousel ? this.$refs.carousel.offsetHeight : 0;
      let h2 = this.$refs.lastMovie ? this.$refs.lastMovie.offsetHeight : 0;
      let h3 = this.$refs.newMovie ? this.$refs.newMovie.offsetHeight : 0;
      let h4 = this.$refs.weeklyMovie ? this.$refs.weeklyMovie.offsetHeight : 0;
      let h5 = this.$refs.rentMovie ? this.$refs.rentMovie.offsetHeight : 0;
      let h = h1 + h2 + h3 + h4 + h5;
      this.toTopHight = h;
      this.scrollPosition = document.documentElement.scrollTop;
      var offtop = h - 50;
      if (document.body.clientWidth > 972) {
        if (this.scrollPosition > offtop) {
          this.movieG2 = true;
        } else {
          this.movieG2 = false;
        }
      }
      this.$store.commit("setScrollPosition", this.scrollPosition);
    },
    //topNav变色
    judgeNavColor() {
      this.navcolor = this.scrollPosition > 80 ? true : false;
      this.$emit("sendToMall", this.navcolor);
    }
  }
};
</script>

<style>
.movieG > ul > li,
.movieG > ul > div > li {
  width: 100%;
  background-color: grey;
  font-size: 20px;
  text-indent: 45px;
  height: 38px;
  line-height: 38px;
  position: relative;
  cursor: pointer;
}
.movieG > ul > li:hover,
.movieG > ul > div > li:hover {
  font-weight: 550;
}

.movieG > ul > li::before,
.movieG > ul > div > li::before {
  content: "";
  display: inline-block;
  height: 20px;
  width: 20px;
  background-image: url(../assets/movie.png);
  background-size: 20px auto;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
}

/* 电影下方索引 */
#indexLists {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #ffffff;
  margin-top: 10px;
}
#indexLists div {
  font-size: 16px;
  margin-right: 10px;
}
#indexLists .index {
  flex: 1 1 40px;
  height: 40px;
  width: 50px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
#indexLists .index:hover {
  background: linear-gradient(to right bottom, #34495e, 60%, #16a085);
  border-radius: 5px;
  color: #1b1e21;
}
/* 高亮 */
.light {
  border-radius: 8px;
  background: linear-gradient(to right bottom, #34495e, 60%, #16a085);
}

@media screen and (max-width: 990px) {
  #indexLists {
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    align-items: center;
    width: 100%;
  }
  #indexLists .index {
    flex: 1 1 40px;
    height: 40px;
    width: 50px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
  /* movieG */

  .movieG h3 {
    margin: 0;
    background-color: #1b1e21;
    color: #ffffff;
    padding: 20px 0;
    font-size: 18px;
  }
  .movieG > ul > div,
  .movieG > ul {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-content: center;
  }
  .movieG > ul > li,
  .movieG > ul > div > li {
    flex: 20%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    /* background-color: grey; */
    height: 38px;
    line-height: 38px;
    cursor: pointer;
    text-indent: 0;
  }
  .movieG > ul > li::before,
  .movieG > ul > div > li::before {
    content: "";
    height: 10px;
    width: 10px;
    background-image: url(../assets/movie.png);
    background-size: 10px auto;
    position: absolute;
    top: 50%;
    left: 2px;
  }
  .movieG > ul > li > span,
  .movieG > ul > div > li > span {
    flex: 0 0 auto;
  }
  .movieG > ul > li > span:nth-child(1),
  .movieG > ul > div > li > span:nth-child(1) {
    text-indent: 12px;
  }
}
@media screen and (max-width: 768px) {
  /* movieG */
  .movieG > ul > li,
  .movieG > ul > div > li {
    font-size: 14px;
    position: relative;
    cursor: pointer;
  }
  #indexLists .index {
    flex: 0 1 40px;
    height: 40px;
    width: 50px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
}
</style>

<style scoped>
.mainLoading {
  min-height: 100vh;
}
.mainLoading h2 {
  text-align: center;
  line-height: 100vh;
}
.carousel {
  height: 530px;
  position: relative;
  overflow: hidden;
  margin: 0 0 20px 0;
  background-color: black;
}
.linkToIndex {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.linkToIndex li {
  flex: 1;
  width: 25%;
  text-align: center;
  cursor: pointer;
}
.littleImg {
  width: 180px;
  height: 60px;
}
.rollImgCon {
  width: 100%;
  height: 450px;
}
.rollImg {
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 450px;
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
.lastMovie,
.newMovie,
.weeklyMovie {
}
.rentMovie {
  height: 80px;
  color: #ffffff;
}
.rentMovieTitle {
  line-height: 80px;
}
.generalMovieTitle {
  height: 40px;
  color: #ffffff;
  margin-bottom: 10px;
}
.generalMovieTitle > span {
  height: 30px;
  margin-right: 20px;
  font-size: 18px;
  background-color: #25252b;
  border-radius: 15px;
  cursor: pointer;
}
.movieUl {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  color: #ffffff;
  height: 340px;
  margin-bottom: 10px;
}
.movieUl > li {
  flex: 0 0 auto;
  margin-right: 10px;
}
.generalMovieIMgCon {
  width: 180px;
  height: 300px;
  position: relative;
  overflow: hidden;
}
.generalMovieIMgCon > .generalMovieIMg {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
.rentText {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #ffffff;
  border-radius: 18px;
  text-indent: 1rem;
  margin-left: 20px;
}
.allTag {
  padding: 0;
  padding-right: 20px;
}
.movieG {
  width: 250px;
}
.movieG2 {
  position: fixed !important;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  top: 70px;
}
.movieG h3 {
  margin: 0;
  background-color: #1b1e21;
  color: #ffffff;
  padding: 20px 0;
}
.mainLoading {
  min-height: 100vh;
}
.mainLoading h2 {
  text-align: center;
  line-height: 100vh;
}
.searchBar {
  width: 33.33333vw;
  height: 40px;
  position: fixed;
  left: 50%;
  top: 5px;
  transform: translateX(-50%);
  z-index: 9999;
  background-color: hsla(0, 0%, 100%, 0.1);
  border-radius: 28px;
}
.searchBar > input {
  z-index: 9999;
  width: 80%;
  height: 40px;
  line-height: 40px;
  border-radius: 8px 0 0 8px;
  border: 0;
  font-size: 16px;
  text-indent: 1rem;
  outline: none;
  padding: 0;
  background: rgba(255, 25, 255, 0);
  color: hsla(0, 0%, 100%, 0.87);
}
.searchBar > input::-webkit-input-placeholder {
  color: hsla(0, 0%, 100%, 0.87);
}
.searchBar > input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: hsla(0, 0%, 100%, 0.87);
}
.searchBar > input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: hsla(0, 0%, 100%, 0.87);
}
.searchBar > input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: hsla(0, 0%, 100%, 0.87);
}
.searchBar > button {
  border-top: 1px solid;
}
.mainMovie ul li {
  padding: 15px;
}
.sigleMovieList {
  border-bottom: grey 1px solid;
}
.sigleMovie {
  width: 270px;
  background-color: #343a40 !important;
  color: #ffffff;
}
.sigleMovie > div:nth-child(1) {
  overflow: hidden;
  height: 400px;
  position: relative;
}
.movieCategory {
  display: block;
  position: absolute;
  top: 6%;
  left: 5px;
  width: 20%;
  height: 25px;
  line-height: 25px;
  background-color: red;
  text-align: center;
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
  display: block;
  width: 276px;
  height: 406px;
  background-size: 100% auto;
  position: absolute;
  top: -3px;
  left: -3px;
  cursor: pointer;
}
.movieName {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px grey solid;
  margin-top: 10px;
  padding-bottom: 10px !important;
}
.movieName > span {
  flex: 80%;
  text-align: center;
  font-size: 18px;
}
.movieName .like {
  flex: 20%;
  color: red;
}
.price {
  border-bottom: gray 1px solid;
  text-align: center;
  font-size: 15px;
  padding: 10px 0;
}
.movieDetail {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;
}
.movieDetail div {
  padding: 10px 0;
  flex: 1;
  text-align: center;
  cursor: pointer;
}
.detail {
  border-right: 1px grey solid;
}
.detail:hover,
.buyIt:hover {
  background-color: #fff;
  color: #1b1e21;
}
/* 媒体查询 */
/* 大于1700px */
@media screen and (min-width: 1700px) {
  .allTag {
    padding: 0;
    padding-right: 20px;
    margin-left: 8.33333333%;
  }
  .allMovie {
    width: 66.66666667%;
  }
  .mainMovie > ul > li {
    width: 25%;
  }
}
/* 小于1700px */
@media screen and (max-width: 1700px) {
  .carousel {
    height: 450px;
    position: relative;
    overflow: hidden;
  }
  .rollImgCon {
    width: 100%;
    height: 380px;
  }
  .rollImg {
    height: 380px;
  }
  .littleImg {
    width: 150px;
    height: 50px;
  }
  .movieG {
    position: absolute;
    width: 170px;
  }
}
/* 小于1200px */
@media screen and (max-width: 1200px) {
  .carousel {
    height: 370px;
    position: relative;
    overflow: hidden;
  }
  .rollImgCon {
    width: 100%;
    height: 310px;
  }
  .rollImg {
    height: 310px;
  }
  .littleImg {
    width: 120px;
    height: 40px;
  }
  .movieG {
    position: absolute;
    width: 136px;
  }
  .sigleMovie {
    width: 210px;
    background-color: #343a40 !important;
    color: #ffffff;
  }
  .sigleMovie > div:nth-child(1) {
    overflow: hidden;
    height: 310px;
    position: relative;
  }
  .movieImg {
    position: relative;
    display: block;
    width: 216px;
    height: 316px;
    background-size: 100% auto;
  }
}
/* 小于990px */
@media screen and (max-width: 992px) {
  .allTag {
    padding: 0;
  }
  .allMovie {
    background-color: #2c2c2c;
  }
  .movieImg {
    position: relative;
    display: block;
    width: 270px;
    height: 400px;
    background-size: 100% auto;
  }
  .carousel {
    height: 290px;
    position: relative;
    overflow: hidden;
  }
  .rollImgCon {
    width: 100%;
    height: 250px;
  }
  .rollImg {
    height: 250px;
  }
  .littleImg {
    width: 150px;
    height: 50px;
  }
  .movieG {
    position: static;
    width: 100%;
  }
}
/* 小于768px */
@media screen and (max-width: 768px) {
  .movieImg {
    position: relative;
    display: block;
    width: 135px;
    height: 200px;
    background-size: 100% auto;
  }
  /* carousel */
  .carousel {
    height: 200px;
    overflow: hidden;
  }
  .rollImgCon {
    width: 100%;
    height: 150px;
  }
  .rollImg {
    height: 150px;
  }
  .littleImg {
    width: 90px;
    height: 30px;
  }
  /* searchBar */
  .searchBar {
    height: 35px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px grey solid;
    padding: 5px 0;
  }

  .searchBar > div {
    font-size: 16px;
    color: lightcyan;
    margin-right: 10px;
    font-weight: 550;
  }

  .searchBar > input {
    height: 25px;
    line-height: 25px;
    width: 45%;
    position: relative;
    border: 0;
    font-size: 12px;
  }

  .searchBar > button {
    height: 25px;
    width: 25px;
    border-radius: 0 8px 8px 0;
    border: 0;
    padding: 0;
    position: absolute;
    color: red;
  }
  /* sigleMovie */
  .sigleMovie {
    width: 135px;
    background-color: #343a40 !important;
    color: #ffffff;
  }

  .sigleMovie > div:nth-child(1) {
    overflow: hidden;
    height: 200px;
    position: relative;
  }
  .movieImg {
    position: relative;
    display: block;
    width: 141px;
    height: 206px;
    background-size: 100% auto;
  }
  .movieName {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px grey solid;
    margin-top: 10px;
    padding-bottom: 10px !important;
    height: 40px;
  }
  .movieName > span {
    flex: 70%;
    text-align: center;
    font-size: 14px;
  }
  .movieName .like {
    flex: 30%;
    color: red;
    font-size: 12px;
  }
  .movieDetail {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
  }

  .movieDetail div {
    padding: 10px 0;
    flex: 1;
    text-align: center;
  }
  .toleft,
  .toright {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 100%;
    cursor: pointer;
  }
  .toleft::after {
    content: "";
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateX(-50%, -50%);
    background-image: url(../assets/left.png);
    background-size: 25px auto;
  }
  .toright::after {
    content: "";
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateX(-50%, -50%);
    background-image: url(../assets/right.png);
    background-size: 25px auto;
  }
}
</style>
