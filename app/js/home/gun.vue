<template lang="html">
    <panel :cname="$style.panel" title="枪支攻略">
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
                    title: "步枪",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp428tr28dj204l037q2v.jpg",
                },
                {
                    title: "冲锋枪",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp4291991hj204l037mxa.jpg",
                },
                {
                    title: "狙击枪",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp42991qdpj204l037jri.jpg",
                },
                {
                    title: "散弹枪",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp429gedwcj204l037t8p.jpg",
                },
                {
                    title: "手枪",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp429opo7tj204l037wej.jpg",
                },
                {
                    title: "机械配件",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp429yrvz5j204l0370t1.jpg",
                },
                {
                    title: "超视距战术",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp42a6v9g1j204l037t8v.jpg",
                },
                {
                    title: "倍镜对比",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp42ai96cdj204l037t91.jpg",
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
