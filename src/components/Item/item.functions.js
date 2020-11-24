import { getObjKeys } from '../../common/functions.js';
import { htmlInLine, htmlToTable, columnsHtml } from './item.template.js';

export function getItemHTML(self, toTable) {

  const element = {}
  element.columnNames = columnsHtml(self, toTable),
  element.id = self.id

  return (toTable)
    ? htmlInLine(element)
    : htmlToTable(element)
}

export function getSortColumnName(object) {

  const isLastName = getObjKeys(object).includes('lastName')
  const firstColumnName = getObjKeys(object)[0]

  return isLastName ? 'lastName' : firstColumnName
}
