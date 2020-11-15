import { sortList } from "../../common/data.functions.js"
import { createElement } from "../../common/functions.js"
import { Trigger } from "../../common/trigger.js"
import { Item } from "../Item/Item.js"

export class RenderComponents {
  constructor(options) {
    
    this.domid = options.domid
    this.items = options.items
    this.components = options.Components
    this.api = options.api

    this.render()
  }

  render() {
    const options = getOptions(this)
    this.components.forEach(createComponent(options))
  }
}

function createComponent(componentOptions) {
  
  return (Component) => {
    let options = Object.assign({}, componentOptions)
    options.root = createElement("div", Component.className)

    let component = new Component(options)
    componentOptions.domElement.appendChild(options.root)
    component.init()
  }
}

function getOptions(self) {

  return {
    domElement: document.querySelector(self.domid),
    trigger: new Trigger(),
    items: sortList(self.items.map(getItem)),
    api: self.api,
  }
}

function getItem(item, index) {
  return new Item(item, index)}

  