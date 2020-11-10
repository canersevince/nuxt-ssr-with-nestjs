<template>
    <div class="container is-fullwidth py-5">
        <div class="columns is-fullwidth">
            <div class="column is-10 is-offset-1-desktop is-full-mobile is-offset-0-mobile">
                <div class="columns is-fullwidth">
                    <div class="column is-6 is-offset-3-desktop is-full-mobile is-offset-0-mobile">
                        <job-search-input></job-search-input>
                    </div>
                </div>
                <b-tabs expanded type="is-toggle" v-model="activeTab">
                    <b-tab-item :icon="tab.icon" headerClass="tab-header" :label="tab.name" @click="changeTab($event)" class="custom-grid"
                                v-for="tab in tabs">
                        <job-card v-for="job in 25"></job-card>
                    </b-tab-item>
                </b-tabs>
                <div class="columns pb-5 mb-5">
                    <div class="column is-12">
                        <div class="buttons">
                            <b-button type="is-primary" style="transition: 200ms" outlined expanded>Daha Fazla Göster</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import JobCard from "./job-card";
    import JobSearchInput from "./job-search-input";

    export default {
        props: {
            tab: {
                required: true,
                type: Number
            }
        },
        name: "main-page-jobs",
        components: {JobSearchInput, JobCard},
        data() {
            return {
                activeTab: 0,
                tabs: [
                    {
                        name: "Tüm İlanlar",
                        icon: "star"
                    },
                    {
                        name: "Tam Zamanlı",
                        icon: "circle"
                    },
                    {
                        name: "Yarı Zamanlı",
                        icon: "circle-half-full"
                    },
                    {
                        name: "Uzaktan",
                        icon: "home-currency-usd"
                    },
                    {
                        name: "Kontratlı",
                        icon: "note"
                    },
                    {
                        name: "Stajyer",
                        icon: "school"
                    },
                ]
            }
        },
        methods: {
            changeTab(e) {
                console.log(e)
            }
        },
        created() {
            this.activeTab = this.tab
        },
    }
</script>

<style lang="scss">
    .tab-content {
        padding-left: 0 !important;
        padding-right: 0 !important;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
