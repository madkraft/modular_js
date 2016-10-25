import dom from './core/dom.js'
import core from './core/core.js'

export default function Sandbox () {
  const DOM = dom()

  function create (core, module_selector) {

    var CONTAINER = DOM.query('#' + module_selector);

    function find (selector) {
      return CONTAINER.query(selector);
    }

    function addEvent (element, evt, fn) {
      DOM.bind(element, evt, fn);
    }

    function removeEvent (element, evt, fn) {
      DOM.unbind(element, evt, fn);
    }

    function notify (evt) {
      // debugger
      if(core.is_obj(evt) && evt.type) {
        core.triggerEvent(evt);
      }
    }

    function listen (evts) {
      if (core.is_obj(evts)) {
        core.registerEvents(evts, module_selector);
      }
    }

    function ignore (evts) {
      if (core.is_arr(evts)) {
        core.removeEvents(evts, module_selector);
      }
    }

    function create_element (el, config) {
      var i, text;
      el = DOM.create(el);
      if (config) {
        if (config.children && core.is_arr(config.children)) {
          i = 0;
          while (config.children[i]) {
            el.appendChild(config.children[i]);
            i++;
          }
          delete config.children;
        } else if (config.text) {
          text = document.createTextNode(config.text);
          delete config.text;
          el.appendChild(text);
        }
        DOM.apply_attrs(el, config);
      }
      return el;
    }

    return {
      find,
      addEvent,
      removeEvent,
      notify,
      listen,
      ignore,
      create_element
    }

  }

  return {
    create
  }
}
