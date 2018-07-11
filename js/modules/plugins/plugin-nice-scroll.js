export class PluginNiceScroll {
	constructor() {
		this.Mobile = window.mobile
		this.configs = {
			'cursorwidth'        : "8px",
			'zindex'             : 1000,
			'scrollspeed'        : 60,
			'mousescrollstep'    : 100,
			'cursoropacitymax'   : 0.8,
			'cursorcolor'        : "#C9ADA7",
			'horizrailenabled'   : false,
			'cursorborder'       : "none",
			'cursorborderradius' : "0px"
		}
		this.init()
	}
	init() {
		if (!this.Mobile.isMobile)
			$("html").niceScroll(this.configs)
	}
}