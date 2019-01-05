
<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>Super Modal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      Content {{anotherProp}}
      <ion-button @click="$ionic.modalController.dismiss()">Dismiss Modal</ion-button>
    </ion-content>
  </div>
</template>

<script>
  export default {
    name: "SimpleModal",
    props: ["title", "anotherProp"],
    // LIFECYCLE FUNCTIONS
    mounted: async function() {
      console.log(this);
    }
  };
</script>
