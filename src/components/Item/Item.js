import { getObjKeys } from "../../common/functions.js"

export class Item {
  constructor(initialItem, index) {
    this.item = initialItem
    this.id = index
    this.columns = getObjKeys(initialItem)
    this.sortColumnName = getSortColumnName(initialItem)
    this.sortValue = ''

    this.setSortValue()
  }

  _getLetter() { return this.sortValue[0].toUpperCase() || ' '  }

  setSortColumnName(arg) {
    this.sortColumnName = arg
    return this.setSortValue()
  }

  getInfo() {
    return {
      item: this.item,
      id: this.id,
      key: this._getLetter()
    }
  }

  setSortValue() {

    const sortField = this.item[this.sortColumnName]
    const concatAllColumnValues = this.columns
      .filter(column => column !== this.sortColumnName)
      .map(column => this.item[column]).join('')

    this.sortValue = (sortField + concatAllColumnValues).toLowerCase()
  }
}

function getSortColumnName(object) {

  const isLastName = getObjKeys(object).includes('lastName')
  const firstColumnName = getObjKeys(object)[0]

  return isLastName ? 'lastName' : firstColumnName

}