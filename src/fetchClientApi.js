require('es6-promise').polyfill()
require('whatwg-fetch')

import { apiPathPrefix } from '../common'

// @returns {function}
const api = method => (...args) => fetch(`${apiPathPrefix}/${ [method].concat(args).join('/') }`)

export const block = api('block')
export const reset = api('reset')
export const blockAll = api('blockAll')
export const resetAll = api('resetAll')
export const loadProfile = api('loadProfile')