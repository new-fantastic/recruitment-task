<template>
<div class="view justified" v-if="startEndpoints">
    <div id="group-9">
        <div class="row-center">
            <img class="pizza-icon" src="../assets/pizza-icon.png">
        </div>
        <div class="row-center">
            <h1>{{ startEndpoints.title }}</h1>
        </div>
        <div class="row-center">
            <h3 class="silver">{{ startEndpoints.content }}</h3>
        </div>
        <div class="row-center">
            <Button class="btn-start" @click.native="$router.push('/size')">START</Button>
        </div>
    </div>
</div>
</template>

<script>
import Button from '@/components/ui/Button';
import { mapGetters } from 'vuex'
export default {
    name: "Start",
    components: {Button},
    computed: mapGetters('endpoints', ['startEndpoints']),
}
</script>

<style scoped>

</style>
