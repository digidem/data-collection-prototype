$(document).bind("mobileinit", function(){
	  $.mobile.transitionFallbacks.slideout = "flip";
	  
	  /* Custom transition handles for custom standard transitions */
	  $.mobile.transitionHandlers.slidedownnofade = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.slideupnofade = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.fade = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.popnofade = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.customnone = $.mobile.transitionHandlers.simultaneous;
	  
	  /* Custom transition handlers for custom load transitions */
	  $.mobile.transitionHandlers.slidenofadeload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.slidebacknofadeload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.slidedownnofadeload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.slideupnofadeload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.popnofadeload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.fadenofadeload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.flipnofadeload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.turnnofadeload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.flownofadeload = $.mobile.transitionHandlers.simultaneous;
		
	  /* Custom transition handlers for custom unload transitions */
	  $.mobile.transitionHandlers.slidenofadeunload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.slidebacknofadeunload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.slideupnofadeunload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.slidedownnofadeunload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.popnofadeunload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.fadenofadeunload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.flipnofadeunload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.turnnofadeunload = $.mobile.transitionHandlers.simultaneous;
	  $.mobile.transitionHandlers.flownofadeunload = $.mobile.transitionHandlers.simultaneous;		
});