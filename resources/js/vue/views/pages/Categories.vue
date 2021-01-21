<template>
  <div>
    <the-shortcut />

    <button class="modify-btn" @click="goTo('categories/modify')">
      <font-awesome-icon
        class="hover:text-yellow-700 mr-2"
        :icon="['fas', 'file-invoice']"
      />
      Modify
    </button>

    <div class="p-4 md:p-12">
      <div v-if="categories.length > 0 && loading === false">
        <p class="group font-light md:text-xl inline-block">
          Here are the existing records.
          <span
            class="text-xs font-normal md:font-medium opacity-0 group-hover:opacity-100"
          >
            Click the button below to modify.</span
          >
        </p>

        <table class="custom-table w-full">
          <tr
            class="bg-purple-700 border border-collapse text-white text-center"
          >
            <th class="w-1/12 p-2 md:px-8 md:py-4">S/N</th>
            <th class="w-1/2 p-2 md:px-8 md:py-4">Category Name</th>
            <th class="w-1/5 p-2 md:px-8 md:py-4">Date Created</th>
            <th class="w-1/5 p-2 md:px-8 md:py-4">Status</th>
          </tr>
          <tr
            class="custom-table-row"
            v-for="(item, index) in categories"
            :key="index"
          >
            <td class="border p-2 md:px-8 md:py-4 break-words">
              {{ ++index }}
            </td>
            <td class="border p-2 md:px-8 md:py-4 break-words">
              {{ item.name }}
            </td>
            <td class="border p-2 md:px-8 md:py-4 break-words">
              {{ item.updated_at | formatDate }}
            </td>
            <td class="border p-2 md:px-8 md:py-4 break-words">
              <span v-if="item.expenses.length > 0"> Active </span>
              <span class="line-through" v-if="item.expenses.length < 1">
                Inactive
              </span>
            </td>
          </tr>
        </table>
      </div>

      <div class="custom-info" v-if="loading === true">Loading...</div>
      <div
        class="custom-info"
        v-if="categories.length < 1 && loading === false"
      >
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
    // addNewTitleItem() {
    //     this.$store.dispatch('addNewTitle', this.newTitle)
    // },
    // ...mapActions({
    //     addNewTitleItem: 'addNewTitle'
    // })
  },

  computed: {
    ...mapState({
      categories: "categories",
    }),
  },

  mounted() {
    this.$store.dispatch("getCategories");
  },
};
</script>

<style scoped>
</style>
