import { Listener } from "../../common/listener.js"
import { getHeader } from "./header.template.js"
import { selectColumn } from './header.functions.js'

export class Header extends Listener {
  static className = 'header_component'
  constructor(options) {
    super({
      listeners: ['click'],
      ...options
    })

    this.root = options.root
    this.columns = options.api.columns
  }

  init() {
    this.render()
  }

  render() {
    getHeader(this)
    this.addListeners()
  }

  onClick() {
    selectColumn(this)
  }

  destroy() {
    this.removeListeners()
  }
}
