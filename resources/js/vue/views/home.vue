<template>
    <div class="container m-auto px-20 py-10">
        <p class="p-4 mb-12 text-2xl font-medium font-italic rounded-xl text-purple-700 bg-white shadow-lg border-transparent">
            Hello and welcome, kindly select an item to proceed.</p>

        <div class="grid gap-12 grid-cols-2">
            <button
                class="bg-purple-700 p-20 rounded-3xl text-white text-3xl font-extrabold cursor-pointer transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-2xl hover:text-purple-700 hover:-translate-x-4 hover:-translate-y-2  hover:-skew-x-3 hover:-skew-y-3 focus:ring-8 focus:ring-purple-700 focus:outline-none"
                @click="$router.push('categories')"> Categories </button>
            <!-- </div> -->

            <button
                class="bg-purple-700 p-20 rounded-3xl text-white text-3xl font-extrabold cursor-pointer transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-2xl hover:text-purple-700 hover:translate-x-4 hover:-translate-y-2  hover:-skewx-3 hover:skew-y-3 focus:ring-8 focus:ring-purple-700 focus:outline-none"
                @click="$router.push('expenses')"> Expenses </button>

            <button
                class="bg-purple-700 p-20 rounded-3xl text-white text-3xl font-extrabold cursor-pointer transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-2xl hover:text-purple-700 hover:-translate-x-4 hover:translate-y-2  hover:skew-x-3 hover:skew-y-3 focus:ring-8 focus:ring-purple-700 focus:outline-none"
                @click="$router.push('expenses-summary')"> Expenses Summary
            </button>

            <button
                class="bg-purple-700 p-20 rounded-3xl text-white text-3xl font-extrabold cursor-pointer transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-2xl hover:text-purple-700 hover:translate-x-4 hover:translate-y-2  hover:-skew-x-3 hover:-skew-y-3 focus:ring-8 focus:ring-purple-700 focus:outline-none"
                @click="$router.push('expenses-report')"> Expenses Report </button>
        </div>
    </div>
</template>

<script>
    export default {

    }

</script>

<style scoped>

</style>
