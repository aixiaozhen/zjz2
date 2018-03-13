<template lang="html">
    <panel :cname="$style.panel" title="建筑攻防">
        <section :class="$style.content">
            <ul>
                <li v-for="(item,index) in items" :key="index">
                  <router-link :to="{ path: 'show', query: {id:123} }">
                    <img :src="item.pic" alt="">
                    <p>{{ item.title }}</p>
                  </router-link>
                </li>
            </ul>
        </section>
    </panel>
</template>

<script>
import panel from "../core/panel.vue"

export default {
    components: {
        panel,
    },
    data() {
        return {
            items: [
                {
                    title: "北仓",
                    pic: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fms9b3zc32j204l037aaw.jpg",
                },
                {
                    title: "威特镇",
                    pic: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmsa78ee2dj204l0370ti.jpg",
                },
                {
                    title: "观测台",
                    pic: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnbj3ry78j204l037q2y.jpg",
                },
                {
                    title: "塞伯坦",
                    pic: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnbkqzw3pj204l037q31.jpg",
                },
                {
                    title: "211火电站",
                    pic: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnbk9h032j204l037dfy.jpg",
                },
                {
                    title: "防空堡",
                    pic: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnblsanv4j204l0373yk.jpg",
                },
                {
                    title: "靶场",
                    pic: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmsaa8tu1qj204l037q3l.jpg",
                },
                {
                    title: "黑色油厂",
                    pic: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnbmef2f8j204l037aa5.jpg",
                },
                {
                    title: "伐木场",
                    pic: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmsa3un6cgj204l037t9i.jpg",
                },
                {
                    title: "赤山镇",
                    pic: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmsa1ohgvyj204l037aav.jpg",
                },
                {
                    title: "保险仓库",
                    pic: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnar99kelj204l037glp.jpg",
                },
                {
                    title: "里亚尔港",
                    pic: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmsa56epewj204l037dgm.jpg",
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  margin-bottom: 115px;
  >h4{
    background: #f7f7f7;
    font-weight: bold;
    height: 80px;
    line-height: 80px;
  }
  .content{
    ul{
      @include flex(row);
      padding: 16px 8px;
      // margin: 16px 5px;
      box-sizing: border-box;
      li{
        width: 25%;
        text-align: center;
        position: relative;
        padding: 8px;
        box-sizing: border-box;

        img{
          width: 100%;
          vertical-align: middle;
        }
        p{
          width: 100%;
          color: #fff;
          font-size: 32px;
          position: absolute;
          height: 30px;
          line-height: 30px;
          margin-top: -15px;
          top: 50%;
          left: 0;
          text-align: center;
        }
      }
    }
  }
}
</style>
