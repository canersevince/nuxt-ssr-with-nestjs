<template>
    <div>
        <b-field label="İlanlarda arama yap" icon="magnify">
            <b-autocomplete
                    v-model="name"
                    placeholder="Örneğin: PHP"
                    :keep-first="keepFirst"
                    :open-on-focus="openOnFocus"
                    :data="filteredDataObj"
                    icon-right="magnify"
                    field="user.first_name"
                    @select="option => (selected = option)"
                    :clearable="clearable"
            >
            </b-autocomplete>
        </b-field>
    </div>
</template>

<script>
    export default {
        name: "job-search-input",
        data(){
            return {
                keepFirst: false,
                openOnFocus: false,
                name: '',
                selected: null,
                clearable: false
            }
        },
        computed: {
            filteredDataObj() {
                return ["Örnek", "Tag"]
            }
        }
    }
</script>

<style scoped>

</style>
