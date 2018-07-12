export class ActionsIndex {
	constructor(executor) {
		// Executor
		this.executor    = executor;
		// Autoload
		this.autoload()
	}
	autoload(){
		this.bindButtons()
	}
	bindButtons() {
		$('[data-menu="top"').on('click', function (e) {
			e.preventDefault()
			$('html, body').animate({
				scrollTop: 0
			}, 1000)
		})
		$('[data-action="contact"').on('click', function(){
			$('html, body').animate({
				scrollTop: $('#contato').offset().top
			}, 1000)
		})
	}
}