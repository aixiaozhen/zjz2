<template lang="html">
    <Panel :cname="$style.panel" title="载具大全">
        <section :class="$style.content">
            <ul>
                <li v-for="(item,index) in items" :key="index">
                  <router-link :to="{ path: 'show', query: {id:123} }">
                    <img :src="item.img">
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
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnb4mh2xlj203w02sdg1.jpg",
                },
                {
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmvpjrh7a4j203o02sdg4.jpg",
                },
                {
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnb6icv6xj203w02sq35.jpg",
                },
                {
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnb5jeuunj203w02sdg5.jpg",
                },
                {
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmnb537xmsj203w02s3yr.jpg",
                },
                {
                    img: "http://ww1.sinaimg.cn/large/e74bf9d3ly1fmvpldusptj203002s0sv.jpg",
                },
                {
                    img: "http://ww1.sinaimg.cn/large/57e225a7ly1fo14a181d4j203t02saaa.jpg",
                },
                {
                    img: "http://ww1.sinaimg.cn/large/57e225a7ly1fo149i9ol3j203t02sjrn.jpg",
                },
                {
                    img: "http://ww1.sinaimg.cn/large/57e225a7ly1fo148z5mxvj203t02saa2.jpg",
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
    padding: 20px 0;

    ul{
      @include flex(row);
      li{
        width: 33.33%;
        text-align: center;
        margin: 10px 0;
        img{
          width: 70%;
        }
      }
    }
  }
}
</style>
