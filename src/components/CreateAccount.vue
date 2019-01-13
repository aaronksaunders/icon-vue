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
              v-validate="'required'"
              data-vv-as="username"
              @input="userInfo.username = $event.target.value"
              :value="userInfo.username"
              name="username"
              type="text"
              spellcheck="false"
              autocapitalize="off"
              required
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
            >Email</ion-label>
            <ion-input
              v-validate="'email|required'"
              data-vv-as="email"
              @input="userInfo.email = $event.target.value"
              :value="userInfo.email"
              name="email"
              type="text"
              spellcheck="false"
              autocapitalize="off"
              required
            >
            </ion-input>
          </ion-item>
          <span
            v-show="errors.has('email')"
            class="help is-danger"
          >{{ errors.first('email') }}</span>
          <ion-item>
            <ion-label
              position="stacked"
              color="primary"
            >First Name</ion-label>
            <ion-input
              v-validate="'required'"
              data-vv-as="firstName"
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
          <span
            v-show="errors.has('firstName')"
            class="help is-danger"
          >{{ errors.first('firstName') }}</span>

          <ion-item>
            <ion-label
              position="stacked"
              color="primary"
            >Last Name</ion-label>
            <ion-input
              v-validate="'required'"
              data-vv-as="lastName"
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
          <span
            v-show="errors.has('lastName')"
            class="help is-danger"
          >{{ errors.first('lastName') }}</span>

          <ion-item>
            <ion-label
              position="stacked"
              color="primary"
            >BirthDate</ion-label>
            <ion-datetime
              v-validate="'required'"
              data-vv-as="birthDate"
              display-format="MMMM DD YYYY"
              min="2000"
              max="2019-10-31"
              name="birthDate"
              @ionChange="userInfo.birthDate = $event.target.value"
              :value="userInfo.birthDate"
            ></ion-datetime>
          </ion-item>
          <span
            v-show="errors.has('birthDate')"
            class="help is-danger"
          >{{ errors.first('birthDate') }}</span>

          <ion-item>
            <ion-label
              position="stacked"
              color="primary"
            >Password</ion-label>
            <ion-input
              v-validate="'required'"
              data-vv-as="password1"
              @input="userInfo.password1 = $event.target.value"
              :value="userInfo.password1"
              name="password1"
              type="password"
              required
            >
            </ion-input>
          </ion-item>
         <span
            v-show="errors.has('password1')"
            class="help is-danger"
          >{{ errors.first('password1') }}</span>

          <ion-item>
            <ion-label
              position="stacked"
              color="primary"
            >Repeat Password</ion-label>
            <ion-input
              v-validate="'required'"
              data-vv-as="password2"
              @input="userInfo.password2 = $event.target.value"
              :value="userInfo.password2"
              name="password2"
              type="password"
              required
            >
            </ion-input>
          </ion-item>
         <span
            v-show="errors.has('password2')"
            class="help is-danger"
          >{{ errors.first('password2') }}</span>

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
    <!-- <ul>
      <li v-for="error in errors.all()">{{ error }}</li>
    </ul> -->
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  import moment from "moment";
  export default {
    name: "CreateAccount",
    props: {
      msg: String
    },
    computed: {
      ...mapGetters("user", ["authError"]),
      calcAge() {},
      isFormDirty() {
        return Object.keys(this.fields).some(key => this.fields[key].dirty);
      },

      isFormPristine() {
        return Object.keys(this.fields).some(key => this.fields[key].pristine);
      }
    },
    data() {
      return {
        userInfo: {}
      };
    },
    methods: {
      ...mapActions("user", ["createAccount"]),
      moment: function() {
        return moment();
      },
      td(v) {
        let date = `${v.month.value - v.day.value - v.year.value}`;
        console.log(this.moment().diff(date, "years"));
        return date;
      },
      doCreateAccount() {
        this.$validator.validate().then(result => {
          if (!result) {
            // do stuff if not valid.
            console.log(this.userInfo);
            console.log(this.userInfo);
          } else {
            this.createAccount(this.userInfo);
          }
        });
      },
      doGoBack() {
        //console.log(this.userInfo);
        this.$router.go(-1);
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

