<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Login</ion-title>
        <ion-buttons slot="end">
            <ion-button clear @click="$router.push('about')" >
                <span>About</span>
            </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>

      <form novalidate>
        <ion-list>
          <ion-item>
            <ion-label position="stacked" color="primary">Username</ion-label>
            <ion-input  @input="credentials.email = $event.target.value" :value="credentials.email" name="username" type="text" spellcheck="false" autocapitalize="off"
              required>
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked" color="primary">Password</ion-label>
            <ion-input @input="credentials.password = $event.target.value"  :value="credentials.password" name="password" type="password" required>
            </ion-input>
          </ion-item>

        </ion-list>

        <ion-row responsive-sm>
          <ion-col>
            <ion-button @click="doLogin()" expand="block">Login</ion-button>
          </ion-col>
          <ion-col>
            <ion-button @click="doLogin()" color="light" expand="block">Signup</ion-button>
          </ion-col>
        </ion-row>
      </form>
    </ion-content>
  </div>
  </template>

<script>
import { mapActions } from "vuex";
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
    ...mapActions("user", ["signUserIn"]),
    doLogin() {
      //console.log(this.credentials);
      this.signUserIn(this.credentials);
    }
  }
};
</script>
  

