export function sortList(list, sortColumnName) {

  !sortColumnName && (sortColumnName = list[0].sortColumnName)
  
  list.map(item => item.setSortColumnName(sortColumnName))
  
  return list.sort(sortItems)
}

function sortItems(next, prev) {

  const nextItem = next.item[next.sortColumnName]
  const prevItem = prev.item[prev.sortColumnName]
  
  return nextItem !== prevItem
      ? nextItem > prevItem ? 1:-1
      : next.sortValue > prev.sortValue ? 1: -1
  }