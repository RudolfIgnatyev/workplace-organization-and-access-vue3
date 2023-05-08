<template>
  <v-card tile max-width="66vw" class="mx-auto">
    <v-container class="d-flex flex-column">
      <v-card-title v-if="parseInt($route.params.id) === myAccount.id">
        Измените данные собственного аккаунта
      </v-card-title>
      <v-card-title v-else>
        Измените данные выбранного аккаунта
      </v-card-title>
      <v-card-content>
        <v-form v-model="isValidating">
          <v-text-field
            v-model="curEmployee.lastName"
            :rules="[rules.required]"
            label="Фамилия"
            type="text"
            variant="outlined"
            counter="25"
            maxlength="25"
          ></v-text-field>
          <v-text-field
            v-model="curEmployee.firstName"
            :rules="[rules.required]"
            label="Имя"
            type="text"
            variant="outlined"
            counter="20"
            maxlength="20"
          ></v-text-field>
          <v-text-field
            v-model="curEmployee.patronymic"
            label="Отчество (при наличии)"
            type="text"
            variant="outlined"
            counter="20"
            maxlength="20"
          ></v-text-field>
          <v-divider></v-divider>
          <v-text-field
            v-model="curEmployee.department"
            :rules="[rules.required]"
            label="Отдел"
            type="text"
            variant="outlined"
            counter="60"
            maxlength="60"
          ></v-text-field>
          <v-text-field
            v-model="curEmployee.position"
            :rules="[rules.required]"
            label="Должность"
            type="text"
            variant="outlined"
            counter="60"
            maxlength="60"
          ></v-text-field>
          <v-text-field
            v-model="curEmployee.timeCardNumber"
            :rules="[rules.required]"
            label="Табельный номер"
            type="number"
            variant="outlined"
            counter="11"
            maxlength="11"
          ></v-text-field>
          <v-divider></v-divider>
          <v-text-field
            v-model="curEmployee.login"
            :rules="[rules.required]"
            label="Логин"
            type="login"
            variant="outlined"
            counter="15"
            maxlength="15"
          ></v-text-field>
          <v-text-field
            v-model="curEmployee.password"
            :rules="[rules.required]"
            label="Пароль"
            type="password"
            variant="outlined"
            counter="20"
            maxlength="20"
          ></v-text-field>
          <v-radio-group
            v-if="parseInt($route.params.id) !== myAccount.id" v-model="curEmployee.type"
          >
            <v-radio
              :value="accountTypeList[0]"
              label="Тип аккаунта: администратор"
            ></v-radio>
            <v-radio
              :value="accountTypeList[1]"
              label="Тип аккаунта: пользователь"
            ></v-radio>
          </v-radio-group>
        </v-form>
      </v-card-content>
    </v-container>
    <v-card-actions class="pr-8 pb-8 d-flex justify-end">
      <v-btn
        @click="authorize"
        elevation="1"
      >
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
      myAccount: new Employee(),
      curEmployee: new Employee(),
      alertMessage: '',
      isValidating: false,
      alertExists: false,
      rules: {
        required: value => !!value || 'Обязательное поле'
      },
      accountTypeList: [
        'администратор', 'пользователь'
      ]
    }
  },
  methods: {
    authorize: function () {
      if (this.isValidating) {
        if (store.getters['employee/getAnotherEmployeeWithIdenticalLogin'](this.curEmployee)) {
          this.showAlertMessage('Введённый логин уже занят! Отмена изменения')
          return
        }
        if (parseInt(this.$route.params.id) === this.myAccount.id) {
          store.dispatch('employee/editOwnAccount', this.curEmployee)
          this.$router.push({ name: 'HomePage' })
        } else {
          store.dispatch('employee/editAnotherAccount', this.curEmployee)
          this.$router.push({ name: 'HomePage' })
        }
      }
    },
    showAlertMessage: function (message) {
      this.alertMessage = message
      this.alertExists = true
      setTimeout(() => {
        this.alertExists = false
      }, 3000)
    }
  },
  mounted() {
    this.myAccount = { ...store.getters['employee/getEmployee'] }
    if (parseInt(this.$route.params.id) === this.myAccount.id) {
      this.curEmployee = { ...this.myAccount }
    } else {
      this.curEmployee = { ...store.getters['employee/getAnotherEmployee'](parseInt(this.$route.params.id)) }
    }
  }
}
</script>
