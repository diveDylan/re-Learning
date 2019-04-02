// 数字格式化

const strReplace = String.prototype.replace
function formatNumber(val) {
  if(Number(val) == 'NaN') return
  return strReplace.call(val, /\B(?=(\d{3})+(?!\d)))/g, ',')
}
