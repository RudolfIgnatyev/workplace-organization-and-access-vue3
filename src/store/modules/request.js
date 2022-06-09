// initial state
const state = () => ({
  requestList: []
})

// getters
const getters = {
  getFromMeActiveRequestList: (state) => (requestorId) => {
    return state.requestList.filter(el =>
      ((el.state === 'Отправлена') || (el.state === 'В работе'))
      && (el.requestorId === requestorId)
    )
  },
  getForMeActiveRequestList: (state) => (addresseeId) => {
    return state.requestList.filter(el =>
      ((el.state === 'Отправлена') || (el.state === 'В работе'))
      && (el.addresseeId === addresseeId)
    )
  },
  getForMeArchiveRequestList: (state) => (addresseeId) => {
    return state.requestList.filter(el =>
      (el.state === 'Завершена') && (el.addresseeId === addresseeId)
    )
  }
}

// actions
const actions = {
  createRequest({ commit, state }, request) {
    if (state.requestList.length > 0) {
      request.id = state.requestList[state.requestList.length - 1].id + 1
    } else {
      request.id = 1
    }
    commit('pushRequestToRequestList', { request })
  },
  editRequest({ commit, state }, request) {
    const foundRequest = state.requestList.find(el => el.id === request.id)
    if (foundRequest) {
      commit('changeRequestOfRequestList', { request })
    }
  }
}

// mutations
const mutations = {
  pushRequestToRequestList(state, { request }) {
    state.requestList.push(request)
  },
  changeRequestOfRequestList(state, { request }) {
    const index = state.requestList.findIndex(el => el.id === request.id)
    if (state.requestList[index]) state.requestList[index] = request
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
