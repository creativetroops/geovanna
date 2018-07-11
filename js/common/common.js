// Helpers
import { Util } from '../modules/helpers/util'
import { Mobile } from '../modules/helpers/mobile'

// Loader
import { Loader } from '../modules/loader/loader'

// Menu
import { Menu } from '../modules/menu/menu'

// Plugins
import { PluginNiceScroll }   from '../modules/plugins/plugin-nice-scroll'
import { PluginOwlCarousel }  from '../modules/plugins/plugin-owl-carousel'
import { PluginScrollReveal } from '../modules/plugins/plugin-scroll-reveal'

// Exports Imutables
window.util   = new Util()
window.mobile = new Mobile()

// Global Loader
window.loader = new Loader()
window.loaded = false

class Common {
    constructor(){
		// Util
		this.Util = window.util
		// Menu
		this.menu = new Menu()
		// Plugins
		this.pluginNiceScroll   = new PluginNiceScroll()
		this.pluginOwlCarousel  = new PluginOwlCarousel()
		this.pluginScrollReveal = new PluginScrollReveal()
		// Autoload
		this.autoload()
	}
	autoload(){
		this.Util.dipatchMessage('Started Common.')
	}
}

$(window).on('load', function(){
	window.loaded = true
	window.common = new Common()
});