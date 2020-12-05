<template>
    <div>
        <the-shortcuts />

        <button
            class="fixed bottom-6 md:bottom-10 right-6 md:right-10 py-1 md:py-2 px-3 md:px-6 rounded-md text-white font-light md:text-2xl bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-2 md:focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-100 z-50"
            @click="$router.push('expenses/modify')">
            <font-awesome-icon class="hover:text-yellow-700 mr-2" :icon="['fas', 'file-invoice']" />
            Modify
        </button>

        <div class="p-4 md:p-12">
            <p class="group text-purple-700 font-light md:text-xl inline-block"> Here are the existing records. <span class="text-xs font-normal md:font-medium opacity-0 group-hover:opacity-100">Click the button below
                    to modify.</span> </p>
            <table class="table-fixed shadow-lg bg-white border-collapse border hover:border-purple-700 text-xs md:text-base md:font-normal">
                <tr class="bg-purple-700 border border-collapse text-white text-center">
                    <th class="s-n p-1 md:px-8 md:py-4"> S/N </th>
                    <th class="w-3/5 p-1 md:px-8 md:py-4"> Narration </th>
                    <th class="category-col p-1 md:px-8 md:py-4"> Category </th>
                    <th class="w-1/5 p-1 md:px-8 md:py-4"> Amount </th>
                    <th class="w-1/5 p-1 md:px-8 md:py-4"> Date of Expenditure </th>
                </tr>
                <tr class="border border-collapse even:border-purple-700 font-normal md:font-medium text-purple-700 text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white">
                    <td class="border p-1 md:px-8 md:py-4"> 1
                    </td>
                    <td class="border p-1 md:px-8 md:py-4"> Some superstory about fantasy. </td>
                    <td class="border p-1 md:px-8 md:py-4"> Food </td>
                    <td class="border p-1 md:px-8 md:py-4"> NGN5,000 </td>
                    <td class="border p-1 md:px-8 md:py-4"> 12/12/2020 </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import theShortcuts from "../../components/theShortcuts"

    export default {
        components: {
            theShortcuts,
        },

    }
</script>

<style scoped>
    .s-n {
        width: 5%;
    }

    .category-col {
        width: 15%;
    }

</style>
