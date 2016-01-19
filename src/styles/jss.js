import {create} from 'jss'
import jss from 'jss'

import extend from 'jss-extend'
import nested from 'jss-nested'
import camelCase from 'jss-camel-case'
import px from 'jss-px'
import vendorPrefixer from 'jss-vendor-prefixer'

import useSheet from 'react-jss'

jss.use(extend())
jss.use(nested())
jss.use(camelCase())
jss.use(px())
jss.use(vendorPrefixer())

export default {
  jss,
  useSheet,
}
