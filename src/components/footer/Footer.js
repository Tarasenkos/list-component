import { Listener } from "../../common/listener.js"
import { dispatchSortingAction } from "./footer.functionns.js"
import { getFooter } from "./footer.template.js"

export class Footer extends Listener {
  static className = 'footer_component'

  constructor(options) {
    super({
      listeners: ['click'],
      ...options
    })
    this.root = options.root
    this.toTable = options.api.table

  }

  init() {
    this.render()
    this.addListeners()
  }

  render() {
    getFooter(this)
  }

  onClick() {
    dispatchSortingAction(this)
  }

  destroy() {
    this.removeListeners()
  }
}