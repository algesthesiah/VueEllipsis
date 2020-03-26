import VueEllipsis from './index.vue'

VueEllipsis.install = function(Vue) {
  Vue.component(VueEllipsis.name, VueEllipsis)
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueEllipsis)
}

export default VueEllipsis
