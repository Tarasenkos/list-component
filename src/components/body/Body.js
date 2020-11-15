import { collapseOrSelectItem, getSubscribers} from "./body.functions.js"
import { getBody } from "./body.template.js"
import { Listener } from "../../common/listener.js"

export class Body extends Listener {
  static className = 'body_component'

  constructor(options) {
    super({
      listeners: ['click'],
      ...options
    })
    this.api = options.api
    this.toTable = this.api.table
    this.items = options.items
    this.root = options.root
    this.sortBy = ''
  }

  init() {

    const options = {
      items: this.items,
      toTable: this.toTable,
      root: this.root,
    }

    this.sortBy = options.sortBy
    const render = () => {this.render(options)}
    
    getSubscribers(this)
    render()
    this.addListeners()
  }

  render(options) {
    options.columns = this.api.columns
    getBody(options)
  }

  onClick() {
    collapseOrSelectItem(this)
  }

  destroy() {
    this.removeListeners()
  }
}
