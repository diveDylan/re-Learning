module.exports = function(source) {
  console.log(source)
  console.log('context', this.context)
  console.log('resource', this.resource)
  console.log('this.resourceQuery', this.resourceQuery)
  console.log('target', this.target)
  
  return 'red'
}