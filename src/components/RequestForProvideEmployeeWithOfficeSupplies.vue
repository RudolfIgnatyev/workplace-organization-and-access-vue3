<template>
  <v-card tile max-width="80vw" class="mx-auto my-3">
    <v-col class="d-flex flex-column align-center">
      <v-card-title>
        ЗАЯВКА
      </v-card-title>
      <v-card-subtitle>
        на обеспечение сотрудника канцелярскими товарами и мебелью
      </v-card-subtitle>
      <v-card-content>
        <v-card-text class="pl-6 main-paragraph">
          Прошу обеспечить нового сотрудника с табельным номером,
          назначенного на должность в Управления Федерального казначейства по Республике Марий Эл набором канцелярских предметов, а также мебелью:
        </v-card-text>
        <v-checkbox label="Стол" dense hide-details></v-checkbox>
        <v-checkbox label="Офисное кресло" dense hide-details></v-checkbox>
        <v-checkbox label="Тумба" dense hide-details></v-checkbox>
        <v-card-text class="main-paragraph">
          Начальник
        </v-card-text>
      </v-card-content>
    </v-col>
    <v-card-actions class="d-flex justify-end">
      <v-btn elevation="1">
        Отправить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'RequestForProvideEmployeeWithOfficeSupplies',
  data() {
    return {
      //
    }
  }
}
</script>

<style scoped>
.main-paragraph {
  text-align: justify;
}
</style>
