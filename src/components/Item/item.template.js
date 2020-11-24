export function htmlToTable(element) {

  return `<div id="item" class="item" data-type="item" data-id=${element.id}>
          ${element.columnNames}
          </div>`

}

export function htmlInLine(element) {

  return `<div id="item" class="item item__flex" data-type="item" data-id=${element.id}>
          ${element.columnNames}
          </div>`

}

export function columnsHtml(self, toTable) {

  const columnNames = self.columnNames
  const sortColumnName = self.sortColumnName
  
  return columnNames.map(column => {

    if (!toTable) {
      return column === sortColumnName
        ? `<b>${self.item[column]}</b>`
        : `${self.item[column]}`
    }

    return column === sortColumnName
      ? `<div class="item__element"><b>${self.item[column]}</b></div>`
      : `<div class="item__element">${self.item[column]}</div>`

  }).join(' ')
}