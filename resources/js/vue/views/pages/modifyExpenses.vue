<template>
    <div>
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

        <section class="m-12" v-if="formStage === 'previewRecords'">
            <p class="text-purple-700 font-light text-xl"> Will you like to add to list? </p>
            <div class="px-12 py-6 rounded-md transition duration-1500 ease-in-out hover:shadow-xl">
                <table class="table-fixed shadow-lg bg-white border-collapse border hover:border-purple-700">
                    <tr class="bg-purple-700 border border-collapse text-white text-center">
                        <th class="w-2/5 px-8 py-4"> Narration </th>
                        <th class="w-1/5 px-8 py-4"> Category </th>
                        <th class="w-1/5 px-8 py-4"> Amount </th>
                        <th class="w-1/5 px-8 py-4"> Date of Expenditure </th>
                    </tr>
                    <tr class="">
                        <td class="border px-8 py-4">
                            <input
                                class="w-full p-2 font-medium text-purple-700 border-2 border-purple-700 rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-0 focus:ring-purple-500"
                                type="text" name="" id="">
                        </td>
                        <td class="border px-8 py-4">
                            <select
                                class="w-full p-2 bg-white border-2 border-purple-700 rounded-md text-purple-700 font-semibold inline-flex items-center transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-0 focus:ring-purple-500">
                                <option
                                    class="first:rounded-t last:rounded-b bg-white transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white py-2 px-4 block whitespace-no-wrap">
                                    Indiana</option>
                                <option
                                    class="first:rounded-t last:rounded-b bg-white transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white py-2 px-4 block whitespace-no-wrap">
                                    Michigan</option>
                                <option
                                    class="first:rounded-t last:rounded-b bg-white transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white py-2 px-4 block whitespace-no-wrap">
                                    Ohio</option>
                            </select>
                        </td>
                        <td class="border px-8 py-4">
                            <input
                                class="w-full p-2 font-medium text-purple-700 border-2 border-purple-700 rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-0 focus:ring-purple-500"
                                type="text" name="" id="">
                        </td>
                        <td class="border px-8 py-4">
                            <input
                                class="w-full p-2 font-medium text-purple-700 border-2 border-purple-700 rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-0 focus:ring-purple-500"
                                type="text" name="" id="">
                        </td>
                    </tr>
                </table>

                <button
                    class="h-10 py-2 px-6 mt-6 right-0 rounded-md text-white bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50"
                    @click="addNewRecord()">
                    <font-awesome-icon class="hover:text-green-700 mr-2" :icon="['fas', 'folder-plus']" />
                    Add
                </button>
            </div>

            <div class="add-modal-overlay bg-purple-100" v-if="addRecordPopUp" @click="closeNewRecordPopUp()">
                <div class="add-modal group m-12 shadow-2xl bg-white rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl select-none" v-if="addRecordPopUp">
                    <font-awesome-icon class=" text-red-500 text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'times-circle']" @click="closeNewRecordPopUp()" />

                    <p class="p-10 text-3xl text-center text-green-500">
                        Category (name) added successfully
                        <span class="ri-checkbox-circle-line inline-block"></span>
                    </p>
                </div>
            </div>

            <p class="group text-purple-700 font-light text-xl mt-12 inline-block"> Modify records as you wish. <span class="text-xs font-medium opacity-0 group-hover:opacity-100">Click
                    highlighter icon to
                    proceed.</span> </p>

            <table class="table-fixed shadow-lg bg-white border-collapse border hover:border-purple-700">
                <tr class="bg-purple-700 border border-collapse text-white text-center">
                    <th class="s-n px-8 py-4"> S/N </th>
                    <th class="w-3/5 px-8 py-4"> Narration </th>
                    <th class="category-col px-8 py-4"> Category </th>
                    <th class="w-1/5 px-8 py-4"> Amount </th>
                    <th class="w-1/5 px-8 py-4"> Date of Expenditure </th>
                </tr>
                <tr
                    class="group border border-collapse even:border-purple-700 font-medium text-purple-700 text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white">
                    <td class="border px-2 py-4"> 1
                        <font-awesome-icon class="opacity-0 group-hover:opacity-100 hover:text-blue-700" :icon="['fas', 'highlighter']" @click="editDeleteRecords()" />
                    </td>
                    <td class="border px-8 py-4"> Some super story </td>
                    <td class="border px-8 py-4"> Food </td>
                    <td class="border px-8 py-4"> NGN5,000 </td>
                    <td class="border px-8 py-4"> 12/12/2020 </td>
                </tr>
            </table>
        </section>

        <section v-if="formStage === 'editDeleteRecords'">
            <div class="p-12">
                <p class="group text-purple-700 font-light text-xl inline-block"> You can only edit and delete here. <span class="text-xs font-medium opacity-0 group-hover:opacity-100">Click on trash
                        icon to delete or pen-on-note to edit.</span> </p>
                <table class="table-fixed shadow-lg bg-white border-collapse border hover:border-purple-700">
                    <tr class="bg-purple-700 border border-collapse text-white text-center">
                        <th class="s-n px-8 py-4"> S/N </th>
                        <th class="w-3/5 px-8 py-4"> Narration </th>
                        <th class="category-col px-8 py-4"> Category </th>
                        <th class="w-1/10 px-8 py-4"> Amount </th>
                        <th class="w-1/10 px-8 py-4"> Date of Expenditure </th>
                    </tr>
                    <tr
                        class="group border border-collapse even:border-purple-700 font-medium text-purple-700 text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white">
                        <td class="border px-4 py-4">
                            <font-awesome-icon class="opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'trash']" v-if="isDeleting === false" @click="openDeletePopUp()" />
                            1
                            <font-awesome-icon class="opacity-0 group-hover:opacity-100 hover:text-pink-700" :icon="['fas', 'edit']" v-if="isEditing === false" @click="editRecords()" />
                        </td>
                        <td class="border px-8 py-4">
                            <span v-if="isEditing === false"> Some superstory about fantasy. </span>
                            <input
                                class="w-full p-2 border-2 border-transparent shadow-lg rounded-md font-medium text-purple-700 transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500"
                                type="text" name="" id="" v-if="isEditing">
                        </td>
                        <td class="border px-8 py-4">
                            <span v-if="isEditing === false"> Food </span>
                            <select
                                class="w-full p-2 bg-white border-2 border-transparent shadow-lg rounded-md font-medium text-purple-700 transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500"
                                v-if="isEditing">
                                <option
                                    class="first:rounded-t last:rounded-b bg-white transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white py-2 px-4 block whitespace-no-wrap">
                                    Indiana</option>
                                <option
                                    class="first:rounded-t last:rounded-b bg-white transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white py-2 px-4 block whitespace-no-wrap">
                                    Michigan</option>
                                <option
                                    class="first:rounded-t last:rounded-b bg-white transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white py-2 px-4 block whitespace-no-wrap">
                                    Ohio</option>
                            </select>
                        </td>
                        <td class="border px-8 py-4">
                            <span v-if="isEditing === false"> NGN5,000 </span>
                            <input
                                class="w-full p-2 border-2 border-transparent shadow-lg rounded-md font-medium text-purple-700 transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500"
                                type="text" name="" id="" v-if="isEditing">
                        </td>
                        <td class="border px-8 py-4">
                            <span v-if="isEditing === false"> 12/12/2020 </span>
                            <input
                                class="w-full p-2 border-2 border-transparent shadow-lg rounded-md font-medium text-purple-700 transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500"
                                type="text" name="" id="" v-if="isEditing">
                        </td>
                    </tr>
                </table>

                <div class="fixed bottom-10 right-10 space-x-6 z-50">
                    <button
                        class="py-2 px-6 rounded-md text-white font-light text-2xl bg-red-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-red-700 focus:outline-none focus:ring-8 focus:ring-red-500 focus:ring-opacity-50 border hover:border-red-700 hover:bg-purple-100"
                        v-if="isEditing" @click="cancelModification()">
                        <font-awesome-icon class="hover:text-red-500 mr-2" :icon="['fas', 'times']" />
                        Cancel
                    </button>

                    <button
                        class="py-2 px-6 rounded-md text-white font-light text-2xl bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-100"
                        v-if="isEditing" @click="saveModification()">
                        <font-awesome-icon class="hover:text-purple-500 mr-2" :icon="['fas', 'save']" />
                        Save
                    </button>
                </div>

                <div class="confirm-delete-modal-overlay bg-purple-100" v-if="confirmDeletePopUp" @click="cancelDelete()">
                    <div class="confirm-delete-modal group m-12 bg-white shadow-2xl rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl" v-if="confirmDeletePopUp">
                        <p class="p-10 text-3xl text-center text-red-500"> Are you sure you want to delete (name) from Category? </p>
                        <div class="flex place-content-center pb-12 space-x-6">
                            <button
                                class="border border-red-700 px-4 py-2 rounded-full font-medium text-lg text-red-700 transition duration-1500 ease-in-out hover:bg-red-700 hover:text-white focus:outline-none"
                                @click="confirmDelete()">
                                <font-awesome-icon :icon="['fas', 'trash-alt']" />
                                Confirm
                            </button>
                            <button
                                class="border border-purple-700 px-5 py-2 rounded-full font-medium text-lg text-purple-700 transition duration-1500 ease-in-out hover:bg-purple-700 hover:text-white focus:outline-none"
                                @click="cancelDelete()">
                                <font-awesome-icon :icon="['fas', 'backspace']" />
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

                <div class="delete-modal-overlay bg-purple-100" v-if="deleteRecordPopUp" @click="closeDeletePopUp()">
                    <div class="delete-modal group m-12 bg-white shadow-2xl rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl" v-if="deleteRecordPopUp">
                        <font-awesome-icon class="text-red-500 text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'times-circle']" @click="closeDeletePopUp()" />

                        <p class="p-10 text-3xl text-center text-red-500"> (name) is successfully deleted from Category. </p>
                    </div>
                </div>

                <div class="modification-modal-overlay bg-purple-100" v-if="modificationPopUp" @click="closeModificationPopUp()">
                    <div class="modification-modal group m-12 bg-white shadow-2xl rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl border" v-if="modificationPopUp">
                        <font-awesome-icon class="text-red-500 text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700" :icon="['fas', 'times-circle']"
                            @click="closeModificationPopUp()" />

                        <p class="p-10 text-3xl text-center text-purple-700"> Modification implemented successfully. </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
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

            addNewRecord() {
                this.addRecordPopUp = true;
            },

            closeNewRecordPopUp() {
                this.addRecordPopUp = false;
            },

            editDeleteRecords() {
                this.formStage = 'editDeleteRecords';
            },

            openDeletePopUp() {
                this.confirmDeletePopUp = true;
                // this.isEditing = true;
                // this.isDeleting = true;
            },

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
        }

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
