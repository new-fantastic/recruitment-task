<template>
    <div class="view">
        <h1>Wybierz składniki do pizzy</h1>
        <div id="ingredients-windows">
            <IngredientsWindow
                v-for="ingredientsEndpoint in ingredientsEndpoints" :key="ingredientsEndpoint.index"
                :ingredientsEndpoint="ingredientsEndpoint"
            />
        </div>
        <Group11
            :route="'/checkout'"
        />
    </div>
</template>

<script>
    import Group11 from "@/components/ui/Group-11";
    import { mapGetters } from "vuex";
    import IngredientsWindow from "../components/ui/IngredientsWindow";
    export default {
        name: "Ingredients",
        components: {IngredientsWindow, Group11},
        computed: mapGetters('endpoints', ['ingredientsEndpoints']),

    }
</script>

<style scoped>

</style>
