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
	$("a.developers").click(function(event) {
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
	$("a.terms").click(function() {
		basicLightbox.create(`
		<div class="modal" id="terms">
			<a class="close"><p>X</p></a>
	<p>
		<strong>Competition Terms and Conditions</strong><br>
	</p>
	<ul>
		<li>Eligibility: The Kyoto Protocol Waiting List Competition (“Competition”) is open to individuals who have signed up for the Kyoto Blockchain waiting list (“Participants”). Only one email from each individual can be used to sign up to the waiting list competition.</li>
		<li>Referral Link: Participants will receive a unique referral link that can be shared with their network.</li>
		<li>Referral Points System: When a new subscriber signs up organically, they will earn 1 point. If you register using another person’s referral link, you will also earn 1 point. By successfully referring someone else (who signs up through your referral link), you will receive 2 points. Additionally, you can earn an extra point by sharing your referral link on various social media platforms, such as Facebook, Twitter, Whatsapp, LinkedIn, Facebook Messenger, Pinterest, Reddit, and Telegram.</li>
		<li>Referral Rewards: For every person who signs up using a Participant’s referral link, the Participant will climb higher up the waiting list. The number of referrals completed will determine the Participant’s position on the waiting list.</li>
		<li>Referral Tiers: The Competition has four reward tiers for top referrers based on the number of successful referrals. The reward tiers and the prizes offered are as follows:</li>
		<li>The Top 1 subscriber will receive = 1,000 BUSD + Kyoto Hoodie (Worth 80 BUSD)</li>
		<li>Subscribers 2-10 will receive = 200 BUSD + Kyoto Hoodie (Worth 80 BUSD)</li>
		<li>Subscribers 11-50 will receive = 100 BUSD</li>
		<li>Subscribers 51 - 1000 will receive = 10 BUSD</li>
		<li>6. Reward Fulfillment: Participants who reach a reward tier will receive an email notification within 30 days of the Competition ending. Participants must respond to the email within 7 days to claim their reward. The rewards are non-transferable and cannot be exchanged for cash.</li>
		<li>7. Competition Start and End date: The Waiting list competition will launch on the 5th of May 2023 and will run until the 30th of June 2023.</li>
		<li>8. Competition Sign-Up Abuse: Kyoto Protocol reserves the right to disqualify and remove any emails that are known to be duplicates or fake.</li>
		<li>9. Competition Changes: Kyoto Protocol reserves the right to modify or terminate the Competition at any time for any reason. Kyoto Protocol also reserves the right to disqualify any Participant for fraudulent or abusive behavior.</li>
		<li>10. Privacy: Participants’ personal information will be used in accordance with Kyoto Protocol’s privacy policy.
		<li>By participating in the Competition, Participants agree to these terms and conditions.</li>
	</ul>
</div>
`, {
onShow: (instance) => {
	instance.element().querySelector('a').onclick = instance.close
}
}).show();
event.preventDefault();
});
$("a.thanks").click(function() {
		basicLightbox.create(`
		<div class="modal" id="thanks">
			<a class="close"><p>X</p></a>
	<p>
		<strong>Thank You for <span>Signing Up!</span></strong><br>
	</p>
<p>Thank you for signing up to our waiting list! We're thrilled to have you on board and can't wait to show you what we've been working on.</p>

<p>As a special thank you, we've provided you with a unique referral code/link to share with your network. By referring your friends and colleagues to our waiting list, you'll climb higher up the list and increase your chances of being among the first to experience our cutting-edge technology.</p>

	<p>The more people you refer, the higher your position on the waiting list leaderboard will be, so don't hesitate to spread the word! Plus, as an added bonus, you could earn some fantastic rewards just for referring others.</p>

		<p>So go ahead, share your unique referral code/link with everyone you know, and help us build a community of excited users who are ready to change the game. Thanks again for your support, and we'll be in touch soon with more updates!</p>
</div>
`, {
onShow: (instance) => {
	instance.element().querySelector('a').onclick = instance.close
}
}).show();
event.preventDefault();
});
if (window.location.href.indexOf("terms") > -1) {
	$("a.terms").click();
}
if (window.location.href.indexOf("thanks") > -1) {
	$("a.thanks").click();
}