<template>
  <v-card tile max-width="50vw" class="mx-auto my-3">
    <v-container class="d-flex flex-column">
      <v-card-title>
        Измените данные своего аккаунта
      </v-card-title>
      <v-card-content>
        <v-form v-model="isValidating">
          <v-text-field v-model="curEmployee.lastName" :rules="[rules.required]" label="Фамилия" type="text"
            variant="outlined" counter="25" maxlength="25" clearable>
          </v-text-field>
          <v-text-field v-model="curEmployee.firstName" :rules="[rules.required]" label="Имя" type="text"
            variant="outlined" counter="20" maxlength="20" clearable>
          </v-text-field>
          <v-text-field v-model="curEmployee.patronymics" label="Отчество (при наличии)" type="text" variant="outlined"
            counter="20" maxlength="20" clearable>
          </v-text-field>
          <v-divider></v-divider>
          <v-text-field v-model="curEmployee.department" :rules="[rules.required]" label="Отдел" type="text" variant="outlined"
            counter="60" maxlength="60" clearable>
          </v-text-field>
          <v-text-field v-model="curEmployee.position" :rules="[rules.required]" label="Должность" type="text" variant="outlined"
            counter="60" maxlength="60" clearable>
          </v-text-field>
          <v-text-field v-model="curEmployee.timeCardNumber" :rules="[rules.required]" label="Табельный номер" type="number" variant="outlined"
            counter="11" maxlength="11" clearable>
          </v-text-field>
          <v-divider></v-divider>
          <v-text-field v-model="curEmployee.account.login" :rules="[rules.required]" label="Логин" type="login"
            variant="outlined" counter="15" maxlength="15" clearable>
          </v-text-field>
          <v-text-field v-model="curEmployee.account.password" :rules="[rules.required]" label="Пароль" type="password"
            variant="outlined" counter="20" maxlength="20" clearable>
          </v-text-field>
        </v-form>
      </v-card-content>
    </v-container>
    <v-card-actions class="pr-8 pb-8 d-flex justify-end">
      <v-btn @click="authorize" elevation="1">
        Изменить
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
import Employee from '@/models/Employee'

export default {
  name: 'EditAccount',
  data() {
    return {
      curEmployee: new Employee(),
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
      if (this.isValidating) {
        store.dispatch('employee/editOwnAccount', this.curEmployee)
        this.alertMessage = 'Данные изменены'
        this.alertExists = true
        this.curEmployee = null
        this.curEmployee = store.getters['employee/getEmployee']
        setTimeout(() => {
          this.alertExists = false
        }, 3000)
      }
    }
  },
  mounted() {
    this.curEmployee = store.getters['employee/getEmployee']
  },
  watch: {
    'curEmployee.patronymics'(newVal) {
      if (newVal === null) this.curEmployee.patronymics = ''
    }
  }
}
</script>
