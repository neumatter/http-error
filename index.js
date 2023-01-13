
import { STATUS_CODES } from 'http'

export default class HTTPError extends Error {
  constructor (...args) {
    let code = 500
    let message = null
    let props = {}
    let name = this.constructor.name
    const { length } = args
    let index = -1

    while (++index < length) {
      const type = typeof args[index]

      if (type === 'object' && args[index] instanceof Error) {
        code = args[index].statusCode || args[index].status || code
        message = args[index].message
      } else if (type === 'number' && STATUS_CODES[args[index]]) {
        code = args[index]
        name = STATUS_CODES[args[index]]
      } else if (type === 'string') {
        message = args[index]
      } else if (type === 'object') {
        props = args[index]
      }
    }

    super(message || STATUS_CODES[code])

    if (((code / 100) | 0) > 3 && name.indexOf('Error') === -1) {
      name += 'Error'
    }

    this.name = toUpperCaseCamel(name)
    this.statusCode = code

    const propKeys = Object.keys(props)
    let propIndex = -1

    while (++propIndex < propKeys.length) {
      const key = propKeys[propIndex]
      if (key !== 'status' && key !== 'statusCode' && key !== 'name' && key !== 'message') {
        this[key] = props[key]
      }
    }

    Error.captureStackTrace(this, this.constructor)
  }

  get status () {
    return this.statusCode
  }

  get stack () {
    return super.stack || this.message
  }

  toJSON () {
    return {
      name: this.name,
      statusCode: this.statusCode,
      message: this.message
    }
  }
}

/**
 *
 * @param {string} str
 * @returns {string}
 */
function toUpperCaseCamel (str) {
  const CAMEL_REGEX = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g
  const chunks = str
    .replace(/[\u{0080}-\u{FFFF}]/gu, '')
    .match(CAMEL_REGEX) || [str]

  const { length } = chunks
  let index = -1
  let res = ''

  while (++index < length) {
    res += (
      chunks[index].slice(0, 1).toUpperCase() +
      chunks[index].slice(1).toLowerCase()
    )
  }

  return res
}
