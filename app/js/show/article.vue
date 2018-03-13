<template lang="html">
    <article :class="$style.container">
        <loading v-if="loading"/>
        <h1 :class="$style.title">{{ title }}</h1>
        <div :class="$style.content">{{ content }}</div>
    </article>
</template>

<script>
import loading from "../core/loading.vue"

export default {
    components: {
        loading,
    },
    data() {
        return {
            loading: false,
            title: "",
            content: "",
        }
    },
    watch: {
    // 如果路由有变化，会再次执行该方法
        $route: "fetchData",
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true
            // this.content = this.$route.query.id

            this.$axios.get("/news/index")
                .then(res => {
                    this.loading = false
                    this.title = res.data.title
                    this.content = res.data.content
                    // console.log(res)
                })
                .catch(error => {
                    this.loading = false
                    console.log(error)
                })
        },
    },
}
</script>

<style lang="scss" module>
.container{
  margin-top: 100px;
  padding: 0px 30px;
  box-sizing: border-box;
  >h1{
    font-size: 38px;
    line-height: 1.3;
    padding: 30px 0;
    margin-bottom: 30px;
    border-bottom: #ccc 1px solid;/*no*/
  }
  .content{
    font-size: 34px;
    line-height: 1.5;
  }
}
</style>
