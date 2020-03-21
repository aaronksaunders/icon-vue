<template>
  <div class="ion-page" main>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-toggle v-if="currentUser">
            <ion-button>
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
          <ion-back-button v-if="!currentUser" text default-href="/" @click="$router.go(-1)" />
        </ion-buttons>
        <ion-title>Ionic4 VueJS: About</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-label>{{currentUser && currentUser.email}}</ion-label>
      <ion-button @click="presentAlert()">Show Alert</ion-button>
      <ion-button @click="presentToastWithOptions()">Show Toast</ion-button>
      <ion-button expand="full" @click="doLogout()">LOGOUT</ion-button>
    </ion-content>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "About",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters("user", ["authError", "currentUser"]),
  },
  methods: {
    // get actions and getters from vuex state model
    ...mapActions("user", ["userLogout"]),
    ///
    async doLogout() {
      try {
        let user = await this.userLogout();
        if (user === false) {
          console.log(this.authError().err.message);
          this.presentToastWithOptions(this.authError.err.message);
        } else {
          this.presentToastWithOptions("Logged Out Successfully");
          this.$router.push("home");
        }
      } catch (e) {
        this.presentToastWithOptions(this.authError.err.message);
      }
    },
    async presentAlert() {
      const alert = await this.$ionic.alertController.create({
        header: "Alert",
        subHeader: "Subtitle",
        message: "This is an alert message.",
        buttons: ["OK"]
      });
      return await alert.present();
    },
    async presentToastWithOptions(_message) {
      const toast = await this.$ionic.toastController.create({
        message: _message || "Click to Close.. bottom toast",
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
