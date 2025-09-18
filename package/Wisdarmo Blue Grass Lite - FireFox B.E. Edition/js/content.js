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

// Second
// 1 YouTube
wbgls1.get(["ls_turnoff_yt1"]).then((result) => {
	let turnoff1 = result.ls_turnoff_yt1;
	if (turnoff1 = true) {
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

// 7.Sketchers United
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