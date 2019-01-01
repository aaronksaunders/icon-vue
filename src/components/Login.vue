<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Login</ion-title>
        <ion-buttons slot="end">
          <ion-button
            clear
            @click="$router.push('about')"
          >
            <span>About</span>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>

      <form novalidate>
        <ion-list>
          <ion-item>
            <ion-label
              position="stacked"
              color="primary"
            >Username</ion-label>
            <ion-input
              @input="credentials.email = $event.target.value"
              :value="credentials.email"
              name="username"
              type="text"
              spellcheck="false"
              autocapitalize="off"
              required
            >
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-label
              position="stacked"
              color="primary"
            >Password</ion-label>
            <ion-input
              @input="credentials.password = $event.target.value"
              :value="credentials.password"
              name="password"
              type="password"
              required
            >
            </ion-input>
          </ion-item>

        </ion-list>

        <ion-row responsive-sm>
          <ion-col>
            <ion-button
              @click="doLogin()"
              expand="block"
            >Login</ion-button>
          </ion-col>
          <ion-col>
            <ion-button
              @click="doCreateAccount()"
              color="light"
              expand="block"
            >Create Account</ion-button>
          </ion-col>
        </ion-row>
      </form>
    </ion-content>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    name: "Login",
    props: {
      msg: String
    },
    data() {
      return {
        credentials: { email: "", password: "" }
      };
    },
    methods: {
      // get actions and getters from vuex state model
      ...mapActions("user", ["userLogin"]),
      ...mapGetters("user", ["authError"]),
      
      // methods for this component
      doLogin() {
        //console.log(this.credentials);
        this.userLogin(this.credentials)
          .then(
            user => {
              if (user === false) {
                console.log(this.authError().err.message);
                this.presentToastWithOptions(this.authError().err.message);
              } else {
                this.presentToastWithOptions("Logged In Successfully");
              }
            },
            e => {
              console.log(e);
            }
          )
          .catch(e => {
            console.log("catch " + e);
          });
      },
      doCreateAccount() {
        //console.log(this.credentials);
        this.$router.push("create-account");
      },
      async presentToastWithOptions(_message) {
        const toast = await this.$ionic.toastController.create({
          message: _message,
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
  

