<template lang="html">
    <Panel :cname="$style.panel" title="底部Tab导航">
        <section :class="$style.content">

            <div
                v-for="(item,index) in setTabClass"
                :key="index"
                :class="$style.item"
            >
                <router-link :to="{ name: item.link }">
                    <img :src="item.img">
                    <p>{{ item.title }}</p>
                </router-link>
            </div>
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
                    title: "攻略首页",
                    tabImg: require("../../images/icon-gonglue.png"),
                    tabImgActive: require("../../images/icon-gonglue-selected.png"),
                    link: "home",
                },
                {
                    title: "数据对比",
                    tabImg: require("../../images/icon-duibi.png"),
                    tabImgActive: require("../../images/icon-duibi-selected.png"),
                    link: "contrast",
                },
            ],
        }
    },
    computed: {
        setTabClass() {
            for (let i = 0; i < this.items.length; i++) {
                if (this.$route.name === this.items[i].link) {
                    this.items[i].img = this.items[i].tabImgActive
                }
                else {
                    this.items[i].img = this.items[i].tabImg
                }
            }
            return this.items
        },
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel();
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: #b2b2b2 1PX solid;
  height: 115px;
  box-sizing: border-box;
  padding: 10px 0;
  overflow: hidden;
  >h4{
    display: none;
  }
  .content{
    @include flex(row);
    justify-content: center;
    .item{
      width: 50%;
      text-align: center;
      img{
        width: 60px;
        height: 60px;
      }
      p{
        font-size: 28px;
        color: #9d9d9d;
      }
    }
  }
}
</style>
