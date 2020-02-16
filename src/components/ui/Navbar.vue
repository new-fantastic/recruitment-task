<template>
    <nav>
        <div class="navbar-item">
            <div class="return-button" @click="$router.push('/')">Wróć na START</div>
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
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
