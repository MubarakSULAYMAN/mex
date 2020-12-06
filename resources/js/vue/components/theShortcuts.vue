<template>
    <div class="fixed bottom-4 left-4 space-y-1 z-50">
        <div class="pt-2 md:pt-3 md:pr-1 pl-2 md:pl-3 pb-1 md:pb-2 rounded-full text-white font-light text-xl md:text-2xl bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-2 md:focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-100"
            @click="goTo('/home')">
            <font-awesome-icon class="hover:text-purple-700 mr-2" :icon="['fas', 'home']" />
        </div>
        <div class="pt-2 md:pt-3 md:pr-1 pl-2 md:pl-3 pb-1 md:pb-2 rounded-full text-white font-light text-xl md:text-2xl bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-2 md:focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-100"
            @click="$router.go(-1)">
            <font-awesome-icon class="hover:text-purple-700 mr-2" :icon="['fas', 'chevron-circle-left']" />
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goTo(route) {
                this.$router.push(route);
            }
        }
    }

</script>

<style>

</style>
