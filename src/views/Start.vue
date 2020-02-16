<template>
<div class="view justified">
    <div id="group-9">
        <div class="row-center">
            <img id="start-icon" src="../assets/pizza-icon.png">
        </div>
        <div class="row-center">
            <h1>Witaj w kreatorze pizzy!</h1>
        </div>
        <div class="row-center">
            <h3 class="silver">Kliknij START aby rozpocząć</h3>
        </div>
        <div class="row-center">
            <Button class="btn-start" @click.native="$router.push('/size')">START</Button>
        </div>
    </div>
</div>
</template>

<script>
import Button from "@/components/ui/Button";
export default {
    name: "Start",
    components: {Button}
}
</script>

<style scoped>

</style>
