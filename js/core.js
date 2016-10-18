var CORE = (function () {
    var moduleData = {}

    function _toString (anything) {
        return Object.prototype.toString.call(anything)
    }

    var debug = true

    function debug (on) {
        debug = on ? true : flase
    }

    function createModule (moduleId, creator) {
        var temp

        if (typeof moduleId === 'string' && typeof creator === 'function') {
            temp = creator(Sandbox.create(this, moduleId))
            if (temp && typeof temp.init === 'function' && temp.destroy && typeof temp.destroy === 'function') {
                temp = null
                moduleData[moduleId] = {
                    create: creator,
                    instance: null
                }
            } else {
                _log(1, 'Module' + moduleId + 'registration: failed: instance has no init or destroy functions')
            }
        } else {
            _log(1, 'Module' + _toString(moduleId) + 'registration failed: one or more args are of incorrect type')
        }
    }

    function start (moduleId) {
        var mod = moduleData[moduleId]

        if (mod) {
            mod.instance = mod.create(Sandbox.create(this, moduleId))
            mod.instance.init()
        }
    }

    function startAll () {
        var moduleId
        for (moduleId in moduleData) {
            if (moduleData.hasOwnProperty(moduleId)) {
                start(moduleId)
            }
        }
    }

    function stop (moduleId) {
        var data
        if (data = moduleData[moduleId] && data.instance) {
            data.instance.destroy()
            data.instance = null
        } else {
            _log(1, 'Stop module' + moduleId + 'failed: module does not exist or has not been started')
        }
    }

    function stopAll () {
        var moduleId
        for (moduleId in moduleData) {
            if (moduleData.hasOwnProperty(moduleId)) {
                stop(moduleId)
            }
        }
    }

    function registerEvents (events, mod) {
        // body...
    }

    return {
        debug: debug,
        createModule: createModule,
        start: start,
        startAll: startAll,
        stop: stop,
        stopAll: stopAll
    }

}())