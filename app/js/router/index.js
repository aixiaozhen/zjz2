import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Contrast from "../contrast/index.vue"
import Article from "../show/index.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/contrast",
            name: "contrast",
            component: Contrast,
        },
        {
            path: "/show",
            name: "show",
            component: Article,
        },
    ],
})
