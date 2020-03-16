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
      <h2>账号注册</h2>
      <div
        class="accAndPass"
        ref="accAndPass"
        v-for="(item,index) in items1"
        :key="index"
        :class="{bottom:index === bottom || item.show}"
      >
        <span ref="spans" :class="{showup: index === showup || item.show}">{{item.text}}</span>
        <input
          ref="inputValue"
          type="text"
          v-model="item.value"
          @focus="turnUp(index)"
          @blur="turnOff(index)"
        />
        <div class="err" :class="{showerr:item.showerr}">{{item.err}}</div>
      </div>
      <input type="submit" class="login" value="注册" :disabled="disabled" />
      <div class="register">
        <div>
          返回:
          <router-link tag="a" to="/home" class="registerLink">主页</router-link>
        </div>
        <div>
          已有账号？
          <router-link tag="a" to="/login" class="registerLink">登录</router-link>
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
      bottom: "",
      showup: "",
      showerr: "",
    };
  },
  mounted() {
    document.getElementById("appLoading").style.display = "none";
  },
  computed: {
    disabled: function() {
      var phoneNum = !this.common.phoneNumber(0, this.items1[0].value);
      var disabled = this.common.checkInput(
        this.items1[0].value,
        this.items1[1].value,
        phoneNum
      );
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
  background-image: linear-gradient(
    to right bottom,
    #34495e,
    rgb(72, 147, 209)
  );
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