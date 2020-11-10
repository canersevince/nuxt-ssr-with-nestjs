<template>
    <section class="py-3 container is-flex is-align-content-center is-justify-content-center">
        <main-page-jobs :tab="tab"></main-page-jobs>
    </section>
</template>

<script>
    export default {
        name: "index-container",
        props: {
            tab: {
                required: true,
                type: Number
            }
        }
    }
</script>

<style scoped>

</style>
