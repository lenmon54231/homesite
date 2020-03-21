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
      <h2>账号登录(待完善)</h2>
      <div class="accAndPass" v-for="(item, index) in items1" :key="index" :class="{ bottom: index === bottom || item.show }">
        <span ref="spans" :class="{ showup: index === showup || item.show }">{{ item.text }}</span>
        <input ref="inputGroup" name="inputValue" :type="item.type" @focus="turnUp(index)" @blur="turnOff(index)" v-model="item.value" autocomplete="current-password" />
        <div class="err" :class="{ showerr: item.showerr }">{{ item.err }}</div>
        <img :src="showEyes ? openIcon : closeIcon" name="eyes" @click="showPassWord(index)" />
      </div>
      <div class="getCode">
        <div @click="getCode()">获取模拟验证码</div>
      </div>
      <input @click="toLogin()" type="button" class="login" value="登录" />
      <div class="register">
        <div>
          返回:
          <router-link tag="a" to="/home" class="homeLink">主页</router-link>
        </div>
        <div>
          没有账号？
          <router-link tag="a" to="/register" class="registerLink">注册</router-link>
        </div>
      </div>
    </form>
    <div v-if="showcode" class="code">
      <div class="codeCon">
        <div>验证码</div>
        <div>验证码为：8888</div>
        <div>填写正确后点击登录按钮</div>
        <div>
          <button @click="closeCode()">关闭</button>
        </div>
      </div>
    </div>
    <div class="registerOK" v-if="registerOK">
      <div class="registerOKtext">登录成功</div>
      <div class="registerOKtext">登录有效期是10分钟</div>
      <div class="registerOKtext">3秒后跳转至个人中心</div>
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
          showerr: false,
          type: "text"
        },
        {
          text: "验证码",
          value: "",
          show: false,
          err: "验证码有误",
          showerr: false,
          type: "password"
        }
      ],
      closeIcon: require("../assets/close.png"),
      openIcon: require("../assets/open.png"),
      bottom: "",
      showup: "",
      showerr: "",
      showEyes: false,
      showcode: false,
      registerOK: false
    };
  },
  mounted() {
    document.getElementById("appLoading").style.display = "none";
  },
  computed: {
  },
  methods: {
    turnUp(index) {
      this.bottom = index;
      this.showup = index;
    },
    turnOff(index) {
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
    showPassWord(index) {
      this.showEyes = !this.showEyes;
      if (this.showEyes == false) {
        this.items1[1].type = "password";
      } else {
        this.items1[1].type = "text";
      }
    },
    getCode() {
      this.showcode = true;
    },
    closeCode() {
      this.showcode = false;
    },
    toLogin() {
      let tem = JSON.parse(localStorage.getItem("usrname")) == null ? [] : JSON.parse(localStorage.getItem("usrname"));
      let usrInfo = this.items1[0].value;
      let index = tem.findIndex((x) => x.usrname == usrInfo);
      if (this.common.phoneNumber(0, this.items1[0].value)) {
        this.items1[0].showerr = false;
        this.items1[0].err = "手机号码有误";
        if (index == -1) {
          this.items1[0].err = "该手机号码还没有注册,请先注册";
          this.items1[0].showerr = true;
        } else {
          this.items1[0].err = "该手机号码已经被注册,请直接登录";
          this.items1[0].showerr = true;
          if (this.items1[1].value == 8888) {
            this.items1[1].showerr = false;
            this.registerOK = true;
            let passUsrInfo = {
              usrname: this.items1[0].value,
              token: "pass",
              time: Date.now(),
            }
            window.localStorage.setItem("passUsrInfo",JSON.stringify(passUsrInfo))
            this.items1[0].showerr = false;
            setTimeout(() => {
              this.$router.push("/center");
            }, 3000);
          } else {
            this.items1[1].showerr = true;
          }
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

.nav div a:hover {
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
  background-color: #ffffff;
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
  position: relative;
  font-size: 20px;
}
.mainPage .accAndPass:nth-child(2) img {
  display: none;
}
.mainPage .accAndPass:nth-child(3) img {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translateY(-50%);
  visibility: visible;
  cursor: pointer;
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
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  background-color: #34495e;
  color: whitesmoke;
  outline: none;
  border: 0;
  font-size: 20px;
}

.login:hover {
  background-image: linear-gradient(to right bottom, #34495e, 80%, #16a085);
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

.registerLink,
.homeLink {
  font-weight: 500;
}

.registerLink:hover,
.homeLink:hover {
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
  .register div:nth-child(1) {
    display: none;
  }
  .register div:nth-child(2) {
    flex: 100%;
  }
  .err{
    font-size: 2vw;
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
