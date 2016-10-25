export default function DOM () {
  function query (selector, context) {
    var ret = {}, that = this, jqEls, i = 0;

    if (context && context.find) {
      jqEls = context.find(selector);
    } else {
      jqEls = jQuery(selector);
    }

    ret = jqEls.get();
    ret.length = jqEls.length;
    ret.query = function (sel) {
      return that.query(sel, jqEls);
    }
    return ret;
  }

  function bind (element, evt, fn) {
    if (element && evt) {
      if (typeof evt === 'function') {
        fn = evt;
        evt = 'click';
      }
      jQuery(element).bind(evt, fn);
    } else {
      // log wrong arguments
    }
  }

  function unbind (element, evt, fn) {
    if (element && evt) {
      if (typeof evt === 'function') {
        fn = evt;
        evt = 'click';
      }
      jQuery(element).unbind(evt, fn);
    } else {
      // log wrong arguments
    }
  }

  function create (el) {
    return document.createElement(el);
  }

  function apply_attrs (el, attrs) {
    jQuery(el).attr(attrs);
  }


  return {
    query,
    bind,
    unbind,
    create,
    apply_attrs
  }

}
