<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo </h2>
            <add-item-form 
        v-on:reloadlist="getList()"/>
        </div>
        <list-view :items="items"
        v-on:reloadlist="getList()" />
    </div>
</template>

<script>
    import addItemForm from "../../components/addItemForm"
    import listView from "../../components/listView"

    export default {
        components: {
            addItemForm,
            listView
        },

        data: function () {
            return {
                items: []
            }
        },

        methods: {
            getList() {
                axios.get('api/items')
                .then( response => {
                    this.items = response.data
                })
                .catch (error => {
                    console.log(error.message);
                });
            }
        },

        created () {
            this.getList();
        }
    }

</script>

<style scoped>
    /* // <style lang="scss" scoped> */
    .todoListContainer {
        width: 350px;
        margin: auto;
    }

    .heading {
        background: e6e6e6;
        padding: 10px;
    }

    #title {
        text-align: center;
    }

</style>
