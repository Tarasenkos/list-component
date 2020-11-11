import { getObjKeys } from "../../common/functions.js"

export function getBody(options) {
  options.root.innerHTML = bodyTemplate(options)

}


function bodyTemplate(options) {

  const { items,
    columns = false,
    sortBy = 'lastName',
    toTable } = options

  const keys = getObjKeys(columns)

  let prevLetter = ''
  let html = ''


  for (let i = 0; i < items.length; i++) {


    prevLetter = prevLetter || ''

    let currentLetter = items[i].key

    if (currentLetter !== prevLetter) {

      html = html + getGroup(currentLetter, items, i, keys, sortBy, toTable)

      if (!items[i]) break
      if (currentLetter !== items[i].key) i--

    }
    prevLetter = currentLetter
  }

  return html
}

function getGroup(currentLetter, items, i, keys, sortBy, toTable) {
  let itemHTML = ''


  const caption = getCaptonHTML(currentLetter)

  while (currentLetter === items[i].key) {

    itemHTML = itemHTML + getItemHTML(items[i], keys, sortBy, toTable)
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



function getItemHTML(item, keys, sortBy, toTable) {

  const element = getElement(item, keys, sortBy, toTable)

  return (!toTable)
    ? `<div id="item" class="item" data-type="item" data-id=${item.id}>
                  ${element}
              </div>`

    : `<div id="item" class="item item__flex" data-type="item" data-id=${item.id}>
                ${element}
              </div>`
  
  
}

function getElement(item, keys, sortBy, toTable) {
  return keys.map(key => {

    if (!toTable) {
      return key === sortBy
        ? `<b>${item.item[key]}</b>`
        : `${item.item[key]}`
    }

    return key === sortBy
      ? `<div class="item__element"><b>${item.item[key]}</b></div>`
      : `<div class="item__element">${item.item[key]}</div>`

  }).join(' ')
}

