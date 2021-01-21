<template>
  <div class="p-4 md:p-12">
    <the-shortcut />

    <!-- <div v-if="isLastDay === true"> -->
    <div>
      <div class="mb-3">
        <p class="font-light md:text-xl">Hi, your expense summary is ready.</p>
        <p class="font-light md:text-xl">
          Kindly keep your credentials safe and personal.
        </p>
      </div>

      <div
        class="w-full p-4 md:p-12 border-2 border-purple-700 font-light rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-xl hover:bg-purple-700 hover:text-white"
      >
        <p class="md:tracking-wide leading-10">Dear,</p>
        <p class="md:tracking-tight leading-relaxed">
          We appreciate our partnership and we must commend it has been
          remarkably amazing.
        </p>
        <p class="md:tracking-tight leading-relaxed">
          Here is an overview of all your expenses by category. We noticed
          engagements were mainly in categories like
          <span v-for="(item, index) in summary" :key="index">
            {{ item.expenses.length }}
            <!-- <span v-if="Math.max(summary.expenses.length)"> -->
            <strong> {{ item.name }} </strong>
            (with <span v-if="item.expenses.length === 1"> an item</span>
            <span v-if="item.expenses.length > 1">
              {{ item.expenses.length }} items</span
            >)
            <span v-if="index < summary.length - 2">, </span>
            <span v-if="index === summary.length - 2"> and </span>
            <!-- </span>. --> </span
          >.
        </p>

        <table
          class="table-fixed w-full my-4 md:my-12 shadow-lg bg-white border-collapse border hover:border-purple-700"
        >
          <tr
            class="bg-purple-700 border border-collapse text-white text-center"
          >
            <th class="smaller-space p-2 md:px-8 md:py-4">S/N</th>
            <th class="w-2/5 p-2 md:px-8 md:py-4">Category</th>
            <th class="w-1/5 p-2 md:px-8 md:py-4">Transaction Count</th>
            <th class="small-space p-2 md:px-8 md:py-4">Amount Expelled</th>
          </tr>
          <tr
            class="custom-row even:border-purple-700"
            v-for="(item, index) in summary"
            :key="index"
          >
            <td class="border p-2 md:px-8 md:py-4">{{ ++index }}</td>
            <td class="border p-2 md:px-8 md:py-4">{{ item.name }}</td>
            <td class="border p-2 md:px-8 md:py-4">
              {{ item.expenses.length }}
              <!-- <span v-for="(sub_item, index) in item.expenses" :key="index">
                                {{ sub_item.amount }}
                                {{ total }}
                            </span> -->
              <!-- {{ item.expenses }} -->
            </td>
            <td class="border p-2 md:px-8 md:py-4">
              ₦{{ item.total_expense | formatCurrency }}
            </td>
          </tr>
        </table>

        <p class="text-right tracking-tighter md:leading-loose">
          Yours Sincerely
        </p>
        <p class="text-right tracking-tighter md:leading-loose">
          Your Expense Management App
        </p>
        <p class="text-right tracking-tighter md:leading-loose">
          {{ today_date | formatDate }}
        </p>
      </div>
    </div>

    <!-- <div class="absolute top-48 left-2 md:left-48 custom-info" v-else>
            <p> Check back by month end for a summary. </p>
            <p> Thank you </p>
        </div> -->
  </div>
</template>

<script>
import axios from "axios";
import TheShortcut from "../../components/TheShortcut.vue";
export default {
  components: {
    TheShortcut,
  },

  data: function () {
    return {
      isLastDay: false,
      today_date: new Date(),

      summary: [],
      expenses_summary: [],
    };
  },

  methods: {
    checkIsLastDay() {
      let today = new Date();
      let lastDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      );
      if (today === lastDayOfMonth) {
        return (this.isLastDay = true);
      }
      return this.isLastDay;
    },

    generateSummary() {
      axios
        .get("/api/expense/group/by-category")
        .then((response) => {
          if (response.data.expenses !== 0) {
            this.summary = response.data.map((expense_group) => {
              return {
                name: expense_group.name,
                expenses: expense_group.expenses,
                total_expense: expense_group.expenses.reduce(
                  (total, expense) =>
                    parseInt(total) + parseInt(expense.amount),
                  0
                ),
              };
            });
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },

  created() {
    this.generateSummary();
  },
};
</script>

<style scoped>
.small-space {
  width: 30%;
}

.smaller-space {
  width: 10%;
}
</style>
