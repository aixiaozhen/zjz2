import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip=false;//声明当前不是生产环境

new Vue({
  el:'#app',
  router,
  components:{
    App
  },
  template:"<App></App>"
})
