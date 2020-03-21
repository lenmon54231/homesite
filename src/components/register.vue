<template>
  <div class="bc">
    <div class="nav">
      <div>
        <router-link tag="a" to="/home">Home</router-link>
        <router-link tag="a" to="/mall">Movie</router-link>
        <router-link tag="a" to="/mytools">Tools</router-link>
      </div>
    </div>
    <form class="mainPage">
      <h2>账号注册(待完善)</h2>
      <div class="accAndPass" ref="accAndPass" v-for="(item, index) in items1" :key="index" :class="{ bottom: index === bottom || item.show }">
        <span ref="spans" :class="{ showup: index === showup || item.show }">{{ item.text }}</span>
        <input ref="inputValue" type="text" v-model="item.value" @focus="turnUp(index)" @blur="turnOff(index)" />
        <div class="err" :class="{ showerr: item.showerr }">{{ item.err }}</div>
      </div>
      <div class="getCode">
        <div @click="getCode()">获取模拟验证码</div>
      </div>
      <input @click="toLogin()" type="button" class="login" value="注册" />
      <div class="register">
        <div>
          返回:
          <router-link tag="a" to="/home" class="registerLink">主页</router-link>
        </div>
        <div v-if="showRegLogin">
          已有账号？
          <router-link tag="a" to="/login" class="registerLink">登录</router-link>
        </div>
        <div v-else>
          去往
          <router-link  tag="a" to="/center" class="registerLink">个人中心</router-link>
        </div>
      </div>
    </form>
    <div v-show="showcode" class="code">
      <div class="codeCon">
        <div>验证码</div>
        <div>验证码为：6666</div>
        <div>填写正确后点击注册按钮</div>
        <div>
          <button @click="closeCode()">关闭</button>
        </div>
      </div>
    </div>
    <div class="registerOK" v-if="registerOK">
      <div class="registerOKtext">注册成功</div>
      <div class="registerOKtext">3秒后跳转至登录页面</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "center",
  components: {},
  data() {
    return {
      items1: [
        {
          text: "手机号",
          value: "",
          show: false,
          err: "手机号码有误",
          showerr: false
        },
        {
          text: "验证码",
          value: "",
          show: false,
          err: "验证码有误",
          showerr: false
        }
      ],
      //显示input底线
      bottom: "",
      //显示input上移
      showup: "",
      //显示验证码
      showcode: false,
      //是否显示注册成功，3秒后跳转页面
      registerOK: false,
      //判断下方显示登录还是个人中心
      showRegLogin:true
    };
  },
  mounted() {
    document.getElementById("appLoading").style.display = "none";
    this.showRegLogin = !this.common.judgeLogin()
  },
  computed: {
  },
  methods: {
    turnUp(index) {
      //当前的input 加下划线动画和上移
      this.bottom = index;
      this.showup = index;
    },
    turnOff(index) {
      //检查当前input是否为空
      if (this.items1[index].value !== "") {
        this.items1[index].show = true;
        this.bottom = index;
        this.showup = index;
        //检查第一个input手机号是否正确
        if (index == 0) {
          if (this.common.phoneNumber(index, this.items1[index].value)) {
            this.items1[0].err = "手机号码有误";
            this.items1[0].showerr = false;
          } else {
            this.items1[0].err = "手机号码有误";
            this.items1[0].showerr = true;
          }
        }
      } else {
        this.items1[index].show = false;
        this.bottom = "";
        this.showup = "";
        this.items1[index].showerr = false;
      }
    },
    getCode() {
      this.showcode = true;
    },
    closeCode() {
      this.showcode = false;
    },
    toLogin() {
      if (this.common.phoneNumber(0, this.items1[0].value)) {
        this.items1[0].showerr = false;
        this.items1[0].err = "手机号码有误";
        if (this.items1[1].value == 6666) {
          this.items1[1].showerr = false;
          let tem = JSON.parse(localStorage.getItem("usrname")) == null ? [] : JSON.parse(localStorage.getItem("usrname"));
          let usrInfo = this.items1[0].value;
          if (tem.length == 0) {
            tem.push({ usrname: usrInfo });
            window.localStorage.setItem("usrname", JSON.stringify(tem));
            this.registerOK = true;
            setTimeout(() => {
              this.$router.push("/login");
            }, 3000);
          } else {
            let index = tem.findIndex((x) => x.usrname == usrInfo);
            if (index == -1) {
              tem.push({ usrname: usrInfo });
              window.localStorage.setItem("usrname", JSON.stringify(tem));
              this.registerOK = true;
              setTimeout(() => {
                this.$router.push("/login");
              }, 3000);
            } else {
              this.items1[0].err = "该手机号码已经被注册";
              this.items1[0].showerr = true;
            }
          }
        } else {
          this.items1[1].showerr = true;
        }
      } else {
        this.items1[0].showerr = true;
        this.items1[0].err = "手机号码有误";
      }
    }
  }
};
</script>

<style scoped>
body {
  min-height: 100vh;
}
.bc {
  background: linear-gradient(to right bottom, #34495e, 80%, #16a085);
  height: 100vh;
  width: 100vw;
}
.nav {
  display: none;
  height: 50px;
  background-color: #34495e;
  z-index: 100;
}

.nav > div {
  width: 50%;
  display: flex;
  flex-flow: row nowrap;
}

.nav > div > a:nth-child(1) {
  padding-left: 15px;
}
.nav > div > a:nth-child(3) {
  padding-right: 15px;
}

.nav > div > a {
  flex: 1;
  color: white;
  text-align: center;
  height: 50px;
  line-height: 50px;
}

.nav div a:hover,
.nav div a.hover {
  background-color: #fff;
  color: black;
}

.mainPage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 60%;
  border-radius: 25px;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
}
.mainPage > h2 {
  width: 70%;
  height: 75px;
  background-color: #34495e;
  border-radius: 10px;
  line-height: 75px;
  color: whitesmoke;
  text-align: center;
}

.accAndPass {
  border-bottom: 2px solid lightgray;
  position: relative;
  width: 80%;
  margin: 10px 0;
}

.accAndPass input {
  width: 100%;
  outline: none;
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 20px;
}

.accAndPass > span {
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
  z-index: -1;
  transition: 0.5s;
  color: lightgray;
  font-size: 20px;
}

.accAndPass span::after {
  content: "";
  width: 0%;
  height: 2px;
  background: linear-gradient(120deg, #3498db, #8e44ad);
}
.getCode {
  width: 100%;
  font-size: 16px;
}
.getCode > div {
  float: right;
  text-align: right;
  padding: 0 10px;
  margin-right: 50px;
  color: #ffffff;
  background-color: #34495e;
  cursor: pointer;
}
.err {
  display: none;
  position: absolute;
  left: 0;
  top: 110%;
  margin-right: 10px;
  font-size: 20px;
  color: red;
}
.showerr {
  display: block;
}
.showup {
  top: -35% !important;
  left: 0 !important;
  transition: 0.5s;
  color: black !important;
  font-weight: 600;
}

.bottom {
  border-bottom: 2px solid #34495e !important;
}

.login {
  width: 40%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 5px;
  background-color: #34495e;
  color: whitesmoke;
  outline: none;
  border: 0;
  font-size: 20px;
}

.login:hover {
  background-image: linear-gradient(to right bottom, #34495e, rgb(72, 147, 209));
}
.register {
  width: 80%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}

.register div:nth-child(1) {
  flex: 40%;
}

.register div:nth-child(2) {
  flex: 60%;
}

.registerLink {
  font-weight: 500;
}

.registerLink:hover {
  background-color: #34495e;
  color: #fff;
}
.code,
.registerOK {
  min-width: 300px;
  min-height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 18px;
  color: #fff;
  font-size: 20px;
}
.registerOKtext {
  text-align: center;
  line-height: 100px;
  font-size: 26px;
}
.codeCon {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.codeCon > div {
  flex: 1;
}
.codeCon > div > button {
  background-color: #34495e;
  border: none;
  border-radius: 8px;
}
@media screen and (max-width: 768px) {
  .mainPage {
    width: 80vmin;
    height: 120vmin;
    margin-top: 25px;
  }
  .mainPage > h2 {
    height: 60px;
    line-height: 60px;
  }
  .nav {
    display: block;
  }
  .login {
    height: 40px;
    line-height: 40px;
  }
  .accAndPass input {
    width: 100%;
    outline: none;
    padding: 0;
    border: none;
    background-color: transparent;
    font-size: 18px;
  }
  .accAndPass > span {
    position: absolute;
    top: 50%;
    left: 3%;
    transform: translateY(-50%);
    z-index: -1;
    transition: 0.5s;
    color: lightgray;
    font-size: 18px;
  }
}
</style>
