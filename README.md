# nuxt-change-case

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> change-case implementation as nuxt module.

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-change-case` dependency to your project

```bash
yarn add nuxt-change-case # or npm install nuxt-change-case
```

2. Add `nuxt-change-case` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-change-case'
  ]
}
```

## Usage

```js
<h1> {{ $pascalCase('hello world') }} </h1>
// HelloWorld
```

```js
<h1> {{ $lowerCase('Çocuk Adam Bak Buraya') }} </h1>
// çocuk adam bak buraya
```

```js
<h1> {{ $localeUpperCase('şemsi paşa pasajında sesi büzüşesiceler', 'tr') </h1>
// ŞEMSİ PAŞA PASAJINDA SESİ BÜZÜŞESİCELER
```

```js
<h1> {{ $localeUpperCase('KENAN MEMEDOV! SOVIETSKA ARMY', 'az') </h1>
// kenan memedov! sovietska army
```

```js
// In asyncData
asyncData ({ $paramCase }) {
  console.log($paramCase('nuxt change case'))
}
// nuxt-change-case
```

Please check full documentation. Same as **[change-case](https://github.com/blakeembrey/change-case)**.

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) RadKod <info@radkod.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-change-case/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-change-case

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-change-case.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-change-case

[github-actions-ci-src]: https://github.com/RadKod/nuxt-change-case.git/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/RadKod/nuxt-change-case.git/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/https://github.com/RadKod/nuxt-change-case.git.svg
[codecov-href]: https://codecov.io/gh/https://github.com/RadKod/nuxt-change-case.git

[license-src]: https://img.shields.io/npm/l/nuxt-change-case.svg
[license-href]: https://npmjs.com/package/nuxt-change-case
