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
            <Button @click="checkSize(sizeEndpoint.name, sizeEndpoint.maximum_ingredients_weight, sizeEndpoint.price)" class="btn-flex">
                Wybierz rozmiar
            </Button>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";
import { bus } from '../../main'
export default {
    name: "SizeWindow",
    data () {
        return {
            checkedSize: {
                name: null,
                weight: null,
                price: null
            }
        }
    },
    props: {
        sizeEndpoint: Object
    },
    methods: {
        checkSize (name, weight, price) {
            this.checkedSize.name = name;
            this.checkedSize.weight = weight;
            this.checkedSize.price = price;
            bus.$emit('sendCheckedSize', this.checkedSize)
        }
    }
}
</script>

<style scoped>

</style>
