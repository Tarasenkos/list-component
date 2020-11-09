export function addListener(self) {

  return function (listener) {
    const eventName = getEventName(listener)
    if (!self[eventName]) {
      throw Error(
        `Функция для слушателя "${listener}" не определена`
      )
    }

    self[eventName] = self[eventName].bind(self)
    self.root.addEventListener(listener, self[eventName])
  }
}

export function removeListener(self) {
  return function (listener) {
    const eventName = getEventName(listener) // формируем привычное название события
    self.root.removeEventListener(listener, self[eventName])
  }

}



// ======================================================================
// Вспомогательные функции для формирования привычного названия события
// ======================================================================

// cLiCK => Click
function UpperCase(string) {
  return string[0].toUpperCase() + string.toLowerCase().slice(1)
}

// Click => onClick
function getEventName(name) {
  return 'on' + UpperCase(name)
}
