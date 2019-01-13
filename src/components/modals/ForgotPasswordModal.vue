
<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>Reset Your Password</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-item>
        <ion-label
          color="primary"
          position="stacked"
        >Enter Email Address Associated with Account</ion-label>
        <ion-input
          type="text"
          placeholder="Email Address"
          @input="passwordInfo.email = $event.target.value"
          :value="passwordInfo.email"
        ></ion-input>
      </ion-item>
      <ion-row padding>
        <ion-col>
          <ion-button
            expand="full"
            @click="$ionic.modalController.dismiss({success: true, passwordInfo})"
          >Request Password Reset</ion-button>

          <ion-button
            expand="full"
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
    name: "ForgotPasswordModal",
    props: ["title", "anotherProp"],
    data() {
      return {
        passwordInfo: {
          email: "",
        }
      };
    },
    // LIFECYCLE FUNCTIONS
    mounted: async function() {
      console.log(this);
    }
  };
</script>
