
const log = (e) => console.log(e)

const logConfig = {
  'setTimeout': 'setTimeout event',
  'promise': 'promise event',
  'animation': 'request animation event',
  'async': 'async event'
}

const logSetTimeout = () => log(logConfig.setTimeout)
const logPromise = () =>  log(logConfig.promise)
const logAsync=  () => log(logConfig.async)
// const log = (e) => console.log(e)
log('event start')
setTimeout(() => {
  log('setTimeout event 1')
  setTimeout(() => {
    log('setTimeout event 2')
  }, 0)
  asy('set asycn 2', 'async event 2')
}, 0);
new Promise(resolve => {
  log('set promise')
  resolve()
}).then(() => {
  log('promise evnet')
  setTimeout(() => {
    log('setTimeout event promise')
  }, 0)
  asy('set async promise', 'promise async')
})
async function asy(e = 'set asycn 1', f = 'async event') {
  log(e)
  await 1
  log(f)
}
asy()
// }

// event()