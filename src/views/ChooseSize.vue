<template>
    <div id="choose-size">
        <h1>Wybierz rozmiar pizzy</h1>
        <div id="size-windows">
            <div class="size-window">
                <div class="row">
                    <h3 class="black">Medium</h3>
                </div>
                <div class="row">
                    <span class="dot"></span>
                </div>
                <div class="row">
                    <div class="col"><p class="medium-align-left">Rozmiar</p></div>
                    <div class="col"><h4 class="align-right">32cm</h4></div>
                </div>
                <div class="row">
                    <div><p class="medium-align-left">Cena</p></div>
                    <div class="col"><h4 class="align-right">26.90zł</h4></div>
                </div>
                <div class="row">
                    <div class="flex-button">
                    </div>
                </div>
            </div>
            <div class="size-window">
                <div class="row">
                    <h3 class="black">Max</h3>
                </div>
                <div class="row">
                    <span class="dot"></span>
                </div>
            </div>
            <div class="size-window">
                <div class="row">
                    <h3 class="black">Mega</h3>
                </div>
                <div class="row">
                    <span class="dot"></span>
                </div>
            </div>
        </div>
        <div id="group-11">
            <div class="layout-button" @click="$router.go(-1)">Wstecz</div>
            <div class="layout-button">Dalej</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChooseSize"
}
</script>

<style scoped>
#rectangle {
    width: 304px;
    height: 467px;
    background: blue;

}
</style>
