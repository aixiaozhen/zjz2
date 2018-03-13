<template lang="html">
    <Panel :cname="$style.panel" title="重要装备">
        <section :class="$style.content">
            <ul>
                <li v-for="(item,index) in items" :key="index">
                  <router-link :to="{ path: 'show', query: {id:123} }">
                    <img :src="item.img" :alt="item.title">
                    <p>{{ item.title }}</p>
                  </router-link>
                </li>
            </ul>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"

export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [
                {
                    title: "头盔",
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnazlc1t7j202i02igln.jpg",
                },
                {
                    title: "背包",
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnb05w8gbj202i02it8v.jpg",
                },
                {
                    title: "医疗",
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnb0mevztj202i02idfw.jpg",
                },
                {
                    title: "手弹",
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnb129zt5j202i02ijrg.jpg",
                },
                {
                    title: "消音器",
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnb1p85yqj202i02ijrd.jpg",
                },
                {
                    title: "瞄准镜",
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnb2a9fqnj202i02iglq.jpg",
                },
                {
                    title: "弹夹",
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnb2r3fhkj202i02iwef.jpg",
                },
                {
                    title: "消焰器",
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnb3k6zw6j202i02iwef.jpg",
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
    padding-bottom: 20px;

    ul{
      @include flex(row);
      li{
        width: 25%;
        text-align: center;
        img{
          background: #ededed;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 20px 0 0;
        }
        p{
          height: 60px;
          line-height: 60px;
          font-size: 32px;
        }
      }
    }
  }
}
</style>
