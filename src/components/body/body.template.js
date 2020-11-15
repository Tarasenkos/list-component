import { getObjKeys } from "../../common/functions.js"

export function getBody(options) {
  options.root.innerHTML = bodyTemplate(options)

}


function bodyTemplate(options) {

  const { items,
    columns = false,
    toTable } = options

  const keys = getObjKeys(columns)

  let prevLetter = ''
  let html = ''


  for (let i = 0; i < items.length; i++) {


    prevLetter = prevLetter || ''

    let currentLetter = items[i].key

    if (currentLetter !== prevLetter) {

      html = html + getGroup(currentLetter, items, i, toTable)

      if (!items[i]) break
      if (currentLetter !== items[i].key) i--

    }
    prevLetter = currentLetter
  }

  return html
}

function getGroup(currentLetter, items, i, toTable) {
  let itemHTML = ''


  const caption = getCaptonHTML(currentLetter)

  while (currentLetter === items[i].key) {

    itemHTML = itemHTML + getItemHTML(items[i], toTable)
    i++
    if (!items[i]) break

  }

  return `<div data-type="collapsable">
            ${caption}
            ${itemHTML}
          </div>`
}

function getCaptonHTML(caption) {

  return `    
              <div class="caption" data-type="caption" data-caption=${caption}>
                ${caption}
              </div>`
}



function getItemHTML(item, toTable) {

  const element = item.getHTML(toTable)

  return (!toTable)
    ? `<div id="item" class="item" data-type="item" data-id=${item.id}>
                  ${element}
              </div>`

    : `<div id="item" class="item item__flex" data-type="item" data-id=${item.id}>
                ${element}
              </div>`
}