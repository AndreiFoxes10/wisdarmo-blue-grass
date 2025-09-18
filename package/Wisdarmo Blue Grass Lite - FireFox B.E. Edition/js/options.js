// Core
const title1 = "WBG: "

const wbgls1 = browser.storage.local

const resetsettings1 = document.getElementById("reset-settings")

// Starter
wbgls1.get(["ls_wbgstarter1"]).then((result) => {
	let wbgstarter1 = result.ls_wbgstarter1;
	if (wbgstarter1 != true) {
		console.log(title1 + "LS starter undetected, LS's are now added.");
		wbgls1.set({ "ls_wbgstarter1": true });
		wbgls1.set({ "ls_turnoff_yt1": true });
		wbgls1.set({ "ls_turnoff_su1": true });
		wbgls1.set({ "ls_turnoff_ng1": false });
	} else {
		console.log(title1 + "LS starter detected!");
	}
})

resetsettings1.onclick = function() {
	wbgls1.remove([ "ls_wbgstarter1" ]);
	wbgls1.remove([ "ls_turnoff_yt1" ]);
	wbgls1.remove([ "ls_turnoff_su1" ]);
	wbgls1.remove([ "ls_turnoff_ng1" ]);
	window.location.reload();
}

// First
// 1 YouTube
const checkbox1 = document.getElementById("turnoff_yt1");

wbgls1.get(["ls_turnoff_yt1"]).then((result) => {
	checkbox1.checked = result.ls_turnoff_yt1;
})
/*
// 2 Twitter/X
let checkbox2 = document.getElementById("turnoff_twitter1");

wbgls1.get(["ls_turnoff_twitter1"]).then((result) => {
	checkbox2.checked = result.ls_turnoff_twitter1;
})

// 3 Facebook
let checkbox3 = document.getElementById("turnoff_fb1");

wbgls1.get(["ls_turnoff_fb1"]).then((result) => {
	checkbox3.checked = result.ls_turnoff_fb1;
})

// 4 Instragram
let checkbox4 = document.getElementById("turnoff_ig1");

wbgls1.get(["ls_turnoff_ig1"]).then((result) => {
	checkbox4.checked = result.ls_turnoff_ig1;
})

// 5 TikTok
let checkbox5 = document.getElementById("turnoff_tiktok1");

wbgls1.get(["ls_turnoff_tiktok1"]).then((result) => {
	checkbox5.checked = result.ls_turnoff_tiktok1;
})

// 6 DeviantArt
let checkbox6 = document.getElementById("turnoff_da1");

wbgls1.get(["ls_turnoff_da1"]).then((result) => {
	checkbox6.checked = result.ls_turnoff_da1;
})
*/
// 7 Sketchers Unitet
const checkbox7 = document.getElementById("turnoff_su1");

wbgls1.get(["ls_turnoff_su1"]).then((result) => {
	checkbox7.checked = result.ls_turnoff_su1;
})

// 8 Newgrounds (Not necessary ¯\_(ツ)_/¯)
const checkbox8 = document.getElementById("turnoff_ng1");

wbgls1.get(["ls_turnoff_ng1"]).then((result) => {
	checkbox8.checked = result.ls_turnoff_ng1;
})

// Second
// 1 YouTube
checkbox1.onclick = function() {
	if (checkbox1.checked == true){
		wbgls1.set({ "ls_turnoff_yt1": true });
		console.log(title1 + "YouTube is off!");
	} else {
		wbgls1.set({ "ls_turnoff_yt1": false });
		console.log(title1 + "YouTube is on!");
	}
}
/*
// 2 Twitter/X
checkbox2.onclick = function() {
	if (checkbox2.checked == true){
		wbgls1.set({ "ls_turnoff_twitter1": true });
		console.log("YouTube is off!");
	} else {
		wbgls1.set({ "ls_turnoff_twitter1": false });
		console.log("YouTube is on!");
	}
}

// 3 Facebook
checkbox3.onclick = function() {
	if (checkbox3.checked == true){
		wbgls1.set({ "ls_turnoff_fb1": true });
		console.log("YouTube is off!");
	} else {
		wbgls1.set({ "ls_turnoff_fb1": false });
		console.log("YouTube is on!");
	}
}

// 4 Instagram
checkbox4.onclick = function() {
	if (checkbox4.checked == true){
		wbgls1.set({ "ls_turnoff_ig1": true });
		console.log("YouTube is off!");
	} else {
		wbgls1.set({ "ls_turnoff_ig1": false });
		console.log("YouTube is on!");
	}
}

// 5 TikTok
checkbox5.onclick = function() {
	if (checkbox5.checked == true){
		wbgls1.set({ "ls_turnoff_tiktok1": true });
		console.log("YouTube is off!");
	} else {
		wbgls1.set({ "ls_turnoff_tiktok1": false });
		console.log("YouTube is on!");
	}
}

// 6 DeviantArt
checkbox6.onclick = function() {
	if (checkbox6.checked == true){
		wbgls1.set({ "ls_turnoff_da1": true });
		console.log("YouTube is off!");
	} else {
		wbgls1.set({ "ls_turnoff_da1": false });
		console.log("YouTube is on!");
	}
}
*/
// 7 Sketchers United
checkbox7.onclick = function() {
	if (checkbox7.checked == true){
		wbgls1.set({ "ls_turnoff_su1": true });
		console.log(title1 + "SU is off!");
	} else {
		wbgls1.set({ "ls_turnoff_su1": false });
		console.log(title1 + "SU is on!");
	}
}

// 8 Newgrounds (Not necessary ¯\_(ツ)_/¯)
checkbox8.onclick = function() {
	if (checkbox8.checked == true){
		wbgls1.set({ "ls_turnoff_ng1": true });
		console.log(title1 + "Newgrounds is off!");
	} else {
		wbgls1.set({ "ls_turnoff_ng1": false });
		console.log(title1 + "Newgrounds is on!");
	}
}
