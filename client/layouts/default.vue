<template>
    <div>
        <navbar></navbar>
        <div>
            <nuxt/>
        </div>
    </div>
</template>

<script>
    import Navbar from "../components/navbar";

    export default {
        components: {Navbar},
        head() {
            return {
                bodyAttrs: {
                    // class: 'app-dark'
                }
            }
        },
        data() {
            return {}
        }
    }
</script>


<style lang="scss">
    $link: #000000;
    $margin-top: 52px;
    .fixed-top-margin {
        margin-top: $margin-top;
    }

    .is-transparent {
        background: transparent;
    }

    .is-fullwidth {
        width: 100%;
    }
    body{
        overflow: hidden;
    }

    .app-dark {
        background: #ccc;
        filter: invert(1);
        img {
            filter: none;
        }
      .cover-content{
        filter: invert(1);
      }
      .label, .input{
        color: white;
      }
      .input{
        background: #333;
        &::placeholder{
          color: white;
        }
      }
      .has-background-primary-light{
        button, .button, .badge{
          filter: invert(1);
        }
      }
    }

    @media screen and (max-width: 768px) {
        .user-badge {
            opacity: 1 !important;
            display: block !important;
            position: fixed !important;
            top: 0 !important;
            right: calc(50% - 64px);
            transform: translateX(50%);
            margin: 0 !important;
            max-height: 52px !important;
            font-size: 12px !important;
        }
        .columns {
            margin: 0;
        }
        .cover-image-container {
            padding: 1em !important;
        }
        .cover-content {
            width: 100% !important;

            .buttons {
                margin-top: .2em;
            }
        }
        .cover-content-inner {
            padding: .75em !important;
            width: 100%;

            h1 {
                margin-bottom: 0 !important;
            }

            p {
                margin: .75em 0 !important;
                font-weight: normal !important;
            }

            .buttons {
                margin-top: 0 !important;
            }
        }
        .title {
            font-size: 16px !important;
        }
        .mobile-text {
            font-size: 12px;
            font-weight: normal;
            width: 80%;
        }
        .button {
            font-size: 12px !important;
        }
        .job-image {
            max-height: 128px;
            width: auto;
        }
        .job-description {
            overflow: hidden;
            margin-bottom: 1em;
            width: 80%;
            padding: 3px 0 6px 0;
        }
        .job-content {
            flex-basis: 100% !important;

            p, h1 {
                width: 100% !important;
            }

            h1 {
                font-size: 16px !important;
            }

            a {
                font-size: 14px;
                margin: .2em 0;
            }

            p {
                font-size: 13px !important;
            }

            a.button {
                margin-bottom: .75em;
            }

            .badge {
                font-size: 12px !important;
            }
        }
    }
    .huge-padding {
        padding: 5.25rem;
        h1 {
            margin-bottom: 0 !important;
        }

        .ctx-text {
            width: 75%;
            text-align: left;
        }

        .create-account-button {
            &:hover {
                background: #42b983 !important;
            }
        }
    }
    @media screen and (max-width: 520px) {
        .tab-header {
            display: none !important;
        }
    }
</style>
