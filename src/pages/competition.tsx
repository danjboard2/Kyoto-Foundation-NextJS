import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import React, { useEffect } from 'react';
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
builder.init('05829d3eace9455893e1d144d2d4a91a');
/*
  Initialize the Builder SDK with your organization's API Key
  The API Key can be found on: https://builder.io/account/settings
*/
export async function getStaticProps() {
  /*
    Fetch the first page from Builder that matches the current URL.
    The `userAttributes` field is used for targeting content,
    learn more here: https://www.builder.io/c/docs/targeting-with-builder
  */
    const links = await builder.get('nav-links', {
      // You can use options for queries, sorting, and targeting here
      // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
    }).promise();
    

  return {
    props: {
      links: links || null,
    },
    revalidate: 5,
  };
}
export default function Home({links, className}: {links: any, className:any}) {
	useEffect(() => {
		jQuery(function () {
		//let c = '';
		//!function(m:any,a:any,i:any,t:any,r:any,e:any){if(m.RH)return;r=m.RH={},r.uuid=t,r.loaded=0,r.base_url=i,r.queue=[],m.rht=function(){r.queue.push(arguments)};e=a.getElementsByTagName('script')[0],c=a.createElement('script');c.async=!0,c.src=i+'/widget/'+t+'.js',e.parentNode.insertBefore(c,e)}(window,document,'https://app.referralhero.com','MF8be2443541');
		})
	},);
  return (
    <>
	  <script
			  defer
			  type="module"
   src="/js/comp-script.js"
 />  
      <Script strategy="afterInteractive" src="/js/basicLightbox.min.js" defer></Script>
    <Head>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
    <meta name="keywords" content="Kyoto Foundation" />
    <title>Kyoto Protocol - Launch Competition</title>
    <meta property="og:image" content="https://www.kyotoprotocol.io/competition/images/waiting-list-comp.png"/>
    <meta property="og:title" content="Join Our Waiting List Competition - KyotoProtocol.io"/>
    <meta property="og:description" content="Unlock the future of Blockchain Technology with Kyoto Blockchain. Launching 30th June."/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="628"/>
    </Head>
    <div id="pages">
    <div id="foundation" className="comp">
      <Navbar links={links}/>
	<section id="topbox">
		<div id="contents">
			<div className="inner-flex">
				<div className="socials">
					<div className="socials">
						<a href="https://discord.gg/kyotoprotocol" target="_blank"><figure><Image src="/images/social/discord-footer.png" fill style={{objectFit:"contain"}}  alt="Social logo"/></figure></a>
						<a href="https://twitter.com/official_kpio" target="_blank"><figure><Image src="/images/social/twitter-footer.png" fill style={{objectFit:"contain"}}  alt="Social logo"/></figure></a>
						<a href="https://medium.com/@KyotoProtocol.io" target="_blank"><figure><Image src="/images/social/medium-footer.png" fill style={{objectFit:"contain"}}  alt="Social logo"/></figure></a>
						<a href="https://www.youtube.com/channel/UCIijeBIESm9rnnckEwbU14g" target="_blank"><figure><Image src="/images/social/youtube-footer.png" fill style={{objectFit:"contain"}}  alt="Social logo"/></figure></a>
						<a href="https://t.me/KyotoProtocol" target="_blank"><figure><Image src="/images/social/telegram-footer.png" fill style={{objectFit:"contain"}}  alt="Social logo"/></figure></a>
						<a href="https://www.linkedin.com/company/kyotoprotocol-io/" target="_blank"><figure><Image src="/images/social/linkedin-footer.png" fill style={{objectFit:"contain"}}  alt="Social logo"/></figure></a>
					</div>
				</div>
				<div className="text">
					<h1>JOIN OUR<br/><span>WAITING LIST</span><br/>COMPETITION</h1>
					<p>Join our waiting list competition for the Kyoto Blockchain, the first carbon-negative blockchain built to scale the Voluntary Carbon Market and Regenerative Finance.<br/><br/>Refer your friends and win up to 1000 BUSD!</p>
					<a href="#rewards" className="butn"><span>Explore rewards</span></a>
				</div>
				<div id="maitre-widget"></div>
			</div>
		</div>

	</section>
<div className="bg-wrap">
<section id="fast">
	<div className="slogan">
<h2>THE <span>PROCESS</span></h2></div>
<p>Sign up for our waiting list and receive a referral code/link to share with your network. Every successful sign-up that uses your referral code increases your position on the invite leaderboard and your chances of winning up to 1000 BUSD. Please note that your position will change as other users invite their networks. Keep referring people and actively participate in the contest to secure your position and chances to win a reward.</p>
</section>

<section id="steps">
	<div className="step-wrap">
	<div className="step"><figure className="mb-6"><img src="images/step1.png"/></figure><p><span>1 </span>Sign up to our waiting list</p></div>
	<div className="step"><figure className="mb-6"><img src="images/step2.png"/></figure><p><span>2 </span>Receive unique referral code/link</p></div>
	<div className="step"><figure className="mb-6"><img src="images/step3.png"/></figure><p><span>3 </span>Climb the leaderboard by referring more people</p></div>
	<div className="step"><figure className="mb-6"><img src="images/step4.png"/></figure><p><span>4 </span>Be on top of the leaderboard to earn rewards</p></div>
	</div>
	<p>Participants will be rewarded according to their placement in one of our four reward Tiers, each giving special rewards in BUSD and exclusive merchandise. Our goal is to revolutionize the world of decentralized technology with Kyoto Blockchain, so spread the word as participants of the invite competition will also be granted early access to our technology stack.</p>
	<div id="rewards"></div>
</section>

<section id="fast" className="waiting">
	<div className="slogan">
<h2>Competition <span>Tier List</span></h2></div>
</section>

<section id="steps" className="tiers">
	<div className="step-wrap">
		<div className="step">
			<h4>Tier 1<br/>1</h4>
			<p>#1 placement receives</p>
			<ul>
				<li>{'\u2022'}{'\u00A0'}1000 BUSD + Kyoto Hoodie (worth 80 BUSD)</li>
			</ul>
		</div>
		<div className="step">
			<h4>Tier 2<br/>2-10</h4>
			<p>#2-10 placements receive</p>
			<ul>
				<li>{'\u2022'}{'\u00A0'}200 BUSD + Kyoto Hoodie (worth 80 BUSD)</li>
			</ul>
		</div>
		<div className="step">
			<h4>Tier 3<br/>11-50</h4>
			<p>#11-50 placements receive</p>
			<ul>
				<li>{'\u2022'}{'\u00A0'}100 BUSD</li>
			</ul>
		</div>
		<div className="step">
			<h4>Tier 4<br/>51-1000</h4>
			<p>#51-1000 placements receive</p>
			<ul>
				<li>{'\u2022'}{'\u00A0'}10 BUSD</li>
			</ul>
		</div>
	</div>
	<Link className="butn" href="#foundation">Sign Up Now</Link>
</section>
<p className="terms"><small>View competition <Link href="#terms" className="terms">terms and conditions.</Link></small></p>
</div>
      <Footer />
    </div>
    </div>
</>
  )
}
