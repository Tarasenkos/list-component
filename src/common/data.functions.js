export function sortArray(list, column) {

  if (!column) { column = list[0].sortColumnName}
  
  list.map(item => item.setSortColumnName(column))
  
  const sorted = list.sort(sortItems)
  const result = addGroupKey(sorted, column)
  
  return result
}

function sortItems(next, prev) {

  const nextItem = next.item[next.sortColumnName]
  const prevItem = prev.item[prev.sortColumnName]
  
  return nextItem !== prevItem
      ? nextItem > prevItem ? 1:-1
      : next.sortValue > prev.sortValue ? 1: -1
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