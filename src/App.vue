<template>
  <div id="layout">
    <navbar
      v-if="!$route.meta.hideComponents"
    />
    <router-view/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from "./components/ui/Navbar.vue";
import { mapActions } from "vuex";
import Footer from "./components/ui/Footer.vue";

export default Vue.extend({
  name: 'app',
  components: {Footer, Navbar},
  methods: {
    ...mapActions('endpoints', ['getAllEndpoints'])
  },
  created () {
    this.getAllEndpoints()
  }
});
</script>

<style lang="scss">
@import "style";
</style>
