function init() {
		//var url = window.location.toString();
		var url = "https://www.google.com/search?sclient=psy-ab&site=&source=hp&btnG=Search&q=JavaScript";

		document.getElementById("url_another_txt").innerText = url;

		var url_query_string = url.split("?");
		document.getElementById("url_query_string_txt").innerText = url_query_string;

		var url_params = url_query_string[1].split("&");
		document.getElementById("url_params_txt").innerText = url_params;

		var param_items_arr = [];
		for( var item in url_params) {
			param_items_arr[item] = url_params[item].split("=");
		}
		
		var params_items_json = JSON.stringify(param_items_arr);
		document.getElementById("url_params_json_txt").innerText = params_items_json; 

		var date = new Date();
		date.setTime( date.getTime() +  (72*60*60*1000) );
		var expires = date.toGMTString();
		document.cookie = "COOKIE_JSON =" + params_items_json + " " + expires + ";path = /";
		var params_cookie_str = document.cookie;	
		document.getElementById("url_params_cookie_txt").innerText = params_cookie_str; 

		localStorage.setItem( 'params_in_json', params_items_json );
		var ls_txt = localStorage.getItem( 'params_in_json');

		document.getElementById("url_params_localStorage_txt").innerText = ls_txt; 
	}

	function setUpCookie(params_json, hours) {
		var date = new Date();
		date.setTime( date.getTime() +  (hours*60*60*1000) );
		var expires = date.toGMTString();
		document.cookie = params_json + " " + expires + ";path = /";
		return unescape(document.cookie);
	}