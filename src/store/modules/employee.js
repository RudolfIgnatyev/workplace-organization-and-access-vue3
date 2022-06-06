import Employee from '../../models/Employee'

// initial state
const state = () => ({
  currentEmployee: new Employee(),
  employeeList: [
    {
      id: 1,
      lastName: 'Иванов',
      firstName: 'Иван',
      patronymics: 'Иванович',
      department: 'Отдел информационных систем',
      position: 'системный администратор',
      timeCardNumber: '12345678910',
      account: {
        login: 'admin',
        password: 'admin',
        type: 'администратор'
      }
    }
  ],
  logoutStatus: 0,
  loginStatus: 1
})

// getters
const getters = {
  getEmployeeList: (state) => {
    return state.employeeList
  },
  getEmployee: (state) => {
    return state.currentEmployee
  },
  getAuthStatus: (state) => {
    if (state.currentEmployee.id > 0) return state.loginStatus
    else return state.logoutStatus
  },
}

// actions
const actions = {
  authorize({ commit, state }, account) {
    const employee = state.employeeList.find(el => el.account.login === account.login && el.account.password === account.password)
    if (employee) commit('setEmployee', { employee })
  },
  logout({ commit, state }) {
    if (state.currentEmployee.id > 0) {
      const employee = {
        id: 0,
        lastName: '',
        firstName: '',
        patronymics: '',
        department: '',
        position: '',
        timeCardNumber: '',
        account: {
          login: '',
          password: '',
          type: ''
        }
      }
      commit('unsetEmployee', { employee })
    }
  },
  registerUser({ commit, state }, employee) {
    const registeredUser = state.employeeList.find(el => el.id === employee.id)
    if (!registeredUser) {
      employee.id = state.employeeList[state.employeeList.length - 1].id + 1
      commit('pushEmployeeToEmployeeList', { employee })
    }
  },
  editAnotherAccount({ commit, state }, employee) {
    const registeredUser = state.employeeList.find(el => el.id === employee.id)
    if (!registeredUser) commit('changeEmployeeOfEmployeeList', { employee })
  },
  editOwnAccount({ commit }, employee) {
    commit('setEmployee', { employee })
  }
}

// mutations
const mutations = {
  setEmployee(state, { employee }) {
    state.currentEmployee = employee
  },
  unsetEmployee(state, { employee }) {
    state.currentEmployee = employee
  },
  pushEmployeeToEmployeeList(state, { employee }) {
    state.employeeList.push(employee)
  },
  changeEmployeeOfEmployeeList(state, { employee }) {
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
