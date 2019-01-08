<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button
            text=""
            default-href="/"
            @click="$router.go(-1)"
          />
        </ion-buttons>
        <ion-title>Ionic4 VueJS: Detail Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>

      <ion-label>
        <h1 v-html="currentTruck.c2[0].value"></h1>
        <h3>{{ currentTruck.c4[0].value }}</h3>
        <h3>{{ currentTruck.c3[0].value }}</h3>
      </ion-label>
      <ion-row>
        <ion-col color="primary">
          <ion-button expand="block">WEBSITE</ion-button>
        </ion-col>
        <ion-col color="primary">
          <ion-button expand="block">MENU</ion-button>
        </ion-col>
        <ion-col color="primary">
          <ion-button
            expand="block"
            @click="openModal"
          >NOTE</ion-button>
        </ion-col>
      </ion-row>
    </ion-content>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  import SimpleModal from "./modals/SimpleModal.vue";

  export default {
    name: "DetailPage",
    props: {
      msg: String
    },
    computed: {
      ...mapGetters("truck", ["authError", "currentTruck"])
    },
    methods: {
      ...mapActions("truck", ["addTruckNote"]),
      async openModal() {
        let modal = await this.$ionic.modalController.create({
          component: SimpleModal,
          componentProps: { title: "Teste", anotherProp: new Date() + "" }
        });

        // show the modal
        await modal.present();

        // wait to see if i get a response
        let {
          data: { success, noteInfo }
        } = await modal.onDidDismiss();

        // only on success
        success && alert(JSON.stringify(noteInfo));
        if (success) {
          this.addTruckNote(noteInfo)
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
