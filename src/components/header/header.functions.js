
export function selectColumn(self) {
  
  removeClass('header__active')
  dispatchColumnSelection(self)
  addClass('header__active')

}

function dispatchColumnSelection(self) {
  const columnCaption = event.target.dataset.caption
  self.trig('sortByColumn', columnCaption )

}

function addClass(className) {
  event.target.classList.add(className)
}

function removeClass(className) {
  const children = event.target.parentElement.children
  for (let child of children) child.classList.remove(className)
}