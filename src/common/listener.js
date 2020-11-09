import { addListener, removeListener } from './listener.functions.js'


export class Listener {
  constructor(options) {
    this.listeners = options.listeners
    this.trigger = options.trigger
  }

  // Делаем обертку/фасад для упрощения синтаксиса
  trig(event, arg) {
    return this.trigger.trig(event, arg)
  }

  on(event, fn) {
    return this.trigger.subscribe(event, fn)
  }

  addListeners() {
    this.listeners.forEach(addListener(this))
  }

  removeListeners() {
    this.listeners.forEach(removeListener(this))
  }
}