import { getObjKeys } from "../../common/functions.js"

export class Item {
  constructor(initialItem, index) {
    this.item = initialItem
    this.id = index
    this.columns = getObjKeys(initialItem)
    this.sortColumn = getSortColumn(initialItem)

  }

  _getIndex() { return this.index }
  _getLetter() { return this.sortColumn[0].toUpperCase() }

  setSortColumn(arg) {return this.sortColumn = arg}

  getItem() { return this.item }
  getInfo() {
    return {
      item: this.getItem(),
      id: this._getIndex(),
      key: this._getLetter()
    }
  }

  getSortColumn() {
    return (this.item[this.sortColumn]
      + this.columns.map(column =>
        this.item[column])
        .join(''))
      .toLowerCase()
  }
}


function getSortColumn(array) {

  const isLastName = getObjKeys(array).includes('lastName')
  const firstColumn = getObjKeys(array)[0]

  return isLastName ? 'lastName' : firstColumn

}