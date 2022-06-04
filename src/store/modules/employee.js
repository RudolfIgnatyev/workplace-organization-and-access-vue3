import Employee from '../../models/Employee'

// initial state
const state = () => ({
  currentEmployee: new Employee(),
  employeeList: []
})

// getters
const getters = {
  getEmployeeList: (state) => {
    return state.employeeList
  },
  getEmployee: (state) => {
    return state.currentEmployee
  }
}

// actions
const actions = {
  authorize({ commit, state }, account) {
    const employee = state.employeeList.find(el => el.account.login === account.login && el.account.password === account.password)
    commit('setEmployee', employee)
  },
  registerUser({ commit, state }, employee) {
    const registeredUser = state.employeeList.find(el => el.id === employee.id)
    if (!registeredUser) {
      employee.id = state.employeeList[state.employeeList.length - 1].id + 1
      commit('pushEmployeeToEmployeeList', employee)
    }
  },
  editEmployeeData({ commit, state }, employee) {
    const registeredUser = state.employeeList.find(el => el.id === employee.id)
    if (!registeredUser) commit('changeEmployeeOfEmployeeList', employee)
  }
}

// mutations
const mutations = {
  setEmployee(state, employee) {
    state.currentEmployee = employee
  },
  pushEmployeeToEmployeeList(state, employee) {
    state.employeeList.push(employee)
  },
  changeEmployeeOfEmployeeList(state, employee) {
    const index = state.employeeList.findIndex(el => el.id === employee.id)
    if (state.employeeList[index]) state.employeeList[index] = employee
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
