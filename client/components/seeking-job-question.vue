<template>
    <div class="container has-shadow is-fluid has-background-white-bis is-paddingless is-marginless">
        <div class="columns is-multiline is-paddingless">
            <div class="column is-paddingless is-6 is-mobile">
                <div class="is-fullwidth">
                    <img alt="" class="left-photo" src="public/cover.jpg">
                </div>
            </div>
            <div class="column is-paddingless is-6 is-mobile">
                <div class="right-side huge-padding">
                    <div class="is-flex is-fullwidth is-align-items-center is-justify-content-start">
                        <b-icon icon="magnify" size="is-large"></b-icon>
                        <h1 class="title is-4 has-text-weight-normal"><strong
                                class="has-text-weight-semibold">Yazılımcı</strong> olarak iş mi arıyorsunuz?</h1>
                    </div>
                    <div class="mt-3 is-flex is-fullwidth is-align-items-start is-justify-content-start is-flex-direction-column">
                        <p class="is-size-5 ctx-text">Profesyonel firmaların iş ilanlarına göz atın, şirketlere özgeçmişinizi
                            gönderin ve size en uygun iş ilanlarına anında başvurun.</p>
                        <div class="buttons is-fullwidth mt-3">
                            <button class="button has-background-grey-darker has-text-white create-account-button"
                                    style="transition: 200ms">Hesap Oluşturun
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "seeking-job-question"
    }
</script>

<style lang="scss" scoped>
    .left-photo {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
        object-position: center;
    }


</style>
