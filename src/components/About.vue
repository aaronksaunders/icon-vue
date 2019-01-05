<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon
                slot="icon-only"
                name="menu"
              ></ion-icon>
            </ion-button>
          </ion-menu-toggle>
          <!-- <ion-back-button text="" default-href="/" @click="$router.go(-1)" /> -->
        </ion-buttons>
        <ion-title>Ionic4 VueJS: About</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button @click="presentAlert()">Show Alert</ion-button>
      <ion-button @click="presentToastWithOptions()">Show Toast</ion-button>
    </ion-content>
  </div>
</template>

<script>
  export default {
    name: "About",
    props: {
      msg: String
    },
    methods: {
      async presentAlert() {
        const alert = await this.$ionic.alertController.create({
          header: "Alert",
          subHeader: "Subtitle",
          message: "This is an alert message.",
          buttons: ["OK"]
        });
        return await alert.present();
      },
      async presentToastWithOptions() {
        const toast = await this.$ionic.toastController.create({
          message: "Click to Close.. bottom toast",
          showCloseButton: true,
          position: "bottom",
          closeButtonText: "Done",
          duration: 2000
        });
        return await toast.present();
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
