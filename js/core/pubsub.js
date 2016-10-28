import CORE from './core.js'

export default function pubsub () {
  function registerEvents (evts, mod) {
    // debugger // 3
    var moduleData = CORE.getModuleData()
    if (CORE.is_obj(evts) && mod) {
      if (moduleData[mod]) {
        moduleData[mod].events = evts
      } else {
        console.log('test 1')
      }
    } else {
      console.log('test 2')
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
    if (CORE.is_arr(evts) && mod && (mod = moduleData[mod]) && mod.events) {
      for ( ; evt = evts[i++] ; ) {
        delete mod.events[evt];
      }
    }
  }


  return {
    registerEvents,
    triggerEvent,
    removeEvents
  }

}
