import { RenderComponents } from '../main/RenderComponents.js'
import { Header } from '../header/Header.js'
import { Body } from '../body/Body.js'
import { Footer } from '../footer/Footer.js'


export class List {
  constructor(domid, items = [], { components, ...api }) {

    const Components = [] 
      components.Header && Components.push(Header)
      components.Body && Components.push(Body)
      components.Footer && Components.push(Footer)
    
    const options = { 
      domid,
      items,
      Components,
      api
    }

    new RenderComponents(options)
   }
}