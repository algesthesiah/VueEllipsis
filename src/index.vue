<!--
 * @Description:精致的单行溢出多行溢出组件
 * @author: <https://github.com/algesthesiahunter>
 -->
<template>
  <div
    v-if="line"
    ref="lineDiv"
    class="_ellipsis-line-container"
    :style="{ height: height }"
  >
    {{ text }}
  </div>
  <div class="_ellipsis-container" v-else>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VueEllipsis',
  data() {
    return {
      height: '',
      text: '',
    }
  },
  props: {
    line: {},
  },
  methods: {
    GetLength(str) {
      return str.replace(/[\u0391-\uFFE5]/g, 'aa').length //先把中文替换成两个字节的英文，在计算长度
    },
    getTrueEnd(str, seeEnd) {
      str = str.split('')
      //获取包含站位1和2的end
      let res = 0,
        index = 0
      str.some((v, i) => {
        if (/[\u0391-\uFFE5]/.test(v)) {
          //站位2个
          index = index + 2
        } else {
          index = index + 1
        }
        res = i
        if (seeEnd <= index) {
          return true
        }
      })
      return res - 1
    },
  },
  mounted() {
    if (this.line) {
      let box = document.querySelector('._ellipsis-line-container')
      let lineHeight = window.getComputedStyle(box).lineHeight
      let fontSize = window.getComputedStyle(box).fontSize
      let width = window.getComputedStyle(box).width
      width = width.slice(0, width.length - 2)
      fontSize = fontSize.slice(0, fontSize.length - 2)
      if (lineHeight === 'normal') {
        this.height = `${((fontSize * 4) / 3) * this.line}px`
      } else {
        lineHeight = lineHeight.slice(0, lineHeight.length - 2)
        this.height = `${lineHeight * this.line}px`
      }
      let seeEnd = ((width * 2) / fontSize) * this.line
      let text = this.$slots.default[0].text
      if (seeEnd >= this.GetLength(text)) {
        this.text = text
        return
      }
      text = text.slice(0, this.getTrueEnd(text, seeEnd - 4))
      this.text = `${text}...`
    }
  },
}
</script>
<style lang="scss" scoped>
._ellipsis-container {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
._ellipsis-line-container {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
