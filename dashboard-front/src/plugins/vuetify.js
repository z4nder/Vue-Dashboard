import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'
import colors from 'vuetify/es5/util/colors'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt'
  },
  icons: {
    iconfont: 'md'
  },
  theme: {
    themes: {
      light: {
        primary: colors.deepOrange.darken1,
        accent: colors.indigo.darken1,
        info: colors.blue,
        error: colors.red.accent4,
        sucess: colors.teal.lighten1,
        warning: colors.purple.darken1
      }
    }
  }
})
