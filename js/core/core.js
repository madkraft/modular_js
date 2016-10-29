const CORE = {
  moduleData: {},
  registerModule: function registerModule (moduleID, creator) {
    this.moduleData[moduleID] = {
      create: creator,
      instance: null
    }
  },
  start: function start (moduleID) {
    let module = this.moduleData[moduleID]
    module.instance = module.create()
    module.instance.init()
  },
  startAll: function startAll () {
    let moduleID
    for (moduleID in this.moduleData) {
      if (this.moduleData.hasOwnProperty(moduleID)) {
        this.start(moduleID)
      }
    }
  },
  stop: function stop (moduleId) {
    let module = this.moduleData[moduleId]
    module.instance.destroy()
    module.instance = null
  },
  stopAll: function stopAll () {
    let moduleID
    for (moduleID in this.moduleData) {
      if (this.moduleData.hasOwnProperty(moduleID)) {
        this.stop(moduleID)
      }
    }
  },
  getModuleData: function getModuleData () {
    return this.moduleData
  }
}

export default CORE
