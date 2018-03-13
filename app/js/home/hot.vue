<template lang="html">
    <Panel :cname="$style.panel" title="热门推荐">
        <section :class="$style.content">
            <ul>
                <li v-for="(item,index) in items" :key="index">
                  <router-link :to="{ path: 'show', query: {id:123} }">
                    {{ item.title }}
                    <span v-if="item.icon>''" :class="item.icon"/>
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
                    title: "最新公告",
                    icon: "hot",
                },
                {
                    title: "公测开启",
                    icon: "",
                },
                {
                    title: "防空堡落点",
                    icon: "",
                },
                {
                    title: "跳伞技巧",
                    icon: "",
                },
                {
                    title: "跳伞地点",
                    icon: "new",
                },
                {
                    title: "配件教学",
                    icon: "",
                },
                {
                    title: "海战爆发",
                    icon: "",
                },
                {
                    title: "中枪应对策略",
                    icon: "",
                },
                {
                    title: "时装分解",
                    icon: "recommend",
                },
            ],
        }
    },
    // created() {
    //     this.$axios.get("//www.aixiaozhen.com")
    //         .then(response => {
    //              console.log(response)
    //         })
    //         .catch(response => {
    //              console.log(response)
    //         })
    // },
}
</script>
<style lang="scss">

span.hot{
    position: absolute;
    top: 10px;
    right: 10px;

    &:after{
      content: "热";
      background: #ff0000;
      color: #fff;
      display: block;
      width: 36px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      font-size: 26px;
    }

}

span.new{
    position: absolute;
    top: 10px;
    right: 10px;

    &:after{
      content: "新";
      background: #ff0000;
      color: #fff;
      display: block;
      width: 36px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      font-size: 26px;
    }

}
span.recommend{
    position: absolute;
    top: 10px;
    right: 10px;

    &:after{
      content: "荐";
      background: blue;
      color: #fff;
      display: block;
      width: 36px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      font-size: 26px;
    }

}
</style>
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
    font-size: 32px;
    ul{
      @include flex(row);

      li{
        width: 33.33%;
        height: 90px;
        line-height: 90px;
        text-align: center;
        border-bottom: #ebebeb 1PX solid;
        border-right: #ebebeb 1PX solid;
        box-sizing: border-box;
        position: relative;
        &:nth-child(3n){
          border-right: none;
        }
        &:nth-last-child(1),&:nth-last-child(2),&:nth-last-child(3){
          border-bottom: none;
        }

      }
    }
  }
}
</style>
