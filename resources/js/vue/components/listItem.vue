<template>
    <div>
        <div class="item">
            <input type="checkbox" name="" id="" @change="updateCheck()" v-model="item.completed">

            <span :class="[item.completed ? 'completed' : '', 'itemText']"> {{ item.name }} </span>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                    d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z" @click="removeItem()" :fill="trashcan" /></svg>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        
        methods: {
            updateCheck() {
                axios.put('api/item/' + this.item.id, {
                        item: this.item
                    })
                    .then(response => {
                        if (response.status === 200) {
                            this.$emit('itemchanged')
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },

            removeItem() {
                axios.delete('api/item' + this.item.id)
                    .then(response => {
                        if (response.status === 200) {
                            this.$emit('itemchanged');
                        }
                    })
                    .catch(error => {
                        console.log(error.message);
                        console.log('Problem deleting item');
                    })
            }
        },

        data: function () {
            return {
                trashcan: '#FF0000'
            }

        }
    }

</script>

<style scoped>
    .completed {
        text-decoration: line-through;
        color: #999999;
    }

    .itemText {
        width: 100%;
        margin-left: 20px;
    }

    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        /* color: black; */
    }

    /* .trashcan {
        background: #e6e6e6;
        border: none;
        color: #FF0000;
        outline: none;
    } */

</style>
