<template>
  <router-view />
</template>

<script>
export default {
  name: "app",
  mounted(){
    // document.getElementById("appLoading").style.display = "none";
  }
};
</script>

<style>
@media screen and (min-width: 1700px) {
  html {
    font-size: 16px;
  }
}
@media screen and (max-width: 1699px) {
  html {
    font-size: 14px;
  }
}
@media screen and (max-width: 1200px) {
  html {
    font-size: 12px;
  }
}
@media (max-width: 992px) {
  html {
    font-size: 12px;
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 12px;
  }
}
</style>
<style scoped>
</style>
