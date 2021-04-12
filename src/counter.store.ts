import { makeObservable, observable, action, computed, autorun } from "mobx"

class Store {
  constructor() {
    makeObservable(this, {
      count: observable,
      inc: action,
      dec: action,
      double: computed,
    })
  }

  count = 0

  inc = () => {
    this.count++
  }

  dec = () => {
    this.count--
  }

  get double() {
    return this.count * 2
  }
}

export const counterStore = new Store()

autorun(() => {
  console.log(counterStore.count)
})
