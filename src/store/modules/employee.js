import Employee from '../../models/Employee'

// initial state
const state = () => ({
  currentEmployee: new Employee(),
  employeeList: [
    {
      id: 1,
      lastName: 'Иванов',
      firstName: 'Иван',
      patronymic: 'Иванович',
      department: 'Отдел информационных систем',
      position: 'Системный администратор',
      timeCardNumber: '12345678910',
      login: 'admin',
      password: 'admin',
      type: 'администратор'
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
  getChiefList: (state) => {
    return state.employeeList.filter(el => (el.position === 'начальник') || (el.position === 'Начальник'))
  },
  getEmployee: (state) => {
    return state.currentEmployee
  },
  getAnotherEmployee: (state) => (id) => {
    return state.employeeList.find(el => el.id === id)
  },
  getAuthStatus: (state) => {
    if (state.currentEmployee.id > 0) return state.loginStatus
    else return state.logoutStatus
  },
  getAnotherEmployeeWithIdenticalLogin: (state) => (employee) => {
    const foundEmployee = state.employeeList.find(el => (el.login === employee.login) && (el.id !== employee.id))
    if (foundEmployee) return foundEmployee
    return null
  }
}

// actions
const actions = {
  authorize({ commit, state }, account) {
    const registeredUser = state.employeeList.find(el => (el.login === account.login) && (el.password === account.password))
    if (registeredUser) commit('setEmployee', { registeredUser })
  },
  logout({ commit }) {
    commit('unsetEmployee')
  },
  createAccount({ commit, state }, employee) {
    const registeredUser = state.employeeList.find(el => el.login === employee.login)
    if (!registeredUser) {
      employee.id = state.employeeList[state.employeeList.length - 1].id + 1
      commit('pushEmployeeToEmployeeList', { employee })
    }
  },
  editAnotherAccount({ commit, state }, employee) {
    const userWithIdenticalLogin = state.employeeList.find(el => (el.login === employee.login) && (el.id !== employee.id))
    if (!userWithIdenticalLogin) {
      commit('changeEmployeeOfEmployeeList', { employee })
    }
  },
  editOwnAccount({ commit, state }, employee) {
    const userWithIdenticalLogin = state.employeeList.find(el => (el.login === employee.login) && (el.id !== employee.id))
    if (!userWithIdenticalLogin) {
      commit('setEmployee', { employee })
      commit('changeEmployeeOfEmployeeList', { employee })
    }
  }
}

// mutations
const mutations = {
  setEmployee(state, { registeredUser }) {
    state.currentEmployee = { ...registeredUser }
  },
  unsetEmployee(state) {
    state.currentEmployee = {
      id: 0,
      lastName: '',
      firstName: '',
      patronymic: '',
      department: '',
      position: '',
      timeCardNumber: '',
      login: '',
      password: '',
      type: 'пользователь'
    }
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
