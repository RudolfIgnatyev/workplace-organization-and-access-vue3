<template>
  <v-app>
    <v-app-bar app>
      <v-row class="px-2 justify-space-between">
        <v-btn elevation="1">
          К главной странице
        </v-btn>
        <v-avatar color="primary" tile>
          <v-icon dark>
            mdi-account
          </v-icon>
        </v-avatar>
      </v-row>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer absolute>
      <v-row class="pa-2">
        Организация рабочего места и доступ к ИР
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
