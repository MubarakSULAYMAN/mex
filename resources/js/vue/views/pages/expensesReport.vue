<template>
    <div class="p-4 md:p-12">
        <the-shortcuts />

        <div class="mb-1 md:mb-3">
            <p class="font-light md:text-xl"> Hi, your expense report is ready. </p>
            <p class="font-light md:text-xl"> Kindly keep your credentials safe and personal. </p>
        </div>

        <div
            class="w-full p-4 md:p-12 border-2 border-purple-700 font-light rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-xl hover:bg-purple-700 hover:text-white">
            <p class="md:tracking-wide leading-10">Dear,</p>
            <p class="md:tracking-tight leading-relaxed">We appreciate our partnership and we must commend it has been remarkably amazing.</p>
            <p class="md:tracking-tight leading-relaxed">Here is an overview of all your expenses for the respective periods.</p>

            <table class="table-fixed w-full my-4 md:my-12 shadow-lg bg-white border-collapse border hover:border-purple-700 text-sm md:text-base font-thin md:font-normal">
                <tr class="bg-purple-700 border border-collapse text-white text-center">
                    <!-- <th class="w-1 p-2 md:px-8 md:py-4"> S/N </th> -->
                    <th class="w-2 p-2 md:px-8 md:py-4"> Period </th>
                    <th class="w-2 p-2 md:px-8 md:py-4"> Amount </th>
                </tr>
                <tr class="border border-collapse even:border-purple-700 text-purple-700 font-medium text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white"
                    v-for="(item, index) in report" :key="index">
                    <td class="border p-2 md:px-8 md:py-4"> {{ item }} </td>
                    <td class="border p-2 md:px-8 md:py-4"> {{ key }} </td>
                </tr>
            </table>

            <p class="text-right tracking-tighter md:leading-loose">Yours Sincerely</p>
            <p class="text-right tracking-tighter md:leading-loose">Your Expense Management App</p>
            <p class="text-right tracking-tighter md:leading-loose">12/12/2020</p>
        </div>
        <h1>
    </div>
</template>

<script>
    import theShortcuts from "../../components/theShortcuts"

    export default {
        components: {
            theShortcuts,
        },

        data: function () {
            return {
                report: []
            }
        },

        methods: {
            generateReport() {
                axios
                    .get("/api/expense/group/by-month")
                    .then(response => {
                        if (response.data.expenses !== 0) {
                            this.report = (response.data)
                        }
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
            }
        },

        created() {
            this.generateReport();
        }
    }

</script>

<style scoped>
</style>
