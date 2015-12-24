const ANIMATION_START_EVENT = 'animationstart'
const ANIMATION_NAME = 'resizeanim'

const RESIZE_TRIGGERS_HTML = `
  <div class=\"expand-trigger\"><div></div></div>" + "<div class=\"contract-trigger\"></div>
`

const css = `
  @keyframes ${ANIMATION_NAME} { from { opacity: 0; } to { opacity: 0; } }
  .resize-triggers { animation: 1ms ${ANIMATION_NAME}; visibility: hidden; opacity: 0; }
  .resize-triggers, .resize-triggers > div, .contract-trigger:before {
    content: " "; display: block; position: absolute; top: 0; left: 0;
    height: 100%; width: 100%; overflow: hidden; }
  .resize-triggers > div { background: #eee; overflow: auto; }
  .contract-trigger:before { width: 200%; height: 200%; }
`

function createStyles() {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.appendChild(document.createTextNode(css))

  document.head.appendChild(style)
}

createStyles()

function resetTriggers(element) {
  const triggers = element.__resizeTriggers__
  const expand = triggers.firstElementChild
  const contract = triggers.lastElementChild
  const expandChild = expand.firstElementChild

  contract.scrollLeft = contract.scrollWidth
  contract.scrollTop = contract.scrollHeight

  expandChild.style.width = `${expand.offsetWidth + 1}px`
  expandChild.style.height = `${expand.offsetHeight + 1}px`

  expand.scrollLeft = expand.scrollWidth
  expand.scrollTop = expand.scrollHeight
}

function checkTriggers(element) {
  return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height
}

function scrollListener(event) {
  const element = this

  resetTriggers(this)

  if (this.__resizeRAF__) {
    window.cancelAnimationFrame(this.__resizeRAF__)
  }

  this.__resizeRAF__ = window.requestAnimationFrame(() => {
    if (checkTriggers(element)) {
      element.__resizeLast__.width = element.offsetWidth
      element.__resizeLast__.height = element.offsetHeight
      return element.__resizeListeners__.forEach(callback => callback.call(element, event))
    }
  })
}

function addResizeListener(element, callback) {
  if (!element.__resizeTriggers__) {
    if (getComputedStyle(element).position === 'static') {
      element.style.position = 'relative'
    }

    element.__resizeLast__ = {}
    element.__resizeListeners__ = []
    element.__resizeTriggers__ = document.createElement('div')
    element.__resizeTriggers__.className = 'resize-triggers'
    element.__resizeTriggers__.innerHTML = RESIZE_TRIGGERS_HTML
    element.appendChild(element.__resizeTriggers__)
    resetTriggers(element)
    element.addEventListener('scroll', scrollListener, true)
    element.__resizeTriggers__.addEventListener(ANIMATION_START_EVENT, event => {
      if (event.animationName === ANIMATION_NAME) {
        resetTriggers(element)
      }
    })
  }

  element.__resizeListeners__.push(callback)
}

function removeResizeListener(element, callback) {
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(callback), 1)

  if (!element.__resizeListeners__.length) {
    element.removeEventListener('scroll', scrollListener)
    element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__)
  }
}

function resizable(target) {
  target.prototype.addResizeListener = addResizeListener
  target.prototype.removeResizeListener = removeResizeListener

  return target
}

export default resizable
