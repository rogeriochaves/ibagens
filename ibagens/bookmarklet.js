(function(){
	var fixWords = function(){
		var all = document.getElementsByTagName("*");

		if(all.length < 2000){ // too much elements!
			for (var i = 0, max = all.length; i < max; i++) {
			     var el = all[i];
			     el.innerHTML = el.innerHTML.replace(/(<.+?>[^<>]*?)(i)(mage)([^<>]*?<.+?>)/i, "$1$2bage$4");
			     // It's correct now (:
			}
		}
	}

	window.onload = fixWords;
})();