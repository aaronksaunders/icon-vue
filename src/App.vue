<template>
  <ion-app>
    <menu-left :showMenu="hasUser === true"/>
    <div class="ion-page" main>
      <ion-vue-router></ion-vue-router>
      <ion-menu-controller></ion-menu-controller>
      <ion-modal-controller></ion-modal-controller>
    </div>
  </ion-app>
</template>


<style src='@ionic/core/css/core.css'></style>
<style src='@ionic/core/css/ionic.bundle.css'></style>

<script>
import MenuLeft from "./components/menus/MenuLeft";
import store from "./store";
export default {
  name: "app",
  components: { MenuLeft },
  computed: {
    hasUser() {
      debugger;
      return this.$store.state.user.isAuthenticated 
    }
  },
};
</script>


<style>

</style>
