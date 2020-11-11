import { sortArray } from '../../common/data.functions.js';

export function getSubscribers(self) {

  const callback = self.api.callback

  self.on('itemSelected', (arg) => callback(arg))
  self.on('collapse', () => collExpAll(self.root, 'collapse'))
  self.on('expand', () => collExpAll(self.root))
  self.on('sortByColumn', (column) => sortByColumn(column, self))
  self.on('reverse', (target) => reverse(target, self))
  self.on('table', (target) => toggleTable(target, self))

}

export function collapseOrSelectItem(self) {

  const isCollapsable = event.target.dataset.type === 'caption'
  const parent = event.target.parentElement
  
  isCollapsable ? parent.classList.toggle('collapse') 
                : selectItem(self)


}

function selectItem(self) {

    const target = event.target
    const current = self.current || ''
    const closest = target.closest(".item")

    if (closest && closest.dataset.type === 'item') {

      let id = +closest.dataset.id

      const object = findItemByid(self.items, id)

      self.trig('itemSelected', object)

      !current || current.classList.remove('active')

      target.classList.add('active')

      self.current = target
    }
}


function findItemByid(array, id) {
  try {
    return array.find(item => item.id === id).item
  } catch {
    console.log('Что-то пошло не так, наверно такого элемента нет')
  }
}

function toggleTable(target, self) {
    
  self.toTable = !self.toTable
  self.render(self)
  self.toTable  ? target.innerHTML = 'III'
                : target.innerHTML = 'I &nbsp; &nbsp; I &nbsp; &nbsp; I'
}

function sortByColumn(column, self) {
  self.sortBy = column
  self.items = sortArray(self.items, self.sortBy)
  self.render(self)
}

function reverse(target, self) {
  self.items = self.items.reverse()
  self.render(self)
  target.innerHTML === '⇑'  ? target.innerHTML = '⇓' 
                            : target.innerHTML = '⇑'
  
}

function collExpAll(root, collapse) {

  const nodes = root.querySelectorAll('[data-type="collapsable"]')

  collapse  ? nodes.forEach(node => node.classList.add('collapse'))
            : nodes.forEach(node => node.classList.remove('collapse'))

  }

