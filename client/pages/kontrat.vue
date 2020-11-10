<template>
    <section>
        <cover :cover-image="coverImage"></cover>
        <index-container :tab="4"></index-container>
    </section>
</template>

<script>
    import indexContainer from "../components/index-container";
    import MainPageJobs from "../components/main-page-jobs";
    import Cover from "../components/cover";

    export default {
        name: "kontrat",
        components: {
            indexContainer,
            MainPageJobs,
            Cover
        },
        data(){
            return{
                coverImage: "public/cover.jpg"
            }
        }
    }
</script>

<style scoped>

</style>
