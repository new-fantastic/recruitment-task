<template>
    <div class="view">
        <h1>Dziękujemy!</h1>
        <h3 class="silver">Twoje zamówienie {{summaryPrice}} zł cena powinno być gotowe za czas</h3>
        <Button @click.native="$router.push('/')" class="btn-return-dark">Wróć do strony głównej</Button>
        <h3 class="silver">Twoje zamówienie</h3>
        <CheckoutProduct/>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Button from "@/components/ui/Button";
    import CheckoutProduct from "@/components/ui/CheckoutProduct";
    export default {
        name: "ThankYou",
        components: {CheckoutProduct, Button},
        computed: {
            ...mapGetters('orders', ['summaryPrice']),
        }
    }
</script>

<style scoped>

</style>
