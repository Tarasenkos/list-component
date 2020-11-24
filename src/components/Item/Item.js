import { getObjKeys } from "../../common/functions.js"
import { getItemHTML, getSortColumnName } from "./item.functions.js"


export class Item {
  constructor(initialItem, index) {
    this.item = initialItem
    this.id = index
    this.columnNames = getObjKeys(initialItem)
    this.sortColumnName = getSortColumnName(initialItem)

    this.setSortValue()
    this.getLetter()
  }

  getLetter() {
    const firstSimbol = this.item[this.sortColumnName][0]
    this.key = firstSimbol && firstSimbol.toUpperCase() || ' '
  }

  setSortColumnName(arg) {
    this.sortColumnName = arg
    this.setSortValue()
    this.getLetter()
  }

  setSortValue() {

    const sortColumnValue = this.item[this.sortColumnName]
    const concatAllColumnValues = this.columnNames
      .filter(column => column !== this.sortColumnName)
      .map(column => this.item[column]).join('')

    this.sortValue = (sortColumnValue + concatAllColumnValues).toLowerCase()
  }

  getHTML(toTable) {return getItemHTML(this, toTable )}
}