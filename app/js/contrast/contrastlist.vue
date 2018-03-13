<template lang="html">
    <Panel :cname="$style.panel" title="数据表格">
        <section :class="$style.content">
            <h4>属性对比</h4>
            <ul>
                <li>
                    <div :class="$style.name">伤害</div>
                    <div :class="{red:leftItem.sh>rightItem.sh}">{{ leftItem.sh }}</div>
                    <div :class="{red:rightItem.sh>leftItem.sh}">{{ rightItem.sh }}</div>
                </li>
                <li>
                    <div :class="$style.name">射速</div>
                    <div :class="{red:leftItem.ss>rightItem.ss}">{{ leftItem.ss }}</div>
                    <div :class="{red:rightItem.ss>leftItem.ss}">{{ rightItem.ss }}</div>
                </li>
                <li>
                    <div :class="$style.name">射程</div>
                    <div :class="{red:leftItem.sc>rightItem.sc}">{{ leftItem.sc }}</div>
                    <div :class="{red:rightItem.sc>leftItem.sc}">{{ rightItem.sc }}</div>
                </li>
                <li>
                    <div :class="$style.name">弹夹容量</div>
                    <div :class="{red:leftItem.djrl>rightItem.djrl}">{{ leftItem.djrl }}</div>
                    <div :class="{red:rightItem.djrl>leftItem.djrl}">{{ rightItem.djrl }}</div>
                </li>

            </ul>
        </section>
        <section :class="$style.content">
            <h4>对佩戴防具目标造成伤害对比</h4>
            <ul>
                <li>
                    <div :class="$style.name">裸防弹衣</div>
                    <div :class="{red:leftItem.lfdy>rightItem.lfdy}">{{ leftItem.lfdy }}</div>
                    <div :class="{red:rightItem.lfdy>leftItem.lfdy}">{{ rightItem.lfdy }}</div>
                </li>
                <li>
                    <div :class="$style.name">初级防弹衣</div>
                    <div :class="{red:leftItem.cjfdy>rightItem.cjfdy}">{{ leftItem.cjfdy }}</div>
                    <div :class="{red:rightItem.cjfdy>leftItem.cjfdy}">{{ rightItem.cjfdy }}</div>
                </li>
                <li>
                    <div :class="$style.name">中级防弹衣</div>
                    <div :class="{red:leftItem.zjfdy>rightItem.zjfdy}">{{ leftItem.zjfdy }}</div>
                    <div :class="{red:rightItem.zjfdy>leftItem.zjfdy}">{{ rightItem.zjfdy }}</div>
                </li>
                <li>
                    <div :class="$style.name">高级防弹衣</div>
                    <div :class="{red:leftItem.gjfdy>rightItem.gjfdy}">{{ leftItem.gjfdy }}</div>
                    <div :class="{red:rightItem.gjfdy>leftItem.gjfdy}">{{ rightItem.gjfdy }}</div>
                </li>
                <li>
                    <div :class="$style.name">裸头盔</div>
                    <div :class="{red:leftItem.ltk>rightItem.ltk}">{{ leftItem.ltk }}</div>
                    <div :class="{red:rightItem.ltk>leftItem.ltk}">{{ rightItem.ltk }}</div>
                </li>
                <li>
                    <div :class="$style.name">初级头盔</div>
                    <div :class="{red:leftItem.cjtk>rightItem.cjtk}">{{ leftItem.cjtk }}</div>
                    <div :class="{red:rightItem.cjtk>leftItem.cjtk}">{{ rightItem.cjtk }}</div>
                </li>
                <li>
                    <div :class="$style.name">中级头盔</div>
                    <div :class="{red:leftItem.zjtk>rightItem.zjtk}">{{ leftItem.zjtk }}</div>
                    <div :class="{red:rightItem.zjtk>leftItem.zjtk}">{{ rightItem.zjtk }}</div>
                </li>
                <li>
                    <div :class="$style.name">高级头盔</div>
                    <div :class="{red:leftItem.gjtk>rightItem.gjtk}">{{ leftItem.gjtk }}</div>
                    <div :class="{red:rightItem.gjtk>leftItem.gjtk}">{{ rightItem.gjtk }}</div>
                </li>
            </ul>
        </section>
        <section :class="$style.content">
            <h4>其他对比</h4>
            <ul>
                <li>
                    <div :class="$style.name">产出途径</div>
                    <div>{{ leftItem.cctj }}</div>
                    <div>{{ rightItem.cctj }}</div>
                </li>
                <li>
                    <div :class="$style.name">自带配件</div>
                    <div>{{ leftItem.zdpj }}</div>
                    <div>{{ rightItem.zdpj }}</div>
                </li>

            </ul>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import bus from "../core/eventBus.js"

export default {
    components: {
        Panel,
    },
    data() {
        return {
            leftItem: "",
            rightItem: "",
        }
    },
    mounted() {
        this.$nextTick(() => {
            bus.$on("addGunsData", (item) => {
                if (item.type === "left") {
                    this.leftItem = item.data
                }
                else {
                    this.rightItem = item.data
                }
            })

            bus.$on("delGunsData", (type) => {
                if (type === "left") {
                    this.leftItem = ""
                }
                else {
                    this.rightItem = ""
                }
            })
        })
    },
}
</script>
<style lang="scss">
.red{
  color: #f00;
}
</style>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  margin-bottom: 115px;
  >h4{
    display: none;
  }
  .content{
    h4{
      background: #3e78c1;
      color: #fff;
      height: 90px;
      line-height: 90px;
      font-size: 36px;
      padding: 0 30px;
      &:before{
        display: inline-block;
        content: "";
        background: url("../../images/icon_2.png");
        background-size: cover;
        width: 32px;
        height: 32px;
        margin-right: 15px;
      }
    }
    ul{
      padding: 0 20px;

      li{
        @include flex(row);
        justify-content: center;
        align-items: center;
        font-size: 36px;
        padding:30px 0;
        border-bottom: #ebebeb 1px solid;/*no*/
        &:nth-last-child(1){
          border-bottom: none;
        }
        div{
          width: 30%;
          text-align: center;
        }
        .name{
          width: 40%;
          text-align: left;
          padding-left: 30px;
          box-sizing: border-box;
          color: #888;
        }

      }
    }
  }
}
</style>
