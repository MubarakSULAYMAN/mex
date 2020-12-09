<template>
    <div class="container m-auto p-10 md:px-20 md:py-10">
        <p class="p-2 md:p-4 mb-6 md:mb-12 md:text-2xl font-medium font-italic rounded-xl bg-white shadow-lg border-transparent">
            Hello and welcome, kindly select an item to proceed.</p>

        <div class="grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-2">
            <button
                class="category bg-purple-700 box-border h-48 w-100 p-10 rounded-3xl text-white text-3xl font-extrabold cursor-pointer transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-2xl hover:text-purple-700 hover:-translate-x-2 md:hover:-translate-x-4 hover:-translate-y-2 md:hover:-translate-y-4  hover:-skew-x-3 hover:-skew-y-3 focus:ring-4 md:focus:ring-8 focus:ring-purple-700 focus:outline-none"
                @click="goTo('categories')"> Categories </button>
            <!-- </div> -->

            <button
                class="bg-purple-700 box-border h-48 w-100 p-10 rounded-3xl text-white text-3xl font-extrabold cursor-pointer transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-2xl hover:text-purple-700 hover:translate-x-2 md:hover:translate-x-4 hover:-translate-y-2 md:hover:-translate-y-4  hover:-skewx-3 hover:skew-y-3 focus:ring-4 md:focus:ring-8 focus:ring-purple-700 focus:outline-none"
                @click="goTo('expenses')"> Expenses </button>

            <button
                class="bg-purple-700 box-border h-48 w-100 p-10 rounded-3xl text-white text-3xl font-extrabold cursor-pointer transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-2xl hover:text-purple-700 hover:-translate-x-2 md:hover:-translate-x-4 hover:translate-y-2 md:hover:translate-y-4  hover:skew-x-3 hover:skew-y-3 focus:ring-4 md:focus:ring-8 focus:ring-purple-700 focus:outline-none"
                @click="goTo('expenses-summary')"> Summary <br> <span class="text-lg"> (Expenses by Category)</span>
            </button>

            <button
                class="bg-purple-700 box-border h-48 w-100 p-10 rounded-3xl text-white text-3xl font-extrabold cursor-pointer transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-2xl hover:text-purple-700 hover:translate-x-2 md:hover:translate-x-4 hover:translate-y-2 md:hover:translate-y-4 hover:-skew-x-3 hover:-skew-y-3 focus:ring-4 md:focus:ring-8 focus:ring-purple-700 focus:outline-none"
                @click="goTo('expenses-report')"> Report <br> <span class="text-lg"> (Monthly Expenses)</span>
            </button>
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

<style scoped>
    .category {
        background-image: transparent url('../assets/img/data_report.svg') no-repeat 25% 50%;
    }

</style>
