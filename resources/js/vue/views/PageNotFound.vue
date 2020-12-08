<template>
    <div>
        <the-shortcuts />

        <div class="message">
            <p class="text-left"> Dear Explorer, </p>
            <p class="text-left"> Navigation is quite easier with our navigation options. Kindly consider that. </p>
            <p class="text-right"> Warm Regards. </p>
        </div>
    </div>
</template>

<script>
    import theShortcuts from "../components/theShortcuts"

    export default {
        components: {
            theShortcuts,
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .message {
        font-size: 3rem;
        padding: 3rem;
    }

</style>
