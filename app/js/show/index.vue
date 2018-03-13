<template lang="html">
    <div>
        <heador/>
        <navtab/>
        <showarc/>
    </div>
</template>

<script>
import heador from "../public/header.vue"
import navtab from "../public/navtab.vue"
import showarc from "./article.vue"

export default {
    components: {
        heador,
        navtab,
        showarc,
    },
}
</script>
