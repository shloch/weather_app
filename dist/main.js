!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=function(){const e={};return e.getWeatherInfos=function(e,t="metric"){fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=617ec88a7d93c5b6ace5a90f054e9838&units=${t}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){var n;"metric"==t?(n=e.main.temp,document.querySelector(".flash").innerHTML="",document.querySelector(".info-1").innerHTML=n+"  &#8451 ",function(e){let t="assets/cold-weather.jpg",n="assets/warm-weather.jpg",r="assets/hot-weather.jpg",o=document.querySelector("body");o.style.backgroundImage=e<16?"url("+t+")":e<29?"url("+n+")":e>29?"url("+r+")":"url("+n+")"}(e.main.temp)):function(e){document.querySelector(".flash").innerHTML="",document.querySelector(".info-2").innerHTML=e+" &#8457 "}(e.main.temp),function(e,t,n){let r=`<h2> Location : ${e} </h2> <br/>\n    Description : ${t} <br/>\n    Country : ${n}`;document.querySelector(".flash").innerHTML=r}(e.name,e.weather.description,e.sys.country)})).catch((function(){var e;throw e="Whoops! ....No such location",document.querySelector("body").style.backgroundImage="none",document.querySelector(".info-1").innerHTML="",document.querySelector(".info-2").innerHTML="",document.querySelector(".flash").innerHTML=e+"<br/><br/>",new Error("Whoops! ....No such location")}))},e}();document.querySelector("#weather-location-form").addEventListener("submit",e=>{const t=document.querySelector('#weather-location-form [name="location"]').value;r.getWeatherInfos(t),r.getWeatherInfos(t,"imperial"),e.preventDefault()})}]);