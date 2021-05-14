class LogPlugin {
  constructor(options) {
    this.options = options
  }
  apply(complier) {
    let options = this.options
    //https://webpack.docschina.org/contribute/writing-a-plugin/
    // 输出资源到output之前执行，可以添加一个log记录
    complier.hooks.emit.tap('LogPlugin', function (compilation) {
      console.log(complier.webpack.sources.RawSource )
      // RawSource is one of the "sources" classes that should be used
      // to represent asset sources in compilation
      const {RawSource } =  complier.webpack.sources
      function handlerAsset(assetContent) {
        let str = ``
        if (options.username) {
          str += ` * @author: ${options.username} \n`
        }
        if (options.mail) {
          str += ` * @mail: ${options.mail} \n`
        }
        str += ` * @update: ${new Date()}\n`
        assetContent.unshift(`/*\n${str} */\n`)
      }
      Object.keys(compilation.assets).forEach(file => {
        compilation.updateAsset(file , asset => {
          // if (asset._source) {
          //   // asset._source._children contains a content array
          //   let contentArr = asset._source._children
          //   handlerAsset(contentArr)
            return asset
          // }

        })
      })
    })
  }
}
module.exports = LogPlugin
