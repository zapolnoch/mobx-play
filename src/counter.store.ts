import { makeAutoObservable, runInAction } from "mobx"
const delay = (ms: number) => new Promise((_) => setTimeout(_, ms))

class Store {
  constructor() {
    makeAutoObservable(this)
  }

  count = 0

  inc = async () => {
    await delay(10)
    runInAction(() => {
      this.count++
      this.count++
      this.count++
    })
  }

  dec = async () => {
    await delay(10)
    this.count--
    this.count--
    this.count--
  }
}

const counterStore = new Store()
export { counterStore }
