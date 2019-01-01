<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Create Account</ion-title>
        <ion-buttons slot="end">
          <ion-button
            clear
            @click="$router.push('about')"
          >
            <span>Place Holder</span>
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
              @input="userInfo.email = $event.target.value"
              :value="userInfo.email"
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
            >First Name</ion-label>
            <ion-input
              @input="userInfo.firstName = $event.target.value"
              :value="userInfo.firstName"
              name="firstName"
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
            >Last Name</ion-label>
            <ion-input
              @input="userInfo.lastName = $event.target.value"
              :value="userInfo.lastName"
              name="lastName"
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
              @input="userInfo.password1 = $event.target.value"
              :value="userInfo.password1"
              name="password1"
              type="password"
              required
            >
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-label
              position="stacked"
              color="primary"
            >Repeat Password</ion-label>
            <ion-input
              @input="userInfo.password2 = $event.target.value"
              :value="userInfo.password2"
              name="password2"
              type="password"
              required
            >
            </ion-input>
          </ion-item>

        </ion-list>

        <ion-row responsive-sm>
          <ion-col>
            <ion-button
              @click="doCreateAccount()"
              expand="block"
            >Save</ion-button>
          </ion-col>
          <ion-col>
            <ion-button
              @click="doGoBack()"
              color="light"
              expand="block"
            >Cancel</ion-button>
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
        userInfo: {  }
      };
    },
    methods: {
      ...mapActions("user", ["createAccount"]),
      doCreateAccount() {
        //console.log(this.userInfo);
        this.createAccount(this.userInfo);
      },
      doGoBack() {
        //console.log(this.userInfo);
        this.$router.go(-1);
      }
    }
  };
</script>
  

