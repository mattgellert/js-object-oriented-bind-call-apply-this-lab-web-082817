function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, obj) {
  return fn.call(obj)
}

function setThisWithApply(fn, obj) {
  return fn.apply(obj)
}

function returnNewFunctionOf(fn, obj) {
  return fn.bind(obj)
}
