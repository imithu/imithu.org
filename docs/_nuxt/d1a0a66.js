(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{296:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{qrCode:null}},watch:{"$parent.color":function(){this.qrCode&&this.qrCode.update({dotsOptions:{color:this.$parent.color,type:"dots"}})}},mounted:function(){this.$nextTick(),this.generate_qr()},methods:{generate_qr:function(){this.$nextTick(),this.qrCode=new this.$qrcs({width:220,height:220,type:"canvas",data:"imithu@imithu.org",dotsOptions:{color:this.$parent.color,type:"dots"},backgroundOptions:{color:"transparent"},qrOptions:{errorCorrectionLevel:"H"}}),this.qrCode.append(this.$refs.qr)}}},n=r(52),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{ref:"qr",staticClass:"w-full"}),t._v(" "),r("div",{staticClass:"flex items-center justify-center gap-x-3"},[r("div",[r("svg",{staticClass:"w-[32px] h-[32px] animate-bounce",style:{color:t.$parent.color},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M19.07 13.88L13 19.94V22h2.06l6.06-6.07m1.58-2.35l-1.28-1.28a.517.517 0 0 0-.38-.17c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.19-.2.19-.52 0-.72M11 18H4V8l8 5l8-5v2h2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2m9-12l-8 5l-8-5h16z",fill:"currentColor"}})])]),t._v(" "),r("div",[r("p",{style:{color:t.$parent.color}},[t._v("\n        Email\n      ")]),t._v(" "),r("a",{staticClass:"select-all hover:underline hover:decoration-wavy",style:{color:t.$parent.color},attrs:{href:"mailto:imithu@imithu.org"}},[t._v("imithu@imithu.org")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);