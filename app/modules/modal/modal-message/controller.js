(function(){
	'use strict';

	var app = angular.module('app');

	app.controller('ModalMessageController', function($stateParams, closeModal){
		var $ctrl = this;
		$ctrl.mes = $stateParams.mes;
		$ctrl.closeModal = closeModal;
	});

})();