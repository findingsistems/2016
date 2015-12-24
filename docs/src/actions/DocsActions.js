import 'whatwg-fetch'
import md from 'markdown-it'
import mdAnchor from 'markdown-it-anchor'
import mdTraverse from 'markdown-it-traverse'
import slug from 'slug'
import DocsActionTypes from './../constants/DocsActionTypes'

const target = `${window.location.origin}${window.location.pathname}`.slice(0, -1)

export function load() {
  return async (dispatch) => {
    const response = await fetch(`${target}/docs/index.md`)
    const body = await response.text()

    dispatch({
      type: DocsActionTypes.LOAD,
      tokens: mdTraverse(md().parse(body)),
    })
  }
}

export function loadDoc(doc) {
  return async (dispatch) => {
    const response = await fetch(`${target}${doc}`)
    const body = await response.text()

    const parser = md().use(mdAnchor, {level: 0, slugify: slug})

    dispatch({
      type: DocsActionTypes.LOAD_DOC,
      tokens: mdTraverse(parser.parse(body)),
    })
  }
}
