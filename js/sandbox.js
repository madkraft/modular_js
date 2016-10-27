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



    return {
      find,
      addEvent,
      removeEvent,
      notify,
      listen,
      ignore,
    }

  }

  return {
    create
  }
}
