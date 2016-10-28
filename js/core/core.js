import jQuery from "jquery";


const CORE = {
  moduleData: {},
  registerModule: function registerModule (moduleID, creator) {
    // debugger // 1
    this.moduleData[moduleID] = {
      create: creator,
      instance: null
    }
  },
  start: function start (moduleID) {
    // debugger // 2
    var module = this.moduleData[moduleID];
    // module.instance = module.create(Sandbox.create(this, moduleID));
    module.instance = module.create();
    module.instance.init();
  },
  start_all: function start_all () {
    var moduleID
    for (moduleID in this.moduleData) {
      if (this.moduleData.hasOwnProperty(moduleID)) {
        this.start(moduleID)
      }
    }
  },
  stop: function stop (moduleID) {
    var module = this.moduleData[moduleId]
    module.instance.destroy();
    module.instance = null;
  },
  stop_all: function stop_all () {
    var moduleID;
    for (moduleID in this.moduleData) {
      if (this.moduleData.hasOwnProperty(moduleID)) {
        this.stop(moduleID)
      }
    }
  },
  getModuleData: function getModuleData() {
    return this.moduleData
  },
  is_arr: function is_arr (arr) {
    return jQuery.isArray(arr);
  },
  is_obj: function is_obj (obj) {
    return jQuery.isPlainObject(obj);
  }
}


export default CORE