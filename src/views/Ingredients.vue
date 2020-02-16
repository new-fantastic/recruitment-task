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
        <Group11
            :route="'/checkout'"
        />
    </div>
</template>

<script>
    import Group11 from "@/components/ui/Group-11";
    export default {
        name: "Ingredients",
        components: {Group11}
    }
</script>

<style scoped>

</style>
