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
      <h2>账号登录</h2>
      <div class="accAndPass" v-for="(item, index) in items1" :key="index" :class="{ bottom: index === bottom || item.show }">
        <span ref="spans" :class="{ showup: index === showup || item.show }">{{ item.text }}</span>
        <input ref="inputGroup" name="inputValue" :type="item.type" @focus="turnUp(index)" @blur="turnOff(index)" v-model="item.value" autocomplete="current-password" />
        <div class="err" :class="{ showerr: item.showerr }">{{ item.err }}</div>
        <img :src="showEyes ? openIcon : closeIcon" name="eyes" @click="showPassWord(index)" />
      </div>
      <input type="submit" class="login" value="登录" :disabled="disabled" />
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
      showEyes: false
    };
  },
  mounted() {
    document.getElementById("appLoading").style.display = "none";
  },
  computed: {
    disabled: function() {
      var phoneNum = !this.common.phoneNumber(0, this.items1[0].value);
      var disabled = this.common.checkInput(this.items1[0].value, this.items1[1].value, phoneNum);
      return disabled;
    }
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
        if (this.common.phoneNumber(index, this.items1[index].value)) {
          this.items1[index].showerr = true;
        } else {
          this.items1[index].showerr = false;
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
  height: 50px;
  margin: 10px 0;
}

.accAndPass input {
  height: 50px;
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
  .login {
    height: 40px;
    line-height: 40px;
  }
  .accAndPass input {
    height: 50px;
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
