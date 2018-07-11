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
		$('[data-action="contact"').on('click', function(){
			$('html, body').animate({
				scrollTop: $('#contato').offset().top
			}, 1000)
		})
	}
}