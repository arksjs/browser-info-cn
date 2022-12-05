!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).BrowserInfo=r()}(this,(function(){"use strict";var e,r=[{reg:/MicroMessenger\/([\w\.]+).+WindowsWechat/i,name:"Windows WeChat"},{reg:"MicroMessenger",name:"WeChat"},{reg:/edg(?:e|ios|a)?\/([\w\.]+)/i,name:"Edge"},{reg:/\b(?:crmo|crios)\/([\w\.]+)/i,name:"Chrome"},{reg:"SogouMSE",name:"Mobile SogouBrowser"},{reg:"MQQBrowser",name:"Mobile QQBrowser"},{reg:"QQBrowser"},{reg:"UCBrowser"},{reg:"MiuiBrowser"},{reg:"HuaweiBrowser"},{reg:"HeyTapBrowser"},{reg:"VivoBrowser"},{reg:"SamsungBrowser"},{reg:"MetaSr",name:"SogouBrowser"},{reg:/ba?idubrowser[\/ ]?([\w\.]+)/i,name:"BaiduBrowser"},{reg:"baiduboxapp",name:"BaiduBrowser"},{reg:"FireFox"},{reg:"Opera"},{reg:/Mobile.+OPR\/([\w\.]+)/i,name:"Opera Mini"},{reg:"OPR",name:"Opera"},{reg:"Chrome"},{reg:/version\/([\d.]+).*safari/i,name:"Safari"},{reg:/lbbrowser/i,name:"LieBaoBrowser"}],o={"mobile sogoubrowser":"搜狗浏览器移动版",qqbrowser:"QQ浏览器","mobile qqbrowser":"QQ浏览器移动版",sogoubrowser:"搜狗浏览器",wechat:"微信","windows wechat":"微信Windows版",ucbrowser:"UC浏览器",miuibrowser:"MIUI浏览器",huaweibrowser:"华为浏览器",heytapbrowser:"OPPO浏览器",vivobrowser:"vivo浏览器",baidubrowser:"百度浏览器",liebaobrowser:"猎豹浏览器"},n=(e={},[["nt 5.0","2000"],["nt 5.1","XP"],["nt 5.2","2003"],["nt 6.0","Vista"],["nt 6.1","7"],["nt 6.2","8"],["nt 6.3","8.1"],["nt 6.4","10"],["nt 10.0","10"],["arm","RT"]].forEach((function(r){var o=r[0],n=r[1];e["windows ".concat(o)]="Windows ".concat(n)})),e),i=[["windows phone","Windows Phone"],["win32",n],["windows",n],["ipad","iOS"],["iphone","iOS"],["macintosh","macOS"],["macIntel","macOS"],["mac","macOS"],["linux",{harmonyos:"HarmonyOS",android:"Android",linux:"Linux"}],["x11","Unix"]];return function(e){for(var n,a="",s="",t="",w="",d=e.toLowerCase(),g=0;g<i.length;g++){var c=i[g][0],f=i[g][1];if(-1!==d.indexOf(c)){if("string"==typeof f)a=f;else for(var m in f)if(f.hasOwnProperty(m)&&d.indexOf(m)>-1){a=f[m];break}break}}if("Windows 10"===a)try{navigator.userAgentData.getHighEntropyValues(["platformVersion"]).then((function(e){if("Windows"===navigator.userAgentData.platform){var r=parseInt(e.platformVersion.split(".")[0]);r>=13&&(a="Windows 11")}}))}catch(e){}if("iOS"===(s=0===a.indexOf("Windows")?0===a.indexOf("Windows Phone")?a:"Windows":a)?((n=/(Version)[\/]([\d.]+)/i.exec(e))||(n=/(OS)[\s]([\d_]+)/i.exec(e)))&&(a+=" ".concat(parseInt(n[2]))):"Android"===s&&(n=/(Android)[\s]([\d.]+)/i.exec(e))&&(a+=" ".concat(parseInt(n[2]))),0===a.indexOf("Windows")&&((n=/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i.exec(e))?(t="IE",w=parseInt(n[1]).toString()):(n=/ms(ie)\s([\w.]+)/i.exec(e))&&(t="IE",w=parseInt(n[2]).toString())),!t)for(g=0;g<r.length;g++){var b=r[g],u=b.reg,p=b.name,l=2;if("string"==typeof u?n=new RegExp("("+u.toLowerCase()+")[\\/\\s]([\\w.]+)","i").exec(e):(n=u.exec(e),l=1),n){t=p||n[1]||"",n[l]&&(w=parseInt(n[l]).toString());break}}var h=t,x=w;return t?(o[t.toLowerCase()]&&(h=o[t.toLowerCase()]),w?(w="".concat(t," ").concat(w),x="".concat(h," ").concat(x)):(w=t,x=h)):w=t="unknown",{platform:s,system:a,browser:t,browserVersion:w,browserCN:h,browserVersionCN:x}}}));
