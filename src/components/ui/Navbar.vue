<template>
    <nav>
        <div class="navbar-item" v-if="$route.path !== '/checkout'">
            <Button @click.native="$router.push('/')" class="btn-return-transparent">Wróć na START</Button>
        </div>
        <div v-else class="navbar-item">
            <Button @click.native="$router.push('/ingredients')" class="btn-return-transparent">Powrót do edycji</Button>
        </div>
        <div class="navbar-item ">
            <img class="pizza-icon" src="../../assets/pizza-icon.png">
        </div>
        <div class="navbar-item">
         <p class="navbar-price">CENA</p>
        </div>
    </nav>
</template>

<script>
    import Button from "@/components/ui/Button";
    export default {
        name: "Navbar",
        components: {Button}
    }
</script>

<style scoped>

</style>
