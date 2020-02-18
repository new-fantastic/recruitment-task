<template>
    <div class="ingredients-window">
        <div class="row">
            <span class="dot-small"></span>
            <h3>{{translatedIngredients[ingredientsEndpoint.name]}}</h3>
        </div>
        <div class="row-no-flex">
            <input v-model="ingredientsQuantity" v-on:change="updateIngredient(ingredientsQuantity, itemKey)" class="ingredients-input">
            <p class="big-bold">{{ingredientsEndpoint.price_per_unit}}/szt</p>
        </div>
    </div>
</template>

<script>
import translatedIngredients from "../../libs/translatedIngredients";
import { mapGetters, mapActions } from "vuex";
export default {
    name: "IngredientsWindow",
    data () {
        return {
            summaryWeight: null,
            ingredientsQuantity: null,
            translatedIngredients: translatedIngredients,

        }
    },
    props: {
        ingredientsEndpoint: Object,
        itemKey: Number
    },
    methods: {
        ...mapActions('orders', ['addIngredients']),
        updateIngredient (quantity, index) {
            this.addIngredients({quantity, index})
        }
    },
    computed: {
        ...mapGetters('orders', ['pizzaWeight']),
        ...mapGetters('orders', ['ingredients']),
        ...mapGetters('endpoints', ['sizeEndpoints']),
        ...mapGetters('endpoints', ['ingredientsEndpoints']),
    },
    watch: {
        // ingredients: {
        //     handler: function () {
        //         let summaryValue = null
        //         this.ingredients.forEach(ingredient => {
        //             let limit = this.ingredientsEndpoints.find(({name}) => name === ingredient.name)
        //             summaryValue += limit.weight * ingredient.value
        //             console.log(summaryValue)
        //         })
        //     },
        //     deep: true
        // }
    }
}
</script>

<style scoped>

</style>
