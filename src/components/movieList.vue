<template>
  <div>
    <div class="searchAndVIP">
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
      <div class="vip">
        <div>
          <svg
            style="cursor: pointer;"
            t="1585569624630"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3694"
            width="26"
            height="26"
          >
            <path
              d="M311.114667 371.242667L471.146667 169.098667a52.106667 52.106667 0 0 1 81.706666 0l160.032 202.144 153.152-65.632a52.106667 52.106667 0 0 1 71.541334 58.474666l-89.44 430.933334a112.416 112.416 0 0 1-110.08 89.568H285.941333a112.416 112.416 0 0 1-110.08-89.568l-89.429333-430.933334a52.106667 52.106667 0 0 1 71.541333-58.474666l153.152 65.632zM512 220.608L355.648 418.101333a52.106667 52.106667 0 0 1-61.376 15.552l-140.544-60.234666 84.8 408.586666a48.416 48.416 0 0 0 47.402667 38.581334h452.138666a48.416 48.416 0 0 0 47.402667-38.581334l84.8-408.586666-140.544 60.234666a52.106667 52.106667 0 0 1-61.376-15.552L512 220.608z"
              p-id="3695"
              fill="#f7c3a7"
            />
          </svg>
          <span style="cursor: pointer;">开通会员</span>
          <div class="getVIP">
            <div class="vipTextCon">
              <div>
                <span>
                  <svg
                    t="1585573623146"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5709"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M1024 73.955556h-364.088889l-364.088889 426.666666v-426.666666h-295.822222v73.955555h73.955556v807.822222h221.866666l728.177778-881.777777z"
                      p-id="5710"
                      fill="#f7c3a7"
                    />
                  </svg>
                </span> 会员精选内容
              </div>
              <div>
                <span>
                  <svg
                    t="1585573665477"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5988"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M779.6 723.6H244.2c-9 0-16.8-6-19.3-14.6l-96-343.1c-2.2-7.8 0.6-16.2 7-21.2s15.3-5.6 22.3-1.5l167.1 97.4 176.3-229.5c3.9-5.1 10-8 16.4-7.8 6.4 0.2 12.3 3.4 16 8.6l154.5 223.7 148.4-101.9c6.7-4.6 15.5-4.7 22.3-0.2 6.8 4.5 10.2 12.6 8.7 20.5l-68.6 353.3c-1.8 9.5-10.1 16.3-19.7 16.3z m-520.2-40h503.8l56.1-289.2L694.7 480c-9.1 6.2-21.5 4-27.8-5.1L516.6 257.4 346.3 479c-6.1 8-17.2 10.2-25.9 5.1l-139.6-81.4 78.6 280.9zM916.1 832.7h-800c-11 0-20-9-20-20s9-20 20-20h800c11 0 20 9 20 20s-9 20-20 20z"
                      fill="#f7c3a7"
                      p-id="5989"
                    />
                    <path
                      d="M117 318m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
                      fill="#f7c3a7"
                      p-id="5990"
                    />
                    <path
                      d="M517 168.2m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
                      fill="#f7c3a7"
                      p-id="5991"
                    />
                    <path
                      d="M878.3 306.5m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
                      fill="#f7c3a7"
                      p-id="5992"
                    />
                  </svg>
                </span> 了解会员特权
              </div>
              <div>
                <span>
                  <svg
                    t="1585573702403"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="6222"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M1018.61333 397.1L788.31333 84.8c-5.2-7.1-13.5-11.2-22.3-11.2l-513 3.7c-8.8 0.1-17 4.3-22.1 11.5L5.11333 404.4c-7.7 10.8-6.6 25.6 2.6 35.1L496.01333 942.1c5.2 5.3 12.3 8.3 19.7 8.3h0.2c7.5-0.1 14.6-3.2 19.8-8.6l480.8-509.5c9.1-9.7 10-24.5 2.1-35.2z m-715.3 46.5l139.4 364.8-353-363.3 213.6-1.5z m292.8-313.8L667.31333 386l-310.9 2.3 68-257.3 171.7-1.2zM662.21333 441L514.71333 842.8 362.01333 443.2l300.2-2.2z m58.6-0.4l213.8-1.5-348.9 369.6 135.1-368.1zM940.71333 384l-216.5 1.6L653.01333 129.3l99.4-0.7L940.71333 384zM267.41333 132.1l100-0.7-68 257.3-216.6 1.6 184.6-258.2z"
                      fill="#f7c3a7"
                      p-id="6223"
                    />
                  </svg>
                </span> 了解会员套餐
              </div>
              <div class="vipLogin">
                <div>登录</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg
            style="cursor: pointer;"
            t="1585569871435"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3976"
            width="26"
            height="26"
          >
            <path
              d="M790.976 190.72a32 32 0 0 1 45.258667-0.021333A457.248 457.248 0 0 1 970.666667 515.114667a457.248 457.248 0 0 1-134.293334 324.277333 32 32 0 1 1-45.258666-45.248A393.258667 393.258667 0 0 0 906.666667 515.114667a393.258667 393.258667 0 0 0-115.68-279.146667 32 32 0 0 1 0-45.258667z m-603.36 0.128a32 32 0 0 1 45.269333 45.248A393.258667 393.258667 0 0 0 117.333333 515.114667a393.258667 393.258667 0 0 0 115.466667 278.944 32 32 0 0 1-45.28 45.237333A457.248 457.248 0 0 1 53.333333 515.114667a457.248 457.248 0 0 1 134.293334-324.266667zM330.794667 285.866667a32 32 0 0 1 0.032 45.248A255.04 255.04 0 0 0 256 512a255.050667 255.050667 0 0 0 75.146667 181.184 32 32 0 1 1-45.216 45.301333A319.04 319.04 0 0 1 192 512a319.04 319.04 0 0 1 93.546667-226.090667 32 32 0 0 1 45.248-0.032z m407.36-0.266667A319.04 319.04 0 0 1 832 512a319.04 319.04 0 0 1-93.653333 226.208 32 32 0 0 1-45.28-45.237333A255.050667 255.050667 0 0 0 768 512a255.050667 255.050667 0 0 0-75.072-181.12 32 32 0 1 1 45.226667-45.269333zM566.752 384C637.408 384 682.666667 441.173333 682.666667 514.922667c0 58.005333-47.946667 116.789333-140.096 181.237333a53.333333 53.333333 0 0 1-61.141334 0C389.28 631.712 341.333333 572.928 341.333333 514.922667 341.333333 441.173333 386.592 384 457.258667 384c21.632 0 37.514667 5.994667 54.741333 18.421333C529.226667 389.994667 545.109333 384 566.741333 384z m0 64c-8.32 0-14.56 3.328-27.52 14.538667l-6.336 5.504a32 32 0 0 1-41.770667 0l-6.336-5.504c-12.96-11.2-19.2-14.538667-27.52-14.538667C425.653333 448 405.333333 473.674667 405.333333 514.922667c0 29.941333 34.410667 72.938667 106.666667 124.48 72.256-51.541333 106.666667-94.538667 106.666667-124.48C618.666667 473.674667 598.346667 448 566.741333 448z"
              p-id="3977"
              fill="#bfbfbf"
            />
          </svg>
          <span style="cursor: pointer;">关注</span>
        </div>
        <div>
          <svg
            style="cursor: pointer;"
            t="1585570017282"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4306"
            width="26"
            height="26"
          >
            <path
              d="M507.136 514.944c3.072-4.362667 7.210667-7.925333 12.032-10.314667a37.365333 37.365333 0 0 1 46.634667 6.144l97.418666 102.794667a32 32 0 0 1-46.442666 44.021333L565.333333 603.317333V853.333333a32 32 0 1 1-64 0V608.757333l-52.618666 50.016a32 32 0 0 1-44.096-46.4l102.517333-97.429333zM512 138.666667c123.018667 0 228.213333 85.696 259.424 204.469333C864.298667 344.736 938.666667 422.752 938.666667 518.218667 938.666667 614.688 862.752 693.333333 768.533333 693.333333a32 32 0 0 1 0-64C826.890667 629.333333 874.666667 579.84 874.666667 518.218667c0-61.610667-47.776-111.104-106.133334-111.104-5.856 0-11.626667 0.490667-17.301333 1.461333a32 32 0 0 1-37.024-26.666667C698.346667 279.04 612.714667 202.666667 512 202.666667c-73.834667 0-140.928 41.066667-177.376 106.613333a32 32 0 0 1-30.122667 16.373333c-3.168-0.213333-6.357333-0.32-9.568-0.32C214.784 325.333333 149.333333 393.141333 149.333333 477.333333S214.784 629.333333 294.933333 629.333333a32 32 0 1 1 0 64C178.912 693.333333 85.333333 596.373333 85.333333 477.333333c0-116.938667 90.293333-212.554667 203.456-215.904C338.090667 185.696 421.013333 138.666667 512 138.666667z"
              p-id="4307"
              fill="#bfbfbf"
            />
          </svg>
          <span style="cursor: pointer;">上传</span>
        </div>
        <div>
          <svg
            style="cursor: pointer;"
            t="1585570297218"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3694"
            width="26"
            height="26"
          >
            <path
              d="M256 85.333333h512c64.8 0 117.333333 52.533333 117.333333 117.333334v618.666666c0 64.8-52.533333 117.333333-117.333333 117.333334H256c-64.8 0-117.333333-52.533333-117.333333-117.333334V202.666667c0-64.8 52.533333-117.333333 117.333333-117.333334z m0 64a53.333333 53.333333 0 0 0-53.333333 53.333334v618.666666a53.333333 53.333333 0 0 0 53.333333 53.333334h512a53.333333 53.333333 0 0 0 53.333333-53.333334V202.666667a53.333333 53.333333 0 0 0-53.333333-53.333334H256z m170.666667 618.666667a32 32 0 0 1 0-64h170.666666a32 32 0 0 1 0 64H426.666667z"
              p-id="3695"
              fill="#bfbfbf"
            />
          </svg>
          <span style="cursor: pointer;">客户端</span>
        </div>
      </div>
    </div>
    <div class="row carousel" ref="carousel">
      <div class="playCon">
        <div class="play">
          <svg
            t="1585639082036"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4887"
            width="40"
            height="40"
          >
            <path
              d="M512-221.85507629c404.2161863 0 732.84748726 328.8202239 732.84748726 732.86323167 0 404.01151893-328.63130096 732.83174285-732.84748726 732.83174287S-220.84748726 915.20859726-220.84748726 510.99241097 107.7838137-221.85507629 512.01574276-221.85507629z m0-115.73098924C43.39260865-337.58606553-336.57847814 42.38501963-336.57847814 510.99241097c0 468.60739135 379.97108682 848.57847814 848.57847814 848.57847817 468.60739135 0 848.57847814-379.97108682 848.57847814-848.57847817 0-468.60739135-379.97108682-848.57847814-848.57847814-848.5784765z"
              p-id="4888"
              fill="#bfbfbf"
            />
            <path
              d="M347.77881018 905.35312203c-55.1182414 0-94.90224549-44.31815311-94.90224553-105.49766981V222.1293697c0-61.17951666 39.97292705-105.49766979 94.90224553-105.49766812 19.52202754 0 39.3904155 5.66768498 58.72352003 16.84562084l500.425148 288.86304126c35.98980416 20.65556522 56.45644642 53.0558351 56.45644641 88.65204729 0 35.61195826-20.65556522 68.01222649-56.45644641 88.63630452L406.51807463 888.50750119c-19.3331046 11.17793586-39.02831234 16.86136526-58.72352007 16.86136356z"
              p-id="4889"
              fill="#bfbfbf"
            />
          </svg>
        </div>
        <div class="collect">
          <svg
            t="1585639606350"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8413"
            width="40"
            height="40"
          >
            <path
              d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z"
              p-id="8414"
              fill="#bfbfbf"
            />
          </svg>
        </div>
        <div class="playText">
          <div class="playTextTitle">{{imgList[currentIndex].title}}</div>
          <div class="playTextIntrduce">{{imgList[currentIndex].introduce}}</div>
        </div>
      </div>
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
              <li class="newMovieLi" v-for="(item,index) in newMovie">
                <div class="herald">预告</div>
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
                <div @click="handToDetail(item.subject.id)" class="generalMovieIMgCon">
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
                <li
                  v-for="(item, index) in items"
                  :key="index"
                  class="col-lg-3 col-md-4 col-sm-4 col-xs-6"
                >
                  <div class="sigleMovie">
                    <div>
                      <img class="movieImg" :src="item.images.small" @click="handToDetail(item.id)" />
                    </div>
                    <span class="movieCategory">{{ item.genres[0] }}</span>
                    <div class="movieName">
                      <span>{{ item.title | title}}</span>
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
      <Top></Top>
    </div>
  </div>
</template>

<script>
import Shop from "@/components/shoppingCar.vue";
import mini from "@/components/minipro.vue";
import Top from "@/components/top.vue";
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
function goDown(locationNow) {
  window.scrollTo(0, locationNow + 40);
}
function goUp(locationNow) {
  if (locationNow > 40) {
    window.scrollTo(0, locationNow - 40);
  } else {
    window.scrollTo(0, 0);
  }
}
// 鼠标滚动逻辑（全屏滚动关键逻辑）
function scrollMouse(event) {
  console.log("滚轮事件监控开始");
  event.preventDefault();
  let delta = getWheelDelta(event);
  let locationNow = document.documentElement.scrollTop;
  if (delta < 0) {
    goDown(locationNow);
  } else {
    goUp(locationNow);
  }
}
// 鼠标滚轮监听，火狐鼠标滚动事件不同其他
if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
  document.addEventListener("mousewheel", scrollMouse, { passive: false });
} else {
  document.addEventListener("DOMMouseScroll", scrollMouse, { passive: false });
}

export default {
  name: "movieLists",
  components: {
    Shop,
    mini,
    Top
  },
  data() {
    return {
      imgList: [
        {
          url:
            "https://limengtupian.oss-cn-beijing.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/1.jpg",
          bc: "rgb(0, 0, 0)",
          title: "天火",
          introduce: "西蒙·韦斯特执导动作灾难片"
        },
        {
          url:
            "https://limengtupian.oss-cn-beijing.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/2.jpg",
          bc: "rgb(5, 3, 5)",
          title: "星际探索",
          introduce: "布拉德·皮特、汤米·李·琼斯联袂主演"
        },
        {
          url:
            "https://limengtupian.oss-cn-beijing.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/3.jpg",
          bc: "rgb(17, 9, 1)",
          title: "三生三世十里桃花",
          introduce: "该剧根据唐七公子同名小说改编"
        },
        {
          url:
            "https://limengtupian.oss-cn-beijing.aliyuncs.com/%E8%BD%AE%E6%92%AD%E5%9B%BE/4.jpg",
          bc: "rgb(0, 0, 0)",
          title: "催眠-裁决",
          introduce: "张家辉、张翰领衔主演犯罪动作电影"
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
      toTopHight: ""
    };
  },
  created() {
    //获取最新电影?apikey=0df993c66c0c636e29ecbb5344252a4a
    this.axios
      .get("/v2/movie/new_movies")
      .then(res => {
        if (res.status == 200) {
          this.lastMovie = res.data.subjects
            ? res.data.subjects.splice(0, 8)
            : false;
        }
      })
      .catch(err => {
        this.lastMovie = false;
      });
    //获取即将上映电影
    this.axios
      .get("/v2/movie/coming_soon")
      .then(res1 => {
        if (res1.status == 200) {
          this.newMovie = res1.data.subjects
            ? res1.data.subjects.splice(0, 8)
            : false;
        }
      })
      .catch(err => {
        this.newMovie = false;
      });
    //获取口碑电影?apikey=0df993c66c0c636e29ecbb5344252a4a
    this.axios
      .get("/v2/movie/us_box")
      .then(res2 => {
        if (res2.status == 200) {
          this.weeklyMovie = res2.data.subjects
            ? res2.data.subjects.splice(0, 8)
            : false;
        }
      })
      .catch(err => {
        this.weeklyMovie = false;
      });
    // 获取top250前12部电影列表
    this.axios.get("/v2/movie/top250?start=0&count=12").then(res3 => {
      if (res3.status == 200) {
        this.items = res3.data.subjects;
        this.firstPMovie = res3.data.subjects;
        this.isLoading = false;
        this.createLiLists(8);
        this.inputOk();
      }
    });
    // 获取top250前90部电影列表
    this.axios.get("/v2/movie/top250?start=0&count=90").then(res4 => {
      if (res4.status == 200) {
        var movieLists = res4.data.subjects;
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
  computed: {},
  watch: {},
  filters: {
    pubdates: function(value) {
      return value.slice(0, 10);
    },
    title: function(value) {
      if (value.length > 6) {
        return value.slice(0, 6).concat("......");
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
        let tem = this.toTopHight - 40;
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
      // console.log(this.scrollPosition)
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
.playCon {
  position: absolute;
  left: 150px;
  bottom: 100px;
  /* width: 10vw; */
  height: 5vw;
  z-index: 9999;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
.play,
.collect {
  flex: 0 0 auto;
  width: 50px;
  height: 50px;
  background: rgba(190, 187, 187, 0.4);
  border-radius: 50px;
  margin: 0 10px;
  position: relative;
  cursor: pointer;
}
.play:hover,
.collect:hover {
  background: rgba(190, 187, 187, 0.6);
}
.play > svg,
.collect > svg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.playText{
  color: #ffffff;
}
.playTextTitle{
  font-size: 22px;
  font-weight: 550;
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
.newMovieLi{
  position: relative;
}
.herald{
  position: absolute;
  top: 0;
  right: 10px;
  width: 36px;
  height: 20px;
  line-height: 20px;
  background-color: #0d9bff;
  z-index: 9999;
  text-align: center;
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
.generalMovieIMgCon > .generalMovieIMg:hover {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.03);
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
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
.searchAndVIP {
  width: 40vw;
  height: 40px;
  position: fixed;
  left: 50%;
  top: 5px;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-betweenf;
  align-items: center;
}
.searchBar {
  flex: 0 1 50%;
  height: 40px;
  background-color: hsla(0, 0%, 100%, 0.1);
  border-radius: 28px;
}
.searchBar > input {
  width: 100%;
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
.vip {
  flex: 1 1 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}
.vip > div {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
}
.vip > div:hover > .getVIP {
  display: block;
}
.vip > div > span {
  color: white !important;
}
.getVIP {
  position: absolute;
  top: 45px;
  left: 0;
  transform: translateX(-25%);
  display: none;
  width: 180px;
}
.littleTriangle {
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(../assets/show_less.png);
  background-size: 20px auto;
  color: #2a2a2a;
}
.vipTextCon {
  height: 180px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  background-color: #2a2a2a;
  border-radius: 18px;
}
.vipTextCon > div {
  flex: 1;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}
.vipTextCon > div:hover {
  color: #f7c3a7;
}
.vipTextCon .vipLogin {
  width: 60%;
}
.vipTextCon .vipLogin > div {
  width: 100%;
  height: 26px !important;
  line-height: 26px;
  border-radius: 8px;
  background-color: #f7c3a7;
  color: #1b1e21;
  text-align: center;
  cursor: pointer;
}
.vipTextCon .vipLogin > div:hover {
  color: black;
  background-color: #f0cbb7;
}
.mainMovie ul li {
  padding: 15px;
}
.sigleMovieList {
  border-bottom: grey 1px solid;
}
.sigleMovie {
  width: 190px;
  background-color: #343a40 !important;
  color: #ffffff;
}
.sigleMovie > div:nth-child(1) {
  overflow: hidden;
  height: 300px;
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
    width: 16.6666667%;
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
