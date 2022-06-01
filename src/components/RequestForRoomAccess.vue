<template>
  <v-card tile max-width="80vw" class="mx-auto ma-3">
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
            Прошу создать карту доступа для обеспечения доступа в помещения нового сотрудника с табельным номером,
            назначенного на должность в Управления Федерального казначейства по Республике Марий Эл, а также создать
            ключ электронно-цифровой подписи.
          </p>
          <p>
            Начальник
          </p>
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
  name: 'RequestForRoomAccess',
  data() {
    return {
      //
    }
  }
}
</script>

<style scoped>
p {
  text-align: justify;
}
</style>
