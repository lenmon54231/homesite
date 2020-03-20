<template>
  <nav class="nav">
    <div class="container">
      <div class="row navbar">
        <div class="col-xs-3 navbarLeft">
          <router-link tag="a" to="/home">Home</router-link>
          <router-link tag="a" to="/mall">Movie</router-link>
          <router-link tag="a" to="/mytools">CSS3</router-link>
        </div>
        <div v-if="showRegLogin" class="col-xs-2 col-xs-offset-7 navbarRight">
          <router-link tag="a" to="/login">Login</router-link>
          <router-link tag="a" to="/register">Register</router-link>
        </div>
        <div v-else class="col-xs-2 col-xs-offset-7 navbarRight">
          <router-link tag="a" to="/center">Center</router-link>
          <router-link tag="a" to="/register">Register</router-link>
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
  color: whitesmoke;
  flex: 1;
  font-size: 1.25rem;
  margin-right: 10px;
}

.navbarLeft > a:hover,
.navbarRight > a:hover {
  background-color: #fff;
  color: black;
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
