export function createElement(tag, className = '') {
  const element = document.createElement(tag)

  if (className) {element.classList.add(className)}
  return element
}


export function getObjKeys(obj) {return Object.keys(obj)}
