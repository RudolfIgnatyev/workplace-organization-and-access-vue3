class Employee {
  constructor() {
    this.id = 0
    this.lastName = ''
    this.firstName = ''
    this.patronymics = ''
    this.department = ''
    this.position = ''
    this.timeCardNumber = ''
    this.account = {
      login: '',
      password: '',
      type: ''
    }
  }
}

export default Employee