import * as changeCase from 'change-case'
import { titleCase } from 'title-case'
import { swapCase } from 'swap-case'
import { isLowerCase } from 'is-lower-case'
import { isUpperCase } from 'is-upper-case'
import { lowerCase, localeLowerCase } from 'lower-case'
import { lowerCaseFirst } from 'lower-case-first'
import { upperCase, localeUpperCase } from 'upper-case'
import { upperCaseFirst } from 'upper-case-first'
import { spongeCase } from 'sponge-case'

// Extract all methods matching *Case* from changeCase
const extractMethods = () => {
  const methodNames = []

  for (const methodName in changeCase) {
    if (typeof changeCase[methodName] === 'function' && methodName.includes('Case')) {
      methodNames.push(methodName)
    }
  }

  return methodNames
}

export default ({ app }, inject) => {
  extractMethods().forEach((methodName) => {
    inject(methodName, value => changeCase[methodName](value))
    inject('titleCase', value => titleCase(value))
    inject('swapCase', value => swapCase(value))
    inject('isLowerCase', value => isLowerCase(value))
    inject('isUpperCase', value => isUpperCase(value))
    inject('lowerCase', value => lowerCase(value))
    inject('localeLowerCase', (value, locale) => localeLowerCase(value, locale))
    inject('lowerCaseFirst', value => lowerCaseFirst(value))
    inject('upperCase', value => upperCase(value))
    inject('localeUpperCase', (value, locale) => localeUpperCase(value, locale))
    inject('upperCaseFirst', value => upperCaseFirst(value))
    inject('spongeCase', value => spongeCase(value))
  })
}
