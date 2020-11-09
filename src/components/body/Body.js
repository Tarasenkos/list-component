import { getSubscribers, selectItem } from "./body.functions.js"
import { bodyTemplate } from "./body.template.js"
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

    const options = {}
      options.items = this.items
      options.sortBy = getDefaultColumn(options.items)
      options.toTable = this.toTable
    
    this.sortBy = options.sortBy
    const render = () => {this.render(options)}
    
    
    getSubscribers(this)
    render()
  }

  render(options) {
    options.columns = this.api.columns
    this.removeListeners(this.root)
    this.root.innerHTML = bodyTemplate(options)
    this.addListeners()
  }

  onClick() {

    const caption = event.target.dataset.type === 'caption'
    const parent = event.target.parentElement
    
    caption && parent.classList.toggle('collapse') || selectItem(this)
  }

  destroy() {
    this.removeListeners()
  }
}
