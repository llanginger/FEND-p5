!function(e){"use strict";var n=function(n,t,o){function i(e){return d.body?e():void setTimeout(function(){i(e)})}function r(){a.addEventListener&&a.removeEventListener("load",r),a.media=o||"all"}var d=e.document,a=d.createElement("link"),l;if(t)l=t;else{var s=(d.body||d.getElementsByTagName("head")[0]).childNodes;l=s[s.length-1]}var f=d.styleSheets;a.rel="stylesheet",a.href=n,a.media="only x",i(function(){l.parentNode.insertBefore(a,t?l:l.nextSibling)});var u=function(e){for(var n=a.href,t=f.length;t--;)if(f[t].href===n)return e();setTimeout(function(){u(e)})};return a.addEventListener&&a.addEventListener("load",r),a.onloadcssdefined=u,u(r),a};"undefined"!=typeof exports?exports.loadCSS=n:e.loadCSS=n}("undefined"!=typeof global?global:this);