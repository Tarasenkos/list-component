import { createElement } from "../../common/functions.js"
import { getInitialData } from '../../common/data.functions.js'
import { Trigger } from "../../common/trigger.js"

export class RenderComponents {
  constructor(options) {
    this.api = options.api
    this.items = options.items
    this.initialData = getInitialData(this.items)
    this.components = options.Components
    this.domElement = document.querySelector(options.domid)
    this.domid = options.domid

    this.render()
  }

  render() {
    this.components.forEach(createComponent(getOptions(this)))
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
    domElement: self.domElement,
    trigger: new Trigger(),
    items: self.initialData,
    api: self.api,
  }
}


