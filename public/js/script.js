$(document).ready(function() {
	$(document).on('click', 'a[href^="#"]', function (event) { //smooth scroll
event.preventDefault();

$('html, body').animate({
	scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
});
$(document).on('click','.js-menu_toggle.closed',function(e){
e.preventDefault(); $('.list_load, .list_item').stop();
$(this).removeClass('closed').addClass('opened');
$('.side_menu .container .socials').css({ 'display':'flex' });

$('.side_menu').css({ 'right':'0px' });
$('#background-blur').css({ 'right':'0px' });
var count = $('.list_item').length;
$('.list_load').slideDown( (count*.6)*100 );
$('.list_item').each(function(i){
var thisLI = $(this);
timeOut = 100*i;
setTimeout(function(){
	thisLI.css({
		'opacity':'1',
		'margin-right':'0'
	});
},100*i);
});
$(document).on('click','.js-menu_toggle.opened',function(e){
e.preventDefault(); $('.list_load, .list_item').stop();
$(this).removeClass('opened').addClass('closed');

$('.side_menu').css({ 'right':'-300px' });
$('#background-blur').css({ 'right':'-300px' });
$('.side_menu .container .socials').css({ 'display':'none' });

var count = $('.list_item').length;
$('.list_item').css({
'opacity':'0',
'margin-right':'-20px'
});
$('.list_load').slideUp(300);
});
});

ScrollTrigger.create({
trigger: "#hero-block",
start: "top top",
onEnter:self =>  {
$('.menuwrap').addClass('fixed'),
$('#background-blur').css("top", "88px")
},
onLeaveBack: self => {
$('.menuwrap').removeClass('fixed'),
$('#background-blur').css("top", "0px")
}
//onToggle: self => console.log("toggled, isActive:", self.isActive),
//onUpdate: self => { console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());}
});
			$('.head').click(function(){
				$(this).toggleClass('active');
				$(this).parent().find('.arrow').toggleClass('arrow-animate');
				$(this).parent().find('.content').slideToggle(280);
			});
});
$(document).ready(function() {
	$("a.developers").click(function() {
				basicLightbox.create(`
				<div class="modal">
					<svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top:20px">
							<path d="M47.3986 41.6742C47.3986 46.267 43.6806 50 39.0837 50C34.4869 50 30.7689 46.267 30.7689 41.6742C30.7689 37.0814 27.1635 33.4389 22.6793 33.3484C22.6117 33.3258 22.5441 33.3258 22.4765 33.3258C22.4089 33.3258 22.3413 33.3258 22.2737 33.3484C17.767 33.2353 14.1616 29.5475 14.1616 25C14.1616 20.4525 17.767 16.7873 22.2737 16.6968H22.6793C27.1635 16.5837 30.7689 12.8959 30.7689 8.34842C30.7689 3.8009 34.4869 0 39.0837 0C43.6806 0 47.3986 3.73303 47.3986 8.34842C47.3986 12.9638 43.7932 16.5837 39.3091 16.6968C39.2415 16.6742 39.1513 16.6742 39.0837 16.6742C39.0161 16.6742 38.9485 16.6742 38.8809 16.6968C34.3742 16.7873 30.7689 20.4751 30.7689 25C30.7689 29.5249 34.3742 33.2353 38.8809 33.3484H39.3091C43.7932 33.4389 47.3986 37.1267 47.3986 41.6742Z" fill="#DFF4E7" style="fill: rgb(223 244 231);color: rgb(223 244 231);"></path>
							<path d="M7.94798 16.7629C12.3375 16.7629 15.896 13.1397 15.896 8.67037C15.896 4.20101 12.3375 0.577881 7.94798 0.577881C3.55843 0.577881 0 4.20101 0 8.67037C0 13.1397 3.55843 16.7629 7.94798 16.7629Z" fill="#DFF4E7" style="fill: rgb(223 244 231);color: rgb(223 244 231);"></path>
							<path d="M7.94798 49.9998C12.3375 49.9998 15.896 46.2473 15.896 41.6183C15.896 36.9893 12.3375 33.2368 7.94798 33.2368C3.55843 33.2368 0 36.9893 0 41.6183C0 46.2473 3.55843 49.9998 7.94798 49.9998Z" fill="#DFF4E7" style="fill: rgb(223 244 231);color: rgb(223 244 231);"></path>
							</svg>
			<p>
				<strong>Coming Soon</strong><br>
			</p>
		</div>
				`).show();
		event.preventDefault();
	
	});
	});

var scrolling = 0;

	$(window).on('load', function () {
	var navButtons = $(".main-nav a").filter("[href^='#']");
	  var ctrl = new ScrollMagic.Controller({addIndicators: true});
	  $(window).on("click", ".main-nav a", function(event) {
		scrolling = 1;
		event.preventDefault();
		const linkId = $(this).attr("href");
		ctrl.scrollTo(function (newpos) {
		  TweenMax.to(window, 0.5, {scrollTo: {y:newpos},onComplete:scrollingOff})
	  });
		ctrl.scrollTo(linkId);
		
	  })
		
	   TweenLite.to(".text1", 1, {fontSize:100,
	   top:'20%',delay:.5,ease: Power4.easeOut}) 
		
		ctrl = new ScrollMagic.Controller({
		});
	
	
	function scrollingOff(){scrolling = 0};
	
	var currentSlide = 0;
	console.log('currentslide is' + currentSlide)
		// This each sets the animation
		$('.hero').each(function(index,element) {  
			new ScrollMagic.Scene({
				triggerHook: 'onLeave',
				triggerElement: this,
				offset:-20,
			})
			.on('leave', function (event) 
			{if(scrolling === 0){
				  console.log("scrolling " + scrolling);
				  //var topbox = $('#topbox').height();
				  console.log(index);
				  console.log('.hero' + (index))
				  currentSlide = index;
				  //console.log('currentslide is' + currentSlide)
				//  console.log('window height: ' + $('.hero').height() - (index));
				  TweenLite.to(navButtons, 0.5, {className: ""});
				  console.log(event.scrollDirection);

				  if (currentSlide > 0){
				  TweenLite.to(window, 1,{scrollTo:{y:".hero" + (index),autoKill:false},ease: Power4.easeOut});
				  TweenLite.to(navButtons.filter(".active"), 0.5, {className: ""});
				  TweenLite.to(navButtons.filter("[href='#section-" + currentSlide + "']"), 0.5, {className: "active"});
				}
				if (currentSlide == 0){
console.log('its zero')				
TweenLite.to(window, 1,{scrollTo:{y:"#topbox",autoKill:false},ease: Power4.easeOut});
				}
				TweenLite.to(".text" + (index), 1, {fontSize:30,top:'0',delay:.5,ease: Power4.easeOut})
			}
			   })
			.addTo(ctrl);  // scene end
	
	
			
		   new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 'onEnter',
				offset:20, // small offset added to prevent overscrolling accidentally triggering
			})
			  .addTo(ctrl)
			  .on('enter', function (event) {
			   if(scrolling === 0){
				console.log("scrolling " + scrolling);
					  console.log('triggered');
					  console.log('.hero' + (index+1))
					 //console.log('currentslide is ' + currentSlide)
					  currentSlide = index+1;
					  var prevSlide = index;
					  console.log(index+1);
					  console.log(event.scrollDirection);
					  if (currentSlide == 0){
						console.log('its zerooo')				
						TweenLite.to(window, 1,{scrollTo:{y:".hero1",autoKill:false},ease: Power4.easeOut});
										}
					  if (currentSlide > 1){
					  TweenLite.to(window, 1, {scrollTo:{y:".hero" + (index+1),autoKill:false},ease: Power4.easeOut});
					  }
					  console.log(index)
					  if (currentSlide < 1){
						TweenLite.to(window, 1, {scrollTo:{y:".hero" + (currentSlide+1),autoKill:false},ease: Power4.easeOut});
						console.log('currentslide is ' + (currentSlide+1))
					  }
					  TweenLite.to(navButtons.filter(".active"), 0.5, {className: ""});
					  TweenLite.to(navButtons.filter("[href='#section-" + prevSlide + "']"), 0.5, {className: ""});
					TweenLite.to(navButtons.filter("[href='#section-" + currentSlide + "']"), 0.5, {className: "active"});
			   }       
					  TweenLite.to(".text" + (index+1), 1, {fontSize:30,top:'0',delay:.5,ease: Power4.easeOut})
											 
			   }); // scene end
		   currentSlide= 0;
		  
		}); //hero each
	  
	  }); //window onload
