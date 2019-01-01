<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Ionic4 VueJS: Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button @click="$router.push('about')">About</ion-button>
    </ion-content>
  </div>
</template>

<script>
  export default {
    name: "Home",
    props: {
      msg: String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
