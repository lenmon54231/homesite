<template>
  <nav class="nav">
    <div class="container">
      <div class="row navbar">
        <div class="col-xs-3 navbarLeft">
          <router-link tag="a" to="/home">导航</router-link>
          <router-link tag="a" to="/mall">乐檬电影</router-link>
          <router-link tag="a" to="/mytools">工具</router-link>
        </div>
        <div v-if="showRegLogin" class="col-xs-2 col-xs-offset-7 navbarRight">
          <router-link tag="a" to="/login">登录</router-link>
          <router-link tag="a" to="/register">注册</router-link>
        </div>
        <div v-else class="col-xs-2 col-xs-offset-7 navbarRight">
          <router-link tag="a" to="/center">个人中心</router-link>
          <router-link tag="a" to="/register">注册</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data(){
    return{
      showRegLogin: true
    }
  },
  mounted() {
    this.showRegLogin = !this.common.judgeLogin()
  }
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  z-index: 1000;
  width: 100%;
  background-color: rgba(56, 68, 82, 0.9);
}

.navbarLeft,
.navbarRight {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.navbarLeft > a,
.navbarRight > a {
  text-decoration: none;
  height: 50px;
  line-height: 50px;
  text-align: center;
  flex: 1;
  font-size: 1.25rem;
  margin-right: 10px;
  color: #fff;
}

.navbarLeft > a:hover,
.navbarRight > a:hover {
  color: #fff;
}

.navbar {
  border: none;
}

@media screen and (min-width: 1699px) {
}

@media screen and (max-width: 768px) {
  .navbarLeft {
    width: 50%;
    float: left;
  }
  .navbarRight {
    width: 30%;
    float: right;
    margin-left: 0;
  }
}
</style>
