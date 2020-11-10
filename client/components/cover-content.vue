<template>
    <div class="cover-content-inner is-fullheight">
        <h1 class="title is-3 has-text-white">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
        <p class="has-text-weight-semibold mobile-text has-text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur distinctio ipsum laboriosam non optio similique!</p>
        <div class="buttons mt-5">
            <a class="button is-primary is-rounded">Lorem ipsum dolor.</a>
            <a class="button is-rounded">Lorem ipsum.</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cover-content"
    }
</script>

<style lang="scss">
    .cover-content-inner{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
