<template>
  <v-card tile max-width="66vw" class="mx-auto">
    <v-card-content>
      <v-list tile>
        <v-list-subheader :disabled="!employeeList">
          Выберите одного из сотрудника для изменения его аккаунта:
        </v-list-subheader>
        <v-list-item
          v-for="(item, i) in employeeList"
          v-show="item.id !== myAccount.id"
          :key="`account-item-${i}`"
          @click="goToRoute('EditAccount', item.id)"
          active-color="primary"
        >
          <v-list-item-title v-text="`${item.lastName} ${item.firstName} ${item.patronymic}`"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-content>
    <v-card-actions>
      <v-card-subtitle>
        Если сотрудник не имеет аккаунта, то перейдите
      </v-card-subtitle>
      <v-btn @click="goToRoute('SignupEmployee', null)" elevation="1">
        К регистрации
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import store from '@/store'

export default {
  name: 'ManageAccounts',
  data() {
    return {
      myAccount: null,
      employeeList: null
    }
  },
  methods: {
    goToRoute: function (componentName, param) {
      if (param) this.$router.push({ name: componentName, params: { id: param } })
      else this.$router.push({ name: componentName })
    }
  },
  mounted() {
    this.myAccount = { ...store.getters['employee/getEmployee'] }
    this.employeeList = store.getters['employee/getEmployeeList'].slice(0)
  }
}
</script>
