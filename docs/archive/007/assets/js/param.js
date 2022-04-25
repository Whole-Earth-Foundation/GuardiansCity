
	
var prm;

function retrieveGETqs() {

	var query = window.location.search.substring(1);
	return query;
	 /* 引数がない時は処理しない */
	if (!query) return false;

}

$(function(){
	jQuery('.url').click(function() {

	//リンク先を取得
	var target_url = $(this).attr("href");
	
	//パラメータを取得
	var str = retrieveGETqs();
	prm = decodeURIComponent(str);
	
		if (prm) {


			$(this).attr('href', target_url + '?' + prm);	
	    // //target_urlに'？'を含む場合
	    //   if (target_url.indexOf('?') != -1) {
	    // //追加パラメータの先頭文字列を'&'に置換
	    //   $(this).attr('href', target_url + '&' + prm);
	    //     } else {
	    //       $(this).attr('href', target_url + '?' + prm);
	    //             }
	    }	
  	});
});