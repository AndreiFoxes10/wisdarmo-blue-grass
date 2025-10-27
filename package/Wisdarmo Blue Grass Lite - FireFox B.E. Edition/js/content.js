// Note:
// This project is unfinished, it should last until it's ready. -AndreiFoxes10

// Fisrt
// Begin
const site1 = window.location.hostname

const site2 = window.location.href

const site2_5 = window.location.pathname

const title1 = "WBG: "

const message1 = "Contents from Recommendation is Removed!"

const message2 = "Contents is not or already removed. :/"

const message3 = "Search engine removed!"

const message4 = "Search engine is not or already removed. :/"

const message5 = "This website is forbidden!"

const wbgls1 = browser.storage.local

// 1.1 YouTube(Desktop version) (W.I.P.)
const ytSearch1 = document.getElementById("center");

//const ytContents1 = document.getElementById("contents");

const ytContents2 = document.querySelector("ytd-browse.style-scope.ytd-page-manager");

function ytRemoveSearch1() {
	if (ytSearch1){
			ytSearch1.remove();
			console.log(title1 + message3);
	} else {
		console.log(title1 + message4);
	}
	
}

const ytInnerHTML1 = ` 
	<div>
		<center>
			<img src="https://www.youtube.com/img/desktop/unavailable/unavailable_video_dark_theme.png">
			<div >WBG is active, public videos from Recommendations and Search engine are now hidden.</div>
		</center>
	</div>`
	
// 1.2 YouTube (Mobile versin) (W.I.P.)

// 4. Instagram
const igContent1 = document.querySelector("section.x78zum5.xdt5ytf.x1iyjqo2.xg6iff7")

const igInnerHTML1 = `
	<main class="xvbhtw8 x78zum5 xdt5ytf x1iyjqo2 xl56j7k" role="main">
		<div style="max-width: 100%;">
			<div class="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x2lah0s x193iq5w x6s0dn4 xf7dkkf xv54qhq">
				<div class="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x9f619 xjbqb8w x78zum5 x15mokao x1ga7v0g x16uus16 xbiv7yw x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
					<svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="96" role="img" viewBox="0 0 96 96" width="96">
					<title></title>
					<circle cx="48" cy="48" fill="none" r="47" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
					<path d="M60.931 70.001H35.065a5.036 5.036 0 0 1-5.068-5.004V46.005A5.036 5.036 0 0 1 35.065 41H60.93a5.035 5.035 0 0 1 5.066 5.004v18.992A5.035 5.035 0 0 1 60.93 70ZM37.999 39.996v-6.998a10 10 0 0 1 20 0v6.998" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
				</div>
				<span style="--x---base-line-clamp-line-height: 30px; --x-lineHeight: 30px;" dir="auto" class="x1lliihq x1plvlek xryxfnj x1n2onr6 xyejjpt x15dsfln x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye x133cpev x1s688f x5n08af x2b8uid x4zkp8e x41vudc x10wh9bi xpm28yp x8viiok x1o7cslx x1cnzs8">Instagram is blocked!</span>
				<div class="html-div x14z9mp x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x9f619 xjbqb8w x78zum5 x15mokao x1ga7v0g x16uus16 xbiv7yw x1tfhste xieb3on x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
					<span class="x1lliihq x1plvlek xryxfnj x1n2onr6 xyejjpt x15dsfln x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xl565be xo1l8bm x5n08af x2b8uid x1tu3fi x3x7a5m x10wh9bi xpm28yp x8viiok x1o7cslx" style="--x---base-line-clamp-line-height: 20px; --x-lineHeight: 20px;" dir="auto">
						We apologize for that, published contents are hidden like YouTube Unlisted for these reason.
						<br>
						If you want to see the posts, then you can check on URL address, Links, Browser History, and/or Bookmark to view it again.
					</span>
				</div>
			</div>
		</div>
	</main>
`
	
// 7 Sketchers United
const suSearch1 = document.querySelector("input#searchInput")

const suContent1 = document.querySelector("div.animations-on-top")

const suContent2 = document.querySelector("section#vue-container")

const suInnerHTML1 = ` 
	<div>
		<center>
			<br><br>
			<img src="`+ browser.runtime.getURL('img/OttoThumbDown.png') +`" width="200"/>
			<div>
				<h1>Sketchers United is Blocked!</h1>
				<h2>Posts and Collabs are hidden.</h2>
				We apologize for that, Posts and Collabs are hidden like YouTube Unlisted for these reason.<br>
				<br>
				If you want to see the posts, then you can check on URL address, Links, Browser History, and/or Bookmark to view it again.<br>
				<br>
			</div>
			<img src="`+ browser.runtime.getURL('img/In-Case-Of-Emergency-Turn-Off-The-Internet-Social-Media-Logo2.png') +`" width="300"/>
		</center>
	</div>
`

// 8 Newgrounds
// Main

// Home
const ngContents1 = document.querySelector("div.body-guts.top")

const ngContents2 = document.querySelector("div#frontpage_sortables")

const ngContents3 = document.querySelector("div.column.thin")

const ngFooter1 = document.querySelector("div#footer-features-items")

// Movies
const ngContents4 = document.querySelector("div#hub.column")

// Portal
const ngContents5 = document.querySelector("div#classic_portal.classic-portal")

const ngContents6 = document.querySelector("div.body-guts.top")

// Search
const ngSearch1 = document.querySelector("form#topsearch-elastic")

const ngSearch2 = document.querySelector("div#search.column")

// Users
const ngContents7 = document.querySelector("div#sortable_sections.column.wide.edit-on.ui-sortable")

const ngInnerHTML1 = `
	<div class="column" id="pageerror">
		<div class="pod">
			<div class="pod-head">
				<h2 class="error">Blocked!</h2>
			</div>
			
			
			<div class="pod-body">
				<div class="fatal-error">
					<div>
						<img src="https://img.ngfiles.com/misc/error_face.png" alt="Error Image">
					</div>
					<div>
						<p>Newgrounds is blocked! — Published contents are hidden.</p>
						<p>We apologize for that, published contents are hidden like YouTube Unlisted for these reason.</p>
						<p>If you want to see the posts, then you can check on URL address, Links, Browser History, and/or Bookmark to view it again.</p>
					</div>
				</div>
				<center><img src="`+ browser.runtime.getURL('img/In-Case-Of-Emergency-Turn-Off-The-Internet-Social-Media-Logo2.png') +`" width="300"/></center>
			</div>
		</div>
	</div>
`

// Access restriction mode
const rmHead1 = document.head

const rmBody1 = document.body

const rm_innerhtml1 = `
	<div class="container">
		<h1>This "` + site1 + `" access is restricted!</h1>
		We apologize for that, this Website/Social Media access is restricted for these reason.<br><br>
		Please, go outside and touch some grass.
		<br>
		<br>
		<img src="` + browser.runtime.getURL('img/In-Case-Of-Emergency-Turn-Off-The-Internet-Social-Media-Logo2.png') + `" width="200"/>
	</div>
`

const rm_innerhtml2 =`
	<title>Restricted access</title>
	<link rel="stylesheet" href="` + browser.runtime.getURL('css/common.css') +`">
	<link rel="stylesheet" href="` + browser.runtime.getURL('css/restrictedpagestyle.css') +`">
`

// Second
wbgls1.get(["ls_wbgswitch1"]).then((result) => {
	let srm1 = result.ls_wbgswitch1;
	// Regular settings
	if (srm1 == 0) {
		// 1 YouTube
		wbgls1.get(["ls_turnoff_yt1"]).then((result) => {
			let turnoff1 = result.ls_turnoff_yt1;
			if (turnoff1 == true) {
				// Home Page(Recommendations)
				if (site1.includes("youtube.com")) {
					ytRemoveSearch1();
					// Contents
					
					if (ytContents2){
						ytContents2.innerHTML = ytInnerHTML1; 
						//ytContents1.remove();
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
			}
		})
		
		// 4 Instagram
		wbgls1.get(["ls_turnoff_ig1"]).then((result) => {
			let turnoff4 = result.ls_turnoff_ng1;
			if (turnoff4 == true) {
				// Main
			
				// Home
				if (site2.includes("instagram.com")) {
					igContent1.innerHTML = igContent1;
					console.log(title1 + message3);
				} else {
					console.log(title1 + message4);
				}
			}
		}) 
		
		// 7 Sketchers United
		wbgls1.get(["ls_turnoff_su1"]).then((result) => {
			let turnoff7 = result.ls_turnoff_su1;
			if (turnoff7 == true) {
				// Main
				if (site1.includes("sketchersunited.org")) {
					if (suSearch1){
						suSearch1.remove();
						console.log(title1 + message3);
					} else {
						console.log(title1 + message4);
					}
				}
			
				// Contents
				if (site2.includes("sketchersunited.org/posts")) {
					if (suContent1){
						suContent1.innerHTML = suInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				
				
				// Channels
				if (site2.includes("skechtersunited.org/channels/") & Math.random()) {
					if (suContent2){
						suContent2.innerHTML = suInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				
				// Users 
				if (site2.includes("skechtersunited.org/users/") + Math.random()) {
					if (suContent2){
						suContent2.innerHTML = suInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				
				// Tags
				if (site2.includes("skechtersunited.org/tags/") + Math.random()) {
					if (suContent2){
						suContent2.innerHTML = suInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				/* (unused and not working)
				// Collabs
				if (site2.includes("sketchers.org/collabs/") + Math.random()) {
					let su_openCollabs1 = false;
					su_openCollabs1 = true;
					if (suContent1){
						if (su_openCollabs1 == true){
							console.log(title1 + "Collab, huh?");
						}
					}
				}
				*/
			}
		})

		// 8 Newgrounds
		wbgls1.get("ls_turnoff_ng1").then((result) => {
			let turnoff8 = result.ls_turnoff_ng1;
			if (turnoff8 == true) {
				// Home/Main
				if (site1.includes("newgrounds.com")) {
					if (ngSearch1) {
						ngSearch1.remove();
						ngFooter1.remove();
						console.log(title1 + message3)
					} else {
						console.log(title1 + message2);
					}
					
					if (ngContents2) {
						ngContents2.remove();
						ngContents3.innerHTML = ngInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				
				// Movies
				if (site2.includes("www.newgrounds.com/movies")) {
					if (ngContents4) {
						ngContents4.innerHTML = ngInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				
				// Games
				if (site2.includes("www.newgrounds.com/games")) {
					if (ngContents4) {
						ngContents4.innerHTML = ngInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				
				// Audio
				if (site2.includes("www.newgrounds.com/audio")) {
					if (ngContents4) {
						ngContents4.innerHTML = ngInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				
				// Art
				if (site2.includes("www.newgrounds.com/art")) {
					if (ngContents4) {
						ngContents4.innerHTML = ngInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				
				// Portal
				if (site2.includes("www.newgrounds.com/portal")) {
					if (ngContents5) {
						ngContents5.innerHTML = ngInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				
				// Community
				if (site2.includes("www.newgrounds.com/community")) {
					if (ngContents1) {
						ngContents1.innerHTML = ngInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				
				// Feed
				if (site2.includes("www.newgrounds.com/social")) {
					if (ngContents6) {
						ngContents6.innerHTML = ngInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				
				// Search
				if (site2.includes("www.newgrounds.com/search/")) {
					if (ngSearch2) {
						ngSearch2.innerHTML = ngInnerHTML1;
						console.log(title1 + message3);
					} else {
						console.log(title1 + message2);
					}
				}
				
				/*
				// Users
				if (site2.includes("https://" + Math.random(Math.floor()) + ".newgrounds.com")){
					if (ngContents3) {
						ngContents7.remove();
						ngContents3.innerHTML = ngInnerHTML1;
						console.log(title1 + message1);
					} else {
						console.log(title1 + message2);
					}
				}
				*/
			}
		})
		// Advanced settings
		// Access restriction mode
		// 1 YouTube
		wbgls1.get(["ls_turnoff_yt2"]).then((result) => {
			let rm_turnoff1 = result.ls_turnoff_yt2;
			if (rm_turnoff1 == true) {
				if (site1.includes("youtube.com")) {
					if (rmBody1) {
						rmBody1.innerHTML = rm_innerhtml1;
						rmHead1.innerHTML = rm_innerhtml2;
					} else {
						console.log(title1 + "Restriction not working. :(");
					}
				}
			}
		})
		
		// 2 Twitter/X
		wbgls1.get(["ls_turnoff_twitter2"]).then((result) => {
			let rm_turnoff2 = result.ls_turnoff_twitter2;
			if (rm_turnoff2 == true) {
				if (site1.includes("x.com")) {
					if (rmBody1) {
						rmBody1.innerHTML = rm_innerhtml1;
						rmHead1.innerHTML = rm_innerhtml2;
					} else {
						console.log(title1 + "Restriction not working. :(");
					}
				}
			}
		})
		
		// 3 Facebook
		wbgls1.get(["ls_turnoff_fb2"]).then((result) => {
			let rm_turnoff3 = result.ls_turnoff_fb2;
			if (rm_turnoff3 == true) {
				if (site1.includes("facebook.com")) {
					if (rmBody1) {
						rmBody1.innerHTML = rm_innerhtml1;
						rmHead1.innerHTML = rm_innerhtml2;
					} else {
						console.log(title1 + "Restriction not working. :(");
					}
				}
			}
		})
		
		// 4 Instagram
		wbgls1.get(["ls_turnoff_ig2"]).then((result) => {
			let rm_turnoff4 = result.ls_turnoff_ig2;
			if (rm_turnoff4 == true) {
				if (site1.includes("instagram.com")) {
					if (rmBody1) {
						rmBody1.innerHTML = rm_innerhtml1;
						rmHead1.innerHTML = rm_innerhtml2;
					} else {
						console.log(title1 + "Restriction not working. :(");
					}
				}
			}
		})
		
		// 5 TikTok
		wbgls1.get(["ls_turnoff_tiktok2"]).then((result) => {
			let rm_turnoff5 = result.ls_turnoff_tiktok2;
			if (rm_turnoff5 == true) {
				if (site1.includes("tiktok.com")) {
					if (rmBody1) {
						rmBody1.innerHTML = rm_innerhtml1;
						rmHead1.innerHTML = rm_innerhtml2;
					} else {
						console.log(title1 + "Restriction not working. :(");
					}
				}
			}
		})
		
		// 6 DeviantArt
		wbgls1.get(["ls_turnoff_da2"]).then((result) => {
			let rm_turnoff6 = result.ls_turnoff_da2;
			if (rm_turnoff6 == true) {
				if (site1.includes("deviantart.com")) {
					if (rmBody1) {
						rmBody1.innerHTML = rm_innerhtml1;
						rmHead1.innerHTML = rm_innerhtml2;
					} else {
						console.log(title1 + "Restriction not working. :(");
					}
				}
			}
		})
		
		// 7 Sketchers United
		wbgls1.get(["ls_turnoff_su2"]).then((result) => {
			let rm_turnoff7 = result.ls_turnoff_su2;
			if (rm_turnoff7 == true) {
				if (site1.includes("sketchersunited.org")) {
					if (rmBody1) {
						rmBody1.innerHTML = rm_innerhtml1;
						rmHead1.innerHTML = rm_innerhtml2;
					} else {
						console.log(title1 + "Restriction not working. :(");
					}
				}
			}
		})
		
		// 8 Newgrounds
		wbgls1.get(["ls_turnoff_ng2"]).then((result) => {
			let rm_turnoff8 = result.ls_turnoff_ng2;
			if (rm_turnoff8 == true) {
				if (site1.includes("newgrounds.com")) {
					if (rmBody1) {
						rmBody1.innerHTML = rm_innerhtml1;
						rmHead1.innerHTML = rm_innerhtml2;
					} else {
						console.log(title1 + "Restriction not working. :(");
					}
				}
			}
		})
		
		// 9 Discord
		wbgls1.get(["ls_turnoff_discord2"]).then((result) => {
			let rm_turnoff9 = result.ls_turnoff_discord2;
			if (rm_turnoff9 == true) {
				if (site1.includes("discord.com")) {
					if (rmBody1) {
						rmBody1.innerHTML = rm_innerhtml1;
						rmHead1.innerHTML = rm_innerhtml2;
					} else {
						console.log(title1 + "Restriction not working. :(");
					}
				}
			}
		})
		
		// 10 Roblox
		wbgls1.get(["ls_turnoff_roblox2"]).then((result) => {
			let rm_turnoff10 = result.ls_turnoff_roblox2;
			if (rm_turnoff10 == true) {
				if (site1.includes("roblox.com")) {
					if (rmBody1) {
						rmBody1.innerHTML = rm_innerhtml1;
						rmHead1.innerHTML = rm_innerhtml2;
					} else {
						console.log(title1 + "Restriction not working. :(");
					}
				}
			}
		})
		
		// 11 Reddit
		wbgls1.get(["ls_turnoff_reddit2"]).then((result) => {
			let rm_turnoff11 = result.ls_turnoff_reddit2;
			if (rm_turnoff11 == true) {
				if (site1.includes("reddit.com")) {
					if (rmBody1) {
						rmBody1.innerHTML = rm_innerhtml1;
						rmHead1.innerHTML = rm_innerhtml2;
					} else {
						console.log(title1 + "Restriction not working. :(");
					}
				}
			}
		})
		
		// 12 4chan
		wbgls1.get(["ls_turnoff_4chan2"]).then((result) => {
			let rm_turnoff12 = result.ls_turnoff_4chan2;
			if (rm_turnoff12 == true) {
				if (site1.includes("4chan.org")) {
					if (rmBody1) {
						rmBody1.innerHTML = rm_innerhtml1;
						rmHead1.innerHTML = rm_innerhtml2;
					} else {
						console.log(title1 + "Restriction not working. :(");
					}
				}
			}
		})
	} else if (srm1 == 1) {
		// Super access restriction mode (W.I.P.)
		console.log(title1 + message5);
		
	}
})