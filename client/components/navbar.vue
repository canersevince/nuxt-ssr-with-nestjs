<template>
    <nav :class="{'is-transparent has-text-black': !isScrolling}" aria-label="main navigation"
         class="navbar is-fixed-top has-text-white" role="navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
                     height="28" src="https://bulma.io/images/bulma-logo.png" width="112">
            </a>
            <a @click="mobileMenuActive = !mobileMenuActive" aria-expanded="false" aria-label="menu"
               class="navbar-burger" role="button">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div :class="{'is-active' : mobileMenuActive}" class="navbar-menu" id="navbar">
            <div class="navbar-start">
                <div :class="[{'has-dropdown is-hoverable' : link.children && link.children.length > 0}]"
                     class="navbar-item"
                     v-for="link in navLinks">
                    <nuxt-link :class="{'fx-enabled': !link.children, 'has-text-black': isScrolling}"
                               :to="link.to"
                               exact
                               v-if="!link.children">
                        {{link.title}}
                    </nuxt-link>
                    <nuxt-link :class="{'fx-enabled': !link.children, 'has-text-black': isScrolling}"
                               :to="link.to"
                               class="navbar-link"
                               exact href="" v-else>
                        {{link.title}}
                    </nuxt-link>
                    <div class="navbar-item navbar-dropdown" v-if="link.children && link.children.length > 0">
                        <div class="is-paddingless navbar-item" v-for="child in link.children">
                            <nuxt-link
                                    :class="{'fx-enabled': child.children && link.children.length >0, 'has-text-black': mobileMenuActive}"
                                    :to="child.to"
                                    class="navbar-item" exact>
                                {{child.title}}
                            </nuxt-link>
                            <hr class="navbar-divider" v-if="child.hasDivider">
                        </div>
                    </div>
                </div>
            </div>
            <b-tag type="is-danger" size="is-medium" style="margin: auto 1rem auto auto" class="navbar-end user-badge is-relative">
                <div class="my-2 mr-3 is-flex is-align-content-center is-justify-content-space-between">
                    <div class="is-bordered is-rounded has-background-grey-dark is-flex is-align-content-center is-justify-content-center"
                         style="overflow: hidden; border-radius: 50%">
                        <img alt=""
                             src="http://via.placeholder.com/64x64">
                    </div>
                    <div class="ml-2 is-flex is-align-content-center is-justify-content-center">
                        <span class="has-text-white auto-margin">
                            Username
                        </span>
                    </div>
                    <div class="user-dropdown">
                        <ul class="has-background-danger">
                            <li>
                                <a href="#">Submenu</a>
                            </li>
                            <li>
                                <a href="#">Submenu</a>
                            </li>
                            <li>
                                <a href="#">Submenu</a>
                            </li>
                            <li>
                                <a href="#">Submenu</a>
                            </li>
                            <li>
                                <a href="#">Submenu</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </b-tag>
        </div>

    </nav>
</template>

<script lang="ts">

    declare var process: any;
    export default {
        name: 'navbar',
        data() {
            return {
                mobileMenuActive: false,
                navLinks: [
                    {
                        icon: '',
                        title: 'Yazılımcı Arayanlar',
                        to: ''
                    },
                    {
                        icon: '',
                        title: 'Yazılımcı Profilim',
                        to: ''

                    },
                    {
                        icon: '',
                        title: 'Ücretlendirme',
                        to: ''
                    },
                    {
                        icon: '',
                        title: 'Daha',
                        to: '',
                        children: [
                            {
                                icon: '',
                                title: 'Hakkımızda',
                                to: ''
                            },
                            {
                                icon: '',
                                title: 'Ücretlendirmeler',
                                to: '',
                                hasDivider: true
                            },
                            {
                                icon: '',
                                title: 'İletişim',
                                to: '',
                            }
                        ]
                    },
                ],
                isScrolling: false
            }
        },
        watch: {
            scrollObserver() {
                console.log(this.scrollObserver)
            }
        },
        computed: {},
        created(): void {
            const self = this;
            if (process.client) {
                window.addEventListener('scroll', (e) => {
                    if (window.scrollY && window.scrollY > 100) {
                        self.isScrolling = true;
                    } else {
                        self.isScrolling = false
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    $link: #fdfdfd;
    $danger: #f14668;
    .navbar {
        transition: 300ms ease-in-out;
    }

    .navbar-item a {
        text-decoration: none;
        color: $link;
        font-weight: 500;
    }

    .navbar-item.has-dropdown .navbar-item a {
        color: #222;
    }

    .fx-enabled {
        position: relative;

        &:after {
            display: block;
            width: 0;
            content: '';
            height: 1px;
            position: absolute;
            bottom: -2px;
            left: 0;
            background: $link;
            transition: 200ms ease-in-out;
            opacity: 0;
            transform: translateX(5%);
        }

        &:hover {
            &:after {
                opacity: 1;
                width: 100%;
                height: 2px;
                transform: translateX(0);
            }
        }
    }
    .auto-margin{
        margin: auto;
    }
    .user-badge{
        z-index: 3;
        padding: .2em 1em;
        height: 75%;
        margin: auto;
        position: relative;
        img{
            width: 36px;
            height: auto;
            z-index: 999;
        }
        .user-dropdown{
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            padding: 12px 0;
            opacity: 0;
            z-index: 0;
            transition: 200ms ease-in-out;
            ul{
                padding: 1em 0 1em 0;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                position: absolute;
                width: 100%;
                li{
                    width: 100%;
                    text-align: center;
                    margin-top: 8px;
                    a{
                        color: white;
                    }
                }
            }
        }
        &:hover{
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            .user-dropdown{
                opacity: 1;
                transform: none;
                ul{
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
            }
        }
    }
</style>
