var LP_XUID_KEY = "admage_ukagency_xuid";

var admageFullUrl = window.location.href;
var admageParamsUrl = admageFullUrl.split("?");
var admageBuyerXuid = getQueryVariable(LP_XUID_KEY, admageParamsUrl[1]);
var admageOldCookie = readCookieAdmage(LP_XUID_KEY);

console.log(admageBuyerXuid);


addOnloadEventAdmage(writeCookieAdmage);
 
function addOnloadEventAdmage(func) {
    try {
        window.addEventListener("load", func, false);
    } catch (e) {
        // IE蟇ｾ蠢�
        window.attachEvent("onload", func);
    }
}

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(searchString, position) {
		position = position || 0;
		return this.indexOf(searchString, position) === position;
	};
}

var writeCookieAdmage = (function (name, addValue, oldCookie) {
	var COOKIE_EXPIRE = 90;
	var ELEM_SEP_SPLIT = "|";
	var VAL_SEP_SPLIT = ",";
	var SAVE_MAX = 20;
	
	if (!addValue) return;
	
	var buyerXuidArr = addValue.split(VAL_SEP_SPLIT);
	if (buyerXuidArr.length != 4) return;

	var cookieVal = addValue;
	if (oldCookie) {
		var arr = oldCookie.split(ELEM_SEP_SPLIT);
		var prefix = buyerXuidArr[0] + VAL_SEP_SPLIT; 	//_buyer
//		prefix += buyerXuidArr[1] + VAL_SEP_SPLIT; 		//_campaign
//		prefix += buyerXuidArr[2] + VAL_SEP_SPLIT; 		//_article
		for(var i = 0, cnt = 1; i < arr.length; i++) {
			if (arr[i].startsWith(prefix)) continue;
			cookieVal += ELEM_SEP_SPLIT;
			cookieVal += arr[i];
			cnt++;
			if(cnt >= SAVE_MAX) break;
		}
	}
	var	date = new Date();
	date.setTime(date.getTime() + (COOKIE_EXPIRE*24*60*60*1000));
	var expires = "; expires="+date.toGMTString(); // IE11 蟇ｾ蠢�
	if (cookieVal) {
		document.cookie = name + "=" + cookieVal + expires + "; max-age=" + COOKIE_EXPIRE*24*60*60 + "; path=/";
	}
}(LP_XUID_KEY, admageBuyerXuid, admageOldCookie));


function readCookieAdmage(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return "";
}

function getQueryVariable(variable, query) {
	if (!query || 0 === query.length) return "";
	var vars = query.split("&");
	for (var i=0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return "";
}

function findXuidByBuyerAdmage(lpXuidKey, buyerId) {
	const ELEM_SEP_SPLIT = "|";
	const VAL_SEP_SPLIT = ",";
	var readedCookieVal = readCookieAdmage(lpXuidKey);
	
	if (!readedCookieVal || !buyerId) return "";
	if (typeof(campaignId) == "undefined" || !campaignId) campaignId = 0;
	if (typeof(articleId) == "undefined" || !articleId) articleId = 0;
	if (typeof(cvpointId) == "undefined" || !cvpointId) cvpointId = 0;
	
	var checkVal = "";
	if (cvpointId) {
		if (campaignId > 0) {
			checkVal = buyerId + VAL_SEP_SPLIT + campaignId;
		} else {
			checkVal = buyerId + VAL_SEP_SPLIT;
		}
	} else if (articleId) {
		checkVal = buyerId + VAL_SEP_SPLIT + articleId;
	} else {
		checkVal = buyerId + VAL_SEP_SPLIT;
	}
	
	var arrElement = readedCookieVal.split(ELEM_SEP_SPLIT);
	for(var i = 0; i < arrElement.length; i++) {
		var arrVal = arrElement[i].split(VAL_SEP_SPLIT);
		if (cvpointId) {
			var cookieCheckVal = "";
			if (campaignId > 0) {
				cookieCheckVal = arrVal[0] + VAL_SEP_SPLIT + arrVal[1]; // buyer+campaign
			} else {
				cookieCheckVal = arrVal[0] + VAL_SEP_SPLIT; // buyer
			}
			if (checkVal == cookieCheckVal) return arrVal[3];
			continue;
		} else if (articleId) {
			var cookieCheckVal = arrVal[0] + VAL_SEP_SPLIT + arrVal[2]; // buyer+article
			if (checkVal == cookieCheckVal) return arrVal[3];
			continue;
		} else {
			var cookieCheckVal = arrVal[0] + VAL_SEP_SPLIT; // buyer
			if (checkVal == cookieCheckVal) return arrVal[3];
			continue;
		}
	}
	return "";
}





$(function () {

// URL が「http://www.example.com?lib=jquery&ver=3」の場合

// console.log(getParam('lib')); //「jquery」を出力
// console.log(getParam('ver')); // 「3」を出力



// var buyer = getParam('_buyer')




$(".sanka_btn").click(function(){
		console.log("admage_cv('admage_ukagency_xuid', 'https://ad.skyflag.jp/ad', '_buyer=522&_article=7468&_price={price}&_buid={buid}')");
		admage_cv('admage_ukagency_xuid', 'https://ad.skyflag.jp/ad', '_buyer=522&_article=7468&_price={price}&_buid={buid}');
});




/**
 * Get the URL parameter value
 *
 * @param  name {string} パラメータのキー文字列
 * @return  url {url} 対象のURL文字列（任意）
 */
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



	
});