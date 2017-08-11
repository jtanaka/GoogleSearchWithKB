$(function(){
	document.addEventListener('shortcutSearchItems', function(a,b,c) {
		var box = jQuery("input[name=q]");
		box.focus();
	});
	
	document.addEventListener('shortcutNextItem', function() {
		jCurrent = getCurrent();
		if (0 < jCurrent.length) {
			var jNext = null;
			var jCurr = null;
			jQuery(".g .r").each(function(){
				if (jCurr) {
					jNext = jQuery(this);
					return false;
				}
				if (jQuery(this).is(jCurrent)) {
					jCurr = jQuery(this);
				}
			});
			
			if (jNext) {
				clearArrow();
				setArrow(jNext);
			}
		} else {
			setArrow(jQuery(".g .r").first());
		}
	});
	document.addEventListener('shortcutPrevItem', function() {
		jCurrent = getCurrent();
		if (0 < jCurrent.length) {
			var jPrev = null;
			var jCurr = null;
			jQuery(".g .r").each(function(){
				if (jQuery(this).is(jCurrent)) {
					jCurr = jQuery(this);
					return false;
				}
				jPrev = jQuery(this);
			});
			
			if (jPrev) {
				clearArrow();
				setArrow(jPrev);
			}
		} else {
			setArrow(jQuery(".g .r").first());
		}
	});
	
	function getCurrent(){
		return jQuery(".arrow").next(".r");
	}
	function setArrow(jElem){
		var arrow = "<span class='arrow'></span>";
		jQuery(arrow).insertBefore(jElem);
		jElem.find("a").focus();
	}
	function clearArrow(){
		jQuery(".arrow").remove();
	}
});