<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Ionic4 VueJS: Page Not Found</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-button @click="$router.replace('home')" expand="block">Back</ion-button>
    </ion-content>
  </div>
</template>

<script>
  export default {
    name: "NotFound",
    props: {
      msg: String
    },
    methods: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
