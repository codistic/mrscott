//     mrscott.js 0.1.0
//     (c) 2013 Jason Stehle
//     mrscott.js may be freely distributed under the MIT license.

(function (global) {
	
	global.mrscott = {
		init: function (helpers) {
			var slots = $('*[data-mrscott-query]'), funcs = helpers || {};
			var paramRe = /^data\-mrscott\-param\-(.+)$/;
			
			slots.each(function () {
				var $this = $(this),
					query = $this.data('mrscott-query'),
					target = $this.data('mrscott-append'),
					unmatchFuncTarget,
					enquireArg,
					args;
		
				if (target) { //append by selector
					enquire.register(query, function () {
						//console.log('FIRING', query, target);
						$this.append($(target));
					}).listen();
					return;
				}
				
				target = $this.data('mrscott-import');
				if (target) { //append file contents
					enquire.register(query, {
						match: function () {
							//console.log('FIRING', query, target);
							$.get(target, null, function (data) {
								$this.html(data);
							});
						},
						unmatch: function () {
							//console.log('UNFIRING', query, target);
							$this.empty();
						}
					}).listen();
					return;
				}
				
				target = $this.data('mrscott-match-function');
				if (target) { //call function 
					args = [];
					
					$.each($this[0].attributes, function(index, attr) {
						var key;
						if (paramRe.test(attr.nodeName)) {
							key = attr.nodeName.match(paramRe)[1];
							args[key] = attr.nodeValue;
						}
					});
					
					unmatchFuncTarget = $this.data('mrscott-unmatch-function');
					enquireArg = {};
					
					enquireArg.match = function () {
						funcs[target].apply($this[0], args);
					};
					
					if (funcs[unmatchFuncTarget]) {
						enquireArg.unmatch = function () {
							funcs[unmatchFuncTarget].apply($this[0], args);
						};	
					} else {
						enquireArg.unmatch = function () { $this.empty(); };
					}
					
					enquire.register(query, enquireArg).listen();
					
					return;
				}
			});
		}
	};
	
})(this);