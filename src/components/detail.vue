<template>
  <div class="container">
    <div class="row fontCon">
      <div class="col-md-4 movieDetailC">
        <div class="movieDetail">
          <div class="topDetail">
            <div class="imgAndName">
              <img v-show="imgSrc" v-cloak id="imgSrc" :src="movieDetails.movieDetailImg" />
              <div class="name">
                <div>
                  <h3 v-cloak>{{movieDetail.title}}</h3>
                </div>
              </div>
            </div>
            <div class="otherDetail" style="display:none">
              <div>
                <div class="year">
                  上映年份:
                  <span v-cloak>{{movieDetails.year}}</span>
                </div>
                <div v-cloak class="allTime">放映时长:{{movieDetails.allTime}}</div>
                <div v-cloak class="countries">上映地区:{{movieDetails.countries}}</div>
                <div v-cloak class="aka">影片语种:{{movieDetails.languages}}</div>
                <div class="directors">
                  导演:
                  <span v-cloak>{{movieDetails.directors}}</span>
                </div>
                <div v-cloak>首映时间:{{movieDetails.pubdates}}</div>
                <div v-cloak class="aka">别名:{{movieDetails.aka}}</div>
                <div>
                  评分:
                  <span v-cloak style="color:red">{{movieDetails.rating}}</span>分
                </div>
              </div>
            </div>
          </div>
          <div class="priceABuy">
            <div class="price">
              <!-- <div class="oriPrice">原价7折</div> -->
              <div class="discount">
                <span>版权租用价格：</span>
                <span>
                  <span v-cloak>{{movieDetails.price | price}}</span> 元/10年
                </span>
              </div>
            </div>
            <div class="buy">
              <div class="buyIt red" @click="buyTheMovie(movieDetail)">点击购买</div>
            </div>
          </div>
          <div class="actorCon">
            <h3>演员表</h3>
            <ul class="actor">
              <li v-for="(item,index) in movieDetail.casts" :key="index">
                <img class="actorImg" :src="item.avatars.small" />
                <h5 v-cloak>{{item.name}}</h5>
              </li>
            </ul>
          </div>
        </div>
        <div class="more">
          <h3>更多推荐......</h3>
          <div class="moreMovies">
            <ul class="moreImgCon">
              <li v-for="(item,index) in moreMovie" :key="index">
                <img class="moreImg" :src="item.images.small" alt />
                <h5 v-cloak class="moreMovieName">{{item.title}}</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="content">
          <h3>主要内容</h3>
          <div v-cloak class="movieContent">{{movieDetail.summary}}</div>
        </div>
        <div class="comment">
          <div class="hotComments">
            <h3>热门评论</h3>
            <ul class="hotCommentsCon">
              <li
                class="hotComment"
                v-for="(item,index) in movieDetail.popular_reviews"
                :key="index"
              >
                <div class="author">评者:{{item.author.name}}</div>
                <h5 class="commentTitle">{{item.title}}</h5>
                <div class="hotSummary">{{item.summary}}</div>
                <div class="moreComment red">
                  <span>more...</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="count">
            <div class="number">
              <h4>自由评论</h4>
            </div>
            <div class="sort">
              排序方式：
              <span>倒序</span>
              <span>正序</span>
            </div>
          </div>
          <form action>
            <input type="text" />
            <button>添加</button>
          </form>
        </div>
      </div>
    </div>
    <Shop></Shop>
  </div>
</template>

<script>
import Shop from "@/components/shoppingCar.vue";

export default {
  name: "detailPage",
  components: {
    Shop
  },
  data() {
    return {
      movieDetail: [],
      movieDetails: {
        movieDetailImg: "",
        year: "",
        allTime: "",
        countries: "",
        directors: "",
        aka: "",
        rating: "",
        pubdates: "",
        languages: "",
        price: ""
      },
      moreMovie: [],
      imgSrc: false
    };
  },
  props: ["movieId"],
  created() {
    this.axios.get("/v2/movie/top250?start=0&count=6").then(res => {
      if (res.status == 200) {
        this.moreMovie = res.data.subjects;
      }
    });
    this.axios.get("/v2/movie/subject/" + this.movieId).then(res => {
      if (res.status == 200) {
        this.movieDetail = res.data;
        this.movieDetails.movieDetailImg = res.data.images.large;
        this.imgSrc = true;
        this.movieDetails.year = this.movieDetail.year;
        this.movieDetails.allTime = this.movieDetail.durations[0];
        this.movieDetails.countries = this.movieDetail.countries[0];
        this.movieDetails.directors = this.movieDetail.directors[0].name;
        this.movieDetails.aka = this.movieDetail.aka[0];
        this.movieDetails.rating = this.movieDetail.rating.average;
        this.movieDetails.pubdates = this.movieDetail.pubdates[0];
        this.movieDetails.languages = this.movieDetail.languages[0];
        this.movieDetails.price = this.movieDetail.collect_count;
      }
    });
  },
  mounted() {},
  updated() {},
  methods: {
    buyTheMovie(movieDetail) {
      this.$store.commit("setShopCar", movieDetail);
    }
  }
};
</script>


<style scoped>
[v-cloak] {
  display: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #ffffff;
}
.red {
  color: red;
}
/* 外部容器 */
.container {
  padding-top: 50px;
}
.fontCon {
  color: #ffffff;
  margin: 0 auto;
}
/* 左侧 */

.movieDetail {
  margin-top: 15px;
  margin-bottom: 15px;
}
#imgSrc {
  width: 260px;
  height: 350px;
  position: relative;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
}

/* topdetail 顶部电影信息 */

.topDetail {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin-top: 10px;
  padding-bottom: 10px;
}

.topDetail .imgAndName {
  flex: 60%;
}
.name {
  margin-top: 10px;
}

.name > div {
  /* width: 60%; */
  font-weight: 550;
  margin: 0 auto;
}
.priceABuy {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  height: 50px;
}
.price {
  flex: 70%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}

.buy {
  flex: 30%;
  text-align: center;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  font-weight: 550;
}
.buy:hover {
  background-color: #fff;
  color: black;
}
/* 演员 */
.actor {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
}

.actorImg {
  width: 130px;
  height: 180px;
}

.more {
  padding-top: 10px;
  margin-bottom: 15px;
}
.more > h3 {
  margin-bottom: 20px;
}
.moreImgCon {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
}
.moreImgCon > li {
  margin-bottom: 15px;
}
.moreImg {
  width: 135px;
  height: 200px;
}
/* 右侧 */

/* movieContent */
.movieContent {
  text-indent: 2rem;
  font-size: 1rem;
}

.content {
  padding-top: 15px;
  padding-bottom: 15px;
}
.play {
  border-bottom: 1px gray solid;
  text-align: right;
  padding-right: 4%;
  font-size: 18px;
  margin: 10px 0;
  height: 30px;
  line-height: 30px;
}

/* 热门评论 */
.comment {
  margin-top: 15px;
}

.hotCommentsCon > li {
  padding: 10px 0;
}

.hotComment {
  margin: 10px;
  text-indent: 2rem;
  background-color: #222222;
}
.commentTitle {
  font-weight: 550;
  font-size: 16px;
}
.moreComment {
  width: 100%;
  text-align: right;
}
.moreComment > span {
  width: 20%;
  margin-right: 2rem;
  cursor: pointer;
}
.moreComment > span:hover {
  font-weight: 600;
}

.sort {
  text-align: right;
  margin-right: 10rem;
}
/* 大于1700px */
@media screen and (min-width: 1700px) {
  .container {
    width: 1450px;
  }
  .otherDetail {
    display: block !important;
    flex: 40%;
  }
  .otherDetail > div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-content: center;
    height: 100%;
  }
  .otherDetail > div > div {
    font-size: 16px;
  }
}

@media screen and (max-width: 1700px) {
  .discount {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    height: 50px;
  }
  .discount > span {
    text-align: center;
    flex: 100%;
  }
}
@media screen and (max-width: 768px) {
  .priceABuy {
    height: 60px;
  }
  .discount {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    height: 50px;
  }
  .discount > span {
    text-align: center;
    flex: 100%;
  }
  .buy {
    height: 50px;
    line-height: 50px;
  }
  .hotComment:nth-child(4),
  .hotComment:nth-child(5),
  .hotComment:nth-child(6),
  .hotComment:nth-child(7),
  .hotComment:nth-child(8),
  .hotComment:nth-child(9),
  .hotComment:nth-child(10) {
    display: none;
  }
}
</style>