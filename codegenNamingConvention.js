module.exports = function (name) {
  if (name.endsWith('InlineFragment')) {
    return name
  } else if (name.endsWith('Fragment')) {
    return dropSuffix(name, 'Fragment')
  }
  return name
}

function dropSuffix(str, suffix) {
  if (str.endsWith(suffix)) {
    return str.slice(0, -suffix.length)
  }
  return str
}
