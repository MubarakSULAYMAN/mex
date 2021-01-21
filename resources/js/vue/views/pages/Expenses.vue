<template>
  <div>
    <the-shortcut />

    <button class="modify-btn" @click="goTo('expenses/modify')">
      <font-awesome-icon
        class="hover:text-yellow-700 mr-2"
        :icon="['fas', 'file-invoice']"
      />
      Modify
    </button>

    <div class="p-4 md:p-12">
      <div v-if="expenses.length > 0 && loading === false">
        <p class="group font-light md:text-xl inline-block">
          Here are the existing records.
          <span
            class="text-xs font-normal md:font-medium opacity-0 group-hover:opacity-100"
          >
            Click the button below to modify.
          </span>
        </p>
        <table class="custom-table">
          <tr
            class="bg-purple-700 border border-collapse text-white text-center"
          >
            <th class="s-n p-1 md:px-8 md:py-4">S/N</th>
            <th class="w-3/5 p-1 md:px-8 md:py-4">Narration</th>
            <th class="category-col p-1 md:px-8 md:py-4">Category</th>
            <th class="w-1/5 p-1 md:px-8 md:py-4">Amount</th>
            <th class="w-1/5 p-1 md:px-8 md:py-4">Date of Expenditure</th>
          </tr>
          <tr
            class="custom-table-row"
            v-for="(item, index) in expenses"
            :key="index"
          >
            <td class="border p-1 md:px-8 md:py-4">{{ ++index }}</td>
            <td class="border p-1 md:px-8 md:py-4">{{ item.narration }}</td>
            <td class="border p-1 md:px-8 md:py-4">{{ item.category.name }}</td>
            <td class="border p-1 md:px-8 md:py-4">
              ₦{{ item.amount | formatCurrency }}
            </td>
            <td class="border p-1 md:px-8 md:py-4">
              {{ item.date | formatDate }}
            </td>
          </tr>
        </table>
      </div>

      <div class="custom-info" v-if="loading === true">Loading...</div>
      <div class="custom-info" v-if="expenses.length < 1 && loading === false">
        No Record Available
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  // mapActions
} from "vuex";

import TheShortcut from "../../components/TheShortcut";

export default {
  components: {
    TheShortcut,
  },

  data() {
    return {
      loading: false,
    };
  },

  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },

  computed: {
    ...mapState({
      expenses: "expenses",
    }),
  },

  mounted() {
    this.$store.dispatch("getExpenses");
  },
};
</script>

<style scoped>
.s-n {
  width: 5%;
}

.category-col {
  width: 15%;
}
</style>
