class Request {
  constructor() {
    this.id = 0
    this.title = ''
    this.timeCardNumber = ''
    this.sendingDate = new Date().toDateString
    // this.sendingDate = null
    this.state = ''
    this.deadline = (new Date().getDate() + 5).toDateString
    // this.deadline = null
    this.addressee = ''
    this.addresseeId = 0
    this.requestor = ''
    this.requestorId = 0
  }
}

export default Request
