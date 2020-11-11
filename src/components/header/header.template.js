import { getObjKeys } from "../../common/functions.js"


export function getHeader(self) {
  self.root.innerHTML = headerTemplate(self.columns)
}


function headerTemplate(columns) {
  const html = columnsHTML(columns)
  return `<div class="header">${html}</div>`
}


function columnsHTML(columns) {
  return getObjKeys(columns)
        .map(getColumnHTML(columns))
        .join('')
}

function getColumnHTML(columns) {
  return function (key) {
    return `<div class="header__content" data-caption=${key}>
          ${columns[key].toUpperCase()}
          </div>`}
}