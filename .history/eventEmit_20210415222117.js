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

  emit(key, data) {
    if (!this.eventMap.has(key)) {
      throw Error('illegal event key ')
    }
    this.eventMap.get(key).forEach(event => {
      event(data)
    });
  }
  once(key, data) {
    if (this.eventMap.has(key)) {
      if (this.eventMap.get())
    }
  }
}