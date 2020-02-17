<template>
    <div class="size-window">
        <div class="row-center">
            <h3 class="black">{{sizeEndpoint.name}}</h3>
        </div>
        <div class="row-center">
            <span class="dot-medium"></span>
        </div>
        <div class="row-center">
            <div class="col"><p class="medium-align-left">Rozmiar</p></div>
            <div class="col"><h4 class="align-right">{{sizeEndpoint.size}} cm</h4></div>
        </div>
        <div class="row-center">
            <div><p class="medium-align-left"></p>Cena</div>
            <div class="col"><h4 class="align-right">{{sizeEndpoint.price}} zł</h4></div>
        </div>
        <div class="row-center">
            <Button class="btn-flex">
                Wybierz rozmiar
            </Button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SizeWindow",
    props: {
        sizeEndpoint: Object
    }
}
</script>

<style scoped>

</style>
