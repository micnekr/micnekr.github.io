(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{200:function(t,e,n){var content=n(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("ca8c1ffa",content,!0,{sourceMap:!1})},201:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={projects:[{name:"AFINN",libraries:["p5.js","p5.dom.js"],img:"afinn.gif",sketchDisplay:{title:"AFINN sentiment analysis",desc:"This page runs a sentiment analysis algorithm for finding the mood of the given text named AFINN based on a table of words and their scores. The final score is a sum of all scores of words found in text. Comparative score is a mean score of each word in the text."},htmlComponent:"sentiment-analysis-textbox"},{name:"collatz",libraries:["p5.js"],img:"collatz.gif",sketchDisplay:{title:"Collatz conjecture visualisation",desc:"Test"}},{name:"maze",libraries:["p5.js","p5.dom.js"],img:"collatz.gif",sketchDisplay:{title:"A* maze solving algorithm and a backtracking maze algorithm",desc:"Test"},htmlComponent:"maze-settings"}]}},202:function(t,e,n){"use strict";n.r(e);var r={props:["prefix","postfix","sketchName","sketchData"]},o=(n(203),n(21)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"card"},[n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t._v("\n        "+t._s(t.sketchData.sketchDisplay.title)+"\n      ")])]),t._v(" "),n("nuxt-link",{staticClass:"card-contents",class:t.sketchData.noLink?"nostyle":"",attrs:{to:{path:t.sketchData.link||t.prefix+t.sketchData.name+t.postfix}}},[n("div",{staticClass:"card-sketch"},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image"},[n("img",{attrs:{src:t.sketchData.img,alt:"Sketch demonstration"}})])])]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[t._v("\n          "+t._s(t.sketchData.sketchDisplay.desc)+"\n        ")])])])],1)])}),[],!1,null,"b21b01d6",null);e.default=component.exports},203:function(t,e,n){"use strict";n(200)},204:function(t,e,n){(e=n(35)(!1)).push([t.i,".card[data-v-b21b01d6]{margin-top:10px;margin-bottom:10px}a.nostyle[data-v-b21b01d6]{text-decoration:none!important;cursor:inherit}a[data-v-b21b01d6]{color:inherit}",""]),t.exports=e},227:function(t,e,n){"use strict";n.r(e);var r=n(202),o=n(201);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l,f=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}(o.a.projects);try{for(f.s();!(l=f.n()).done;){var d=l.value;d.img="/img/jsProjectsGifs/"+d.img}}catch(t){f.e(t)}finally{f.f()}var m={components:{Sketch:r.default},data:function(){return{prefix:"/projectPages/",postfix:"",sketches:o.a.projects}}},h=n(21),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"columns is-multiline is-centered"},t._l(t.sketches,(function(e,r){return n("sketch",{key:r,staticClass:"column is-5",attrs:{prefix:t.prefix,postfix:t.postfix,"sketch-name":e.name,"sketch-data":e}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Sketch:n(202).default})}}]);