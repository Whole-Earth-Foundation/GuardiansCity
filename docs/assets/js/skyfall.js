$(function () {

// URL が「http://www.example.com?lib=jquery&ver=3」の場合

// console.log(getParam('lib')); //「jquery」を出力
// console.log(getParam('ver')); // 「3」を出力



// var buyer = getParam('_buyer')




$(".sanka_btn").click(function(){
        console.log("admage_cv('admage_ukagency_xuid', 'https://ad.skyflag.jp/ad','_buyer=522&_cvpoint=8&_price=&_buid=')");
        admage_cv('admage_ukagency_xuid', 'https://ad.skyflag.jp/ad','_buyer=522&_cvpoint=8&_price=&_buid=');
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