<template>
    <div class="cover-image-container card" v-if="coverImage" :style="'background-image: url('+coverImage+')'">
        <div class="has-background-black-bis is-fullwidth is-fullheight cover-overlay"></div>
        <div class="cover-content">
            <cover-content></cover-content>
        </div>
    </div>
</template>

<script lang="ts">
    import CoverContent from './cover-content.vue';
    export default {
        components: {CoverContent},
        props: {
            coverImage: {
                required: true,
                type: String
            }
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss">
    $coverHeight: 25vh;
    .cover-image-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 40vh;
        max-height: 40vh;
        padding: 5em;
        text-align: center;
        .cover-overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            opacity: 0.6;
        }
        .cover-content{
            width: 100%;
            height: 100%;
            text-align: center;
            z-index: 2;
        }
    }
</style>
