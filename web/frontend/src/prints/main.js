import Vue from 'vue'
import VueSwal from '@common/VueSwal'
import { BootstrapVue } from 'bootstrap-vue'
import Sticky from 'vue-sticky-directive'
import VueMoment from 'vue-moment'
import '@common/filters'
import setupSentry from '@lib/sentry'
import { initTheme } from '@main/colors'

initTheme()
setupSentry(Vue)
Vue.use(BootstrapVue)
Vue.use(VueSwal)
Vue.use(Sticky)
Vue.use(VueMoment)

import PrintsPage from './PrintsPage.vue'
import PrintPage from './PrintPage.vue'
import UploadPrintPage from './UploadPrintPage.vue'

if (document.getElementById('prints-mount')) {
  new Vue({
    components: { PrintsPage }
  }).$mount('#prints-mount')
}

if (document.getElementById('print-mount')) {
  new Vue({
    components: { PrintPage }
  }).$mount('#print-mount')
}

if (document.getElementById('upload-print-mount')) {
  new Vue({
    components: { UploadPrintPage }
  }).$mount('#upload-print-mount')
}
