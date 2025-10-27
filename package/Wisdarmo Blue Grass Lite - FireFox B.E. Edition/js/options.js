// Core
const title1 = "WBG: "

const wbgls1 = browser.storage.local

const resetsettings1 = document.getElementById("reset-settings")

// Starter
wbgls1.get(["ls_wbgstarter1"]).then((result) => {
	let wbgstarter1 = result.ls_wbgstarter1;
	if (wbgstarter1 != true) {
		console.log(title1 + "LS starter undetected, LS's are now added.");
		// Regular option
		wbgls1.set({ "ls_wbgstarter1": true });
		wbgls1.set({ "ls_wbgswitch1": 0 });
		wbgls1.set({ "ls_turnoff_yt1": false });
		//wbgls1.set({ "ls_turnoff_ig1": true });
		wbgls1.set({ "ls_turnoff_su1": true });
		wbgls1.set({ "ls_turnoff_ng1": false });
		
		// Advanced option
		wbgls1.set({ "ls_turnoff_yt2": false });
		wbgls1.set({ "ls_turnoff_twitter2": false });
		wbgls1.set({ "ls_turnoff_fb2": false });
		wbgls1.set({ "ls_turnoff_ig2": false });
		wbgls1.set({ "ls_turnoff_tiktok2": false });
		wbgls1.set({ "ls_turnoff_da2": false });
		wbgls1.set({ "ls_turnoff_su2": false });
		wbgls1.set({ "ls_turnoff_ng2": false });
		wbgls1.set({ "ls_turnoff_discord2": false });
		wbgls1.set({ "ls_turnoff_roblox2": false });
		wbgls1.set({ "ls_turnoff_reddit2": false });
		wbgls1.set({ "ls_turnoff_4chan2": false });
	} else {
		console.log(title1 + "LS starter detected!");
	}
})

resetsettings1.onclick = function() {
	// Regular option
	wbgls1.remove([ "ls_wbgstarter1" ]);
	wbgls1.remove([ "ls_wbgswitch1" ]);
	wbgls1.remove([ "ls_turnoff_yt1" ]);
	//wbgls1.remove([ "ls_turnoff_ig1" ]);
	wbgls1.remove([ "ls_turnoff_su1" ]);
	wbgls1.remove([ "ls_turnoff_ng1" ]);
	
	// Advanced option
	wbgls1.remove([ "ls_turnoff_yt2" ]);
	wbgls1.remove([ "ls_turnoff_twitter2" ]);
	wbgls1.remove([ "ls_turnoff_fb2" ]);
	wbgls1.remove([ "ls_turnoff_ig2" ]);
	wbgls1.remove([ "ls_turnoff_tiktok2" ]);
	wbgls1.remove([ "ls_turnoff_da2" ]);
	wbgls1.remove([ "ls_turnoff_su2" ]);
	wbgls1.remove([ "ls_turnoff_ng2" ]);
	wbgls1.remove([ "ls_turnoff_discord2" ]);
	wbgls1.remove([ "ls_turnoff_roblox2" ]);
	wbgls1.remove([ "ls_turnoff_reddit2" ]);
	wbgls1.remove([ "ls_turnoff_4chan2" ]);
	window.location.reload();
}

// Regular Options
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
*/
// 4 Instragram
let checkbox4 = document.getElementById("turnoff_ig1");

wbgls1.get(["ls_turnoff_ig1"]).then((result) => {
	checkbox4.checked = result.ls_turnoff_ig1;
})
/*
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

// Advenced Options
// Access restriction mode
/*
const rm_checkbox_starter = document.getElementById("turnon_rm1");

wbgls1.get(["ls_wbgswitch1"]).then((result) => {
	rm_checkbox_starter.checked = result.ls_wbgswitch1;
})

rm_checkbox_starter.onclick = function() {
	if (rm_checkbox_starter.checked == true){
		wbgls1.set({ "ls_wbgswitch1": 1 })
		console.log(title1 + "Restriction mode is on!");
	} else {
		wbgls1.set({ "ls_wbgswitch1": 0 })
		console.log(title1 + "Restriction mode is off!");
	}
}
*/
// Fisrt
// 1 YouTube
const rm_checkbox1 = document.getElementById("turnoff_yt2");

wbgls1.get(["ls_turnoff_yt2"]).then((result) => {
	rm_checkbox1.checked = result.ls_turnoff_yt2;
})

// 2 Twitter/X
const rm_checkbox2 = document.getElementById("turnoff_twitter2");

wbgls1.get(["ls_turnoff_twitter2"]).then((result) => {
	rm_checkbox2.checked = result.ls_turnoff_twitter2;
})

// 3 Facebook
const rm_checkbox3 = document.getElementById("turnoff_fb2");

wbgls1.get(["ls_turnoff_fb2"]).then((result) => {
	rm_checkbox3.checked = result.ls_turnoff_fb2;
})

// 4 Instagram
const rm_checkbox4 = document.getElementById("turnoff_ig2");

wbgls1.get(["ls_turnoff_ig2"]).then((result) => {
	rm_checkbox4.checked = result.ls_turnoff_ig2;
})

// 5 TikTok
const rm_checkbox5 = document.getElementById("turnoff_tiktok2");

wbgls1.get(["ls_turnoff_tiktok2"]).then((result) => {
	rm_checkbox5.checked = result.ls_turnoff_tiktok2;
})

// 6 DeviantArt
const rm_checkbox6 = document.getElementById("turnoff_da2");

wbgls1.get(["ls_turnoff_da2"]).then((result) => {
	rm_checkbox6.checked = result.ls_turnoff_da2;
})

// 7 Sketchers United
const rm_checkbox7 = document.getElementById("turnoff_su2");

wbgls1.get(["ls_turnoff_su2"]).then((result) => {
	rm_checkbox7.checked = result.ls_turnoff_su2;
})

// 8 Newgrounds
const rm_checkbox8 = document.getElementById("turnoff_ng2");

wbgls1.get(["ls_turnoff_ng2"]).then((result) => {
	rm_checkbox8.checked = result.ls_turnoff_ng2;
})

// 9 Discord
const rm_checkbox9 = document.getElementById("turnoff_discord2");

wbgls1.get(["ls_turnoff_discord2"]).then((result) => {
	rm_checkbox9.checked = result.ls_turnoff_discord2;
})

// 10 Roblox
const rm_checkbox10 = document.getElementById("turnoff_roblox2");

wbgls1.get(["ls_turnoff_roblox2"]).then((result) => {
	rm_checkbox10.checked = result.ls_turnoff_roblox2;
})

// 11 Reddit
const rm_checkbox11 = document.getElementById("turnoff_reddit2");

wbgls1.get(["ls_turnoff_reddit2"]).then((result) => {
	rm_checkbox11.checked = result.ls_turnoff_reddit2;
})

// 12 4chan
const rm_checkbox12 = document.getElementById("turnoff_4chan2");

wbgls1.get(["ls_turnoff_4chan2"]).then((result) => {
	rm_checkbox12.checked = result.ls_turnoff_4chan2;
})

// Second
// 1 YouTube
rm_checkbox1.onclick = function() {
	if (rm_checkbox1.checked == true){
		wbgls1.set({ "ls_turnoff_yt2": true });
		console.log(title1 + "YouTube access is off!");
	} else {
		wbgls1.set({ "ls_turnoff_yt2": false });
		console.log(title1 + "YouTube access is on!");
	}
}

// 2 Twitter/X
rm_checkbox2.onclick = function() {
	if (rm_checkbox2.checked == true){
		wbgls1.set({ "ls_turnoff_twitter2": true });
		console.log(title1 + "Twitter/X access is off!");
	} else {
		wbgls1.set({ "ls_turnoff_twitter2": false });
		console.log(title1 + "Twitter/X access is on!");
	}
}

// 3 Facebook
rm_checkbox3.onclick = function() {
	if (rm_checkbox3.checked == true){
		wbgls1.set({ "ls_turnoff_fb2": true });
		console.log(title1 + "Facebook access is off!");
	} else {
		wbgls1.set({ "ls_turnoff_fb2": false });
		console.log(title1 + "Facebook access is on!");
	}
}

// 4 Instagram
rm_checkbox4.onclick = function() {
	if (rm_checkbox4.checked == true){
		wbgls1.set({ "ls_turnoff_ig2": true });
		console.log(title1 + "Instagram access is off!");
	} else {
		wbgls1.set({ "ls_turnoff_ig2": false });
		console.log(title1 + "Instagram access is on!");
	}
}

// 5 TikTok
rm_checkbox5.onclick = function() {
	if (rm_checkbox5.checked == true){
		wbgls1.set({ "ls_turnoff_tiktok2": true });
		console.log(title1 + "TikTok access is off!");
	} else {
		wbgls1.set({ "ls_turnoff_tiktok2": false });
		console.log(title1 + "TikTok access is on!");
	}
}

// 6 DeviantArt
rm_checkbox6.onclick = function() {
	if (rm_checkbox6.checked == true){
		wbgls1.set({ "ls_turnoff_da2": true });
		console.log(title1 + "DeviantArt access is off!");
	} else {
		wbgls1.set({ "ls_turnoff_da2": false });
		console.log(title1 + "DeviantArt access is on!");
	}
}

// 7 Sketchers United
rm_checkbox7.onclick = function() {
	if (rm_checkbox7.checked == true){
		wbgls1.set({ "ls_turnoff_su2": true });
		console.log(title1 + "SU access is off!");
	} else {
		wbgls1.set({ "ls_turnoff_su2": false });
		console.log(title1 + "SU access is on!");
	}
}

// 8 Newgrounds
rm_checkbox8.onclick = function() {
	if (rm_checkbox8.checked == true){
		wbgls1.set({ "ls_turnoff_ng2": true });
		console.log(title1 + "Newgrounds access is off!(Please turn on, I beggin you. :'( )");
	} else {
		wbgls1.set({ "ls_turnoff_ng2": false });
		console.log(title1 + "Newgrounds access is on! (Thank you, now it's much better :) )");
	}
}

// 9 Discord
rm_checkbox9.onclick = function() {
	if (rm_checkbox9.checked == true){
		wbgls1.set({ "ls_turnoff_discord2": true });
		console.log(title1 + "Discord access is off!");
	} else {
		wbgls1.set({ "ls_turnoff_discord2": false });
		console.log(title1 + "Discord access is on!");
	}
}

// 10 Roblox
rm_checkbox10.onclick = function() {
	if (rm_checkbox10.checked == true){
		wbgls1.set({ "ls_turnoff_roblox2": true });
		console.log(title1 + "Roblox access is off!");
	} else {
		wbgls1.set({ "ls_turnoff_roblox2": false });
		console.log(title1 + "Roblox access is on!");
	}
}

// 11 Reddit
rm_checkbox11.onclick = function() {
	if (rm_checkbox11.checked == true){
		wbgls1.set({ "ls_turnoff_reddit2": true });
		console.log(title1 + "Reddit access is off!");
	} else {
		wbgls1.set({ "ls_turnoff_reddit2": false });
		console.log(title1 + "Reddit access is on!");
	}
}

// 12 4chan
rm_checkbox12.onclick = function() {
	if (rm_checkbox12.checked == true){
		wbgls1.set({ "ls_turnoff_4chan2": true });
		console.log(title1 + "4chan access is off!");
	} else {
		wbgls1.set({ "ls_turnoff_4chan2": false });
		console.log(title1 + "4chan access is on!");
	}
}