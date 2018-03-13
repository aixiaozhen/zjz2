<template lang="html">
    <Panel :cname="$style.panel" title="选择对比装备">

        <section :class="$style.content">

            <div :class="$style.tips">请选择装备>></div>

            <div v-if="leftData.name" :class="$style.selectBtn">
                <img :src="leftData.pic|getFullSrc">
                <p>{{ leftData.name }}</p>
                <span @click="delEquip('left',leftData.index,leftData.ins)"/>
            </div>
            <div v-else :class="$style.selectBtn">
                <img :src="leftData.img" @click="addEquip('left')">
                <p>{{ leftData.title }}</p>
            </div>

            <div v-if="rightData.name" :class="$style.selectBtn">
                <img :src="rightData.pic|getFullSrc">
                <p>{{ rightData.name }}</p>
                <span @click="delEquip('right',rightData.index,rightData.ins)"/>
            </div>
            <div v-else :class="$style.selectBtn">
                <img :src="rightData.img" @click="addEquip('right')">
                <p>{{ rightData.title }}</p>
            </div>

        </section>
        <transition name="fade">
            <section v-show="gunsPanel" :class="$style.gunList">
                <div v-for="(items,index) in wqListData" :key="index">
                    <h4>{{ items.title }}</h4>
                    <ul>
                        <li v-for="(item,ins) in items.data" :key="ins">
                            <img :src="item.pic|getFullSrc" @click="selectedGun(item,index,ins)">
                            <p>{{ item.name }}</p>
                            <span v-show="item.isCur"><img src="../../images/cover.png"></span>
                        </li>
                    </ul>
                </div>
            </section>

        </transition>

    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import wqList from "../data/wuqiData.js"
import bus from "../core/eventBus.js"

export default {
    components: {
        Panel,
    },
    filters: {
        getFullSrc(name) {
            return require(`../../images/guns/${name}.jpg`)
        },
    },
    props: {},
    data() {
        return {
            wqListData: "",
            gunsPanel: false,
            curContrast: "",
            leftData: {
                img: require("../../images/duibiAdd.jpg"),
                title: "添加装备",
            },
            rightData: {
                img: require("../../images/duibiAdd.jpg"),
                title: "添加装备",
            },
        }
    },
    watch: {
        gunsPanel(val) {
            if (val) {
                document.getElementsByTagName("html")[0].className = "html-share"
                document.getElementsByTagName("body")[0].className = "body-share"
            }
            else {
                document.getElementsByTagName("html")[0].className = ""
                document.getElementsByTagName("body")[0].className = ""
            }
        },
    },
    mounted() {
        const that = this
        this.$nextTick(() => {
            that.getGunList()
        })
    },
    destroyed() {
        if (this.leftData.index > -1 && this.leftData.ins > -1) {
            this.wqListData[this.leftData.index].data[this.leftData.ins].isCur = false
        }
        if (this.rightData.index > -1 && this.rightData.ins > -1) {
            this.wqListData[this.rightData.index].data[this.rightData.ins].isCur = false
        }
        document.getElementsByTagName("html")[0].className = ""
        document.getElementsByTagName("body")[0].className = ""
    },
    methods: {
        getGunList() {
            const wqListData = []
            const wqListSSR = []
            const wqListSR = []
            const wqListR = []
            for (const i in wqList.wqList) {
                if (wqList.wqList[i].type === "SSR") {
                    wqListSSR.push(wqList.wqList[i])
                }
                else if (wqList.wqList[i].type === "SR") {
                    wqListSR.push(wqList.wqList[i])
                }
                else {
                    wqListR.push(wqList.wqList[i])
                }
            }

            wqListData.push(
                {
                    title: "步枪",
                    data: wqListSSR,
                },
                {
                    title: "散弹枪、冲锋枪",
                    data: wqListSR,
                },
                {
                    title: "手枪、狙击枪",
                    data: wqListR,
                },
            )

            this.wqListData = wqListData
        },
        selectedGun(item, index, ins) {
            this.wqListData[index].data[ins].isCur = true

            item.index = index
            item.ins = ins

            if (this.curContrast === "left") {
                this.leftData = item
                bus.$emit("addGunsData", {
                    type: "left",
                    data: item,
                })
            }
            else {
                this.rightData = item
                bus.$emit("addGunsData", {
                    type: "right",
                    data: item,
                })
            }
            this.gunsPanel = false
        },
        addEquip(which) {
            this.curContrast = which
            this.gunsPanel = true
        },
        delEquip(which, index, ins) {
            this.wqListData[index].data[ins].isCur = false
            const defaultBtn = {
                img: require("../../images/duibiAdd.jpg"),
                title: "添加装备",
            }
            if (which === "left") {
                this.leftData = defaultBtn
                bus.$emit("delGunsData", "left")
            }
            else {
                this.rightData = defaultBtn
                bus.$emit("delGunsData", "right")
            }
        },
    },

}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.html-share,.body-share {
  overflow: hidden;
  height: 100%;
}
</style>
<style lang="scss" module>
@import "../../css/element.scss";
.panel {
    @include panel($padding:60px 0,$margin:100px 0 0 0);
    > h4 {
        display: none;
    }
    .content {
        @include flex(row);
        color: #92a4b2;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        .tips,
        p {
            font-size: 36px;
        }
        p {
            text-align: center;
            margin: 20px 0;
        }
        img {
            width: 150px;
            height: 150px;
            border-radius: 10px;
        }
        span {
            background: url("../../images/close.png");
            background-size: cover;
            width: 50px;
            height: 50px;
            position: absolute;
            top: -20px;
            right: 20px;
        }
        .tips {
            width: 40%;
            padding-left: 30px;
            box-sizing: border-box;
        }
        .selectBtn {
            width: 30%;
            text-align: center;
            position: relative;
        }
    }
    .gunList {
        position: fixed;
        top: 100px;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;
        height: 100%;
        background: #fff;
        h4 {
            background: #3b424a;
            color: #fff;
            height: 90px;
            line-height: 90px;
            font-size: 36px;
            padding: 0 30px;
        }
        ul {
            @include flex(row);
            justify-content: flex-start;
            margin: 30px 0;
            font-size: 36px;
            li {
                width: 33.33%;
                text-align: center;
                position: relative;
                img {
                    width: 210px;
                    height: 210px;
                    border-radius: 10px;
                }
                p {
                    margin: 25px 0;
                }
                span{
                  position: absolute;
                  left: 50%;
                  top: 0;
                  width: 210px;
                  height: 210px;
                  margin-left: -105px;
                  @include flex;
                  justify-content: center;
                  align-items: center;
                  background: rgba(0, 0, 0,0.5);
                  border-radius: 10px;
                  img{
                    width: 45px;
                    height: 45px;
                  }
                }
            }
        }
    }
}
</style>
