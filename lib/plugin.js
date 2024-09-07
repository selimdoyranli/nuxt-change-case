import * as changeCase from 'change-case-all'

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

//** Custom methods */

const localeCapitalCase = (value, locale) => {
  // Split the input string into words
  const words = value.split(/[\s._-]+/);

  // Capitalize each word using the specified locale
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toLocaleUpperCase(locale) + word.slice(1).toLocaleLowerCase(locale);
  });

  // Join the words back together
  return capitalizedWords.join(' ');
}

export default ({ app }, inject) => {
  const localeMethods = ['localeUpperCase', 'localeLowerCase']

  extractMethods().forEach((methodName) => {
    if (localeMethods.includes(methodName)) {
      inject(methodName, (value, locale) => changeCase[methodName](value, locale))
    } else {
      inject(methodName, value => changeCase[methodName](value))
    }
  })

  inject('localeCapitalCase', (value, locale) => localeCapitalCase(value, locale))
}

