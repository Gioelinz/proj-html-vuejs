(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],f=0,A=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&A.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(A.length)A.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08de":function(t,e,n){"use strict";n("7ef1")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{nav:t.navElements}})],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"container h-100"},[n("div",{staticClass:"h-100 d-flex justify-content-between align-items-center"},[t._m(0),n("nav",[n("ul",{staticClass:"nav"},[t._l(t.nav,(function(e,r){return n("li",{key:r},[n("a",{staticClass:"item-nav",attrs:{href:"#"}},[t._v(t._s(e.text))])])})),t._m(1),t._m(2)],2)])])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"m-0"},[r("img",{attrs:{src:n("9d64"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"item-nav",attrs:{href:"#"}},[t._v("|")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"item-nav",attrs:{href:"#"}},[n("i",{staticClass:"fa-solid fa-magnifying-glass"})])])}],c={name:"Header",props:["nav"]},l=c,u=(n("08de"),n("2877")),f=Object(u["a"])(l,s,o,!1,null,"49dd8a62",null),A=f.exports,p={name:"App",components:{Header:A},data:function(){return{navElements:[{text:"HOME"},{text:"PAGES"},{text:"PROGRAM"},{text:"TICKETS"},{text:"SPEAKERS"},{text:"PAPERS"},{text:"BLOG"},{text:"SHORTCODES"}]}}},d=p,g=(n("5c0b"),Object(u["a"])(d,a,i,!1,null,null,null)),v=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7ef1":function(t,e,n){},"9c0c":function(t,e,n){},"9d64":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAAUCAQAAAB4kVrPAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAABc1JHQgHZySx/AAACJklEQVR42u2ZW5XDIBCGsYAFLOCAg4VYwEIs1AIWagELWIgFLOye7DZcwgyXJulmmx7eKPwzzJdhgBJBPq2r0WN0iZDiq9CMHxr6wnQJjCNiRNVwR6Ax2vepRuUwQ0c6yvdOPoxLDwe9MICHUtz979Z7tDRTjKKs+39eEAoIak2ZRT0UCJLK7LnkC8dA0AhCgMGvAIJHC+5RDjkxZnAm0J6pgqDCgjZdhOJNQVDhwC+2rpyHXQP5QJK5twqIO2rV7gmCCvloY2Rg6eObQGiv89taQdhsCe3KOpkbkE6IvbkNBRBDNG58xMllece9J3Y1em607j+phnULiLH51BCr39D5LcosqS0KzAeSbTIMBWEAm0M0k6BlO//wCv4/A0ICObQfCAWefHqUQ04w/31OqL1lD6AgCIaE3KLhfiGIci3BdkLTCMIlocEWUlIOwbsj+QCtRoMgZKTVFtI2EJn/5wORl9B+Zb0aMTWtRgGKWMCH64AIJbRfmWUhxu3ZoiIGQl0JhMs2p3ZlXcyH2B6LzkD/bGs69tQ031gduPgeZVbMh3Q1sgCCnrlYHwuCFxR6lE3xGpmuZizk2ImPr89f6GjzE4ddnfD7lXtArMu7Adc4HyCwC10viMz/Y0FgV/3935rkRhDpe1L/E8eWGvEz9qwg4DQ+DgRJinb/o98bg4gLIn8BiNL64WdwVqlNbwOCZ3/oHAsi6Nf+GDLgSWw3EJ/2h3+VfgOpk6/rGHsUsgAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.e5e5acf2.js.map