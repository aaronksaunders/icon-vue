
<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>Note Modal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-item>
        <ion-label
          color="primary"
          stacked
        >Stacked Label</ion-label>
        <ion-input
          type="text"
          placeholder="Title for note..."
          @input="noteInfo.title = $event.target.value"
          :value="noteInfo.title"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-textarea
          rows=5
          placeholder="Note description"
          @input="noteInfo.description = $event.target.value"
          :value="noteInfo.description"
        ></ion-textarea>
      </ion-item>
      <ion-row>
        <ion-col>
          <ion-button
            expand="block"
            @click="$ionic.modalController.dismiss({success: true, noteInfo})"
          >Save Note</ion-button>
        </ion-col>
        <ion-col>
          <ion-button
            expand="block"
            color="danger"
            @click="$ionic.modalController.dismiss({success: false})"
          >Cancel</ion-button>
        </ion-col>
      </ion-row>

    </ion-content>
  </div>
</template>

<script>
  export default {
    name: "SimpleModal",
    props: ["title", "anotherProp"],
    data() {
      return {
        noteInfo: {
          title: "",
          description: ""
        }
      };
    },
    // LIFECYCLE FUNCTIONS
    mounted: async function() {
      console.log(this);
    }
  };
</script>
