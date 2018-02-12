export default class Gigasecond {
  _date: Date

  constructor(date: Date) {
    this._date = new Date(date)
    this._date.setSeconds(this._date.getSeconds() + Math.pow(10, 9))
  }

  date(): Date {
    return this._date
  }
}