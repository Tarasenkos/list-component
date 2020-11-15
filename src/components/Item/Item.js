import { getObjKeys } from "../../common/functions.js"

export class Item {
  constructor(initialItem, index) {
    this.item = initialItem
    this.id = index
    this.columns = getObjKeys(initialItem)
    this.sortColumnName = getSortColumnName(initialItem)
    
    this.setSortValue()
    this.getLetter()
    console.log(this.getHTML())
  }

  getLetter() { 
    const firstSimbol = this.item[this.sortColumnName][0]
    this.key = firstSimbol && firstSimbol.toUpperCase() || ' '}

  setSortColumnName(arg) {
    this.sortColumnName = arg
    this.setSortValue()
    this.getLetter()
  }

  setSortValue() {

    const sortColumnValue = this.item[this.sortColumnName]
    const concatAllColumnValues = this.columns
      .filter(column => column !== this.sortColumnName)
      .map(column => this.item[column]).join('')

    this.sortValue = (sortColumnValue + concatAllColumnValues).toLowerCase()
  }

  getHTML(toTable){

    const keys = this.columns
    const sortBy = this.sortColumnName
  
  return keys.map(key => {

    if (!toTable) {
      return key === sortBy
        ? `<b>${this.item[key]}</b>`
        : `${this.item[key]}`
    }

    return key === sortBy
      ? `<div class="item__element"><b>${this.item[key]}</b></div>`
      : `<div class="item__element">${this.item[key]}</div>`

  }).join(' ')
  }
}

function getSortColumnName(object) {

  const isLastName = getObjKeys(object).includes('lastName')
  const firstColumnName = getObjKeys(object)[0]

  return isLastName ? 'lastName' : firstColumnName

}