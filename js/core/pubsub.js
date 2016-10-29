import CORE from './core.js'

export default function pubsub () {
  const moduleData = CORE.getModuleData()

  function registerEvents (evts, mod) {
    if (mod) {
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
    var mod
    for (mod in moduleData) {
      if (moduleData.hasOwnProperty(mod)) {
        mod = moduleData[mod]
        if (mod.events && mod.events[evt.type]) {
          mod.events[evt.type](evt.data)
        }
      }
    }
  }

  function removeEvents (events, mod) {
    if (mod && (mod = moduleData[mod]) && mod.events) {
      events.map(event => delete mod.events[event])
    }
  }

  return {
    registerEvents,
    triggerEvent,
    removeEvents
  }
}
