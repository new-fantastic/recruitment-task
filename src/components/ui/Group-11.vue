<template>
    <div id="group-11">
        <Button class="btn-layout" @click="$router.go(-1)">Wstecz</Button>
        <Button class="btn-layout" @click="buttonAction">Dalej</Button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { bus } from '../../main'
export default {
    name: "Group-11",
    props: {
        route: String
    },
    data () {
        return {
            checkedSize: {
                name: null,
                weight: null,
                price: null
            }
        }
    },
    methods: {
        ...mapActions('orders', ['pushOrder']),
        ...mapActions('orders', ['addSize']),
        pushSize (name, weight, price) {
            this.addSize({name, weight, price})

        },
        buttonAction () {
            if (this.$route.path === '/ingredients') {
                this.pushOrder()
            } else if (this.$route.path === '/size') {
                this.pushSize(this.checkedSize.name, this.checkedSize.weight, this.checkedSize.price)
            }
            this.$router.push(this.route)
        }
    },
    created() {
        bus.$on('sendCheckedSize', (data) => {
            this.checkedSize.name = data.name
            this.checkedSize.weight = data.weight
            this.checkedSize.price = data.price
        })
    }
}
</script>

<style scoped>

</style>
