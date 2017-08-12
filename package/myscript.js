$(function(){
	const link_selector = ".g .r, #foot .ch";

	document.addEventListener('shortcutSearchItems', function(a,b,c) {
		var box = jQuery("input[name=q]");
		box.focus();
	});
	
	document.addEventListener('shortcutNextItem', function() {
		jCurrent = getCurrent();
		var jNext = null;
		var jCurr = null;
		if (0 < jCurrent.length) {
			jQuery(link_selector).each(function(){
				if (jCurr) {
					jNext = jQuery(this);
					return false;
				}
				if (jQuery(this).is(jCurrent)) {
					jCurr = jQuery(this);
				}
			});
		}

		clearArrow();
		if (jNext) {
			setArrow(jNext);
		} else {
			setArrow(jQuery(link_selector).first());
		}
	});
	document.addEventListener('shortcutPrevItem', function() {
		jCurrent = getCurrent();
		var jPrev = null;
		var jCurr = null;
		if (0 < jCurrent.length) {
			jQuery(link_selector).each(function(){
				if (jQuery(this).is(jCurrent)) {
					jCurr = jQuery(this);
					return false;
				}
				jPrev = jQuery(this);
			});
		}

		clearArrow();
		if (jPrev) {
			setArrow(jPrev);
		} else {
			setArrow(jQuery(link_selector).last());
		}
	});
	
	function getCurrent(){
		return jQuery(".arrow").next();
	}
	function setArrow(jElem){
		var arrow = "<span class='arrow'></span>";
		jQuery(arrow).insertBefore(jElem);

		if (getCurrent().hasClass("r")) {
			jElem.find("a").focus();
		} else {
			jElem.parents("a").focus();
		}
	}
	function clearArrow(){
		jQuery(".arrow").remove();
	}
});