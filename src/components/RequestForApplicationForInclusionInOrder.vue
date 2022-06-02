<template>
  <v-card tile max-width="80vw" class="mx-auto my-3">
    <v-col class="d-flex flex-column align-center">
      <v-card-title>
        ЗАЯВКА
      </v-card-title>
      <v-card-subtitle>
        о включении в приказ на допуск нового сотрудника
        к информационным системам Управления
      </v-card-subtitle>
      <v-card-content>
        <v-card-text class="pl-6 main-paragraph">
          Прошу допустить нового сотрудника с табельным номером,
          назначенного на должность в Управления Федерального казначейства по Республике Марий Эл к информационным
          системам АС Управления:
        </v-card-text>
        <v-checkbox label="АСФК" dense hide-details></v-checkbox>
        <v-checkbox label="ЭБ" dense hide-details></v-checkbox>
        <v-checkbox label="ЕИС" dense hide-details></v-checkbox>
        <v-checkbox label="ГАСУ" dense hide-details></v-checkbox>
        <v-checkbox label="СУФД" dense hide-details></v-checkbox>
        <v-checkbox label="СЭД" dense hide-details></v-checkbox>
        <v-checkbox label="ПИАО" dense hide-details></v-checkbox>
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
  name: 'RequestForApplicationForInclusionInOrder',
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
