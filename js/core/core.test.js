import test from 'ava'
import CORE from './core'

test('REGISTER MODULE: moduleData should start empty', t => {
  const modules = CORE.getModuleData()
  t.is(Object.keys(modules).length, 0)
})

test('REGISTER MODULE: registered module should be added to moduleData', t => {
  function testFun () {
    function init () {
      return 'starting test 1'
    }

    return {init}
  }

  function secondFun () {
    function init () {
      return 'starting test 2'
    }

    return {init}
  }

  let moduleId = 'test-function'
  let secondModule = 'second-function'

  const modules = CORE.getModuleData()

  CORE.registerModule(moduleId, testFun)
  t.is(Object.keys(modules).length, 1)
  t.is(Object.keys(modules)[0], 'test-function')

  CORE.registerModule(secondModule, secondFun)
  t.is(Object.keys(modules).length, 2)
  t.is(Object.keys(modules)[1], 'second-function')
})

test('REGISTER MODULE: It should register module creating an object with method "create" and empty instance', t => {
  function testFun () {
    function init () {
      return 'starting test 1'
    }

    return {init}
  }

  let moduleId = 'test-function'
  CORE.registerModule(moduleId, testFun)

  const modules = CORE.getModuleData()

  t.is(typeof modules[moduleId].create, 'function')
  t.is(modules[moduleId].instance, null)
})

test('START: It should assign to module\'s instance a result of calling a creator function and call init function', t => {
  function testFun () {
    function init () {
      return 'starting test 1'
    }

    return {init}
  }

  let moduleId = 'test-function'

  CORE.registerModule(moduleId, testFun)

  let modules = CORE.getModuleData()
  let mod = modules[moduleId]

  t.is(mod.instance, null)
  CORE.start(moduleId)
  t.is(typeof mod.instance.init, 'function')
  t.is(mod.instance.init(), 'starting test 1')
})

test('START ALL: it should execute init function for all modules registered in moduleData', t => {
  function testFun () {
    function init () {
      return 'starting test 1'
    }

    return {init}
  }

  function secondFun () {
    function init () {
      return 'starting test 2'
    }

    return {init}
  }

  let moduleId = 'test-function'
  let secondModule = 'second-function'

  CORE.registerModule(moduleId, testFun)
  CORE.registerModule(secondModule, secondFun)

  const modules = CORE.getModuleData()
  let mod1 = modules[moduleId]
  let mod2 = modules[secondModule]

  t.is(mod1.instance, null)
  t.is(mod2.instance, null)
  CORE.startAll()
  t.is(typeof mod1.instance.init, 'function')
  t.is(typeof mod2.instance.init, 'function')
  t.is(mod1.instance.init(), 'starting test 1')
  t.is(mod2.instance.init(), 'starting test 2')
})

test('STOP: it should destroy instance of a module', t => {
  function testFun () {
    function init () {
      return 'starting test 1'
    }

    function destroy () {
      return 'destroying module 1'
    }

    return {init, destroy}
  }
  let moduleId = 'test-function'
  CORE.registerModule(moduleId, testFun)
  CORE.start(moduleId)
  let modules = CORE.getModuleData()
  let mod = modules[moduleId]

  t.is(typeof mod.instance.destroy, 'function')
  CORE.stop(moduleId)
  t.is(mod.instance, null)
})

test('STOP ALL: it should execute stop function on all modules registered in moduleData', t => {
  function testFun () {
    function init () {
      return 'starting test 1'
    }

    function destroy () {
      return 'destroying module 1'
    }

    return {init, destroy}
  }

  function secondFun () {
    function init () {
      return 'starting test 2'
    }

    function destroy () {
      return 'destroying module 2'
    }

    return {init, destroy}
  }

  let moduleId = 'test-function'
  let secondModule = 'second-function'

  CORE.registerModule(moduleId, testFun)
  CORE.registerModule(secondModule, secondFun)

  let modules = CORE.getModuleData()
  let mod1 = modules[moduleId]
  let mod2 = modules[secondModule]
  CORE.startAll()

  t.is(typeof mod1.instance.destroy, 'function')
  t.is(typeof mod2.instance.destroy, 'function')
  CORE.stopAll()
  t.is(mod1.instance, null)
  t.is(mod2.instance, null)
})

test('getModuleData: it should return current moduleData', t => {
  function testFun () {
    function init () {
      return 'starting test 1'
    }

    function destroy () {
      return 'destroying module 1'
    }

    return {init, destroy}
  }
  let moduleId = 'test-function'
  CORE.registerModule(moduleId, testFun)

  let modules = CORE.getModuleData()
  t.is(Object.keys(modules).length, 1)
  t.true(Object.keys(modules).includes('test-function'))
})

test.afterEach(() => {
  CORE.moduleData = {}
})
