import { makeAutoObservable } from "mobx"

export class WithBooleanFlag {
  constructor(initialFlag = false) {
    makeAutoObservable(this)
    this.value = initialFlag
  }

  value = false

  setTrue = () => {
    this.value = true
  }

  setFalse = () => {
    this.value = false
  }

  toggle = () => {
    this.value = !this.value
  }
}
