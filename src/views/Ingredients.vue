<template>
    <div id="ingredients">
        <h1>Wybierz składniki do pizzy</h1>
        <div id="ingredients-windows">
            <div class="ingredients-window">
                <div class="row">
                    <span class="dot-small"></span>
                    <h3>Nazwa</h3>
                </div>
                <div class="row-no-flex">
                    <input class="ingredients-input">
                    <p class="big-bold">4zł/szt</p>
                </div>
            </div>
            <div class="ingredients-window">
                <div class="row">
                    <span class="dot-small"></span>
                    <h3>Nazwa</h3>
                </div>
                <div class="row-no-flex">
                    <input class="ingredients-input">
                    <p class="big-bold">4zł/szt</p>
                </div>
            </div>
            <div class="ingredients-window">
                <div class="row">
                    <span class="dot-small"></span>
                    <h3>Nazwa</h3>
                </div>
                <div class="row-no-flex">
                    <input class="ingredients-input">
                    <p class="big-bold">4zł/szt</p>
                </div>
            </div>
            <div class="ingredients-window">
                <div class="row">
                    <span class="dot-small"></span>
                    <h3>Nazwa</h3>
                </div>
                <div class="row-no-flex">
                    <input class="ingredients-input">
                    <p class="big-bold">4zł/szt</p>
                </div>
            </div>
            <div class="ingredients-window">
                <div class="row">
                    <span class="dot-small"></span>
                    <h3>Nazwa</h3>
                </div>
                <div class="row-no-flex">
                    <input class="ingredients-input">
                    <p class="big-bold">4zł/szt</p>
                </div>
            </div>
            <div class="ingredients-window">
                <div class="row">
                    <span class="dot-small"></span>
                    <h3>Nazwa</h3>
                </div>
                <div class="row-no-flex">
                    <input class="ingredients-input">
                    <p class="big-bold">4zł/szt</p>
                </div>
            </div>
            <div class="ingredients-window">
                <div class="row">
                    <span class="dot-small"></span>
                    <h3>Nazwa</h3>
                </div>
                <div class="row-no-flex">
                    <input class="ingredients-input">
                    <p class="big-bold">4zł/szt</p>
                </div>
            </div>
            <div class="ingredients-window">
                <div class="row">
                    <span class="dot-small"></span>
                    <h3>Nazwa</h3>
                </div>
                <div class="row-no-flex">
                    <input class="ingredients-input">
                    <p class="big-bold">4zł/szt</p>
                </div>
            </div>
            <div class="ingredients-window">
                <div class="row">
                    <span class="dot-small"></span>
                    <h3>Nazwa</h3>
                </div>
                <div class="row-no-flex">
                    <input class="ingredients-input">
                    <p class="big-bold">4zł/szt</p>
                </div>
            </div>
            <div class="ingredients-window">
                <div class="row">
                    <span class="dot-small"></span>
                    <h3>Nazwa</h3>
                </div>
                <div class="row-no-flex">
                    <input class="ingredients-input">
                    <p class="big-bold">4zł/szt</p>
                </div>
            </div>
        </div>
        <div id="group-11">
            <div class="layout-button" @click="$router.go(-1)">Wstecz</div>
            <div class="layout-button" @click="$router.push('/checkout')">Dalej</div>
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
