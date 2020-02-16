<template>
    <div id="group-11">
        <Button class="btn-layout" @click="$router.go(-1)">Wstecz</Button>
        <Button class="btn-layout" @click="$router.push(route)">Dalej</Button>
    </div>
</template>

<script>
    export default {
        name: "Group-11",
        props: {
            route: String
        }
    }
</script>

<style scoped>

</style>
