class EvenetEmit {
  constructor() {
    this.eventMap = new Map()
  }

  on(key, callback) {
    if (this.eventMap.has(key)) {
      this.eventMap.set(
        key,
        this.eventMap.get(key).push(callback)
      )
    } else {
      this.eventMap.set(key, [callback])
    }
  }
}