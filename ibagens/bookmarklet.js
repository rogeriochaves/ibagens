(function(){

	var fixElement = function(elem){
		var childs = elem.childNodes;
		if(childs.length < 2000){
			for(var i = 0, max = childs.length; i < max; i++){
				var child = childs[i];
				if(child.nodeType == 3 && child.nodeValue.match(/(i)(mage)/i)){
					child.nodeValue = child.nodeValue.replace(/(i)(mage)/i, "$1bage");
				}
				if(child.childNodes.length > 0 && child.tagName !== "SCRIPT" && child.tagName !== "STYLE"){
					fixElement(child);
				}
			}
		}
	}

	var fixWords = function(){
		var head = document.getElementsByTagName("head")[0];
		var body = document.getElementsByTagName("body")[0];

		fixElement(head);
		fixElement(body);
	}

	document.onreadystatechange = function(){
	    if (document.readyState === 'complete') fixWords();
	}
	window.onload = fixWords;
	
})();