import Vue from "vue"
import axios from "axios"
import App from "./App.vue"
import router from "./router"


Vue.config.productionTip = true// 声明当前不是生产环境

Vue.prototype.$axios = axios

// 引入mockjs
require("./mock.js")

new Vue({
    el: "#app",
    router,
    components: {
        App,
    },
    template: "<App></App>",
})
