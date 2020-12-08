<template>
    <div>
        <the-shortcuts />

        <button
            class="fixed bottom-10 sm:bottom-12 md:bottom-20 -right-6 sm:-right-8 md:-right-8 py-1 md:py-2 px-3 md:px-6 rounded-md text-white font-light sm:text-xl md:text-2xl bg-purple-700 rotate-90 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 md:hover:rotate-0 md:hover:-translate-x-12 md:hover:translate-y-16 focus:outline-none focus:ring-2 md:focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-100 z-50"
            @click="goTo('categories/modify')">
            <font-awesome-icon class="hover:text-yellow-700 mr-2" :icon="['fas', 'file-invoice']" />
            Modify
        </button>

        <!-- <input type="text" v-model="newTitle" />
        <button @click="addNewTitleItem(newTitle)">Submit</button> -->

        <div class="p-4 md:p-12">
            <div v-if="categories.length > 0">
            <p class="group font-light md:text-xl inline-block"> Here are the existing records. <span class="text-xs font-normal md:font-medium opacity-0 group-hover:opacity-100">Click the button
                    below to modify.</span> </p>
            <table class="w-full table-fixed shadow-lg bg-white border-collapse border hover:border-purple-700 text-xs md:text-base md:font-normal">
                <tr class="bg-purple-700 border border-collapse text-white text-center">
                    <th class="w-1/12 p-2 md:px-8 md:py-4"> S/N </th>
                    <th class="w-1/2 p-2 md:px-8 md:py-4"> Category Name </th>
                    <th class="w-1/5 p-2 md:px-8 md:py-4"> Date Created </th>
                    <th class="w-1/5 p-2 md:px-8 md:py-4"> Status </th>
                </tr>
                <tr class="border border-collapse even:border-purple-700 font-normal md:font-medium text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white"
                    v-for="(item, index) in categories" :key="index">
                    <td class="border p-2 md:px-8 md:py-4 break-words"> {{ ++index }}
                    </td>
                    <td class="border p-2 md:px-8 md:py-4 break-words"> {{ item.name }} </td>
                    <td class="border p-2 md:px-8 md:py-4 break-words"> {{ item.updated_at | formatDate }} </td>
                    <td class="border p-2 md:px-8 md:py-4 break-words"> Active </td>
                </tr>
            </table>
            </div>
            
            <div class="p-3 sm:p-6 text-lg sm:text-5xl md:text-9xl text-purple-700 bg-transparent text-center hover:text-white hover:bg-purple-700" v-if="loading === true"> Loading... </div>
            <div class="p-3 sm:p-6 text-lg sm:text-5xl md:text-9xl text-purple-700 bg-transparent text-center hover:text-white hover:bg-purple-700" v-if="categories.length < 1"> No Record Available </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions
    } from "vuex";

    import theShortcuts from "../../components/theShortcuts"

    export default {
        components: {
            theShortcuts,
        },

        data() {
            return {
                loading: false
            }
        },

        methods: {
            goTo(route) {
                this.$router.push(route);
            },
            // addNewTitleItem() {
            //     this.$store.dispatch('addNewTitle', this.newTitle)
            // },
            // ...mapActions({
            //     addNewTitleItem: 'addNewTitle'
            // })
        },

        computed: {
            ...mapState({
                categories: "categories"
            }),
        },

        mounted() {
            this.$store.dispatch('getCategories')
        },
    }

</script>

<style scoped>
</style>
