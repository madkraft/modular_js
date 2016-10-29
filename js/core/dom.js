import jQuery from 'jquery'

export default function DOM () {
  function query (selector, context) {
    let ret = {}
    let jqEls

    if (context && context.find) {
      jqEls = context.find(selector)
    } else {
      jqEls = jQuery(selector)
    }

    ret = jqEls.get()
    ret.length = jqEls.length
    ret.query = sel => this.query(sel, jqEls)
    return ret
  }

  function bind (element, evt, fn) {
    if (element && evt) {
      if (typeof evt === 'function') {
        fn = evt
        evt = 'click'
      }
      jQuery(element).bind(evt, fn)
    } else {
      // log wrong arguments
    }
  }

  function unbind (element, evt, fn) {
    if (element && evt) {
      if (typeof evt === 'function') {
        fn = evt
        evt = 'click'
      }
      jQuery(element).unbind(evt, fn)
    } else {
      // log wrong arguments
    }
  }

  function create (el) {
    return document.createElement(el)
  }

  function applyAttrs (el, attrs) {
    jQuery(el).attr(attrs)
  }

  function createElement (el, config) {
    let text
    el = create(el)
    if (config) {
      if (config.children) {
        config.children.map(child => {
          el.appendChild(child)
        })
        delete config.children
      } else if (config.text) {
        text = document.createTextNode(config.text)
        delete config.text
        el.appendChild(text)
      }
      applyAttrs(el, config)
    }
    return el
  }

  return {
    query,
    bind,
    unbind,
    create,
    applyAttrs,
    createElement
  }
}
