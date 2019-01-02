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
              v-validate="'email|required'"
              data-vv-as="email"
              @input="credentials.email = $event.target.value"
              :value="credentials.email"
              name="username"
              type="text"
              spellcheck="false"
              autocapitalize="off"
            >
            </ion-input>
          </ion-item>
          <span
            v-show="errors.has('username')"
            class="help is-danger"
          >{{ errors.first('username') }}</span>
          <ion-item>
            <ion-label
              position="stacked"
              color="primary"
            >Password</ion-label>
            <ion-input
              v-validate="{min:5, max:11, required:true}"
              data-vv-as="field"
              @input="credentials.password = $event.target.value"
              :value="credentials.password"
              name="password"
              type="password"
            >
            </ion-input>
          </ion-item>
          <span
            v-show="errors.has('password')"
            class="help is-danger"
          >{{ errors.first('password') }}</span>
        </ion-list>

        <ion-row responsive-sm>
          <ion-col>
            <ion-button
              :disabled="errors.items.length !== 0 || this.isFormPristine"
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
    computed: {
      isFormDirty() {
        return Object.keys(this.fields).some(key => this.fields[key].dirty);
      },

      isFormPristine() {
        return Object.keys(this.fields).some(key => this.fields[key].pristine);
      }
    },
    data() {
      return {
        credentials: {}
      };
    },
    methods: {
      // get actions and getters from vuex state model
      ...mapActions("user", ["userLogin"]),
      ...mapGetters("user", ["authError"]),

      // methods for this component
      async doLogin() {
        try {
          let user = await this.userLogin(this.credentials);

          if (user === false) {
            console.log(this.authError().err.message);
            this.presentToastWithOptions(this.authError().err.message);
          } else {
            this.presentToastWithOptions("Logged In Successfully");
            this.$router.push("home");
          }
        } catch (e) {}
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
<style scoped>
  .help.is-danger {
    color: #ff3860;
  }
  .help {
    display: block;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
</style>

  

