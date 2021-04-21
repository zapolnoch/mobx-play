import { makeAutoObservable } from "mobx"

class Store {
  constructor() {
    makeAutoObservable(this)
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

