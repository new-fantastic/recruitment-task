<template>
    <div class="view">
        <h1>Wybierz rozmiar pizzy</h1>
        <div class="size-windows">
            <SizeWindow
                v-for="sizeEndpoint in sizeEndpoints" :key="sizeEndpoint.index"
                :sizeEndpoint="sizeEndpoint"
            />
        </div>
        <Group11
        :route="'/ingredients'"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from "@/components/ui/Button";
import Group11 from "@/components/ui/Group-11";
import SizeWindow from "../components/ui/SizeWindow";
export default {
    name: "ChooseSize",
    components: {SizeWindow, Group11, Button},
    computed: mapGetters('endpoints', ['sizeEndpoints']),
}
</script>

<style scoped>
#rectangle {
    width: 304px;
    height: 467px;
    background: blue;

}
</style>
