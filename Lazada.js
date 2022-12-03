if (navigator.cookieEnabled)

  {var pop_under = null;var pop_cookie_name = "cok1215";var pop_timeout = 1320;function pop_cookie_enabled(){var is_enabled = false;if (!window.opera && !navigator.cookieEnabled)return is_enabled;if (typeof document.cookie == 'string')if (document.cookie.length == 0){document.cookie = "test";is_enabled = document.cookie == 'test';document.cookie = '';}

else{is_enabled = true;}return is_enabled;}function pop_getCookie(name){var cookie = " " + document.cookie;var search = " " + name + "=";var setStr = null;var offset = 0;var end = 0;if (cookie.length > 0){offset = cookie.indexOf(search);if (offset != -1){offset += search.length;end = cookie.indexOf(";", offset);if (end == -1){end = cookie.length;}

setStr = unescape(cookie.substring(offset, end));}}return(setStr);

}function pop_setCookie (name, value){document.cookie = name + "=" + escape(value) + "; expires=Friday,31-Dec-50 23:59:59 GMT; path=/;";

}function show_pop(){var pop_wnd = "";var fea_wnd = "scrollbars=1,resizable=1,toolbar=1,location=1,menubar=1,status=1,directories=0";var need_open = true;if (document.onclick_copy != null)document.onclick_copy();if (document.body.onbeforeunload_copy != null)document.body.onbeforeunload_copy();if (pop_under != null){if (!pop_under.closed)need_open = false;}if (need_open){if (pop_cookie_enabled()){val = pop_getCookie(pop_cookie_name);if (val != null){now = new Date();val2 = new Date(val);

utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());

utc2 = Date.UTC(val2.getFullYear(), val2.getMonth(), val2.getDate(), val2.getHours(), val2.getMinutes(), val2.getSeconds());

if ((utc1 - utc2)/1000 < pop_timeout*1)

{need_open = false;}}}}if (need_open){under = window.open(pop_wnd, "https://c.lazada.co.id/t/c.bYpPox.js", fea_wnd);under.blur();window.focus();if (pop_cookie_enabled()){now = new Date();pop_setCookie(pop_cookie_name, now);}}

}function pop_init(){var ver = parseFloat(navigator.appVersion);var ver2 = (navigator.userAgent.indexOf("Windows 95")>=0  navigator.userAgent.indexOf("Windows 98")>=0  navigator.userAgent.indexOf("Windows NT")>=0 )&&(navigator.userAgent.indexOf('Opera') == -1)&&(navigator.appName != 'Netscape') &&(navigator.userAgent.indexOf('MSIE') > -1) &&(navigator.userAgent.indexOf('SV1') > -1) &&(ver >= 4);

if (ver2){if (document.links){for (var i=0; i<document.links.length; i++){if (document.links[i].target != "_blank"){document.links[i].onclick_copy = document.links[i].onclick;document.links[i].onclick = show_pop;}}}}document.onclick_copy = document.onclick;document.onmouseup = show_pop;return true;}pop_init();}
