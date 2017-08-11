;(function() {

  var keyCodeMap = {
    '.':  'shortcutLoadItems',
    '/':  'shortcutSearchItems',
    '?':  'shortcutShowHelp',
    'j': 'shortcutNextItem',
    'k': 'shortcutPrevItem',
    'n': 'shortcutNewItem',
    'o': 'shortcutOpenItem',
  };

  var eventBlacklist = {
    'input': true,
    'textarea': true,
    'select': true
  };

  document.addEventListener('keypress', function(e) {
    var tagName = document.activeElement.tagName.toLowerCase();
    var shortcut = keyCodeMap[String.fromCharCode(e.charCode)];
    var shortcutEvent;

    if (typeof shortcut === undefined || eventBlacklist[tagName]) {
      return;
    }

    if (window.CustomEvent) {
      shortcutEvent = new CustomEvent(shortcut, e);
    } else {
      shortcutEvent = document.createEvent('CustomEvent', e);
      shortcutEvent.initCustomEvent(shortcut, false, false, null);
    }
	
	e.preventDefault();
    document.dispatchEvent(shortcutEvent);
  });

})();
