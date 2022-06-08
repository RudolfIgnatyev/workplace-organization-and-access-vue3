import { createStore, createLogger } from 'vuex'
import employee from './modules/employee'
import request  from './modules/request'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    employee,
    request
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
