var Sandbox = {

    create: function (core, module_selector) {
        var CONTAINER = core.dom.query('#' + module_selector)
        return {
            find: function (selector) {
                return CONTAINER.query(selector);
            },
            addEvent: function (element, type, fn) {
                core.dom.bind(element, type, fn)
            },
            removeEvent: function (element, type, fn) {
                core.dom.unbind(element, type, fn)
            },
            notify: function (event) {
                if (core.isObj(event) && event.type) {
                    core.triggerEvent(event)
                }
            },
            listen: function (events) {
                if (core.isObj(events)) {
                    core.registerEvents(events, module_selector)
                }
            },
            ignore: function (events) {
                if (core.isArr(events)) {
                    core.removeEvents(events, module_selector)
                }
            },
            createElement: function (el, config) {
                var i, child, text
                el = core.dom.create(el)

                if (config) {
                    if (config.children && core.isArr(config.children)) {
                        i = 0
                        while(config.children[i]) {
                            el.appendChild(child)
                            i++
                        }
                        delete config.children

                        if (config.text) {
                            el.appendChild(document.createTextNode(config.text))
                            delete config.text
                        }
                        core.dom.applyAttrs(el, config)
                        return el
                    }
                }

            }
        }
    }

}


    sb.find('#search-input')[0]
    sb.addEvent(reset, 'click', _quitSearch)
    sb.removeEvent(reset, 'click', _quitSearch)
    sb.notify({
    sb.listen({
    sb.ignore(['change-filter', 'reset-filter', 'perform-search', 'quit-search'])
    sb.createElement('li', {