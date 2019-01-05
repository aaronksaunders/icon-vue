<template>
  <ion-menu>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>
          Navigate
        </ion-list-header>
        <ion-menu-toggle auto-hide="false">
          <ion-item button @click="$router.replace('/')">
            <ion-icon
              slot="start"
              name='home'
            ></ion-icon>
            <ion-label>
              Home
            </ion-label>
          </ion-item>

          <ion-item button @click="$router.replace('/about')">
            <ion-icon
              slot="start"
              name='home'
            ></ion-icon>
            <ion-label>
              About
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>

</template>

<script>
  export default {
    name: "MenuLeft",
    props: {
      msg: String
    }
  };
</script>