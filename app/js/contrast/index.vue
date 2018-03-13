<template lang="html">
    <div>
        <heador/>
        <navtab/>
        <selectequip/>
        <contrastlist/>
    </div>
</template>

<script>
import heador from "../public/header.vue"
import navtab from "../public/navtab.vue"
import selectequip from "./selectequip.vue"
import contrastlist from "./contrastlist.vue"

export default {
    components: {
        heador,
        navtab,
        selectequip,
        contrastlist,
    },
}
</script>
