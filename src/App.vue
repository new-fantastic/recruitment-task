<template>
  <div id="layout">
    <navbar
      v-if="!$route.meta.hideComponents"
    />
    <router-view/>
    <footer>
      <p class="small">&copy; 2020 Pizza Corp LTD</p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from "./components/ui/Navbar.vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: 'app',
  components: {Navbar},
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
