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
          @click="goToRoute(item.componentName)"
          active-color="primary"
        >
          <v-list-item-title v-text="item.text"></v-list-item-title>
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
      {
        text: 'Заявка на доступ в помещения Управления и создание ключа ЭЦП',
        componentName: 'RequestForRoomAccess'
      },
      {
        text: 'Заявка об обеспечении АРМ',
        componentName: 'RequestForProvisionOfAW'
      },
      {
        text: 'Заявка на доступ к ИР',
        componentName: 'RequestForEmployeeAccessToIR'
      },
      {
        text: 'Заявка на обеспечение канцелярскими товарами и мебелью',
        componentName: 'RequestForProvideEmployeeWithOfficeSupplies'
      },
      {
        text: 'Заявка о включении в приказ на допуск к ИС',
        componentName: 'RequestForApplicationForInclusionInOrder'
      },
      {
        text: 'Заявка на проведение инструктажей',
        componentName: 'HomePage'
      }
    ]
  }),
  methods: {
    goToRoute: function (componentName) {
      this.$router.push({ name: componentName })
    }
  }
}
</script>

<style scoped>
</style>
