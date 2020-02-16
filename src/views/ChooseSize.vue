<template>
    <div class="view">
        <h1>Wybierz rozmiar pizzy</h1>
        <div id="size-windows">
            <div class="size-window">
                <div class="row-center">
                    <h3 class="black">Medium</h3>
                </div>
                <div class="row-center">
                    <span class="dot-medium"></span>
                </div>
                <div class="row-center">
                    <div class="col"><p class="medium-align-left">Rozmiar</p></div>
                    <div class="col"><h4 class="align-right">32cm</h4></div>
                </div>
                <div class="row-center">
                    <div><p class="medium-align-left">Cena</p></div>
                    <div class="col"><h4 class="align-right">26.90zł</h4></div>
                </div>
                <div class="row-center">
                    <Button class="btn-flex">
                        Wybierz rozmiar
                    </Button>
                </div>
            </div>
            <div class="size-window">
                <div class="row-center">
                    <h3 class="black">Medium</h3>
                </div>
                <div class="row-center">
                    <span class="dot-medium"></span>
                </div>
                <div class="row-center">
                    <div class="col"><p class="medium-align-left">Rozmiar</p></div>
                    <div class="col"><h4 class="align-right">32cm</h4></div>
                </div>
                <div class="row-center">
                    <div><p class="medium-align-left">Cena</p></div>
                    <div class="col"><h4 class="align-right">26.90zł</h4></div>
                </div>
                <div class="row-center">
                    <Button class="btn-flex">
                        Wybierz rozmiar
                    </Button>
                </div>
            </div>
            <div class="size-window">
                <div class="row-center">
                    <h3 class="black">Medium</h3>
                </div>
                <div class="row-center">
                    <span class="dot-medium"></span>
                </div>
                <div class="row-center">
                    <div class="col"><p class="medium-align-left">Rozmiar</p></div>
                    <div class="col"><h4 class="align-right">32cm</h4></div>
                </div>
                <div class="row-center">
                    <div><p class="medium-align-left">Cena</p></div>
                    <div class="col"><h4 class="align-right">26.90zł</h4></div>
                </div>
                <div class="row-center">
                    <Button class="btn-flex">
                        Wybierz rozmiar
                    </Button>
                </div>
            </div>
        </div>
        <Group11
        :route="'/ingredients'"
        />
    </div>
</template>

<script>
import Button from "@/components/ui/Button";
import Group11 from "@/components/ui/Group-11";
export default {
    name: "ChooseSize",
    components: {Group11, Button}
}
</script>

<style scoped>
#rectangle {
    width: 304px;
    height: 467px;
    background: blue;

}
</style>
