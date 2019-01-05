<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/" @click="$router.go(-1)" />
        </ion-buttons>
        <ion-title>Ionic4 VueJS: Detail Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
     DETAIL PAGE CONTENT
    </ion-content>
  </div>
</template>

<script>
  export default {
    name: "DetailPage",
    props: {
      msg: String
    },
    methods: {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
