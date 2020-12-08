<template>
    <div>
        <the-shortcuts />

        <section class="m-4 md:m-12" v-if="formStage === 'previewRecords'">
            <p class="font-light md:text-xl"> Will you like to add to list? </p>
            <div class="p-2 md:p-6 rounded-md transition duration-1500 ease-in-out hover:shadow-xl">
                <table class="table-fixed shadow-lg bg-white border-collapse border hover:border-purple-700">
                    <tr class="bg-purple-700 border border-collapse text-white text-center">
                        <th class="w-2/5 p-1 md:p-1 md:px-8 md:md:py-4"> Narration </th>
                        <th class="w-1/5 p-1 md:px-8 md:py-4"> Category </th>
                        <th class="w-1/5 p-1 md:px-8 md:py-4"> Amount </th>
                        <th class="w-1/5 p-1 md:px-8 md:py-4"> Date of Expenditure </th>
                    </tr>
                    <tr
                        class="group border border-collapse even:border-purple-700 font-normal md:font-medium text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white">
                        <td class="border p-1 md:px-8 md:py-4">
                            <input
                                class="w-full p-1 md:p-2 md:font-medium text-purple-700 border-2 border-purple-700 rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-0 focus:ring-purple-500"
                                type="text" name="" id="" autocomplete="off" v-model="expense.narration">
                        </td>
                        <td class="border p-1 md:px-8 md:py-4">
                            <select
                                class="w-full p-1 md:p-2 text-purple-700 bg-white border-2 border-purple-700 rounded-md md:font-medium inline-flex items-center transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-0 focus:ring-purple-500"
                                v-model.trim="expense.category_id">
                                <option
                                    class="rounded-t last:rounded-b bg-white transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white py-1 md:py-2 md:px-4 block whitespace-no-wrap"
                                    disabled value="">Please select one</option>
                                <option
                                    class="first:rounded-t last:rounded-b bg-white transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white py-1 md:py-2 md:px-4 block whitespace-no-wrap"
                                    :value="expense.category_id">
                                    {{ expense.category_id }}</option>
                            </select>
                        </td>
                        <td class="border p-1 md:px-8 md:py-4">
                            <input
                                class="w-full p-1 md:p-2 md:font-medium text-purple-700 border-2 border-purple-700 rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-0 focus:ring-purple-500"
                                type="number" name="" id="" autocomplete="off" v-model="expense.amount">
                        </td>
                        <td class="border p-1 md:px-8 md:py-4">
                            <input
                                class="w-full p-1 md:p-2 md:font-medium text-purple-700 border-2 border-purple-700 rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-0 focus:ring-purple-500"
                                type="date" min="2020-12-8" max="2030-12-31" name="" id="" autocomplete="off" v-model="expense.date">
                        </td>
                    </tr>
                </table>
                <div class="mt-2 text-xs text-red-700 font-medium" v-if="fieldError">
                    You cannot add an empty field, all fields are required.
                </div>
                <div class="mt-2 text-xs text-red-700 font-medium" v-if="noInternetConnection">
                    Your internet is not connected.
                </div>
                <!-- <div class="mt-2 text-xs text-red-700 font-medium" v-if="isOffline">
                    Unable to complete your request, internet not responding.
                </div> -->

                <button
                    class="md:h-11 px-2 md:px-6 py-1 md:py-2 mt-2 md:mt-6 right-0 rounded-md text-white bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-2 md:focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50"
                    :disabled="disabled" @click="addNewRecord()">
                    <font-awesome-icon class="hover:text-green-700 mr-2" :icon="['fas', 'folder-plus']" />
                    Add
                </button>
            </div>

            <div class="fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50" v-if="addRecordPopUp" @click="closeNewRecordPopUp()">
                <div class="fixed top-64 sm:top-56 md:top-52 left-20 sm:left-56 md:left-96 pb-6 md:pb-12 text-xs sm:text-base group shadow-2xl bg-white rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl select-none"
                    v-if="addRecordPopUp">
                    <font-awesome-icon class=" text-red-500 text-xl md:text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'times-circle']"
                        @click="closeNewRecordPopUp()" />

                    <p class="p-2 md:p-10 md:text-3xl text-center text-green-500">
                        Field (name) added successfully
                        <span class="ri-checkbox-circle-line inline-block"></span>
                    </p>
                </div>
            </div>

            <div v-if="expenses.length > 0">
                <p class="group font-light md:text-xl mt-4 md:mt-12 inline-block"> Modify records as you wish. <span class="text-xs font-light md:font-medium opacity-0 group-hover:opacity-100">Click
                        highlighter icon to proceed.</span> </p>

                <table class="table-fixed shadow-lg bg-white border-collapse border hover:border-purple-700 text-xs md:text-base md:font-normal mb-36">
                    <tr class="bg-purple-700 border border-collapse text-white text-center">
                        <th class="s-n p-1 md:px-8 md:py-4"> S/N </th>
                        <th class="w-3/5 p-1 md:px-8 md:py-4"> Narration </th>
                        <th class="category-col p-1 md:px-8 md:py-4"> Category </th>
                        <th class="w-1/5 p-1 md:px-8 md:py-4"> Amount </th>
                        <th class="w-1/5 p-1 md:px-8 md:py-4"> Date of Expenditure </th>
                    </tr>
                    <tr class="group border border-collapse even:border-purple-700 font-normal md:font-medium text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white"
                        v-for="(item, index) in expenses" :key="index">
                        <td class="border px-2 py-4"> {{ ++index }}
                            <font-awesome-icon class="opacity-0 group-hover:opacity-100 hover:text-blue-700" :icon="['fas', 'highlighter']" @click="editDeleteRecords()" />
                        </td>
                        <td class="border p-1 md:px-8 md:py-4"> {{ item.narration }} </td>
                        <td class="border p-1 md:px-8 md:py-4"> {{ item.category_id }} </td>
                        <td class="border p-1 md:px-8 md:py-4"> ₦{{ item.amount }} </td>
                        <td class="border p-1 md:px-8 md:py-4"> {{ item.date | formatDate }} </td>
                    </tr>
                </table>
            </div>

            <div class="p-3 sm:p-6 text-lg sm:text-5xl md:text-9xl text-purple-700 bg-transparent text-center hover:text-white hover:bg-purple-700" v-if="loading === true"> Loading... </div>
            <div class="p-3 sm:p-6 text-lg sm:text-5xl md:text-9xl text-purple-700 bg-transparent text-center hover:text-white hover:bg-purple-700" v-if="expenses.length < 1"> No Record Available
            </div>
        </section>

        <section v-if="formStage === 'editDeleteRecords'">
            <div class="p-4 md:p-12">
                <p class="group font-light md:text-xl inline-block"> You can only edit and delete here. <span class="text-xs font-medium opacity-0 group-hover:opacity-100">Click on trash
                        icon to delete or pen-on-note to edit.</span> </p>
                <table class="table-fixed shadow-lg bg-white border-collapse border hover:border-purple-700 text-xs md:text-base md:font-normal mb-36" v-if="expenses.length > 0">
                    <tr class="bg-purple-700 border border-collapse text-white text-center">
                        <th class="s-n p-1 md:px-8 md:py-4"> S/N </th>
                        <th class="w-3/5 p-1 md:px-8 md:py-4"> Narration </th>
                        <th class="category-col p-1 md:px-8 md:py-4"> Category </th>
                        <th class="w-1/12 p-1 md:px-8 md:py-4"> Amount </th>
                        <th class="w-1/12 p-1 md:px-8 md:py-4"> Date of Expenditure </th>
                    </tr>
                    <tr class="group border border-collapse even:border-purple-700 font-normal md:font-medium text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white"
                        v-for="(item, index) in expenses" :key="index">
                        <td class="border px-4 py-4">
                            <font-awesome-icon class="opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'trash']" v-if="isDeleting === false" @click="openDeletePopUp()" />
                            {{ ++index }}
                            <font-awesome-icon class="opacity-0 group-hover:opacity-100 hover:text-pink-700" :icon="['fas', 'edit']" v-if="isEditing === false" @click="editRecords()" />
                        </td>
                        <td class="border p-1 md:px-8 md:py-4">
                            <span v-if="isEditing === false"> {{ item.narration }} </span>
                            <input
                                class="w-full p-2 text-purple-700 border-2 border-transparent shadow-lg rounded-md md:font-medium transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500"
                                type="text" name="" id="" autocomplete="off" v-if="isEditing" v-model="item.narration">
                        </td>
                        <td class="border p-1 md:px-8 md:py-4">
                            <span v-if="isEditing === false"> {{ item.category_id }} </span>
                            <select
                                class="w-full p-2 text-purple-700 bg-white border-2 border-transparent shadow-lg rounded-md md:font-medium transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500"
                                v-if="isEditing">
                                <option
                                    class="first:rounded-t last:rounded-b bg-white transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white py-1 md:py-2 md:px-4 block whitespace-no-wrap"
                                    disabled value="">Please select one</option>
                                <option
                                    class="first:rounded-t last:rounded-b bg-white transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white py-2 px-4 block whitespace-no-wrap"
                                    :value="value">
                                    Indiana</option>
                            </select>
                        </td>
                        <td class="border p-1 md:px-8 md:py-4">
                            <span v-if="isEditing === false"> ₦{{ item.amount }} </span>
                            <input
                                class="w-full p-2 text-purple-700 border-2 border-transparent shadow-lg rounded-md md:font-medium transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500"
                                type="number" name="" id="" autocomplete="off" v-if="isEditing" v-model="item.amount">
                        </td>
                        <td class="border p-1 md:px-8 md:py-4">
                            <span v-if="isEditing === false"> {{ item.date | formatDate }} </span>
                            <input
                                class="w-full p-2 text-purple-700 border-2 border-transparent shadow-lg rounded-md md:font-medium transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500"
                                type="date" min="2020-12-8" max="2030-12-31" name="" id="" autocomplete="off" v-if="isEditing" v-model="item.date">
                        </td>
                    </tr>
                </table>
                <div class="p-6 text-9xl text-purple-700 bg-transparent text-center hover:text-white hover:bg-purple-700" v-if="loading === true"> Loading... </div>
                <div class="p-6 text-9xl text-purple-700 bg-transparent text-center hover:text-white hover:bg-purple-700" v-if="expenses.length < 1"> No Record Available </div>

                <div class="fixed bottom-6 md:bottom-10 right-6 md:right-10 space-x-6 z-50">
                    <button
                        class="p-1 md:py-2 md:px-6 rounded-md text-white font-light md:text-2xl bg-red-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-red-700 focus:outline-none focus:ring-2 md:focus:ring-8 focus:ring-red-500 focus:ring-opacity-50 border hover:border-red-700 hover:bg-purple-100"
                        v-if="isEditing" @click="cancelModification()">
                        <font-awesome-icon class="hover:text-red-500 mr-2" :icon="['fas', 'times']" />
                        Cancel
                    </button>

                    <button
                        class="py-1 md:py-2 md:px-6 rounded-md text-white font-light md:text-2xl bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-2 md:focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-100"
                        v-if="isEditing" @click="saveModification()">
                        <font-awesome-icon class="hover:text-purple-500 mr-2" :icon="['fas', 'save']" />
                        Save
                    </button>
                </div>

                <div class="fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50" v-if="confirmDeletePopUp" @click="cancelDelete()">
                    <div class="fixed top-64 sm:top-56 md:top-52 left-10 sm:left-36 md:left-96 text-xs sm:text-base group shadow-2xl bg-white rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl select-none"
                        v-if="confirmDeletePopUp">
                        <p class="p-4 md:p-10 md:text-3xl text-center text-red-500"> Are you sure you want to delete (name) from Category? </p>
                        <div class="flex place-content-center pb-4 md:pb-12 space-x-6">
                            <button
                                class="border border-red-700 p-1 md:px-4 md:py-2 rounded-full md:font-medium md:text-lg text-red-700 transition duration-1500 ease-in-out hover:bg-red-700 hover:text-white focus:outline-none"
                                @click="confirmDelete()">
                                <font-awesome-icon :icon="['fas', 'trash-alt']" />
                                Confirm
                            </button>
                            <button
                                class="border border-purple-700 px-1 md:px-5 md:py-2 rounded-full md:font-medium md:text-lg transition duration-1500 ease-in-out hover:bg-purple-700 hover:text-white focus:outline-none"
                                @click="cancelDelete()">
                                <font-awesome-icon :icon="['fas', 'backspace']" />
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

                <div class="fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50" v-if="deleteRecordPopUp" @click="closeDeletePopUp()">
                    <div class="fixed top-64 sm:top-56 md:top-52 left-10 sm:left-36 md:left-96 pb-6 md:pb-12 text-xs sm:text-base group shadow-2xl bg-white rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl select-none"
                        v-if="deleteRecordPopUp">
                        <font-awesome-icon class="text-red-500 text-2xl md:text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'times-circle']"
                            @click="closeDeletePopUp()" />

                        <p class="p-10 md:text-3xl text-center text-red-500"> (name) is successfully deleted from Category. </p>
                    </div>
                </div>

                <div class="fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50" v-if="modificationPopUp" @click="closeModificationPopUp()">
                    <div class="fixed top-64 sm:top-56 md:top-52 left-10 sm:left-36 md:left-96 pb-6 md:pb-12 text-xs sm:text-base group shadow-2xl bg-white rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl select-none"
                        v-if="modificationPopUp">
                        <font-awesome-icon class="text-red-500 text-2xl md:text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'times-circle']"
                            @click="closeModificationPopUp()" />

                        <p class="p-10 md:text-3xl text-center text-purple-700"> Modification implemented successfully. </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";

    import theShortcuts from "../../components/theShortcuts"

    export default {
        components: {
            theShortcuts,
        },

        data: function () {
            return {
                loading: false,

                expense: {
                    narration: "",
                    category: "",
                    amount: "",
                    date: ""
                },

                noInternetConnection: false,
                fieldError: false,
                disabled: false,

                formStage: 'previewRecords',
                // isPreviewing: false,
                isEditing: false,
                isDeleting: false,
                addRecordPopUp: false,
                modificationPopUp: false,
                deleteRecordPopUp: false,
                confirmDeletePopUp: false,
            }
        },

        methods: {
            addNewRecord() {
                // let inputs = [
                //     this.expenses.narration,
                //     this.expenses.category,
                //     this.expenses.amount,
                //     this.expenses.date
                // ]

                // if (inputs.includes('')) {
                if (
                    this.expense.narration === "" ||
                    this.expense.category_id === "" ||
                    this.expense.amount === "" ||
                    this.expense.date === ""
                ) {
                    // this.disabled = true;
                    this.fieldError = true;
                    return;
                } else if (!navigator.onLine) {
                    this.noInternetConnection = true;
                    return;
                }
                // else if (isOffline) {
                //     this.offlineError = true;
                //     return;
                // }

                this.fieldError = false;
                this.noInternetConnection = false;
                // console.log("Sending...");

                axios
                    .post("/api/expense/store", {
                        // expense: this.expense
                        narration: this.expense.narration,
                        category: this.expense.category_id,
                        amount: this.expense.amount,
                        date: this.expense.date
                    })
                    .then((response) => {
                        if (response.status === 201) {
                            this.$store.dispatch('getCategories')
                            // this.expenses.narration = "";
                            // this.expenses.category = "";
                            // this.expenses.amount = "";
                            // this.expenses.date = "";
                            this.addRecordPopUp = true;
                        }
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            },

            deleteRecord() {
                this.confirmDeletePopUp = true;

                if (!this.confirmDelete) {
                    return
                } else if (!navigator.onLine) {
                    console.log("You do not have an internet connection.")
                    return;
                }
                // else if (isOffline) {
                //     console.log("Unable to complete your request, internet not responding.")
                //     return;
                // }

                axios
                    .delete('/api/category/' + this.category.id)
                    .then(response => {
                        if (response.status === 200) {
                            this.$store.dispatch('getCategories')
                        }
                    })
                    .catch(error => {
                        console.log(error.message);
                        console.log('Problem in deleting the record.');
                    })
            },

            closeModificationPopUp() {
                this.modificationPopUp = false;
                this.isEditing = false;
                this.isDeleting = false;
            },

            confirmDelete() {
                this.confirmDeletePopUp = false;
                this.deleteRecordPopUp = true;
            },

            cancelDelete() {
                this.confirmDeletePopUp = false;
                this.isEditing = false;
                this.isDeleting = false;
            },

            // addNewRecord() {
            //     this.addRecordPopUp = true;
            // },

            updateRecord() {
                if (this.expense.name === "") {
                    return;
                } else if (noInternetConnection) {
                    console.log("You do not have an internet connection.")
                    return;
                }
                // else if (isOffline) {
                //     console.log("Unable to complete your request, internet not responding.")
                //     return;
                // }

                axios
                    .put("api/expense/" + this.expense.id)
                    .then((response) => {
                        if (response.status === 200) {
                            this.$store.dispatch('getCategories')
                            this.expense.name === "";
                        }
                    })
                    .catch((error) => {
                        console.log(error.message);
                        console.log("Problem in updating the records.");
                    });

                // this.addRecordPopUp = true;
            },

            closeNewRecordPopUp() {
                this.addRecordPopUp = false;
                this.expense.narration = "";
                this.expense.category_id = "";
                this.expense.amount = "";
                this.expense.date = "";
            },

            editDeleteRecords() {
                this.formStage = 'editDeleteRecords';
            },

            // openDeletePopUp() {
            //     this.confirmDeletePopUp = true;
            //     // this.isEditing = true;
            //     // this.isDeleting = true;
            // },

            editRecords() {
                this.isEditing = true;
                this.isDeleting = true;
            },

            cancelModification() {
                this.isEditing = false;
                this.isDeleting = false;
            },

            saveModification() {
                this.modificationPopUp = true;
            },

            closeDeletePopUp() {
                this.deleteRecordPopUp = false;
                this.isEditing = false;
                this.isDeleting = false;
            }
        },

        computed: {
            ...mapState({
                expenses: "expenses"
            }),
        },

        mounted() {
            this.$store.dispatch('getExpenses')
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

    .dropdown:hover .dropdown-menu {
        display: block;
    }

    .add-modal,
    .confirm-delete-modal,
    .delete-modal,
    .modification-modal {
        position: fixed;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        box-shadow:
            0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072);
        filter: none;
        z-index: 1111;
    }

    .add-modal-overlay,
    .confirm-delete-modal-overlay,
    .delete-modal-overlay,
    .modification-modal-overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* background-color: rgba(0, 0, 0, 0.4); */
        z-index: 999;
    }

</style>
