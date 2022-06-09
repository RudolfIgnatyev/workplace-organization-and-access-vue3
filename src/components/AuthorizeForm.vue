<template>
  <v-card tile max-width="66vw" class="mx-auto">
    <v-container class="d-flex flex-column">
      <v-card-title>
        Пройдите авторизацию
      </v-card-title>
      <v-card-content>
        <v-form v-model="isValidating">
          <v-text-field v-model="login" :rules="[rules.required]" label="Логин" type="login" variant="outlined"
            counter="15" maxlength="15" autofocus></v-text-field>
          <v-text-field v-model="password" :rules="[rules.required]" label="Пароль" type="password" variant="outlined"
            counter="20" maxlength="20"></v-text-field>
        </v-form>
      </v-card-content>
    </v-container>
    <v-card-actions class="pr-8 pb-8 d-flex justify-end">
      <v-btn @click="authorize" elevation="1">
        Авторизоваться
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-dialog v-model="alertExists">
    <v-card>
      <v-card-text>
        {{ alertMessage }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import store from '@/store'

export default {
  name: 'AuthorizeForm',
  data() {
    return {
      login: '',
      password: '',
      alertMessage: '',
      isValidating: false,
      alertExists: false,
      rules: {
        required: value => !!value || 'Обязательное поле'
      }
    }
  },
  methods: {
    authorize: function () {
      const account = {
        login: this.login,
        password: this.password
      }
      if (this.isValidating) {
        store.dispatch('employee/authorize', account)
        this.$router.push({ name: 'HomePage' })
        this.alertMessage = 'Вы ввели неверный логин или пароль!'
        this.alertExists = true
        setTimeout(() => {
          this.alertExists = false
        }, 3000)
      }
    }
  },
  mounted() {
    const authStatus = { ...store.getters['employee/getAuthStatus'] }
    if (authStatus === 1) {
      this.$router.push({ name: 'HomePage' })
    }
  }
}
</script>
