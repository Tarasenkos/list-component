export class Trigger {
  constructor() {
    this.events = {}

  }

// тригерим событие 
  trig(eventName = '', arg = null){
    if (!this.events[eventName]) {return false}
    this.events[eventName].forEach(fn => fn(arg))

  }

  // подписка на событие 
  subscribe(eventName, fn) {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(fn)
  }
}