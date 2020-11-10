<template>
    <div class="card my-3 is-shadowless is-fullwidth is-relative">
        <div class="has-background-primary-light py-3">
            <div class="columns is-fullwidth py-2 px-5">
                <div class="column is-1 is-full-mobile is-align-content-center is-justify-content-center is-flex is-flex-direction-column">
                    <img class="job-image" src="public/cover.jpg" alt="">
                </div>
                <div class="column is-11 job-content is-full-mobile">
                    <b-tag class="new-badge badge-left badge" type="is-danger">YENİ</b-tag>
                    <b-tag class="type-badge badge badge-right" size="is-medium" type="is-warning">Tam Zamanlı</b-tag>
                    <h1 class="title is-5 is-marginless">Lorem ipsum dolor.</h1>
                    <a href="#" class="has-text-primary">at ABC Bilişim.</a>
                    <p class="has-text-black-bis job-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quibusdam reiciendis sequi?
                    </p>
                    <a class="button is-primary is-small is-mobile">Detaylar</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "job-card"
    }
</script>

<style scoped>
    .card{
        overflow: inherit;
    }
    .new-badge, .type-badge{
        position: absolute;
        cursor: pointer;
        font-weight: 500;
    }
    .badge-left{
        top: -5px;
        left: -10px;
    }
    .badge-right{
        bottom: 0;
        right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .job-description{
        width: 80%;
    }
    .job-image{
        margin: 0 auto;
    }
</style>
