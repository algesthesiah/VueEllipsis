# vue2-ellipsis

> 单行溢出多行溢出组件，Single-line overflow multi-line overflow component

## Usage

``` html

<template>
  <div class="home">
    <h1>vue-ellipsis</h1>
    <div class="box">
      <VueEllipsis
        >这是一段单行截取的文字，这是一段单行截取的文字，这是一段单行截取的文字</VueEllipsis
      >
      <VueEllipsis :line="3" class="demo-2"
        >这是一段两行截取的这是一段两行截取aaaaaaaaa的a，这是一段两行截取的b，这是一段两行截取的c，这是一两行截取的a，这是一段两行截取的a，这是一段两行截取的a，这是一段两行截取的a，,</VueEllipsis
      >
      <VueEllipsis :line="3" class="demo-2"
        >这是一段单行截取的文字，这是一段单行截取的文字，这是一段单行截取的文字</VueEllipsis
      >
    </div>
  </div>
</template>

```
### DEMO
- [在线网址](https://coding.algesthesiahunter.top/VueEllipsis)
- [Online site](<https://algesthesiahunter.github.io/VueEllipsis>)
### NPM

``` bash
# use npm
npm i vue2-ellipsis -S

# use yarn
yarn add vue2-ellipsis
```

### Import Plugins

``` js
import VueEllipsis from 'vue2-ellipsis'
Vue.use(VueEllipsis)

```
