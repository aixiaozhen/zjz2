<template lang="html">
    <Panel :cname="$style.panel" title="顶部banner图">
        <img src="http://ww1.sinaimg.cn/large/57e225a7ly1fp33aj58xkj20ku08c0u0.jpg" alt="">
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"

export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
.panel{
  margin-top: 100px;
  >h4{
    display: none;
  }
  img{
    width: 100%;
    vertical-align: middle;
  }
}
</style>
