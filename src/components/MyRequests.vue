<template>
  <v-card tile max-width="95vw" class="mx-auto my-3">
    <v-card-title @click="fromMeActiveReqVisibility = !fromMeActiveReqVisibility">
      Активные исходящие
      <v-icon v-if="fromMeActiveReqVisibility">
        mdi-arrow-up
      </v-icon>
      <v-icon v-else-if="!fromMeActiveReqVisibility">
        mdi-arrow-down
      </v-icon>
    </v-card-title>
    <v-card-content>
      <v-table
        v-show="fromMeActiveReqVisibility"
        density="compact"
      >
        <thead>
          <tr>
            <th class="text-center">Код. №</th>
            <th class="text-center">Наименование</th>
            <th class="text-center">Табельный № нов. сотр.</th>
            <th class="text-center">Дата отправки</th>
            <th class="text-center">Статус</th>
            <th class="text-center">Срок исполнения</th>
            <th class="text-center">Адресат</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="fromMeActiveReq in fromMeActiveRequestList"
            :key="`from-me-active-req-${fromMeActiveReq.id}`"
          >
            <td>{{ fromMeActiveReq.id }}</td>
            <td>{{ fromMeActiveReq.title }}</td>
            <td>{{ fromMeActiveReq.timeCardNumber }}</td>
            <td>{{ fromMeActiveReq.sendingDate }}</td>
            <td>{{ fromMeActiveReq.state }}</td>
            <td>{{ fromMeActiveReq.deadline }}</td>
            <td>{{ fromMeActiveReq.addressee }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-content>
  </v-card>
  <v-card tile max-width="95vw" class="mx-auto my-3">
    <v-card-title @click="fromMeArchiveReqVisibility = !fromMeArchiveReqVisibility">
      Архивные исходящие
      <v-icon v-if="fromMeArchiveReqVisibility">
        mdi-arrow-up
      </v-icon>
      <v-icon v-else-if="!fromMeArchiveReqVisibility">
        mdi-arrow-down
      </v-icon>
    </v-card-title>
    <v-card-content>
      <v-table
        v-show="fromMeArchiveReqVisibility"
        density="compact"
      >
        <thead>
          <tr>
            <th class="text-center">Код. №</th>
            <th class="text-center">Наименование</th>
            <th class="text-center">Табельный № нов. сотр.</th>
            <th class="text-center">Дата отправки</th>
            <th class="text-center">Статус</th>
            <th class="text-center">Срок исполнения</th>
            <th class="text-center">Адресат</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="fromMeArchiveReq in fromMeArchiveRequestList"
            :key="`from-me-archive-req-${fromMeArchiveReq.id}`"
          >
            <td>{{ fromMeArchiveReq.id }}</td>
            <td>{{ fromMeArchiveReq.title }}</td>
            <td>{{ fromMeArchiveReq.timeCardNumber }}</td>
            <td>{{ fromMeArchiveReq.sendingDate }}</td>
            <td>{{ fromMeArchiveReq.state }}</td>
            <td>{{ fromMeArchiveReq.deadline }}</td>
            <td>{{ fromMeArchiveReq.addressee }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-content>
  </v-card>
  <v-divider></v-divider>
  <v-card tile max-width="95vw" class="mx-auto my-3">
    <v-card-title @click="forMeActiveReqVisibility = !forMeActiveReqVisibility">
      Активные входящие
      <v-icon v-if="forMeActiveReqVisibility">
        mdi-arrow-up
      </v-icon>
      <v-icon v-else-if="!forMeActiveReqVisibility">
        mdi-arrow-down
      </v-icon>
    </v-card-title>
    <v-card-content>
      <v-table
        v-show="forMeActiveReqVisibility"
        density="compact"
      >
        <thead>
          <tr>
            <th class="text-center">Код. №</th>
            <th class="text-center">Наименование</th>
            <th class="text-center">Табельный № нов. сотр.</th>
            <th class="text-center">Дата отправки</th>
            <th class="text-center">Статус</th>
            <th class="text-center">Срок исполнения</th>
            <th class="text-center">Отправитель</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="forMeActiveReq in forMeActiveRequestList"
            :key="`for-me-active-req-${forMeActiveReq.id}`"
            :class="curRequest.id === forMeActiveReq.id ? 'tr-for-me-active__selected' : 'tr-for-me-active__unselected'"
            @click="setCurRequest(forMeActiveReq)"
          >
            <td>{{ forMeActiveReq.id }}</td>
            <td>{{ forMeActiveReq.title }}</td>
            <td>{{ forMeActiveReq.timeCardNumber }}</td>
            <td>{{ forMeActiveReq.sendingDate }}</td>
            <td>{{ forMeActiveReq.state }}</td>
            <td>{{ forMeActiveReq.deadline }}</td>
            <td>{{ forMeActiveReq.requestor }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-content>
    <v-card-actions class="pl-8 pb-8">
      <v-btn
        v-show="curRequest.state === 'Отправлена'"
        @click="processRequest('В работе')"
        elevation="1"
        class="v-btn__take"
      >
        Принять
      </v-btn>
      <v-btn
        v-show="curRequest.state === 'В работе'"
        @click="processRequest('Завершена')"
        elevation="1"
        class="v-btn__complete"
      >
        Завершить
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card tile max-width="95vw" class="mx-auto my-3">
    <v-card-title @click="forMeArchiveReqVisibility = !forMeArchiveReqVisibility">
      Архив входящих
      <v-icon v-if="forMeArchiveReqVisibility">
        mdi-arrow-up
      </v-icon>
      <v-icon v-else-if="!forMeArchiveReqVisibility">
        mdi-arrow-down
      </v-icon>
    </v-card-title>
    <v-card-content>
      <v-table
        v-show="forMeArchiveReqVisibility"
        density="compact"
      >
        <thead>
          <tr>
            <th class="text-center">Код. №</th>
            <th class="text-center">Наименование</th>
            <th class="text-center">Табельный № нов. сотр.</th>
            <th class="text-center">Дата отправки</th>
            <th class="text-center">Статус</th>
            <th class="text-center">Срок исполнения</th>
            <th class="text-center">Отправитель</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="forMeArchiveReq in forMeArchiveRequestList"
            :key="`for-me-active-req-${forMeArchiveReq.id}`"
          >
            <td>{{ forMeArchiveReq.id }}</td>
            <td>{{ forMeArchiveReq.title }}</td>
            <td>{{ forMeArchiveReq.timeCardNumber }}</td>
            <td>{{ forMeArchiveReq.sendingDate }}</td>
            <td>{{ forMeArchiveReq.state }}</td>
            <td>{{ forMeArchiveReq.deadline }}</td>
            <td>{{ forMeArchiveReq.requestor }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-content>
  </v-card>
</template>

<script>
import store from '@/store'
import Request from '@/models/Request'

export default {
  name: 'MyRequests',
  data() {
    return {
      myAccount: null,
      curRequest: new Request(),
      fromMeActiveRequestList: [],
      fromMeArchiveRequestList: [],
      forMeActiveRequestList: [],
      forMeArchiveRequestList: [],
      fromMeActiveReqVisibility: true,
      fromMeArchiveReqVisibility: true,
      forMeActiveReqVisibility: true,
      forMeArchiveReqVisibility: true
    }
  },
  methods: {
    setCurRequest: function (request) {
      this.curRequest = request
    },
    processRequest: function (newState) {
      this.curRequest.state = newState
      store.dispatch('request/editRequest', this.curRequest)
      this.getAllRequests()
    },
    getAllRequests: function () {
      this.fromMeActiveRequestList = []
      this.fromMeArchiveRequestList = []
      this.forMeActiveRequestList = []
      this.forMeArchiveRequestList = []
      store.getters['request/getFromMeActiveRequestList'](this.myAccount.id).slice(0).forEach(el => {
        this.fromMeActiveRequestList.push(el)
      })
      store.getters['request/getFromMeArchiveRequestList'](this.myAccount.id).slice(0).forEach(el => {
        this.fromMeArchiveRequestList.push(el)
      })
      store.getters['request/getForMeActiveRequestList'](this.myAccount.id).slice(0).forEach(el => {
        this.forMeActiveRequestList.push(el)
      })
      store.getters['request/getForMeArchiveRequestList'](this.myAccount.id).slice(0).forEach(el => {
        this.forMeArchiveRequestList.push(el)
      })
    }
  },
  mounted() {
    this.myAccount = { ...store.getters['employee/getEmployee'] }
    this.getAllRequests()
  }
}
</script>

<style scoped>
.tr-for-me-active__selected {
  background-color: rgb(182, 230, 232);
}

.tr-for-me-active__unselected {
  background-color: white;
}

.v-btn__take {
  background-color: skyblue;
}

.v-btn__complete {
  background-color: aquamarine;
}
</style>

