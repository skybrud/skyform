(function() {
	'use strict';

	angular.module('skyform').service('skyformRadios', function() {
		var _this=this;

		var radios = {};

		_this.add = function(name, fn) {
			if(!radios[name]) {
				radios[name]=[];
			}

			radios[name].push(fn);
		};

		_this.update = function(name) {
			angular.forEach(radios[name], function(updateFn) {
				// call with true, so it stops calling recursively
				updateFn(true);
			});
		};

		_this.remove = function(name, fn) {
			var index=-1;
			angular.forEach(radios[name], function(updateFn,key) {
				if(updateFn === fn) {
					index=key;
				}
			});
			radios[name].splice(index, 1);
		};
	});


})();
