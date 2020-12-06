<template>
    <div class="p-4 md:p-12">
        <the-shortcuts />

        <div class="mb-3">
            <p class="font-light md:text-xl"> Hi, your expense summary is ready. </p>
            <p class="font-light md:text-xl"> Kindly keep your credentials safe and personal. </p>
        </div>

        <div
            class="w-full p-4 md:p-12 border-2 border-purple-700 font-light rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-xl hover:bg-purple-700 hover:text-white">
            <p class="md:tracking-wide leading-10">Dear Somebody</p>
            <p class="md:tracking-tight leading-relaxed">We appreciate our partnership and we must commend it has been remarkably amazing.</p>
            <p class="md:tracking-tight leading-relaxed">Here is an overview of all your expenses for the month of December.</p>

            <table class="table-fixed md:w-full my-4 md:my-12 shadow-lg bg-white border-collapse border hover:border-purple-700">
                <tr class="bg-purple-700 border border-collapse text-white text-center">
                    <th class="w-5/12 p-2 md:px-8 md:py-4"> Category </th>
                    <th class="w-3/12 p-2 md:px-8 md:py-4"> Amount </th>
                    <th class="w-4/12 p-2 md:px-8 md:py-4"> Date Range </th>
                </tr>
                <tr class="border border-collapse even:border-purple-700 font-medium text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white">
                    <td class="border p-2 md:px-8 md:py-4"> Food </td>
                    <td class="border p-2 md:px-8 md:py-4"> NGN5,000 </td>
                    <td class="border p-2 md:px-8 md:py-4"> 12/11/2020 - 12/12/2020 </td>
                </tr>
            </table>

            <p class="text-right tracking-tighter md:leading-loose">Yours Sincerely</p>
            <p class="text-right tracking-tighter md:leading-loose">Your Expense Management App</p>
            <p class="text-right tracking-tighter md:leading-loose">12/12/2020</p>
        </div>
    </div>
</template>

<script>
    import theShortcuts from '../../components/theShortcuts.vue'
    export default {
        components: {
            theShortcuts
        },

    }
</script>

<style scoped>
</style>
