import chalk from 'chalk'
import { randomExclusive } from './utils'
import { logSel } from './state/selectors'

const { underline } = chalk

// Random colors
const colors = ['yellow', 'magenta', 'cyan', 'white']
const randomColor = message => chalk[colors[randomExclusive(colors.length)]](message)
const random = message => message.split(' ').map(word => randomColor(word)).join(' ')

// Log message if enabled
function log (output) {
  if (logSel()) {
    console.log(output)
  }
}

// Log messages
export const profileLog = message => log(chalk`{blue veggie:} {green ${message}}`)
export const serverLog = message => log(chalk`{blue veg:} {green ${message}}`)
export const clientLog = message => log(chalk`{blue veg-connect:} {green ${message}}`)

// Error messages
export const profileError = message => log(chalk`{blue veggie:} {red ${message}}`)
export const serverError = message => log(chalk`{blue veg:} {red ${message}}`)
export const clientError = message => log(chalk`{blue veg-connect:} {red ${message}}`)

// Special log message for running server
export const wwwLog = message => log(underline(random(message)))
