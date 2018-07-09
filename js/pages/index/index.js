import { ActionsIndex } from './actions/actions-index'

class Index{
	constructor(){
		// Imports
		this.Util = window.util
		// Autoload
		this.autoload()
	}
	autoload(){
	}
}

$(document).ready(function(){
	window.index        = new Index()
	window.actionsIndex = new ActionsIndex(window.index)
})