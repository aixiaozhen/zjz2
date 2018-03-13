<template lang="html">
    <div>
        <heador/>
        <banner/>
        <base-handle/>
        <hot/>
        <gun/>
        <equip/>
        <cars/>
        <building/>
        <navtab/>
    </div>
</template>

<script>
import heador from "../public/header.vue"
import navtab from "../public/navtab.vue"
import banner from "./banner.vue"
import baseHandle from "./base.vue"
import hot from "./hot.vue"
import gun from "./gun.vue"
import equip from "./equip.vue"
import cars from "./cars.vue"
import building from "./building.vue"

export default {
    components: {
        heador,
        banner,
        baseHandle,
        hot,
        gun,
        equip,
        cars,
        building,
        navtab,
    },
}
</script>
