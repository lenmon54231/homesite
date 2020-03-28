<template>
  <div class="opacityImg">
    <Nav></Nav>
    <main class="container">
      <div class="mainBody">
        <div class="leftNav col-lg-1">
          <div class="linkList">
            <a href="https://www.iconfont.cn/" target="_blank">
              <h3>
                <span>矢量图标</span>
              </h3>
              <div>提供免费矢量图标</div>
            </a>
            <a href="https://encycolorpedia.jp/" target="_blank">
              <h3>
                <span>取色</span>
              </h3>
              <div>根据现有颜色推荐</div>
            </a>
            <a href="https://www.logoko.com.cn/" target="_blank">
              <h3>
                <span>生成Logo</span>
              </h3>
              <div>输入名称生成logo</div>
            </a>
            <a href="https://developer.mozilla.org/zh-CN/" target="_blank">
              <h3>
                <span>MDN</span>
              </h3>
              <div>MDN前端相关文档</div>
            </a>
            <a href="https://flatuicolors.com/" target="_blank">
              <h3>
                <span>背景色</span>
              </h3>
              <div>提供背景色套包</div>
            </a>
            <a href="https://www.uupoop.com/" target="_blank">
              <h3>
                <span>在线Ps</span>
              </h3>
              <div>调整图片颜色大小</div>
            </a>
            <a href="https://tinypng.com/" target="_blank">
              <h3>
                <span>图片压缩</span>
              </h3>
              <div>近乎无损的压缩</div>
            </a>
          </div>
          <a class="top" @click="scrollToTop"> <span></span> TO TOP </a>
        </div>
        <div class="row">
          <div class="shareAndBlog col-lg-11">
            <div class="container shareAndBlogCon">
              <div class="row">
                <div class="col-md-6 col-md-offset-3">
                  <div class="11">
                    <div class="search">
                      <div class="searchList">
                        <ul id="allSearchEngine">
                          <li v-for="(item, index) in items" :key="index" :class="{ active: index == checkindex }" @click="isActive(item, index)">{{ item.text }}</li>
                        </ul>
                      </div>
                      <form action="https://www.baidu.com/s" target="__blank" id="searchForm">
                        <input id="searchInput" type="text" placeholder="请输入要搜索的内容：" v-model="searchValue" name="word" autofocus />
                        <input type="submit" value="搜索" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mainImg visible-md-block visible-lg-block">
                <div class="col-md-12">
                  <ul class="mainNav">
                    <li class="navLi" v-for="(index, key) in Lists" :key="key" @mouseover="imgColor(key)" @mouseout="imgOrigin(key)">
                      <a :href="index.url" target="_blank" class="navA" ref="navA">
                        <span>{{ index.name }}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 blogTitle hidden-xs">
                  <h2>Focus on | Most visited websites</h2>
                </div>
              </div>
              <div class="row articleList hidden-xs">
                <div class="article">
                  <h3>V2EX › 酷</h3>
                  <div class="mainArticle">
                    <p>V2EX 是一个主要讨论网络和技术话题的社区。</p>
                    <p>V2EX 是创意工作者们的社区。这里目前汇聚了超过 110,000 名主要来自互联网行业、游戏行业和媒体行业的创意工作者.</p>
                    <p>
                      <a href="https://v2ex.com/go/jobs?p=1" target="_blank">更多点击......</a>
                    </p>
                  </div>
                </div>
                <div class="article">
                  <h3>SegmentFault › 前端</h3>
                  <div class="mainArticle">
                    <p>SegmentFault 思否是中国领先的新一代开发者社区和专业的技术媒体。</p>
                    <p>每个月，我们帮助 1000 万的开发者解决各种各样的技术问题。并助力他们在技术能力、职业生涯、影响力上获得提升。</p>
                    <p>
                      <a href="https://segmentfault.com/" target="_blank">更多点击......</a>
                    </p>
                  </div>
                </div>
                <div class="article">
                  <h3>掘金 › 前端</h3>
                  <div class="mainArticle">
                    <p>一个帮助开发者成长的社区</p>
                    <p>掘金是一个帮助开发者成长的社区,是给开发者用的 Hacker News,给设计师用的 Designer News,和给产品经理用的 Medium。</p>
                    <p>
                      <a href="https://juejin.im/welcome/frontend" target="_blank">更多点击......</a>
                    </p>
                  </div>
                </div>
                <div class="article">
                  <h3>开源中国 › 问答</h3>
                  <div class="mainArticle">
                    <p>开源中国 成立于2008年8月，是目前国内最大的开源技术社区。</p>
                    <p>开源中国是国内唯一一个专业报道开源事件的社区，网站会实时报道开源界的所有资讯，同时也有中国版的github：gitee。</p>
                    <p>
                      <a href="https://www.oschina.net/question" target="_blank">更多点击......</a>
                    </p>
                  </div>
                </div>
                <div class="article">
                  <h3>51CTO</h3>
                  <div class="mainArticle">
                    <p>51CTO 成立于2005年，目前已建成为专注于IT人职业成长平台</p>
                    <p>51CTO 最开始专注于运维这个领域，也是国内聚集运维技术人才最多的一个技术社区，到了后来逐渐的转为覆盖全领域的技术社区。</p>
                    <p>
                      <a href="https://www.51cto.com/" target="_blank">更多点击......</a>
                    </p>
                  </div>
                </div>
                <div class="article">
                  <h3>MDN › JavaScript</h3>
                  <div class="mainArticle">
                    <p>源于开发者，服务开发者。</p>
                    <p>MDN Web Docs 网站提供开放网络(Open Web)技术有关的信息,包括用于网站和渐进式网络应用的 HTML、CSS 和 API。</p>
                    <p>
                      <a href="https://v2ex.com/go/jobs?p=1" target="_blank">更多点击......</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-md-offset-3 blogTitle">
                  <h2>Lee’s blog | By Hexo and theme-bubuzou</h2>
                </div>
              </div>
              <div class="row articleList">
                <div class="article">
                  <h3>记录网站功能-搜索</h3>
                  <div class="mainArticle">
                    <p>网站一共获取90部电影，设计了搜索功能，主要搜索依据为电影名字，</p>
                    <p>因为没有找到搜索的api接口，所以直接获取到全部的90部电影后，再进行的全部的电影循环匹配，相对花的时间比较多。</p>
                    <p>
                      <a href="http://www.limeng54231.top/2019/12/02/%E8%AE%B0%E5%BD%95%E7%BD%91%E7%AB%99%E5%8A%9F%E8%83%BD-%E6%90%9C%E7%B4%A2/" target="_blank">更多点击......</a>
                    </p>
                  </div>
                </div>
                <div class="article">
                  <h3>图片懒加载实现</h3>
                  <div class="mainArticle">
                    <p>如果是一个图片较多的网站，比如照片类网站，会涉及到打开网站后，一次性向服务器发送大量请求，</p>
                    <p>原理:当JS监听到该图片元素进入可视窗口时，将自定义属性中的地址存储到src属性中。达到懒加载的效果。</p>
                    <p>
                      <a href="http://www.limeng54231.top/2019/12/02/%E5%9B%BE%E7%89%87%E6%87%92%E5%8A%A0%E8%BD%BD/" target="_blank">更多点击......</a>
                    </p>
                  </div>
                </div>
                <div class="article">
                  <h3>移动端优先和桌面端优先</h3>
                  <div class="mainArticle">
                    <p>构建响应式网站是如今前端开发者的必备技能，当我们谈到响应式网站时，“移动端优先”这个词立刻就会出现在脑海中。</p>
                    <p>“移动端优先”添加样式的方法指的是首先在移动设备上应用样式，然后通过媒体查询在样式表中覆盖样式。</p>
                    <p>
                      <a href="http://www.limeng54231.top/2019/12/02/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E4%BC%98%E5%85%88%E5%92%8C%E6%A1%8C%E9%9D%A2%E7%AB%AF%E4%BC%98%E5%85%88/" target="_blank">更多点击......</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 moreBlog">
                  <a href="http://www.limeng54231.top/" target="_blank">
                    <h3>More blog......</h3>
                  </a>
                </div>
              </div>
              <div class="row"></div>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      items: [
        {
          text: "Google",
          searchUrl: "http://www.google.com.hk/search?q=",
          name: "q"
        },
        { text: "百度", searchUrl: "https://www.baidu.com/s", name: "word" },
        {
          text: "搜狗",
          searchUrl: "http://www.sogou.com/web",
          name: "query"
        },
        { text: "Bing", searchUrl: "https://cn.bing.com/search", name: "q" }
      ],
      Lists: [
        { name: "贴吧", url: "https://tieba.baidu.com/" },
        { name: "天猫", url: "https://www.tmall.com/ " },
        { name: "哔哩哔哩", url: "https://www.bilibili.com" },
        { name: "微博", url: "https://www.weibo.com" },
        { name: "YouTue", url: "https://www.youtube.com" },
        { name: "知乎", url: "https://www.zhihu.com" },
        { name: "斗鱼", url: "https://www.douyu.com" },
        { name: "acfun", url: "https://www.acfun.cn/" },
        { name: "网易云", url: "https://music.163.com/" },
        { name: "京东", url: "https://www.jd.com" },
        { name: "百度地图", url: "https://map.baidu.com/" },
        { name: "QQ邮箱", url: "https://mail.qq.com" },
        { name: "谷歌邮箱", url: "https://www.gmail.com" },
        { name: "163邮箱", url: "https://mail.163.com" },
        { name: "智联招聘", url: "https://www.zhaopin.com/" },
        { name: "什么值得买", url: "https://www.smzdm.com" }
      ],
      checkindex: 1,
      searchValue: "",
    };
  },
  mounted() {
    document.getElementById("appLoading").style.display = "none";
    var bcImg = this.$refs.navA;
    for (let i = 0; i < bcImg.length; i++) {
      bcImg[i].style.backgroundPosition = "0 -" + i * 100 + "px";
    }
  },
  beforeDestroy(){
    document.getElementById("appLoading").style.display = "block";
  },
  methods: {
    isActive(item, index) {
      this.checkindex = index;
      document.getElementById("searchForm").action = item.searchUrl;
      document.getElementById("searchInput").name = item.name;
    },
    scrollToTop() {
      this.common.toTop(0);
    },
    doSearch() {
      var searchInputTxt = document.getElementById("searchInput");
      if (document.getElementById("searchInput").value === "请输入搜素内容......") {
        searchInputTxt.value = "";
      }
    },
    imgColor(key) {
      var bcImg = this.$refs.navA;
      var res = 100 * key;
      bcImg[key].style.backgroundPosition = "100px -" + res + "px";
    },
    imgOrigin(key) {
      var bcImg = this.$refs.navA;
      bcImg[key].style.backgroundPosition = "0px -" + key * 100 + "px";
    }
  },
};
</script>

<style scoped>
html,
body {
  scroll-behavior: smooth;
}
/* shareAndBlog */
.shareAndBlog {
  padding: 0;
}
.shareAndBlogCon {
  width: 90%;
}
/* .search */

.search {
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  border-radius: 5px !important;
  padding: 80px 0 40px 0;
}

.searchList {
  flex: 100%;
  width: 50%;
}

.searchList > ul {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.searchList > ul > li {
  flex: 25%;
  height: 50px;
  background-color: #34495e;
  text-align: center;
  line-height: 50px;
  font-size: 1.25rem;
  color: #fff;
  cursor: pointer;
}

.searchList > ul > li:hover {
  background-color: #cdd4dd;
  color: black;
}

.searchList > ul > li:nth-child(1) {
  border-radius: 15px 0 0 0;
}

.searchList > ul > .active {
  background-color: #cdd4dd;
  color: black;
}

.searchList > ul > li:nth-child(4) {
  border-radius: 0 15px 0 0;
}

#searchForm {
  position: relative;
}

#searchForm > input {
  height: 50px;
  border: 0;
  padding: 0;
  background-color: #cdd4dd;
  color: #fff;
}

#searchForm > input:nth-child(1) {
  width: 100%;
  border-radius: 0 15px 15px 15px;
  font-size: 1.5rem;
  text-indent: 1em;
  border: 0;
  outline: none;
  color: black;
  text-indent: 1em;
}
#searchLab {
  position: absolute;
  left: 0;
  top: 50%;
  height: 30px;
  width: 100%;
  transform: translateY(-50%);
  color: lightgray;
  cursor: text;
}

#searchForm > input:nth-child(2) {
  position: absolute;
  right: 0;
  top: 0;
  width: 10%;
  border-radius: 0 15px 15px 0;
  font-size: 1.25rem;
  outline: none;
  background-color: #34495e;
}

#searchForm > input:nth-child(2):hover {
  color: #1abc9c;
}

/* main */

.mainImg {
  box-shadow: 2px 2px 10px gray;
  height: 320px;
  border-radius: 5px;
}

.split {
  display: block;
  height: 1px;
  margin: 15px 0;
  border-bottom: 1px black solid;
}

.mainImg > div:nth-child(1) {
  height: 100%;
  background-color: whitesmoke;
  border: #596275 1px solid;
  border-radius: 5px;
}

.mainImg > div:nth-child(2) {
  height: 100%;
  padding: 0;
}

/* .mainNav */

.mainNav {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: space-between;
  height: 100%;
}

.navLi {
  flex: 12.5%;
  height: 150px;
  box-shadow: 2px 2px 20px white;
  border-radius: 15px;
  border: #cdd4dd 1px solid;
  position: relative;
}

.navA {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-image: url("https://limengtupian.oss-cn-beijing.aliyuncs.com/%E9%A6%96%E9%A1%B5%E7%B2%BE%E7%81%B5%E5%9B%BE/img.png");
  background-size: 200px auto;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  transition: 0.2s;
}

.navA > span {
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 1rem;
  text-align: center;
  font-weight: 550;
}

/* .rollImg */

.rollImg {
  height: 100%;
  position: relative;
}

.rollImg > div:nth-child(2) {
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.rollImg-linkList {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 30%;
}

.rollImg-linkList > div {
  flex: 1;
  height: 15px;
  background-color: #fff;
  text-align: center;
  margin: 0 5px;
  background-image: linear-gradient(to right, blue, lightblue, blue);
}

.rollImg-linkList > div:hover {
  background-image: linear-gradient(to right, red, blue);
  background-size: 200%;
}

/* .leftNav */

.leftNav {
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  height: calc(100vh - 50px);
  z-index: 100;
  padding: 0;
}

.leftNav > h2 {
  height: 50px;
  margin: 0;
  background-color: #596275;
}

.top {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  height: 65px;
  width: 100%;
  font-size: 1rem;
  background-color: #384452;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  border-right: gray 1px solid;
  border-top: gray 1px solid;
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

/* myBlog */

.blogTitle {
  text-align: center;
  border-radius: 5px;
  margin: 1% 0 1% 25%;
}

.blogTitle h2 {
  text-align: center;
  font-weight: 600;
  color: black;
  margin: 15px 0;
}

.moreBlog {
  margin: 1% 0 1% 41.6666667%;
  text-align: center;
}

.moreBlog h3:hover {
  background-color: #34495e;
  color: #fff;
}

.moreBlog h3 {
  border-radius: 5px;
  margin: 0;
  line-height: 50px;
  background-color: #fff;
}

/* 超大屏 */

@media (min-width: 1700px) {
  .nav {
    width: 100%;
  }
  .shareAndBlog {
    position: absolute;
    left: 8.3%;
    top: 0;
  }
  .mainNav > li {
    flex: 11% !important;
    margin: 5px;
  }
  .article {
    min-height: 210px !important;
  }
}
/* 大屏 */
@media (max-width: 1699px) {
  .mainNav > li {
    flex: 16.66666% !important;
  }
  .mainNav > li:nth-child(13),
  .mainNav > li:nth-child(14),
  .mainNav > li:nth-child(15),
  .mainNav > li:nth-child(16) {
    display: none;
  }
  .leftNav {
    display: none;
  }
  .shareAndBlog {
    width: 100%;
  }
  footer {
    width: 100%;
  }
  .shareAndBlog,
  nav {
    position: absolute;
    left: 0 !important;
    top: 0;
  }
  .article {
    min-height: 240px !important;
  }
}
/* 中屏 */
@media screen and (max-width: 1200px) {
  .article {
    min-height: 280px !important;
  }
}

/* 小屏 */

@media (max-width: 992px) {
  .blogTitle {
    width: 100%;
    margin: 1%;
  }
  .moreBlog {
    width: 50%;
    margin: 3% 25% 1% 25%;
  }
  .moreBlog h3 {
    border-radius: 5px;
    margin: 0;
    line-height: 30px;
    background-color: #fff;
  }
  .article {
    min-height: 322px !important;
  }
}

/* 超小屏 */

@media screen and (max-width: 768px) {
  .mainImg {
    padding: 0;
  }
  main {
    border-top: 1px solid #fff;
  }
  .search {
    font-size: 0.5rem !important;
  }
  .searchList {
    flex: 100%;
    width: 60%;
  }
  .searchList > ul > li {
    flex: 25%;
    height: 30px;
    background-color: #34495e;
    text-align: center;
    line-height: 30px;
    font-size: 1.05rem;
    color: #fff;
    cursor: pointer;
  }
  #searchForm > input {
    height: 30px;
    border: 0;
    padding: 0;
    background-color: #cdd4dd;
    color: #fff;
  }
  #searchForm > input:nth-child(2) {
    position: absolute;
    right: 0;
    top: 0;
    width: 20%;
    border-radius: 0 15px 15px 0;
    outline: none;
    background-color: #34495e;
  }
  .search {
    padding: 0;
  }
  .blogList > div:nth-child(2) {
    border: none;
  }
  .blogList {
    flex-flow: column nowrap;
  }
  .articleList > div {
    flex: 100%;
  }
  .shareAndBlog {
    margin-top: 65px;
  }
  .article {
    min-height: 160px !important;
  }
}
</style>
