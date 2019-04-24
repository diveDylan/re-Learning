const logR = (x) => console.log(x)

const groupList = [
  { name: 'dylan', like: 'sea' },
  { name: 'nike', like: 'sport' },
  { name: 'caler', like: 'cook' },
  { name: 'rose', like: 'sea' },
]

logR(groupList.filter(x => x.like === 'sea'))

// only need the nameList
logR(groupList.filter(x => x.like === 'sea').map(x => x.name))

// create a search method
const searchLike = (arr, like) => arr.filter(x => x.like === like)
// it can be a db search

logR(searchLike(groupList, 'cook'))

// improve search
const searchByLike = (arr, like) => arr.filter(x => new RegExp(like, 'ig').test(x.like))

logR(searchByLike(groupList, 'SEa'))