<template>
    <div class="container has-shadow is-fluid has-background-white-bis is-paddingless is-marginless">
        <div class="columns is-multiline is-paddingless">
            <div class="column is-paddingless is-6 is-mobile">
                <div class="right-side huge-padding">
                    <div class="is-flex is-fullwidth is-align-items-center is-justify-content-start">
                        <b-icon icon="magnify" size="is-large"></b-icon>
                        <h1 class="title is-4 has-text-weight-normal"><strong
                                class="has-text-weight-semibold">Şirketinize</strong> yetenekli yazılımcılar mı arıyorsunuz?</h1>
                    </div>
                    <div class="mt-3 is-flex is-fullwidth is-align-items-start is-justify-content-start is-flex-direction-column">
                        <p class="is-size-5 ctx-text">Binlerce yazılımcıya tek platformdan ulaşın. İş ilanlarınızı yazilimcimerkezi.com üzerinden yayınlayın ve adayların özgeçmişlerini toplayın. Hayalinizdeki geliştirici ekibini oluşturmaya başlayın.</p>
                        <div class="buttons is-fullwidth mt-3">
                            <b-button type="is-primary" class="button has-background-success has-text-white create-account-button"
                                    style="transition: 200ms">İş İlanı Oluşturun
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-paddingless is-6 is-mobile">
                <div class="is-fullwidth">
                    <img alt="" class="left-photo" src="public/cover.jpg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "seeking-personal-question"
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
