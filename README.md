# react-simple-context-i18n

> React components for i18n based on the Context API

[![NPM](https://img.shields.io/npm/v/react-simple-context-i18n.svg)](https://www.npmjs.com/package/react-simple-context-i18n) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg)](https://www.npmjs.com/package/eslint-config-airbnb)

## Introduction

Minimalistic approach to introducing i18n to your application.

Internally, it uses the [React Context API](https://reactjs.org/blog/2018/03/29/react-v-16-3.html).
Utilizes [`create-react-context`](https://github.com/jamiebuilds/create-react-context) and [`react-lifecycles-compat`](https://github.com/reactjs/react-lifecycles-compat) in order to support older versions of React as well.

## Install

```bash
npm install --save react-simple-context-i18n
```
or
```bash
yarn add react-simple-context-i18n
```

## API

### Message
The Message component is a consumer for the Translation Provider which can be used for text translation.
It consists of one prop, `id`, and performs a lookup in the `translations` object by using the `translator`.

The `Message` component renders the translations as strings by default.
For older versions of React (< 16), the translations are wrapped in a `span` element.

### TranslationProvider
Preview of the props for the `TranslationProvider` and the default values:
![alt TranslationProvider-api-example](https://pbs.twimg.com/media/DdpOjbKV4AAqAsZ.png)

Preview of the desired format for the `translations` prop:
![alt translations-prop-example](https://pbs.twimg.com/media/DdpKwy-V0AAnGFd.png)

The `translator` prop provides an option to do a custom translation lookup
(to be used if the `translations` prop is not in the desired format).
It is invoked with the following parameters:

`translator({ language, translations, id })` 

Note: if you are using a version of React < 16, make sure that the structure of the children of the provider are supported by that particular version.
The example above, having multiple elements as direct children of the provider, will not work for older versions (array of elements as children is supported only in React v16). 

## Example

Navigate to the [`/example`](https://github.com/cvetanov/react-simple-context-i18n/tree/master/example) folder for an example of showing a translated text and updating the language.

## License

MIT
