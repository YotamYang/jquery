(function() {

	if (window.jQuery) {
		var _jQuery = window.jQuery;
	}

	var jQuery = window.jQuery = function(selector, context) {
		return new jQuery.prototype.init(select, context);
	}

	if (window.$) {
		var _$ = window.$;
	}

	window.$ = jQuery;

	var quickExpr = /^[^<]*(<(.|\s)+>)[^>]*$|^#(\w+)$/;

	var isSimple = /^.[^:#\[\.]*$/;

	jQuery.fn = jQuery.prototype = {
		init: function(selector, context) {
			selector = selector || document;
		}
	}
})();