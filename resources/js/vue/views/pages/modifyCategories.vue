<template>
    <div>
        <the-shortcuts />

        <!-- <p v-for="(x, index) in titles" :key="index">{{ x.title }}</p> -->

        <section class="m-4 md:m-12" v-if="formStage === 'previewRecords'">
            <p class="font-light md:text-xl">Will you like to add to list?</p>
            <div class="px-6 py-2 md:py-6 rounded-md transition duration-1500 ease-in-out hover:shadow-xl">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 w-100">
                    <span class="col-span-11">
                        <input type="text" v-model="category.name"
                            class="w-full p-2 border-2 border-purple-700 font-medium rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-0 focus:ring-purple-500"
                            autocomplete="off" />
                        <div class="mt-2 text-xs text-red-700 font-medium" v-if="fieldError">
                            You cannot add an empty field.
                        </div>
                        <div class="mt-2 text-xs text-red-700 font-medium" v-if="noInternetConnection">
                            Your internet is not connected.
                        </div>
                        <!-- <div class="mt-2 text-xs text-red-700 font-medium" v-if="isOffline">
                            Unable to complete your request, internet not responding.
                        </div> -->
                    </span>
                    <div class="">
                        <button
                            class="md:w-full md:h-11 p-2 rounded-md text-white bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-2 md:focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50"
                            @click="addNewRecord()">
                            <font-awesome-icon class="hover:text-green-700 mr-2" :icon="['fas', 'folder-plus']" />
                            Add
                        </button>
                    </div>
                </div>
            </div>

            <div class="fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50" v-if="addRecordPopUp" @click="closeNewRecordPopUp()">
                <div class="fixed top-64 sm:top-56 md:top-52 left-20 sm:left-56 md:left-96 pb-6 md:pb-12 text-xs sm:text-base group shadow-2xl bg-white rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl select-none"
                    v-if="addRecordPopUp">
                    <font-awesome-icon class="text-red-500 text-xl md:text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'times-circle']"
                        @click="closeNewRecordPopUp()" />

                    <p class="p-2 md:p-10 md:text-3xl text-center text-green-500">
                        Field (name) added successfully
                        <span class="ri-checkbox-circle-line inline-block"></span>
                    </p>
                </div>
            </div>

            <div v-if="categories.length > 0">
                <p class="group font-light md:text-xl mt-4 md:mt-12 inline-block">
                    Modify records as you wish.
                    <span class="text-xs font-light md:font-medium opacity-0 group-hover:opacity-100">Click highlighter icon to proceed.</span>
                </p>

                <table class=" md:w-full table-fixed shadow-lg bg-white border-collapse border hover:border-purple-700 text-xs md:text-base md:font-normal mb-36">
                    <tr class="bg-purple-700 border border-collapse text-white text-center">
                        <th class="w-1/12 p-2 md:px-8 md:py-4">S/N</th>
                        <th class="w-1/2 p-2 md:px-8 md:py-4">Category Name</th>
                        <th class="w-1/5 p-2 md:px-8 md:py-4">Date Created</th>
                        <th class="w-1/5 p-2 md:px-8 md:py-4">Status</th>
                    </tr>
                    <tr class="group border border-collapse even:border-purple-700 font-normal md:font-medium text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white"
                        v-for="(item, index) in categories" :key="index">
                        <td class="border px-4 py-4 break-words">
                            {{ ++index }}
                            <font-awesome-icon class="opacity-0 group-hover:opacity-100 hover:text-blue-700" :icon="['fas', 'highlighter']" @click="editDeleteRecords()" />
                        </td>
                        <td class="border p-2 md:px-8 md:py-4 break-words">{{ item.name }}</td>
                        <td class="border p-2 md:px-8 md:py-4 break-words">{{ item.updated_at | formatDate }}</td>
                        <td class="border p-2 md:px-8 md:py-4 break-words">Active</td>
                    </tr>
                </table>
            </div>

            <div class="p-3 sm:p-6 text-lg sm:text-5xl md:text-9xl text-purple-700 bg-transparent text-center hover:text-white hover:bg-purple-700" v-if="loading === true"> Loading... </div>
            <div class="p-3 sm:p-6 text-lg sm:text-5xl md:text-9xl text-purple-700 bg-transparent shadow-2xl rounded-3xl text-center transform transition duration-1000 ease-in-out hover:shadow-none hover:text-white hover:bg-purple-700" v-if="categories.length < 1"> No Record Available
            </div>
        </section>

        <section v-if="formStage === 'editDeleteRecords'">
            <div class="p-4 md:p-12">
                <p class="group font-light md:text-xl inline-block">
                    You can only edit and delete here.
                    <span class="text-xs font-medium opacity-0 group-hover:opacity-100">Click on trash icon to delete or pen-on-note to edit.</span>
                </p>
                <table class="table-fixed md:w-full shadow-lg bg-white border-collapse border hover:border-purple-700 text-xs md:text-base md:font-normal mb-36" v-if="categories.length > 0">
                    <tr class="bg-purple-700 border border-collapse text-white text-center">
                        <th class="w-1/12 p-2 md:px-8 md:py-4">S/N</th>
                        <th class="w-1/2 p-2 md:px-8 md:py-4">Category Name</th>
                        <th class="w-1/5 p-2 md:px-8 md:py-4">Date Created</th>
                        <th class="w-1/5 p-2 md:px-8 md:py-4">Status</th>
                    </tr>
                    <tr class="group border border-collapse even:border-purple-700 font-normal md:font-medium text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white"
                        v-for="(item, index) in categories" :key="index">
                        <td class="border px-4 py-4 break-words">
                            <!-- <font-awesome-icon class="opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'trash']" v-if="isDeleting === false" @click="openDeletePopUp()" /> -->
                            <font-awesome-icon class="opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'trash']" v-if="isDeleting === false" @click="deleteRecord()" />
                            {{ ++index }}
                            <font-awesome-icon class="opacity-0 group-hover:opacity-100 hover:text-pink-700" :icon="['fas', 'edit']" v-if="isEditing === false" @click="editRecords()" />
                        </td>
                        <td class="border p-2 md:px-8 md:py-4 break-words">
                            <span v-if="isEditing === false"> {{ item.name }} </span>
                            <input
                                class="w-full p-2 border-2 border-transparent shadow-lg rounded-md font-medium transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500"
                                type="text" name="" id="" autocomplete="off" v-if="isEditing" v-model="item.name" />
                        </td>
                        <td class="border p-2 md:px-8 md:py-4 break-words">
                            <span> {{ item.updated_at | formatDate }} </span>
                            <!-- <input
                                class="w-full p-2 border-2 border-transparent shadow-lg rounded-md font-medium transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500"
                                type="text" name="" autocomplete="off" id="" v-if="isEditing" /> -->
                        </td>
                        <td class="border p-2 md:px-8 md:py-4 break-words">
                            <span> Active </span>
                            <!-- <input
                                class="w-full p-2 border-2 border-transparent shadow-lg rounded-md font-medium transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500"
                                type="text" name="" id="" autocomplete="off" v-if="isEditing" /> -->
                        </td>
                    </tr>
                </table>

                <div class="p-6 text-9xl text-purple-700 bg-transparent text-center hover:text-white hover:bg-purple-700" v-if="loading === true"> Loading... </div>
                <div class="p-6 text-9xl text-purple-700 bg-transparent shadow-2xl rounded-3xl text-center transform transition duration-1000 ease-in-out hover:shadow-none hover:text-white hover:bg-purple-700" v-if="categories.length < 1"> No Record Available </div>

                <div class="fixed bottom-5 md:bottom-10 right-5 md:right-10 space-x-6 z-50">
                    <button
                        class="py-1 md:py-2 px-2 md:px-6 rounded-md text-white font-light text-lg md:text-2xl bg-red-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-red-700 focus:outline-none focus:ring-2 md:focus:ring-8 focus:ring-red-500 focus:ring-opacity-50 border hover:border-red-700 hover:bg-purple-300"
                        v-if="isEditing" @click="cancelModification()">
                        <font-awesome-icon class="hover:text-red-500 mr-2" :icon="['fas', 'times']" />
                        Cancel
                    </button>

                    <button
                        class="py-1 md:py-2 px-2 md:px-6 rounded-md text-white font-light text-lg md:text-2xl bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-2 md:focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-300"
                        v-if="isEditing" @click="saveModification()">
                        <font-awesome-icon class="hover:text-purple-500 mr-2" :icon="['fas', 'save']" />
                        Save
                    </button>
                </div>

                <div class="fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50" v-if="confirmDeletePopUp" @click="cancelDelete()">
                    <div class="fixed top-64 sm:top-56 md:top-52 left-20 sm:left-56 md:left-96 pb-6 md:pb-12 text-xs sm:text-base group shadow-2xl bg-white rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl select-none"
                        v-if="confirmDeletePopUp">
                        <p class="p-4 md:p-10 text-lg md:text-3xl text-center text-red-500">
                            Are you sure you want to delete (name) from Category?
                        </p>
                        <div class="flex place-content-center pb-4 md:pb-12 space-x-6">
                            <button
                                class="border border-red-700 px-2 md:px-4 py-1 md:py-2 rounded-full font-medium md:text-lg text-red-700 transition duration-1500 ease-in-out hover:bg-red-700 hover:text-white focus:outline-none"
                                @click="confirmDelete()">
                                <font-awesome-icon :icon="['fas', 'trash-alt']" />
                                Confirm
                            </button>
                            <button
                                class="border border-purple-700 px-5 py-2 rounded-full font-medium text-lg transition duration-1500 ease-in-out hover:bg-purple-700 hover:text-white focus:outline-none"
                                @click="cancelDelete()">
                                <font-awesome-icon :icon="['fas', 'backspace']" />
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

                <div class="fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50" v-if="deleteRecordPopUp" @click="closeDeletePopUp()">
                    <div class="fixed top-64 sm:top-56 md:top-52 left-20 sm:left-56 md:left-96 pb-6 md:pb-12 text-xs sm:text-base group shadow-2xl bg-white rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl select-none"
                        v-if="deleteRecordPopUp">
                        <font-awesome-icon class="text-red-500 text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'times-circle']" @click="closeDeletePopUp()" />

                        <p class="p-2 md:p-10 md:text-3xl text-center text-red-500">
                            (name) is successfully deleted from Category.
                        </p>
                    </div>
                </div>

                <div class="fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50" v-if="modificationPopUp" @click="closeModificationPopUp()">
                    <div class="fixed top-64 sm:top-56 md:top-52 left-20 sm:left-56 md:left-96 pb-6 md:pb-12 text-xs sm:text-base group shadow-2xl bg-white rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl select-none"
                        v-if="modificationPopUp">
                        <font-awesome-icon class="text-red-500 text-xl md:text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'times-circle']"
                            @click="closeModificationPopUp()" />

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
    import {
        mapState
    } from "vuex";

    import theShortcuts from "../../components/theShortcuts";

    export default {
        components: {
            theShortcuts,
        },

        data: function () {
            return {
                loading: false,

                category: {
                    name: "",
                },

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
            // fieldError() {
            //     this.fieldError = true;
            // },

            addNewRecord() {
                if (this.category.name === "") {
                    this.fieldError = true;
                    return;
                } 
                // else if (!navigator.onLine) {
                //     this.noInternetConnection = true;
                //     return;
                // }
                // else if (isOffline) {
                //     this.offlineError = true;
                //     return;
                // }

                this.fieldError = false;
                this.noInternetConnection = false;

                axios
                    .post("/api/category/store", {
                        category: this.category
                    })
                    .then((response) => {
                        if (response.status === 201) {
                            this.$store.dispatch('getCategories')
                            // this.category.name = "";
                            this.addRecordPopUp = true;
                            // console.log(response)
                        }
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            },

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

            updateRecord() {
                if (this.category.name === "") {
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
                    .put("api/category/" + this.category.id)
                    .then((response) => {
                        if (response.status === 200) {
                            this.$store.dispatch('getCategories')
                            this.category.name === "";
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
                categories: "categories"
            }),
        },

        mounted() {
            this.$store.dispatch('getCategories')
            // this.getRecords();
            // this.$store.dispatch('loadPosts')
        },
    };

</script>

<style scoped>
</style>
