<template>
    <nav>
        <div class="navbar-item">
            <Button @click.native="$router.push('/')" class="btn-return-transparent">Wróć na START</Button>
<!--            <div class="btn-return" >Wróć na START</div>-->
        </div>
        <div class="navbar-item ">
            <img id="start-icon" src="../../assets/pizza-icon.png">
        </div>
        <div class="navbar-item">
         <p>CENA</p>
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
