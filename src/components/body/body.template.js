import { getObjKeys } from "../../common/functions.js"

export function getBody(options) {
  options.root.innerHTML = bodyTemplate(options)
}

function bodyTemplate(options) {

  const { items,
    columns = false,
    toTable } = options

  const keys = getObjKeys(columns)
  
  let currentLetter = ''
  let prevLetter = ''
  let html = ''


  for (let i = 0; i < items.length; i++) {


    prevLetter = prevLetter || ''

    currentLetter = items[i].key

    if (currentLetter !== prevLetter) {

      html += getGroup(currentLetter, items, toTable)

      if (!items[i]) break
      if (currentLetter !== items[i].key) i--

    }
    prevLetter = currentLetter
  }

  return html
}

function getGroup(currentLetter, items, toTable) {
  let groupHTML = ''
  const caption = getCaptonHTML(currentLetter)

  for (let item of items) {
    if (currentLetter === item.key) {
      groupHTML += item.getHTML(toTable)
    }
  }

  return `<div data-type="collapsable">
            ${caption}
            ${groupHTML}
          </div>`
}

function getCaptonHTML(caption) {

  return `    
              <div class="caption" data-type="caption" data-caption=${caption}>
                ${caption}
              </div>`
}