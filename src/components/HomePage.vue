<template>
  <v-card
    tile
    max-width="80vw"
    class="mx-auto"
  >
    <v-card-content>
      <v-list tile>
        <v-list-subheader>
          Шаблоны заявок:
        </v-list-subheader>
        <v-list-item
          v-for="(item, i) in mainMenuList"
          :key="`main-menu-item-${i}`"
          :value="item"
          active-color="primary"
        >
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-content>
    <v-card-actions>
      <v-btn elevation="1">Мои заявки / Архив</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'HomePage',
  data: () => ({
    mainMenuList: [
      'Заявка на доступ в помещения Управления и создание ключа ЭЦП',
      'Заявка об обеспечении АРМ',
      'Заявка на доступ к ИР',
      'Заявка на обеспечение канцелярскими товарами и мебелью',
      'Заявка о включении в приказ на допуск к ИС',
      'Заявка на проведение инструктажей'
    ]
  })
}
</script>

<style scoped>
</style>
