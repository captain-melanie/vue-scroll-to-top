import vscroll from './ScrollToTop.vue'

const VueScrollToTop = {
  install (Vue, options) {
    Vue.component('v-scroll-to-top', vscroll)
  }
}

export default VueScrollToTop
