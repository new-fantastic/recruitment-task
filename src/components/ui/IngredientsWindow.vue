<template>
    <div class="ingredients-window">
        <div class="row">
            <span class="dot-small"></span>
            <h3>{{ingredientsEndpoint.name}}</h3>
        </div>
        <div class="row-no-flex">
            <input class="ingredients-input">
            <p class="big-bold">{{ingredientsEndpoint.price_per_unit}}/szt</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "IngredientsWindow",
    props: {
        ingredientsEndpoint: Object
    }
}
</script>

<style scoped>

</style>
