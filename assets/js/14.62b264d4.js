(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{204:function(t,n,r){"use strict";var c=r(10),e=r(86)(!0);c(c.P,"Array",{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),r(87)("includes")},205:function(t,n,r){"use strict";var c=r(10),e=r(206);c(c.P+c.F*r(207)("includes"),"String",{includes:function(t){return!!~e(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},206:function(t,n,r){var c=r(65),e=r(17);t.exports=function(t,n,r){if(c(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(e(t))}},207:function(t,n,r){var c=r(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[c]=!1,!"/./"[t](n)}catch(t){}}return!0}},213:function(t,n,r){"use strict";var c=r(3),e=r(13),a=r(18),s=r(68),i=r(66),o=r(6),l=r(88).f,u=r(89).f,f=r(8).f,v=r(214).trim,p=c.Number,h=p,d=p.prototype,g="Number"==a(r(67)(d)),_="trim"in String.prototype,b=function(t){var n=i(t,!1);if("string"==typeof n&&n.length>2){var r,c,e,a=(n=_?n.trim():v(n,3)).charCodeAt(0);if(43===a||45===a){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===a){switch(n.charCodeAt(1)){case 66:case 98:c=2,e=49;break;case 79:case 111:c=8,e=55;break;default:return+n}for(var s,o=n.slice(2),l=0,u=o.length;l<u;l++)if((s=o.charCodeAt(l))<48||s>e)return NaN;return parseInt(o,c)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var n=arguments.length<1?0:t,r=this;return r instanceof p&&(g?o(function(){d.valueOf.call(r)}):"Number"!=a(r))?s(new h(b(n)),r,p):b(n)};for(var m,N=r(7)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;N.length>y;y++)e(h,m=N[y])&&!e(p,m)&&f(p,m,u(h,m));p.prototype=d,d.constructor=p,r(11)(c,"Number",p)}},214:function(t,n,r){var c=r(10),e=r(17),a=r(6),s=r(215),i="["+s+"]",o=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),u=function(t,n,r){var e={},i=a(function(){return!!s[t]()||"​"!="​"[t]()}),o=e[t]=i?n(f):s[t];r&&(e[r]=o),c(c.P+c.F*i,"String",e)},f=u.trim=function(t,n){return t=String(e(t)),1&n&&(t=t.replace(o,"")),2&n&&(t=t.replace(l,"")),t};t.exports=u},215:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},219:function(t,n,r){},220:function(t,n,r){},225:function(t,n,r){"use strict";var c=r(219);r.n(c).a},226:function(t,n,r){"use strict";var c=r(220);r.n(c).a},227:function(t,n,r){"use strict";r(14),r(204),r(205),r(213);var c={name:"vRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].includes(t)}}},computed:{rowStyle:function(){var t=this.gutter;return t&&{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(n){n.gutter=t.gutter})}},e=(r(225),r(1)),a=Object(e.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"27924eda",null);n.a=a.exports},228:function(t,n,r){"use strict";var c=r(9),e=(r(213),r(204),r(205),r(14),r(19),r(22),function(t){var n=Object.keys(t),r=!0;return n.forEach(function(t){["span","offset"].includes(t)||(r=!1)}),r}),a={name:"vCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},phone:{type:Object,validator:e},ipad:{type:Object,validator:e},npc:{type:Object,validator:e},pc:{type:Object,validator:e},wpc:{type:Object,validator:e}},data:function(){return{gutter:0}},computed:{colStyle:function(){var t=this.gutter;return t&&{marginLeft:t/2+"px",marginRight:t/2+"px"}},colClass:function(){var t=this.span,n=this.offset,r=this.phone,e=this.ipad,a=this.npc,s=this.pc,i=this.wpc;return[t&&"col-".concat(t),n&&"offset-".concat(n)].concat(Object(c.a)(r?["col-phone-".concat(r.span)]:[]),Object(c.a)(e?["col-ipad-".concat(e.span)]:[]),Object(c.a)(a?["col-npc-".concat(a.span)]:[]),Object(c.a)(s?["col-pc-".concat(s.span)]:[]),Object(c.a)(i?["col-wpc-".concat(i.span)]:[]))}}},s=(r(226),r(1)),i=Object(s.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"6491c162",null);n.a=i.exports},244:function(t,n,r){},308:function(t,n,r){"use strict";var c=r(244);r.n(c).a},364:function(t,n,r){"use strict";r.r(n);var c=r(227),e=r(228),a={name:"demo-grid",components:{"v-row":c.a,"v-col":e.a}},s=(r(308),r(1)),i=Object(s.a)(a,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"box"},[r("v-row",[r("v-col",{staticClass:"col"},[t._v("8")]),t._v(" "),r("v-col",{staticClass:"col"},[t._v("8")]),t._v(" "),r("v-col",{staticClass:"col"},[t._v("8")])],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"col",attrs:{span:"10"}},[t._v("10")]),t._v(" "),r("v-col",{staticClass:"col",attrs:{span:"14"}},[t._v("14")])],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"col",attrs:{span:"10"}},[t._v("10")]),t._v(" "),r("v-col",{staticClass:"col",attrs:{span:"8",offset:"6"}},[t._v("8")])],1),t._v(" "),r("v-row",{attrs:{gutter:"30"}},[r("v-col",{staticClass:"col",attrs:{span:"5"}},[t._v("5")]),t._v(" "),r("v-col",{staticClass:"col",attrs:{span:"5"}},[t._v("5")]),t._v(" "),r("v-col",{staticClass:"col",attrs:{span:"6"}},[t._v("6")]),t._v(" "),r("v-col",{staticClass:"col",attrs:{span:"8"}},[t._v("8")])],1)],1)},[],!1,null,"f1628b92",null);n.default=i.exports}}]);