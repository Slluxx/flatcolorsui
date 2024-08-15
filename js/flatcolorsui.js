var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){
	var getColorCodeIDNew = $('.horizontalLayer .selected').attr('id');
	$('.horizontalLayer .selected').html('<span>'+getColorCodeIDNew+'</span>');
	$('.clr1').hover(function(){
		var getColorCode = $('.horizontalLayer .selected, .boxInner .selected').attr('title');
		var getColorCodeRGB = $('.horizontalLayer .selected, .boxInner .selected').attr('rel');
		var getColorCodeNew = $(this).attr('title');
		var getColorCodeIDNew = $(this).attr('id');
		var getColorCodeRGBNew = $(this).attr('rel');
		//alert(getColorCode);
		$('#header, #footer').css('background-color',getColorCodeNew);
		$('.colorCode').html(getColorCodeNew+'<br />'+getColorCodeRGBNew);
		$('#'+getColorCodeIDNew).html('<span>'+getColorCodeIDNew+'</span>');
	}, function() {
		var getColorCode = $('.horizontalLayer .selected, .boxInner .selected').attr('title');
		var getColorCodeRGB = $('.horizontalLayer .selected, .boxInner .selected').attr('rel');
		var getColorCodeIDNew = $(this).attr('id');
		$('#header, #footer').css('background-color',getColorCode);
		$('.colorCode').html(getColorCode+'<br />'+getColorCodeRGB);
		if($('#'+getColorCodeIDNew).hasClass("selected")){
			//
		} else { 
			$('#'+getColorCodeIDNew).html('');
		}
		
	});
	
	$('.clr1').click(function(event){
		$('.clr1').html('');
		var getColorCodeIDNew = $(this).attr('id');
		var getColorCode = $(this).attr('title');
		$('.clr1').removeClass('selected');
		$('#header, #footer').css('background-color',getColorCode);
		$('.colorCode').html(getColorCode+'<br />52, 73, 94');		
		$('#'+getColorCodeIDNew).html('<span>'+getColorCodeIDNew+'</span>');
		//alert('<span>'+getColorCodeIDNew+'</span>');
		$(this).addClass('selected');
		event.preventDefault();
	});	
	footerAdjust();
});
function footerAdjust(){
	var getWinHeight = $(window).height();
	var getcontentHeight = $('#wrapper').height();
	if(getWinHeight>getcontentHeight){
		$('#footer').css({'bottom':'0','position':'absolute'});
		$('.footerBorder').css({'bottom':'54px','position':'absolute','z-index':'1'});
	} else {
		$('#footer, .footerBorder').removeAttr('style');
	}
}
$(window).resize(function(){
	footerAdjust();
});	



}
/*
     FILE ARCHIVED ON 05:27:47 Feb 10, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:57:17 Aug 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.917
  exclusion.robots: 0.041
  exclusion.robots.policy: 0.024
  esindex: 0.014
  cdx.remote: 45.292
  LoadShardBlock: 627.818 (3)
  PetaboxLoader3.datanode: 187.453 (4)
  PetaboxLoader3.resolve: 674.28 (2)
  load_resource: 568.837
*/