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
}

export const counterStore = new Store()

