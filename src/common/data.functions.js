import { getObjKeys } from "./functions.js"

// Добавляем id к элементам списка
export function getInitialData(initialArray) {

  const arrayWithID = initialArray.map(addID)
  const initialData = sortArray(arrayWithID)

  return initialData
}

export function sortArray(list, column = getDefaultColumn(list)) {

  const sorted = list.sort(sortPattern(column))
  const result = addGroupKey(sorted, column)

  return result
}

export function getDefaultColumn(array) {

  const isLastName = getKeys(array).includes('lastName')
  const firstColumn = Object.keys(array[0].item)[0]

  return isLastName ? 'lastName' : firstColumn

}

//=============================================================

function sortPattern(column) {
  
  return function (prev, next) {
          const prevItem = prev.item[column]
          const nextItem = next.item[column]

          return prevItem !== nextItem 
                        ? prevItem > nextItem ? 1 : -1
                        : sortEqualColumns(prev.item, next.item)
  }
}

function sortEqualColumns(prev, next) {
  
  const columnNames = getObjKeys(prev)
  for (let column of columnNames) {

    if (prev[column] !== next[column])
      return prev[column] > next[column] ? 1 : -1
  }
}

function addGroupKey(array, columnToSortBy) {

  function addGroupLetter(arrayLine) {
    let columnValue = arrayLine.item[columnToSortBy]
    let firstLetter = columnValue[0]
    arrayLine.key = firstLetter && firstLetter.toUpperCase() || ' '
    return arrayLine
  }

  return array.map(addGroupLetter)
}

function getKeys(array) { return Object.keys(array[0].item) }

function addID(...args) { return { item: args[0], id: args[1] } }

