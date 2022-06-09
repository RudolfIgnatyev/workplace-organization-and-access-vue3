<template>
  <v-card tile max-width="66vw" class="mx-auto ma-3">
    <v-col class="d-flex flex-column align-center">
      <v-card-title>
        ЗАЯВКА
      </v-card-title>
      <v-card-subtitle>
        на доступ в помещения Управления Федерального казначейства по Республике Марий Эл и созданию ключа ЭЦП
      </v-card-subtitle>
      <v-card-content>
        <v-card-text>
          <p>
            &nbsp;&nbsp;&nbsp;Прошу создать карту доступа для обеспечения доступа в помещения нового сотрудника
            <span>
              {{ curEmployee.lastName + ' ' + curEmployee.firstName + ' ' + curEmployee.patronymic }}
            </span>
            с табельным номером
          </p>
          <v-select v-model="selectedEmployeeId" :items="timeCardNumberList" @update:model-value="getAnotherEmployee"
            item-title="timeCardNumber" item-value="id" label="Табельный номер" variant="outlined" density="comfortable"
            return-object class="mt-4">
          </v-select>
          <p>
            , назначенного на должность
            <span>
              {{ curEmployee.position }}
            </span>
            в
            <span>
              {{ curEmployee.department }}
            </span>
            Управления Федерального казначейства по Республике Марий Эл, а также создать
            ключ электронно-цифровой подписи.
          </p>
          <p class="mt-2">
            Для начальника
            <span>
              {{ curChief.department }}
            </span>
            <v-select v-model="selectedChiefId" :items="chiefFullNameList" @update:model-value="getChief"
              item-title="fullName" item-value="id" label="ФИО начальника" variant="outlined" density="comfortable"
              return-object class="mt-4">
            </v-select>
          </p>
        </v-card-text>
      </v-card-content>
    </v-col>
    <v-card-actions class="pr-8 pb-8 d-flex justify-end">
      <v-btn @click="sendRequest" elevation="1">
        Отправить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import Employee from '@/models/Employee'
import Request from '@/models/Request'

export default {
  name: 'RequestForRoomAccess',
  data() {
    return {
      curEmployee: new Employee(),
      curChief: new Employee(),
      curRequest: new Request(),
      selectedEmployeeId: 0,
      selectedChiefId: 0,
      timeCardNumberList: [],
      chiefFullNameList: []
    }
  },
  methods: {
    getAnotherEmployee: function () {
      this.curEmployee = { ...store.getters['employee/getAnotherEmployee'](this.selectedEmployeeId) }
    },
    getChief: function () {
      this.curChief = { ...store.getters['employee/getAnotherEmployee'](this.selectedChiefId) }
    },
    sendRequest: function () {
      this.curRequest.title = 'Заявка на доступ в помещения Управления и создание ключа ЭЦП'
      this.curRequest.timeCardNumber = this.curEmployee.timeCardNumber
      this.curRequest.sendingDate = new Date().toLocaleDateString('ru')
      this.curRequest.state = 'Отправлена'
      this.curRequest.deadline = new Date()
      this.curRequest.deadline.setDate(this.curRequest.deadline.getDate() + 5)
      this.curRequest.deadline = this.curRequest.deadline.toLocaleDateString('ru')
      this.curRequest.addressee = this.curChief.lastName + ' ' + this.curChief.firstName + ' ' + this.curChief.patronymic
      this.curRequest.addresseeId = this.curChief.id
      this.curRequest.requestor = this.employee.lastName + ' ' + this.employee.firstName + ' ' + this.employee.patronymic
      this.curRequest.requestorId = this.employee.id
      store.dispatch('request/createRequest', this.curRequest)
      this.$router.push({ name: 'HomePage' })
    }
  },
  computed: {
    ...mapGetters({
      employee: 'employee/getEmployee'
    })
  },
  mounted() {
    const employeeList = store.getters['employee/getEmployeeList'].slice(0)
    const chiefList = store.getters['employee/getChiefList'].slice(0)
    for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i].id !== this.employee.id) {
        this.timeCardNumberList.push({
          id: employeeList[i].id,
          timeCardNumber: employeeList[i].timeCardNumber
        })
      }
    }
    for (let i = 0; i < chiefList.length; i++) {
      if (chiefList[i].id !== this.employee.id) {
        this.chiefFullNameList.push({
          id: chiefList[i].id,
          fullName: chiefList[i].lastName + ' ' + chiefList[i].firstName + ' ' + chiefList[i].patronymic
        })
      }
    }
  }
}
</script>

<style scoped>
p {
  text-align: justify;
}

span {
  text-decoration: underline;
}
</style>
