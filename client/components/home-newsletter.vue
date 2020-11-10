<template>
    <div class="container newsletter is-fluid py-5">
        <div class="columns is-multiline py-5">
            <div class="column is-12 has-text-centered py-5">
                <div class="is-fullwidth newsletter-ctx">
                    <h1 class="title is-3 has-text-white">E-Posta Bültenine Abone Olun </h1>
                    <p class="is-size-5 has-text-white newsletter-description">
                        Haftanın en popüler iş ilanlarına mail ile ulaşın.
                    </p>
                    <div class="newsletter-input is-flex is-align-items-center is-justify-content-center">
                        <b-input placeholder="örnek@email.com" icon-right="magnify"></b-input>
                        <b-button type="is-success">Abone Ol!</b-button>
                    </div>
                    <div class="mt-3 is-size-7 has-text-white">Asla spam gönderilmez.<b-icon icon="hand" type="is-white" size="is-small"></b-icon></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-newsletter"
    }
</script>

<style lang="scss" scoped>
    $bg: #536eec;
    .newsletter-ctx{
        padding: 3rem 1em;
    }
    .newsletter {
        background: $bg;
    }
    .newsletter-description{
        width: 100%;
        text-align: center;
    }
    .newsletter-input{
        max-width: 425px;
        margin: 1em auto 0 auto;
        gap: .2em;
    }
</style>
