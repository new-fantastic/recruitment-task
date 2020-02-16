<template>
<div class="view">
    <h1>Złóż zamówienie</h1>
    <CheckoutProduct/>
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
