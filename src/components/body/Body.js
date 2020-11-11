import { collapseOrSelectItem, getSubscribers} from "./body.functions.js"
import { getBody } from "./body.template.js"
import { Listener } from "../../common/listener.js"
import { getDefaultColumn } from "../../common/data.functions.js"


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
      sortBy: getDefaultColumn(this.items),
      toTable: this.toTable,
      root: this.root,
    }
    
    this.sortBy = options.sortBy
    const render = () => {this.render(options)}
    
    
    getSubscribers(this)
    render()
  }

  render(options) {
    options.columns = this.api.columns
    this.removeListeners()
    getBody(options)
    this.addListeners()
  }

  onClick() {
    collapseOrSelectItem(this)
  }

  destroy() {
    this.removeListeners()
  }
}
