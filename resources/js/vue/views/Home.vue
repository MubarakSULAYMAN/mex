<template>
  <div class="container m-auto p-10 md:px-20 md:py-10">
    <p
      class="p-2 md:p-4 mb-6 md:mb-12 md:text-2xl font-medium font-italic rounded-xl bg-white shadow-lg border-transparent"
    >
      Hello and welcome, kindly select an item to proceed.
    </p>

    <div class="grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-2">
      <button
        class="category home-btn hover:-translate-x-2 md:hover:-translate-x-4 hover:-translate-y-2 md:hover:-translate-y-4 hover:-skew-x-3 hover:-skew-y-3"
        @click="goTo('categories')"
      >
        Categories
      </button>
      <!-- </div> -->

      <button
        class="home-btn hover:translate-x-2 md:hover:translate-x-4 hover:-translate-y-2 md:hover:-translate-y-4 hover:-skewx-3 hover:skew-y-3"
        @click="goTo('expenses')"
      >
        Expenses
      </button>

      <button
        class="home-btn hover:-translate-x-2 md:hover:-translate-x-4 hover:translate-y-2 md:hover:translate-y-4 hover:skew-x-3 hover:skew-y-3"
        @click="goTo('expenses-summary')"
      >
        Summary <br />
        <span class="text-lg"> (Expenses by Category)</span>
      </button>

      <button
        class="home-btn hover:translate-x-2 md:hover:translate-x-4 hover:translate-y-2 md:hover:translate-y-4 hover:-skew-x-3 hover:-skew-y-3"
        @click="goTo('expenses-report')"
      >
        Report <br />
        <span class="text-lg"> (Monthly Expenses)</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.category {
  background-image: transparent url("../assets/img/data_report.svg") no-repeat
    25% 50%;
}
</style>
