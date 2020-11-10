<template>
    <div class="container is-fluid city-sub-footer card">
        <div class="columns is-fullwidth">
            <div class="column is-6 py-3 is-offset-3 is-offset-0-mobile is-mobile">
                <div class="ctx-container is-fullwidth">
                    <h1 class="title is-3 has-text-centered">Hızlı Arama</h1>
                    <div class="ctx">
                        <div class="side-content">
                            <h1 class="title is-5 pointer">Popüler Şehirler</h1>
                            <ul class="search-query-list left">
                                <li>
                                    <a href="#">İstanbul</a>
                                </li>
                                <li>
                                    <a href="#">Ankara</a>
                                </li>
                                <li>
                                    <a href="#">İzmir</a>
                                </li>
                                <li>
                                    <a href="#">Adana</a>
                                </li>
                            </ul>
                        </div>
                        <div class="side-content">
                            <h1 class="title is-5 pointer">Popüler Şehirler</h1>
                            <ul class="search-query-list right">
                                <li>
                                    <a href="#">Tam Zamanlı</a>
                                </li>
                                <li>
                                    <a href="#">Yarı Zamanlı</a>
                                </li>
                                <li>
                                    <a href="#">Kontrat/Freelance</a>
                                </li>
                                <li>
                                    <a href="#">Staj</a>
                                </li>
                                <li>
                                    <a href="#">Uzaktan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sub-footer-jobs"
    }
</script>

<style lang="scss" scoped>
    $subFooter: #536eec;
    .city-sub-footer {
        background-color: $subFooter;
    }

    .ctx-container {
        padding: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        *{
            color: white;
        }
        .ctx {
            display: flex;
            gap: 1em;
            .side-content {
                width: 50%;
                .search-query-list{
                    li{
                        padding: 5px;
                        transition: 200ms ease-out;
                        filter: blur(0.1px);
                        &:hover{
                            transform: scale(1.01);
                            transform-origin: center;
                            filter: none;
                            a{
                                &:after{
                                    opacity: 0;
                                    bottom: -5px;
                                    left: 0;
                                    position: absolute;
                                    display: block;
                                    content: '';
                                    width: 0;
                                    height: 2px;
                                    background: #dddddd;
                                    transition: 200ms ease-in-out;
                                }
                                &:hover{
                                    a{
                                        text-shadow: 0 4px 6px rgba(0,0,0,.5);
                                    }
                                    &:after{
                                        transition: 300ms ease-in-out;
                                        opacity: 1;
                                        width: calc(100% + 5px);
                                    }
                                }
                            }
                        }
                        a{
                            font-weight: 500;
                            color: white;
                            position: relative;
                            transition: 300ms ease-out;
                        }
                    }
                }
            }
        }
    }
    .pointer{
        pointer-events: none;
    }
</style>
