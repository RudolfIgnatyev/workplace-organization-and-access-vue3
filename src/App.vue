<template>
  <v-app app>
    <v-app-bar>
      <template v-slot:prepend>
        <v-btn @click="goToPage('HomePage')" elevation="1" class="ml-5">
          К главной странице
        </v-btn>
      </template>
      <template v-slot:append>
        <div v-if="employee.id > 0">
          <v-avatar @click="inStateOfConfirmation = true" color="warning" tile>
            <v-icon>
              mdi-account-minus
            </v-icon>
          </v-avatar>
          <v-avatar @click="goToPage('EditAccount')" color="primary" tile class="ml-3">
            <v-icon>
              mdi-account-edit
            </v-icon>
          </v-avatar>
          <v-avatar v-if="employee.account.type = 'администратор'" color="primary" tile class="ml-3">
            <v-icon>
              mdi-account-multiple-plus
            </v-icon>
          </v-avatar>
        </div>
      </template>
    </v-app-bar>
    <v-main class="main-block mt-3">
      <v-dialog v-model="inStateOfConfirmation">
        <v-card>
          <v-card-subtitle>
            Вы уверены, что хотите выйти из аккаунта?
          </v-card-subtitle>
          <v-card-actions class="d-flex justify-space-between">
            <v-btn @click="inStateOfConfirmation = false">
              Нет
            </v-btn>
            <v-btn @click="logout">
              Да
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <router-view />
    </v-main>
    <v-divider></v-divider>
    <v-footer>
      <v-card-subtitle class="pa-2 v-footer">
        ИС "Организация рабочего места и доступ к ИР"
      </v-card-subtitle>
    </v-footer>
  </v-app>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      inStateOfConfirmation: false
    }
  },
  methods: {
    goToPage: function (pageName) {
      this.$router.push({ name: pageName })
    },
    logout: function () {
      store.dispatch('employee/logout')
      this.inStateOfConfirmation = false
      this.$router.push({ name: 'HomePage' })
    }
  },
  computed: {
    ...mapGetters({
      employee: 'employee/getEmployee'
    })
  }
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
.main-block {
  height: 100px;
  overflow-y: auto;
}
.v-footer {
  min-height: 35px;
  max-height: 35px;
}
</style>
