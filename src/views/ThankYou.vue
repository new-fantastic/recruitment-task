<template>
    <div class="view">
        <h1>Dziękujemy!</h1>
        <h3 class="silver">Twoje zamówienie za cena powinno być gotowe za czas</h3>
        <Button @click.native="$router.push('/')" class="btn-return-dark">Wróć do strony głównej</Button>
        <h3 class="silver">Twoje zamówienie</h3>
        <CheckoutProduct/>
    </div>
</template>

<script>
    import Button from "@/components/ui/Button";
    import CheckoutProduct from "@/components/ui/CheckoutProduct";
    export default {
        name: "ThankYou",
        components: {CheckoutProduct, Button}
    }
</script>

<style scoped>

</style>
