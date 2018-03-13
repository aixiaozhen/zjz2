<template lang="html">
    <div>
        <section :class="[panelClass,cname]">
            <h4>{{ title }}</h4>
            <slot/>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        cname: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },

    },
    data() {
        return {
            panelClass: "panel",
        }
    },
}
</script>

<style lang="scss" module>
</style>
