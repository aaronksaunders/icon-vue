<template>
  <ion-app>
    <menu-left/>
    <div class="ion-page" main>
      <router-view/>
      <ion-menu-controller></ion-menu-controller>
      <ion-modal-controller></ion-modal-controller>
    </div>
  </ion-app>
</template>


<style src='@ionic/core/css/core.css'></style>
<style src='@ionic/core/css/ionic.bundle.css'></style>

<script>
import MenuLeft from "./components/menus/MenuLeft";
export default {
  name: "app",
  components: { MenuLeft }
};
</script>


<style>

</style>
