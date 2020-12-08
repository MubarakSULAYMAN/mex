<template>
    <div class="text-purple-700 font-ubuntu">
        <!-- <span class="p-2 rounded-md bg-transparent text-xl font-black rotate-90 hover:bg-purple-700 hover:text-white">EXEM</span> -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        components: {},

        data: function () {
            return {
            }
        },

        methods: {},

        created() {}
    }

</script>

<style scoped>
    @import url("https://fonts.gstatic.com");
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");
    /* * {
        font-family: 'Ubuntu', sans-serif;
    } */

</style>
