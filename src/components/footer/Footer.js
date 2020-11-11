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

  }

  init() {
    this.render()
  }

  render() {
    getFooter(this.root)
    this.addListeners()
  }

  onClick() {
    dispatchSortingAction(this)
  }

  destroy() {
    this.removeListeners()
  }
}