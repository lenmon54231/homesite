<template>
  <div>
    <main>
      <Nav></Nav>
      <div class="WarCon" v-if="isWarn">
        <div class="Warning">
          <div class="warnote">
            <span class="red"> 警告！</span>
            <div>该页面性能开销较大</div>
          </div>
          <div><button class="warnBtn" @click="showit()">确定</button></div>
        </div>
      </div>
      <div v-else class="rightTools">
        <div class="bigTitle">
          <h1 data-text="HTML5+CSS3实现效果集合">
            <span>HTML5+CSS3实现效果集合</span>
          </h1>
        </div>
        <div class="mainTools">
          <ul class="cssList">
            <div class="css clip">
              <div class="clippath"></div>
              <div class="title">《赛博朋克破碎风格》</div>
            </div>
            <div class="css douyin">
              <div class="g-container">
                <div class="j"></div>
                <div class="j"></div>
              </div>
              <div class="title">使用混合模式实现抖音 LOGO</div>
            </div>
            <div class="css noFound">
              <div class="noFoundCon">
                <div class="text-magic" data-word="404">
                  404
                  <div class="white"></div>
                </div>
              </div>
              <div class="title">404故障效果</div>
            </div>
            <div class="css">
              <div class="Neon">
                <div>
                  <p class="pink">PINK</p>
                </div>
                <div>
                  <p class="orange">Hover</p>
                </div>
                <div>
                  <p class="yellow">YELLOW</p>
                </div>
              </div>
              <div class="title">霓虹灯效果（hover）</div>
            </div>
            <div class="css">
              <div class="itemCon borderClip">
                <div class="border-image-clip-path"></div>
              </div>
              <div class="title">带圆角的渐变边框</div>
            </div>
            <div class="css">
              <div class="itemCon Charging">
                <div class="g-container2">
                  <div class="g-number">98.7%</div>
                  <div class="g-contrast">
                    <div class="g-circle"></div>
                    <ul class="g-bubbles">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="title">模拟手机充电效果</div>
            </div>
            <div class="css">
              <div class="itemCon aLiPay">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="200px"
                  height="200px"
                >
                  <polygon
                    class="g-polygon-wrap"
                    points="100 0, 200 50, 200 150, 100 200, 0 150,  0 50, 100 0"
                  />
                  <polygon
                    class="g-polygon-move"
                    points="100 0, 200 50, 200 150, 100 200, 0 150,  0 50, 100 0"
                  />
                </svg>
              </div>
              <div class="title">支付宝AR扫福</div>
            </div>
            <div class="css">
              <div class="itemCon">
                <div class="circle">Circle</div>
              </div>
              <div class="title">按钮border动画(hover)</div>
            </div>
            <div class="css">
              <div class="itemCon RotateCon">
                <div class="reverseRotate">
                  <div class="rotate">
                    <div class="content">正负旋转相消3D动画</div>
                  </div>
                </div>
              </div>
              <div class="title">正负旋转相消3D动画</div>
            </div>
            <div class="css">
              <div class="nothingCon"></div>
              <div class="title">虚位以待......</div>
            </div>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "MyTools",
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      isWarn: true
    };
  },
  mounted(){
    document.getElementById("appLoading").style.display = "none";
  },
  methods: {
    showit() {
      this.isWarn = !this.isWarn;
    }
  }
};
</script>
<style lang="scss" scoped>
// title
.bigTitle {
  width: 80%;
  height: 100px;
  margin: 0 auto;
}
h1 {
  position: relative;
  height: 100px;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
  user-select: none;
  white-space: nowrap;
  filter: blur(0.007em);
  animation: shake 2.5s linear forwards;
}
h1 span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
}
h1::before,
h1::after {
  content: attr(data-text);
  position: absolute;
  top: 50%;
  left: 50%;
}
h1::before {
  animation: crack1 2.5s linear forwards;
  clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
}
h1::after {
  animation: crack2 2.5s linear forwards;
  clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
}
@keyframes shake {
  5%,
  15%,
  25%,
  35%,
  55%,
  65%,
  75%,
  95% {
    filter: blur(0.018em);
    transform: translateY(0.018em) rotate(0deg);
  }
  10%,
  30%,
  40%,
  50%,
  70%,
  80%,
  90% {
    filter: blur(0.01em);
    transform: translateY(-0.018em) rotate(0deg);
  }
  20%,
  60% {
    filter: blur(0.03em);
    transform: translate(-0.018em, 0.018em) rotate(0deg);
  }
  45%,
  85% {
    filter: blur(0.03em);
    transform: translate(0.018em, -0.018em) rotate(0deg);
  }
  100% {
    filter: blur(0.007em);
    transform: translate(0) rotate(-0.5deg);
  }
}
@keyframes crack1 {
  0%,
  95% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-51%, -48%);
  }
}
@keyframes crack2 {
  0%,
  95% {
    transform: translate(-50%, -50%);
  }

  100% {
    transform: translate(-49%, -53%);
  }
}
// first  CSS3
.clip {
  flex: 0 1 470px;
  width: 100%;
  background: #000 !important;
  overflow: hidden;
}
$img: "https://limengtupian.oss-cn-beijing.aliyuncs.com/toolsCss3/2077.jpg";

@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}

.clippath {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 300px;
  background: url($img) no-repeat;
  background-size: auto;
  background-position: 25%;
  animation: main-img-hide 20s infinite step-end;
}
.clippath::before,
.clippath::after {
  position: absolute;
  width: 100%;
  height: 300px;
  top: 0;
  left: 0;
  background: inherit;
  background-size: auto;
}

.clippath::after {
  content: "";
  animation: glitch-one 20s infinite step-end;
}

.clippath::before {
  content: "";
  animation: glitch-two 20s infinite 1s step-end;
}

@keyframes glitch-one {
  @for $i from 20 to 30 {
    #{$i / 2}% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
  }

  15.5% {
    clip-path: inset(10px 0 320px);
    left: -20px;
  }
  16% {
    clip-path: inset(10px 0 320px);
    left: -10px;
    opacity: 0;
  }
  45% {
    opacity: 0.5;
    left: -20px;
    filter: hue-rotate(90deg) saturate(1.3);
  }
  45.5% {
    left: 0px;
    filter: invert(1);
  }

  46% {
    clip-path: inset(150px 0 160px);
    left: 15%;
  }
  46.5% {
    clip-path: inset(20px 0 200px);
    left: -10%;
    transform: scale(1.1);
  }
  47% {
    clip-path: inset(240px 0 20px);
    left: -11%;
    transform: scale(1.2);
  }
  47.5% {
    clip-path: inset(20 0 20px);
    left: 13%;
    transform: scale(1.3);
    filter: invert(0);
  }
  48% {
    clip-path: inset(120 0 120px);
    left: 15%;
    transform: scale(1.1);
  }
  48.5% {
    clip-path: inset(260px 0 10px);
    left: -11%;
    transform: scale(1.2);
    filter: none;
  }
  49% {
    clip-path: inset(5px 0 350px);
    left: 11%;
    transform: scale(1.3);
  }
  49.5% {
    clip-path: inset(105px 0 210px);
    left: 0%;
    transform: scale(1.1);
  }
  50% {
    clip-path: inset(175px 0 160px);
    left: -11%;
  }
  50.5% {
    clip-path: inset(95px 0 230px);
    left: -14%;
    transform: scale(1.2);
  }
  51% {
    clip-path: inset(235px 0 12px);
    left: -14%;
  }
  51.5% {
    clip-path: inset(350px 0 7px);
    left: -14%;
  }
  52% {
    clip-path: inset(320px 0 27px);
    left: -12%;
    transform: scale(1.1);
  }
  52.5% {
    clip-path: inset(190px 0 127px);
    left: -11%;
    transform: scale(1.3);
    filter: hue-rotate(90deg) saturate(1.3);
  }
  54% {
    clip-path: inset(20px 0 20px);
    left: 12%;
    transform: scale(1.1);
    filter: none;
  }
  54% {
    background-image: none;
  }
}

@keyframes glitch-two {
  @for $i from 40 to 50 {
    #{$i / 2}% {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
    }
  }

  25.5% {
    clip-path: inset(10px 0 320px);
    left: -20px;
  }
  26% {
    clip-path: inset(10px 0 320px);
    left: -10px;
    opacity: 0;
  }
  45% {
    opacity: 0.3;
    left: -20px;
    filter: hue-rotate(45deg) saturate(1.1);
  }
  45.5% {
    left: 0px;
    filter: invert(1.2);
  }

  46% {
    clip-path: inset(50px 0 260px);
    left: -12%;
  }
  46.5% {
    clip-path: inset(120px 0 100px);
    left: 8%;
    transform: scale(1.2);
  }
  47% {
    clip-path: inset(40px 0 300px);
    left: 8%;
    transform: scale(1.3);
  }
  47.5% {
    clip-path: inset(220 0 70px);
    left: -9%;
    transform: scale(1.1);
    filter: invert(1.1);
  }
  48% {
    clip-path: inset(240px 0 120px);
    left: 11%;
    transform: scale(1.2);
  }
  48.5% {
    clip-path: inset(0px 0 310px);
    left: -12%;
    transform: scale(1.2);
    filter: none;
  }
  49% {
    clip-path: inset(255px 0 50px);
    left: 11%;
    transform: scale(1.3);
  }
  49.5% {
    clip-path: inset(10px 0 240px);
    left: 6%;
    transform: scale(1.1);
  }
  50% {
    clip-path: inset(275px 0 90px);
    left: -12%;
  }
  50.5% {
    clip-path: inset(195px 0 90px);
    left: 14%;
    transform: scale(1.4);
  }
  51% {
    clip-path: inset(35px 0 282px);
    left: -14%;
  }
  51.5% {
    clip-path: inset(350px 0 7px);
    left: 14%;
  }
  52% {
    clip-path: inset(20px 0 270px);
    left: -12%;
    transform: scale(1.1);
  }
  52.5% {
    clip-path: inset(90px 0 227px);
    left: -11%;
    transform: scale(1.3);
    filter: hue-rotate(150deg) saturate(1.3);
  }
  54% {
    clip-path: inset(220px 0 100px);
    left: 12%;
    transform: scale(1.1);
    filter: none;
  }
  54% {
    background-image: none;
  }
}

@keyframes main-img-hide {
  5% {
    filter: invert(1);
  }
  5.2% {
    filter: none;
  }
  10% {
    opacity: 0.5;
    filter: grayscale(1);
  }
  11% {
    filter: none;
    opacity: 1;
  }
  45% {
    opacity: 0.5;
    filter: grayscale(1);
  }
  46% {
    filter: none;
    opacity: 1;
  }
  53.5% {
    opacity: 0.5;
    filter: grayscale(1);
  }
  54% {
    filter: none;
    opacity: 1;
  }
  54.5% {
    opacity: 0.5;
    filter: hue-rotate(30deg);
  }
  55% {
    filter: none;
  }
  55.5% {
    background-image: none;
    filter: none;
    opacity: 1;
  }
  56% {
    background-image: url($img);
    opacity: 0.5;
  }
  56.5% {
    background-image: none;
  }
  57% {
    background-image: url($img);
    opacity: 0.8;
  }
  57.5% {
    opacity: 0.3;
  }
  58% {
    background-image: none;
  }
}
// secondCSS
.douyin {
  flex: 0 1 300px;
  background: #000 !important;
}

.g-container {
  position: relative;
  height: 300px;
  filter: contrast(150%) brightness(110%);
}

.j {
  position: absolute;
  top: 40%;
  left: 60%;
  width: 40px;
  height: 200px;
  z-index: 1;
  background: #24f6f0;
  transform: translate(-50%, -50%);

  &::before {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    border: 40px solid #24f6f0;
    border-top: 40px solid transparent;
    border-radius: 50%;
    top: 120px;
    left: -110px;
    transform: rotate(45deg);
  }

  &::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    border: 40px solid #24f6f0;
    border-right: 40px solid transparent;
    border-top: 40px solid transparent;
    border-left: 40px solid transparent;
    top: -80px;
    left: 0;
    border-radius: 100%;
    transform: rotate(45deg);
    z-index: -10;
  }
}

.j:last-child {
  position: absolute;
  top: 6%;
  left: 57%;
  background: #fe2d52;
  z-index: 100;
  mix-blend-mode: lighten;
  animation: moveLeft 1.5s infinite;

  &::before {
    border: 40px solid #fe2d52;
    border-top: 40px solid transparent;
  }
  &::after {
    border: 40px solid #fe2d52;
    border-right: 40px solid transparent;
    border-top: 40px solid transparent;
    border-left: 40px solid transparent;
  }
}

@keyframes moveLeft {
  0% {
    transform: translate(40px);
  }
  50% {
    transform: translate(0px);
  }
  100% {
    transform: translate(0px);
  }
}

// third css
.noFound {
  flex: 0 1 300px;
  width: 100%;
  background-color: black;
}
.noFoundCon {
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-magic {
  flex: 100%;
  position: absolute;
  left: 50%;
  font-size: 36px;
  transform: translateX(-50%) scale(3);
  font-family: Raleway, Verdana, Arial;
  color: #fff;
}
.white {
  position: absolute;
  left: -10px;
  width: 90px;
  height: 3px;
  background: #000;
  z-index: 4;
  animation: whiteMove 3s ease-out infinite;
}

.text-magic::before {
  content: attr(data-word);
  position: absolute;
  top: 0;
  left: 0.5px;
  height: 0px;
  color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  z-index: 2;
  animation: redShadow 1s ease-in infinite;
  filter: contrast(200%);
  text-shadow: 1px 0 0 red;
}

.text-magic::after {
  content: attr(data-word);
  position: absolute;
  top: 0;
  left: -3px;
  height: 36px;
  color: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  z-index: 3;
  background: rgba(0, 0, 0, 0.9);
  animation: redHeight 1.5s ease-out infinite;
  filter: contrast(200%);
  text-shadow: -1px 0 0 cyan;
  mix-blend-mode: darken;
}

@keyframes redShadow {
  20% {
    height: 32px;
  }
  60% {
    height: 6px;
  }
  100% {
    height: 42px;
  }
}

@keyframes redHeight {
  20% {
    height: 42px;
  }
  35% {
    height: 12px;
  }
  50% {
    height: 40px;
  }
  60% {
    height: 20px;
  }
  70% {
    height: 34px;
  }
  80% {
    height: 22px;
  }
  100% {
    height: 0px;
  }
}

@keyframes whiteMove {
  8% {
    top: 38px;
  }
  14% {
    top: 8px;
  }
  20% {
    top: 42px;
  }
  32% {
    top: 2px;
  }
  99% {
    top: 30px;
  }
}
// forth css
.Neon {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.Neon > div {
  margin: 10px 0;
}
p {
  display: inline;
  font-family: "Lobster";
  text-align: center;
  font-size: 3rem;
  line-height: 3rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
}

.pink {
  filter: brightness(110%);
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #e91e63,
    0 0 35px #e91e63, 0 0 40px #e91e63, 0 0 50px #e91e63, 0 0 75px #e91e63;
  animation: pink 1.5s ease-in-out infinite alternate;
}

.orange {
  color: #ff5722;
}

.orange:hover {
  animation: orange 1.5s ease-in-out infinite alternate;
}

.yellow {
  color: #ffeb3b;
}

.yellow:hover {
  animation: yellow 1.5s ease-in-out infinite alternate;
}

@keyframes pink {
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e91e63,
      0 0 70px #e91e63, 0 0 80px #e91e63, 0 0 100px #e91e63, 0 0 150px #e91e63;
  }
}

@keyframes orange {
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff5722,
      0 0 70px #ff5722, 0 0 80px #ff5722, 0 0 100px #ff5722, 0 0 150px #ff5722;
  }
  from {
    filter: brightness(110%);
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff5722,
      0 0 35px #ff5722, 0 0 40px #ff5722, 0 0 50px #ff5722, 0 0 75px #ff5722;
  }
}

@keyframes yellow {
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ffeb3b,
      0 0 70px #ffeb3b, 0 0 80px #ffeb3b, 0 0 100px #ffeb3b, 0 0 150px #ffeb3b;
  }
  from {
    filter: brightness(110%);
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ffeb3b,
      0 0 35px #ffeb3b, 0 0 40px #ffeb3b, 0 0 50px #ffeb3b, 0 0 75px #ffeb3b;
  }
}
// fifth css
.borderClip {
  position: relative;
}
.border-image-clip-path {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 100px;
  border: 10px solid;
  border-image: linear-gradient(45deg, gold, deeppink) 1;
  clip-path: inset(0 round 10px);
  animation: huerotate 6s infinite linear;
  filter: hue-rotate(360deg);
}
@keyframes huerotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rorate(360deg);
  }
}
// sixth css
.Charging {
  display: flex;
  overflow: hidden;
}
.g-number {
  position: absolute;
  width: 300px;
  top: 27%;
  text-align: center;
  font-size: 32px;
  z-index: 10;
  color: #fff;
}

.g-container2 {
  position: relative;
  width: 300px;
  height: 300px;
  margin: auto;
}

.g-contrast {
  filter: contrast(15) hue-rotate(0);
  width: 300px;
  height: 400px;
  background-color: #000;
  overflow: hidden;
  animation: hueRotate 10s infinite linear;
}

.g-circle {
  position: relative;
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  filter: blur(8px);

  &::after {
    content: "";
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0);
    width: 200px;
    height: 200px;
    background-color: #00ff6f;
    border-radius: 42% 38% 62% 49% / 45%;
    animation: rotate 10s infinite linear;
  }

  &::before {
    content: "";
    position: absolute;
    width: 176px;
    height: 176px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #000;
    z-index: 10;
  }
}

.g-bubbles {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100px;
  height: 40px;
  transform: translate(-50%, 0);
  border-radius: 100px 100px 0 0;
  background-color: #00ff6f;
  filter: blur(5px);
}

li {
  position: absolute;
  border-radius: 50%;
  background: #00ff6f;
}

@for $i from 0 through 15 {
  li:nth-child(#{$i}) {
    $width: 15 + random(15) + px;
    left: 15 + random(70) + px;
    top: 50%;
    transform: translate(-50%, -50%);
    width: $width;
    height: $width;
    animation: moveToTop
      #{random(6) +
      3}s
      ease-in-out -#{random(5000) /
      1000}s
      infinite;
  }
}

@keyframes rotate {
  50% {
    border-radius: 45% / 42% 38% 58% 49%;
  }
  100% {
    transform: translate(-50%, -50%) rotate(720deg);
  }
}

@keyframes moveToTop {
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
    transform: translate(-50%, -180px);
  }
}

@keyframes hueRotate {
  100% {
    filter: contrast(15) hue-rotate(360deg);
  }
}

// seventh css

.aLiPay {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
svg {
  margin: auto;
  overflow: visible;
  transform: scalex(0.9);
}

.g-polygon-wrap,
.g-polygon-move {
  fill: none;
  stroke: #bf303c;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.g-polygon-move {
  transform-origin: center center;
  transform: scale(1.1);
  stroke: linear-gradinet(180deg, red, transprent);
  stroke-width: 1.5;
  stroke-dasharray: 280, 700;
  stroke-dashoffset: 8;
  animation: move 2.4s infinite linear;
}

@keyframes move {
  0% {
    stroke-dashoffset: 8;
  }
  100% {
    stroke-dashoffset: -972;
  }
}
//eighth css

.circle {
  width: 200px;
  height: 200px;
  line-height: 200px;
  border-radius: 50%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: inset 0 0 0 3px #fff;
  text-align: center;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
  transition: color 1s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    box-sizing: border-box;
    border: 3px solid transparent;
    border-radius: 50%;
  }

  &:hover {
    color: #00e2ff;

    &::before {
      width: 200px;
      height: 200px;
      border-color: #00e2ff;
      transition: border-top-color 0.25s linear, border-right-color 0.25s linear,
        border-bottom-color 0.25s linear, border-left-color 0.25s linear;
      transition-delay: 0s, 0.25s, 0.5s, 0.75s;
    }

    &::after {
      width: 200px;
      height: 200px;
      border-top: 3px solid #00e2ff;
      transform: rotate(270deg);
      transition: transform 0.75s linear;
      transition-delay: 0s;
    }
  }
}

// nineth css

.RotateCon {
  transform-style: preserve-3d;
  perspective: 300px;
  -webkit-perspective: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.reverseRotate {
  margin: 0 auto;
}

.rotate,
.reverseRotate {
  width: 200px;
  height: 200px;
}

.content {
  width: 100%;
  height: 100%;
  line-height: 200px;
  text-align: center;
  background-color: rgba(255, 100, 100, 0.8);
  font-size: 20px;
  color: #fff;
  box-shadow: 0px 0px 8px 2px rgba(100, 100, 100, 0.6);
}

.rotate {
  animation: rotate2 5s linear infinite;
}

.reverseRotate {
  animation: reverseRotate 5s linear infinite;
}

@keyframes rotate2 {
  0% {
    transform: rotateX(0deg) rotateZ(0deg);
  }
  50% {
    transform: rotateX(40deg) rotateZ(180deg);
  }
  100% {
    transform: rotateX(0deg) rotateZ(360deg);
  }
}

@keyframes reverseRotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}
</style>

<style scoped>
html,
body {
  scroll-behavior: smooth;
}
.red {
  color: red;
}
/* main */
/* 该css样式在common.css里查看 */
/* rightTools */
.WarCon {
  position: relative;
  top: 50px;
  bottom: 0px;
  left: 0;
  margin-left: 0%;
  height: calc(100vh - 50px);
  background: linear-gradient(to right bottom, #596275, 80%, #16a085) no-repeat;
}
.Warning {
  height: 200px;
  width: 200px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: #555 1px solid;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
.Warning > div {
  flex: 100%;
  text-align: center;
  color: black;
  font-size: 20px;
}
.warnote {
  margin-top: 15%;
}
.warnote > div {
  margin: 5% 0;
}
.warnBtn {
  border: none;
  border-radius: 8px;
  background-color: lightgrey;
}
.warnBtn:hover {
  background: linear-gradient(to right bottom, #596275, 80%, #16a085);
  color: #fff;
}
.rightTools {
  min-height: 100vh;
  margin-left: 0%;
  margin-top: 50px;
  background: linear-gradient(to right bottom, #596275, 80%, #16a085) no-repeat;
}
.rightTools > h1 {
  margin: 10px 0;
  height: 80px;
  line-height: 80px;
  color: black;
  font-weight: 550;
}
.rightTools > h3 {
  color: #555;
  text-align: center;
}
.mainTools {
  margin: 0 3%;
}
.mainTools > .cssList {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
}
.mainTools > .cssList > .css {
  width: 300px;
  background-color: black;
  margin: 10px;
  overflow: hidden;
}
.nothingCon,
.itemCon {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
.title {
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  margin: 10px 0;
  font-weight: 550;
}
/* 大屏 小于1699px */
@media (max-width: 1699px) {
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100% !important;
  }
  main {
    margin-left: 0;
  }
}

/* 中屏 */
@media (max-width: 1200px) {
  .rightTools {
    height: 100%;
  }
}

/* 小屏 */

@media (max-width: 992px) {
  .rightTools {
    height: 100%;
  }
}
/* 超小屏 */
@media (max-width: 768px) {
  .rightTools {
    height: 100%;
  }
  .css {
    flex: 100%;
  }
}
</style>
