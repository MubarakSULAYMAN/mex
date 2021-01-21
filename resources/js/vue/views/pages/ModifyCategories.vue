<template>
  <div>
    <the-shortcut />

    <section class="m-4 md:m-12" v-if="formStage === 'previewRecords'">
      <p class="font-light md:text-xl">Will you like to add to list?</p>
      <form
        class="px-6 py-2 md:py-6 rounded-md transition duration-1500 ease-in-out hover:shadow-xl"
        @submit.prevent
      >
        <div class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 w-100">
          <span class="col-span-11">
            <input
              type="text"
              v-model="category.name"
              class="w-full p-2 border-2 border-purple-700 font-medium rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-0 focus:ring-purple-500"
              autocomplete="off"
            />
            <div
              class="mt-2 text-xs text-red-700 font-medium"
              v-if="fieldError"
            >
              You cannot add an empty field.
            </div>
            <div
              class="mt-2 text-xs text-red-700 font-medium"
              v-if="noInternetConnection"
            >
              Your internet is not connected.
            </div>
            <!-- <div class="mt-2 text-xs text-red-700 font-medium" v-if="isOffline">
                            Unable to complete your request, internet not responding.
                        </div> -->
          </span>
          <div class="">
            <button class="add-btn md:w-full p-2" @click="addNewRecord">
              <font-awesome-icon
                class="hover:text-green-700 mr-2"
                :icon="['fas', 'folder-plus']"
              />
              Add
            </button>
          </div>
        </div>
      </form>

      <div
        class="fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50"
        v-if="addRecordPopUp"
        @click="closeNewRecordPopUp"
      >
        <div class="custom-modal" v-if="addRecordPopUp">
          <font-awesome-icon
            class="text-red-500 text-xl md:text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700"
            :icon="['fas', 'times-circle']"
            @click="closeNewRecordPopUp"
          />

          <p class="p-2 md:p-10 md:text-3xl text-center text-green-500">
            Field (name) added successfully
            <span class="ri-checkbox-circle-line inline-block"></span>
          </p>
        </div>
      </div>

      <div v-if="categories.length > 0 && loading === false">
        <p class="group font-light md:text-xl mt-4 md:mt-12 inline-block">
          Modify records as you wish.
          <span
            class="text-xs font-light md:font-medium opacity-0 group-hover:opacity-100"
          >
            Click highlighter icon to proceed.
          </span>
        </p>

        <table class="md:w-full custom-table">
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
            <td class="border px-4 py-4 break-words">
              {{ ++index }}
              <font-awesome-icon
                class="opacity-0 group-hover:opacity-100 hover:text-blue-700"
                :icon="['fas', 'highlighter']"
                @click="editDeleteRecords"
              />
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

      <div class="custom-info" v-if="loading === true">Updating...</div>
      <div
        class="custom-info"
        v-if="categories.length < 1 && loading === false"
      >
        No Record Available
      </div>
    </section>

    <section v-if="formStage === 'editDeleteRecords'">
      <div class="p-4 md:p-12">
        <p class="group font-light md:text-xl inline-block">
          You can only edit and delete here.
          <span class="text-xs font-medium opacity-0 group-hover:opacity-100">
            Click on trash icon to delete or pen-on-note to edit.
          </span>
        </p>
        <table class="custom-table md:w-full" v-if="categories.length > 0">
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
            <td class="border px-4 py-4 break-words">
              <font-awesome-icon
                class="opacity-0 group-hover:opacity-100 hover:text-red-700"
                :icon="['fas', 'trash']"
                v-if="isDeleting === false"
                @click="deleteRecord && selectedID === index"
              />
              {{ ++index }}
              <font-awesome-icon
                class="opacity-0 group-hover:opacity-100 hover:text-pink-700"
                :icon="['fas', 'edit']"
                v-if="isEditing === false"
                @click="editRecords(item.id)"
              />
            </td>
            <td class="border p-2 md:px-8 md:py-4 break-words">
              <span v-if="isEditing === false"> {{ item.name }} </span>
              <input
                class="w-full p-2 border-2 border-transparent shadow-lg rounded-md font-medium transform transition duration-1000 ease-in-out hover:text-purple-700 hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500"
                type="text"
                name=""
                id=""
                autocomplete="off"
                v-if="isEditing"
                v-model="item.name"
              />
            </td>
            <td class="border p-2 md:px-8 md:py-4 break-words">
              <span> {{ item.updated_at | formatDate }} </span>
            </td>
            <td class="border p-2 md:px-8 md:py-4 break-words">
              <span>
                <span v-if="item.expenses.length > 0"> Active </span>
                <span class="line-through" v-if="item.expenses.length < 1">
                  Inactive
                </span>
              </span>
            </td>
            <div
              class="mt-2 text-xs text-red-700 font-medium"
              v-if="fieldError"
            >
              You cannot add an empty field.
            </div>
            <div
              class="mt-2 text-xs text-red-700 font-medium"
              v-if="noInternetConnection"
            >
              Your internet is not connected.
            </div>
          </tr>
        </table>

        <div class="custom-info" v-if="loading === true">Updating...</div>
        <div
          class="custom-info"
          v-if="categories.length < 1 && loading === false"
        >
          No Record Available
        </div>

        <div
          class="fixed bottom-5 md:bottom-10 right-5 md:right-10 space-x-6 z-50"
        >
          <button
            class="custom-btn bg-red-700 hover:text-red-700 focus:ring-red-500 hover:border-red-700"
            v-if="isEditing"
            @click="cancelModification"
          >
            <font-awesome-icon
              class="hover:text-red-500 mr-2"
              :icon="['fas', 'times']"
            />
            Cancel
          </button>

          <button
            class="custom-btn bg-purple-700 hover:text-purple-700 focus:ring-purple-500 hover:border-purple-700"
            v-if="isEditing"
          >
            <!-- @click="saveModification" -->
            <font-awesome-icon
              class="hover:text-purple-500 mr-2"
              :icon="['fas', 'save']"
            />
            Save
          </button>
        </div>

        <div
          class="fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50"
          v-if="confirmDeletePopUp"
          @click="cancelDelete"
        >
          <div class="custom-modal" v-if="confirmDeletePopUp">
            <p class="p-4 md:p-10 text-lg md:text-3xl text-center text-red-500">
              Are you sure you want to delete (name) from Category?
            </p>
            <div class="flex place-content-center pb-4 md:pb-12 space-x-6">
              <button
                class="custom-btn border-red-700 text-red-700 hover:bg-red-700"
                @click="confirmDelete"
              >
                <font-awesome-icon :icon="['fas', 'trash-alt']" />
                Confirm
              </button>
              <button
                class="custom-btn border-purple-700 hover:bg-purple-700"
                @click="cancelDelete"
              >
                <font-awesome-icon :icon="['fas', 'backspace']" />
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div
          class="fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50"
          v-if="deleteRecordPopUp"
          @click="closeDeletePopUp"
        >
          <div class="custom-modal" v-if="deleteRecordPopUp">
            <font-awesome-icon
              class="text-red-500 text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700"
              :icon="['fas', 'times-circle']"
              @click="closeDeletePopUp"
            />

            <p class="p-2 md:p-10 md:text-3xl text-center text-red-500">
              (name) is successfully deleted from Category.
            </p>
          </div>
        </div>

        <div
          class="fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50"
          v-if="modificationPopUp"
          @click="closeModificationPopUp"
        >
          <div class="custom-modal" v-if="modificationPopUp">
            <font-awesome-icon
              class="text-red-500 text-xl md:text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700"
              :icon="['fas', 'times-circle']"
              @click="closeModificationPopUp"
            />

            <p class="p-2 md:p-10 md:text-3xl text-center text-purple-700">
              Modification implemented successfully.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import TheShortcut from "../../components/TheShortcut";

export default {
  components: {
    TheShortcut,
  },

  data() {
    return {
      loading: false,

      category: {
        name: "",
      },

      selectedID: null,

      // categories: [],

      fieldError: false,
      noInternetConnection: false,

      formStage: "previewRecords",
      // isPreviewing: false,
      isEditing: false,
      isDeleting: false,
      addRecordPopUp: false,
      modificationPopUp: false,
      deleteRecordPopUp: false,
      confirmDeletePopUp: false,
    };
  },

  methods: {
    addNewRecord() {
      if (this.category.name === "") {
        this.fieldError = true;
        return;
      }
      // else if (!navigator.onLine) {
      //     this.fieldError = false;
      //     this.noInternetConnection = true;
      //     return;
      // }
      // else if (this.isOffline) {
      //     this.offlineError = true;
      //     return;
      // }

      this.fieldError = false;
      this.noInternetConnection = false;
      this.loading = true;

      axios
        .post("/api/category/store", {
          category: this.category,
        })
        .then((response) => {
          if (response.status === 201) {
            this.$store.dispatch("getCategories");
            this.addRecordPopUp = true;
            this.loading = false;
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },

    updateRecord() {
      if (this.category.name === "") {
        this.fieldError = true;
        return;
      } else if (!navigator.onLine) {
        this.fieldError = false;
        this.noInternetConnection = true;
        return;
      }
      // else if (this.isOffline) {
      //     this.offlineError = true;
      //     return;
      // }

      this.loading = true;
      axios
        .post("/api/category/" + this.category.id, {
          category: this.category,
        })
        .then((response) => {
          if (response.status === 201) {
            this.$store.dispatch("getCategories");
            // this.category.name = "";
            this.modificationPopUp = true;
            this.loading = false;
            // console.log(response)
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
      // .put("http://127.0.0.1:8000/api/category/" + this.category.id)
      // .then((response) => {
      //     if (response.status === 200) {
      //         this.$store.dispatch('getCategories')
      //         this.category.name === "";
      //     }

      //     this.loading = false;
      // })
      // .catch((error) => {
      //     console.log(error.message);
      //     console.log("Problem in updating the records.");
      // });

      // this.addRecordPopUp = true;
    },

    deleteRecord() {
      this.confirmDeletePopUp = true;

      if (!this.confirmDelete) {
        return;
      } else if (!navigator.onLine) {
        console.log("You do not have an internet connection.");
        return;
      }
      // else if (isOffline) {
      //     console.log("Unable to complete your request, internet not responding.")
      //     return;
      // }

      // getRecords() {
      //     axios
      //         .get("/api/categories")
      //         .then((response) => {
      //             this.categories = response.data;
      //             console.log(response.data);
      //         })
      //         .catch((error) => {
      //             console.log(error.message);
      //         });
      // },

      this.loading = true;
      axios
        .delete("/api/category/" + this.category.id)
        .then((response) => {
          if (response.status === 200) {
            this.$store.dispatch("getCategories");
          }

          this.loading = false;
        })
        .catch((error) => {
          console.log(error.message);
          console.log("Problem in deleting the record.");
        });
    },

    closeModificationPopUp() {
      // this.$store.dispatch('getCategories')
      this.modificationPopUp = false;
      this.isEditing = false;
      this.isDeleting = false;
    },

    confirmDelete() {
      // this.$store.dispatch('getCategories')
      this.confirmDeletePopUp = false;
      this.deleteRecordPopUp = true;
    },

    cancelDelete() {
      // this.$store.dispatch('getCategories')
      this.confirmDeletePopUp = false;
      this.isEditing = false;
      this.isDeleting = false;
    },

    closeNewRecordPopUp() {
      this.addRecordPopUp = false;
      this.category.name = "";
    },

    editDeleteRecords() {
      this.formStage = "editDeleteRecords";
    },

    // openDeletePopUp() {
    //     this.confirmDeletePopUp = true;
    // this.isEditing = true;
    // this.isDeleting = true;
    // },

    editRecords(selectedItem) {
      this.selectedID = selectedItem;

      console.log(selectedItem);
      console.log(this.categories.indexOf(name));

      if (selectedItem === this.categories.indexOf(selectedItem)) {
        console.log("We are one");
      }

      this.isEditing = true;
      this.isDeleting = true;
    },

    cancelModification() {
      this.isEditing = false;
      this.isDeleting = false;
    },

    // saveModification() {
    //     this.modificationPopUp = true;
    // },

    closeDeletePopUp() {
      this.deleteRecordPopUp = false;
      this.isEditing = false;
      this.isDeleting = false;
    },
  },

  computed: {
    // fieldError() {
    //     return this.fieldError
    // },

    // existingRecord() {
    //     return this.existingRecord;
    // },

    // titles() {
    //         return this.$store.state.samples;
    //     // console.log('Hello')
    //     // return "Hello"
    // },

    ...mapState({
      // titles: "samples",
      categories: "categories",
    }),
  },

  mounted() {
    this.$store.dispatch("getCategories");
    // this.getRecords();
    // this.$store.dispatch('loadPosts')
  },
};
</script>

<style scoped>
</style>
