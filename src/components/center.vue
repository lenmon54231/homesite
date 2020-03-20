<template>
  <div class="con">
    <Nav></Nav>
    <div class="mainpage">
      <div class="leftnav">
        <h3>订单中心</h3>
        <ul>
          <li>占位表示</li>
          <li>占位表示</li>
          <li>占位表示</li>
          <li>占位表示</li>
          <li>占位表示</li>
        </ul>
        <h3>个人中心</h3>
        <ul>
          <li>展示位置</li>
          <li>展示位置</li>
          <li>展示位置</li>
          <li>展示位置</li>
          <li>展示位置</li>
          <li>展示位置</li>
          <li>展示位置</li>
          <li>展示位置</li>
          <li>展示位置</li>
          <li>展示位置</li>
        </ul>
      </div>
      <div class="main">
        <div class="usrinfo">
                  <div class="usrname red">用户名:{{ usrname }}</div>
                  <div class="loginTime">登录时间:{{time}}</div>
                  <div class="loginTime">过期时间:{{overtime}}</div>
                  <div v-if="timeToOver.sec>1">还有 <span class="red">{{timeToOver.min}}</span> 分钟 <span class="red">{{timeToOver.sec}}</span> 秒过期</div>
        </div>
        <div class="showlist">
          <div>模拟占位</div>
          <div>模拟占位</div>
          <div>模拟占位</div>
          <div>模拟占位</div>
          <div>模拟占位</div>
          <div>模拟占位</div>
          <div>模拟占位</div>
          <div>模拟占位</div>
        </div>
        <div class="loginOut">登出</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
export default {
  name: "center",
  components: {
    Nav
  },
  data() {
    return {
      usrname: "",
      time: "",
      overtime: "",
      timeToOver:{min:"",sec:""},
    };
  },
  mounted() {
    document.getElementById("appLoading").style.display = "none";
    let passUsrInfo = JSON.parse(window.localStorage.getItem("passUsrInfo"));
    this.usrname = passUsrInfo.usrname?passUsrInfo.usrname:"无名氏";
    this.time = passUsrInfo.time ?this.common.formatTime(passUsrInfo.time) : "已经过期，请重新登录"
    this.overtime = passUsrInfo.time ?this.common.formatTime(passUsrInfo.time + 600000) : "已经过期，请重新登录"
    this.timesub(passUsrInfo.time)
  },
  methods:{
    timesub(time){
      this.timeToOver.min = parseInt((603 - (Date.now() - time)/1000)/60);
      this.timeToOver.sec = parseInt((603 - (Date.now() - time)/1000)%60)
      let timeover = setInterval(() => {
        if(this.timeToOver.sec > 1){
                this.timeToOver.min = parseInt((603 - (Date.now() - time)/1000)/60);
           this.timeToOver.sec = parseInt((603 - (Date.now() - time)/1000)%60)
        }else{
          this.timeToOver.min = 0;
this.timeToOver.sec = 0;
          clearInterval(timeover)
        }
      }, 1000);
    }
  },

};
</script>

<style scoped>
.mainpage{
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
    margin: 50px 25px 0 25px;
}
.leftnav{
  flex: 0 0 auto;
  margin-right: 50px;
}
.main {
  flex: 1;
  background-color: grey;
}
</style>
