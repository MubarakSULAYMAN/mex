<template>
    <div class="text-purple-700 font-ubuntu">

        <div class="fixed top-0 -right-1 z-50 cursor-pointer">
            <span
                class="p-2 rounded-md border-white text-white font-black text-xl md:text-3xl bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-2 md:focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-100 capitalize"
                @click="goTo('/home')"> ètò </span>
        </div>
        <router-view></router-view>
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

<style scoped>
    @import url("https://fonts.gstatic.com");
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");
    /* * {
        font-family: 'Ubuntu', sans-serif;
    } */

</style>
