export function dispatchSortingAction(self) {
  const actionType = event.target.dataset.type
  self.trig(actionType, event.target) 

}