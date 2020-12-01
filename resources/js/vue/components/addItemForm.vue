<template>
    <div class="addItem">
        <input type="text" v-model="item.name" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" @click="addItems()" :fill="[item.name ? active : inactive]" /></svg>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                item: {
                    name: ""
                },

                active: '#00CE25',
                inactive: '#999999',
            }
        },

        methods: {
            addItems() {
                if (this.item.name === '') {
                    return;
                }

                axios.post('api/item/store', {
                        item: this.item
                    })
                    .then(response => {
                        if (response.status === 201) {
                            this.item.name = "";
                            this.$emit('reloadlist');
                        }
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            }
        }
    }

</script>

<style>
    .addItem {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        background: #f7f7f7;
        border: 0;
        /* border: none; */
        outline: none;
        padding: 5px;
        margin-right: 10px;
        width: 100%;
    }

    .plus {
        font-size: 20px;
    }

    /* .active {
        color: #00CE25;
    }

    .inactive {
        color: #999999;
    } */

</style>
