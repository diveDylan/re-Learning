const { parse } = require('@babel/parser')
const babel = require("@babel/core");

module.exports = function(source) {

  console.log('parse', parse('class Example {}'))
  // babel.transform(source, {}, function(err, result) {
  //   if (err) console.log(err)
  //   else {
  //     console.log(result)
  //   }
  // } )
  return 'red'
}
