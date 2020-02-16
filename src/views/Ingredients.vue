<template>
    <div id="ingredients">
        <h1>Wybierz składniki do pizzy</h1>
        <div id="ingredients-windows">
            <div class="ingredients-window"></div>
            <div class="ingredients-window"></div>
            <div class="ingredients-window"></div>
            <div class="ingredients-window"></div>
            <div class="ingredients-window"></div>
            <div class="ingredients-window"></div>
            <div class="ingredients-window"></div>
            <div class="ingredients-window"></div>
            <div class="ingredients-window"></div>
            <div class="ingredients-window"></div>
        </div>
        <div id="group-11">
            <div class="layout-button" @click="$router.go(-1)">Wstecz</div>
            <div class="layout-button" @click="$router.push('/ingredients')">Dalej</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ingredients"
    }
</script>

<style scoped>

</style>
