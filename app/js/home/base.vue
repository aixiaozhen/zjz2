<template lang="html">
    <panel :cname="$style.panel" title="基本操作">
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
                    title: "操作指南",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp3aefud93j204l037jre.jpg",
                },
                {
                    title: "新手入门",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp3agix8sej204l037wei.jpg",
                },
                {
                    title: "界面介绍",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp3ags9li4j204l037mx4.jpg",
                },
                {
                    title: "商城系统",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp3agxsv44j204l037aa3.jpg",
                },
                {
                    title: "更换角色",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp3ah3h9xtj204l037jri.jpg",
                },
                {
                    title: "游戏设置",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp3ahataomj204l037q30.jpg",
                },
                {
                    title: "地图系统",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp3ahhm171j204l037glp.jpg",
                },
                {
                    title: "声源提示",
                    pic: "http://ww1.sinaimg.cn/large/57e225a7ly1fp3ahncne9j204l0373yn.jpg",
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
