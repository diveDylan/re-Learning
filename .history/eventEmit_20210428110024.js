class EvenetEmit {
  constructor() {
    this.eventMap = new Map()
  }
  off(key, fn) {
    if (this.eventMap.has(key)) {
      const events = this.eventMap.get(key)
      events.splice(events.findIndex(event => event === fn), 1)
    } else {
      console.error('not found fevent key')
    }
    
  }
  on(key, callback) {
    if (this.eventMap.has(key)) {
      this.eventMap.get(key).push(callback)
    } else {
      this.eventMap.set(key, [callback])
    }
    console.log(this.eventMap.get(key))
  }

  emit(key, ...rest) {
    if (!this.eventMap.has(key)) {
      throw Error('illegal event key ')
    }
    this.eventMap.get(key).forEach(event => {
      event(...rest)
    });
  }
  once(key, callback) {
    const handler = (...rest) => {
      this.off(key, callback)
      callback.call(null, ...rest)
    }
    this.on(key, handler)
  }
  remove(key) {
    this.eventMap.set(key, [])
  }
}