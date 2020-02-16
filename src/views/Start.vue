<template>
<div id="start">
    <div id="group-9">
        <div class="row">
            <img id="start-icon" src="../assets/pizza-icon.png">
        </div>
        <div class="row">
            <h1>Witaj w kreatorze pizzy!</h1>
        </div>
        <div class="row">
            <h3 class="silver">Kliknij START aby rozpocząć</h3>
        </div>
        <div class="row">
            <div class="start-button" @click="$router.push('/size')">START</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Start"
}
</script>

<style scoped>

</style>
