<template>
    <div class="checkout-product">
        <div id="order-row">
            <div id="pizza-size-row" v-for="order in orders" :key="order.index">
                <div class="checkout-row">
                    <h3 class="black">Rozmiar {{order.name}}</h3>
                    <h3 class="silver">{{order.pizzaPrice}} zł</h3>
                </div>
                <div class="checkout-row" v-for="ingredient in order.ingredients" :key="order.ingredients.index" v-if="ingredient.value !== null">
                    <h3 class="black">{{translatedIngredients[ingredient.name]}} x{{ingredient.value}}</h3>
                    <h3 class="silver">{{ingredient.value * 4}} zł</h3>
                </div>
                <div class="checkout-row">
                    <h1 class="black">Łącznie</h1>
                    <h1 class="silver">{{summaryPrice}} zł</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import translatedIngredients from "../../libs/translatedIngredients";
import { mapGetters } from "vuex";
export default {
    name: "CheckoutProduct",
    data () {
        return {
            translatedIngredients: translatedIngredients
        }
    },
    computed: {
        ...mapGetters('orders', ['orders']),
        ...mapGetters('orders', ['summaryPrice']),
    }
}
</script>

<style scoped>

</style>
