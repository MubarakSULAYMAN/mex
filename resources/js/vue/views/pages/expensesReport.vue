<template>
    <div class="p-12">
        <div class="fixed bottom-4 left-4 space-y-1 z-50">
            <div class="pt-3 pr-1 pl-3 pb-2 rounded-full text-white font-light text-2xl bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-100"
                @click="$router.push('/home')">
                <font-awesome-icon class="hover:text-purple-700 mr-2" :icon="['fas', 'home']" />
            </div>
            <div class="pt-3 pr-1 pl-3 pb-2 rounded-full text-white font-light text-2xl bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-100"
                @click="$router.go(-1)">
                <font-awesome-icon class="hover:text-purple-700 mr-2" :icon="['fas', 'chevron-circle-left']" />
            </div>
        </div>

        <div class="mb-3">
            <p class="text-purple-700 font-light text-xl"> Hi, your expense report is ready. </p>
            <p class="text-purple-700 font-light text-xl"> Kindly keep your credentials safe and personal. </p>
        </div>

        <div
            class="w-full p-12 border-2 border-purple-700 font-light text-purple-700 rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-xl hover:bg-purple-700 hover:text-white">
            <p class=" font tracking-wide leading-10">Dear Somebody</p>
            <p class=" font tracking tight leading-relaxed">We appreciate our partnership and we must commend it has been remarkably amazing.</p>
            <p class=" font tracking tight leading-relaxed">Here is an overview of all your expenses for the month of December.</p>

            <table class="table-fixed w-full my-12 shadow-lg bg-white border-collapse border hover:border-purple-700">
                <tr class="bg-purple-700 border border-collapse text-white text-center">
                    <th class="w-2/5 px-8 py-4"> Narration </th>
                    <th class="w-1/5 px-8 py-4"> Category </th>
                    <th class="w-1/5 px-8 py-4"> Amount </th>
                    <th class="w-1/5 px-8 py-4"> Date </th>
                </tr>
                <tr class="border border-collapse even:border-purple-700 font-medium text-purple-700 text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white">
                    <td class="border px-8 py-4"> Some superstory about fantasy. </td>
                    <td class="border px-8 py-4"> Food </td>
                    <td class="border px-8 py-4"> NGN5,000 </td>
                    <td class="border px-8 py-4"> 12/11/2020 </td>
                </tr>
            </table>

            <p class="text-right tracking-tighter leading-loose">Yours Sincerely</p>
            <p class="text-right tracking-tighter leading-loose">Your Expense Management App</p>
            <p class="text-right tracking-tighter leading-loose">12/12/2020</p>
        </div>
    </div>
</template>

<script>
    export default {

    }

</script>

<style scoped>
</style>
