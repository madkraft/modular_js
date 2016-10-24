import Sandbox from './sandbox.js'

export default function CORE () {
  var moduleData = {}
  var debug = true

  function debug (on) {
    debug = on ? true : false
  }

  function create_module (moduleID, creator) {
    var temp;
    if (typeof moduleID === 'string' && typeof creator === 'function') {
      temp = creator(Sandbox.create(this, moduleID));
      if (temp.init && temp.destroy && typeof temp.init === 'function' && typeof temp.destroy === 'function') {
        moduleData[moduleID] = {
          create : creator,
          instance : null
        };
        temp = null;
      } else {
        this.log(1, "Module \"" + moduleId + "\" Registration: FAILED: instance has no init or destroy functions");
      }
    } else {
      this.log(1, "Module \"" + moduleId +  "\" Registration: FAILED: one or more arguments are of incorrect type" );

    }
  }

  function start (moduleID) {
    var mod = moduleData[moduleID];
    if (mod) {
      mod.instance = mod.create(Sandbox.create(this, moduleID));
      mod.instance.init();
    }
  }

  function start_all () {
    var moduleID;
    for (moduleID in moduleData) {
      if (moduleData.hasOwnProperty(moduleID)) {
        this.start(moduleID);
      }
    }
  }

  function stop (moduleID) {
    var data;
    if (data = moduleData[moduleId] && data.instance) {
      data.instance.destroy();
      data.instance = null;
    } else {
      this.log(1, "Stop Module '" + moduleID + "': FAILED : module does not exist or has not been started");
    }
  }

  function stop_all () {
    var moduleID;
    for (moduleID in moduleData) {
      if (moduleData.hasOwnProperty(moduleID)) {
        this.stop(moduleID);
      }
    }
  }

  function registerEvents (evts, mod) {
    if (this.is_obj(evts) && mod) {
      if (moduleData[mod]) {
        moduleData[mod].events = evts;
      } else {
        this.log(1, "");
      }
    } else {
      this.log(1, "");
    }
  }

  function triggerEvent (evt) {
    var mod;
    for (mod in moduleData) {
      if (moduleData.hasOwnProperty(mod)){
        mod = moduleData[mod];
        if (mod.events && mod.events[evt.type]) {
          mod.events[evt.type](evt.data);
        }
      }
    }
  }

  function removeEvents (evts, mod) {
    var i = 0, evt;
    if (this.is_arr(evts) && mod && (mod = moduleData[mod]) && mod.events) {
      for ( ; evt = evts[i++] ; ) {
        delete mod.events[evt];
      }
    }
  }

  function log (severity, message) {
    if (debug) {
      console[ (severity === 1) ? 'log' : (severity === 2) ? 'warn' : 'error'](message);
    } else {
      // send to the server
    }
  }

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

  function is_arr (arr) {
    return jQuery.isArray(arr);
  }

  function is_obj (obj) {
    return jQuery.isPlainObject(obj);
  }

  return {
    debug,
    create_module,
    start,
    start_all,
    stop,
    stop_all,
    registerEvents,
    triggerEvent,
    removeEvents,
    log,
    dom: {
      query,
      bind,
      unbind,
      create,
      apply_attrs
    },
    is_arr,
    is_obj
  }

}
