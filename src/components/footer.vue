<template>
  <div class="footer">
    <div class="container">
      <div class="row footerList">
        <div class="col-md-3">QQ:894563328</div>
        <div class="col-md-3">E-mail:limeng54231@163.com</div>
        <div class="col-md-3">
          <div style="cursor: pointer">
            <router-link tag="div" to="/acp">ACP证书</router-link>
          </div>
        </div>
        <div class="col-md-3">
          <div style="cursor: pointer">
            <router-link tag="div" to="/resume">在线简历</router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-md-offset-3 copyRight">Copyright © 2012-2020 Lee All Rights Reserved. | Powered by Vue & Mifa Design</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
/* footer */

.footer {
  height: 65px;
  background-color: #384452;
  margin-top: 10px;
  width: 100%;
}

.footerList > div {
  height: 45px;
  line-height: 45px;
  color: whitesmoke;
  text-align: center;
}

.copyRight {
  height: 20px;
  text-align: center;
  font-size: 15px;
  color: whitesmoke;
}
/* 超大屏幕 */

@media (min-width: 1700px) {
}

/* 超小屏幕 */

@media screen and (max-width: 992px) {
  .footer {
    height: 210px;
  }
}
</style>
