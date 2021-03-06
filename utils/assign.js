const assign = function(object, ...args) {
  let target = Object.assign({}, object)
  for (const arg of args) {
    target = _assign(target, arg)
  }
  return target
}

const _assign = function(object, source) {
  const target = Object.assign({}, object)
  Object.keys(target).forEach(key => {
    const val = source[key]
    if (_isObject(val)) {
      target[key] = _assign(target[key], val)
    } else {
      val && (target[key] = val)
    }
  })
  return target
}
const _isObject = function(val) {
  return val !== null && typeof val === 'object' && !Array.isArray(val)
}
module.exports = {
  utilAssign: assign
}
