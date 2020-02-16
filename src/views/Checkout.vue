<template>
<div class="view">
    <h1>Złóż zamówienie</h1>
    <CheckoutProduct/>
<!--    <div id="checkout-product">-->
<!--        <div id="pizza-size-row">-->
<!--            <div class="checkout-row">-->
<!--                <h3 class="black">Rozmiar MAX</h3>-->
<!--                <h3 class="silver">34,90zł</h3>-->
<!--            </div>-->
<!--            <div class="checkout-row">-->
<!--                <h1 class="black">Łącznie</h1>-->
<!--                <h1 class="silver">Cena</h1>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
    <Button class="btn-large light">Dodaj następny</Button>
    <Button @click="$router.push('/thankyou')" class="btn-large dark">Zakończ zamówienie</Button>
</div>
</template>

<script>
import CheckoutProduct from "@/components/ui/CheckoutProduct";
export default {
    name: "Checkout",
    components: {CheckoutProduct}
}
</script>

<style scoped>
</style>
