(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)r=s[p],o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02a7":function(t,e,n){},"05d5":function(t,e,n){"use strict";var a=n("daca"),o=n.n(a);o.a},"0a8f":function(t,e,n){},"10fb":function(t,e,n){t.exports=n.p+"img/moosecock_rooster_final.f907ffab.png"},1539:function(t,e,n){},"1da8":function(t,e,n){},"25f3":function(t,e,n){"use strict";var a=n("6334"),o=n.n(a);o.a},"265d":function(t,e,n){},"2b6b":function(t,e,n){"use strict";var a=n("4785"),o=n.n(a);o.a},3498:function(t,e,n){},"3e0b":function(t,e,n){},4785:function(t,e,n){},4859:function(t,e,n){"use strict";var a=n("aa0e"),o=n.n(a);o.a},"4f58":function(t,e,n){"use strict";var a=n("3e0b"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["Client"===t.view?n("client-view"):t._e(),"Coach"===t.view?n("coach-view"):t._e()],1)},i=[],r=n("cebc"),s=n("2f62"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"coach-view"}},[n("madlab-header",{attrs:{view:"Coach"}}),n("h1",[t._v("Hybrid Pricing Calculator")]),n("main",[n("all-options"),n("display")],1),t._m(0)],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("span",[t._v("©2019 Madlab Group")]),n("span",[t._v("Developed by  "),n("a",{attrs:{href:"http://dcenatiempo.com/",target:"_blank"}},[t._v("dcenatiempo.com")])])])}],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",["Coach"===t.view?a("nav",[t._m(0),a("img",{staticClass:"moose",attrs:{src:n("10fb"),alt:"Moose Cock"}})]):t._e(),"Client"===t.view?a("nav",{staticClass:"client"},[t.logo?a("img",{attrs:{src:t.logo}}):t._e(),a("h1",[t._v(t._s(t.gymName))])]):t._e()])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"http://madlabgroup.com/",target:"_blank"}},[a("img",{attrs:{src:n("cf05"),alt:"MadLab Group"}})])}],d={name:"MadlabHeader",props:["view"],computed:Object(r["a"])({},Object(s["d"])(["gymName","logo"]))},m=d,f=(n("d171"),n("2877")),h=Object(f["a"])(m,u,p,!1,null,"48edadcc",null),v=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"display-container"}},t._l(t.filteredFrequencyOptions,function(e){return n("div",{key:"frequency-display-"+e.id,staticClass:"wrapper",attrs:{id:e.id+"-display"}},[n("div",{staticClass:"display"},[n("h2",[t._v(t._s(e.label)+" Classes")]),n("div",{staticClass:"row"},[n("div",{staticClass:"left-label"},[n("h4",{staticStyle:{"text-align":"right",margin:"1rem 0 0 1rem"}},[t._v("Payments:")]),t._l(t.filteredPlanOptions,function(t){return n("plan-row",{key:e.id+"-plan-label-"+t.id,staticStyle:{"border-left":"none"},attrs:{"plan-option":t,"label-only":!0}})})],2),n("div",{staticClass:"right-content row"},t._l(t.filteredPaymentsOptions,function(a){return n("plan-card",{key:e.id+"-plan-card-"+a.id,attrs:{"payments-option":a,"plan-options":t.filteredPlanOptions,"rate-options":t.rateOptions,"frequency-option":e}})}),1)])])])}),0)},y=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plan-card"},[n("h4",[t._v(t._s(t.paymentsOption.label))]),t._l(t.planOptions,function(e){return n("plan-row",{key:"plan-row-"+t.paymentsOption.id+"-"+e.id,attrs:{"plan-option":e,"rate-options":t.rateOptions,"payments-option":t.paymentsOption,"frequency-option":t.frequencyOption}})})],2)},O=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plan-row"},[t.labelOnly?n("span",[n("strong",[t._v(t._s(t.planOption.label))]),t._v(" - "+t._s(t.planOption.value)+" PT/yr")]):n("span",[t._v(t._s(t.amount))])])},_=[],x=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),k={name:"PlanRow",components:{},props:{planOption:{default:function(){}},rateOptions:{default:function(){return[]}},paymentsOption:{default:function(){}},frequencyOption:{default:function(){}},labelOnly:{type:Boolean,default:!1}},computed:{amount:function(){if(this.labelOnly)return 0;var t=this.planOption.value*this.rateOptions.ptRate,e=12*this.rateOptions.monthlyRate*this.frequencyOption.multiplier,n=t+e;return x.format(Math.round(n/this.paymentsOption.divisor))}}},C=k,j=(n("2b6b"),Object(f["a"])(C,w,_,!1,null,null,null)),P=j.exports,N={name:"PlanCard",components:{PlanRow:P},props:["paymentsOption","planOptions","rateOptions","frequencyOption"],computed:{}},R=N,I=(n("b842"),Object(f["a"])(R,g,O,!1,null,null,null)),S=I.exports,$={name:"Display",components:{PlanCard:S,PlanRow:P},computed:Object(r["a"])({},Object(s["d"])(["paymentsOptions","rateOptions","planOptions","frequencyOptions"]),{filteredPaymentsOptions:function(){return this.paymentsOptions.filter(function(t){return!0===t.value})},filteredPlanOptions:function(){return this.planOptions.filter(function(t){return!0===t.checked})},filteredFrequencyOptions:function(){return this.frequencyOptions.filter(function(t){return!0===t.checked})}})},q=$,E=(n("931b"),Object(f["a"])(q,b,y,!1,null,null,null)),M=E.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"options"},[n("switch-view"),n("rate-input-card",{attrs:{"rate-options":t.rateOptions}}),n("plan-input-card",{attrs:{"plan-options":t.planOptions}}),n("payments-input-card",{attrs:{"payments-options":t.paymentsOptions}}),n("frequency-input-card",{attrs:{"frequency-options":t.frequencyOptions}}),n("p-d-f"),n("reset-button")],1)},F=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("option-group",{attrs:{id:"rate-input-card",label:"Gym Options",tooltip:t.tooltip}},[n("div",{staticClass:"list"},[n("label",[t._v("Gym Name")]),n("gym-name-input"),n("label",[t._v("Logo")]),n("image-uploader",{attrs:{width:"226px"}}),n("label",[t._v("Monthly Rate")]),n("money-input",{attrs:{min:100,max:1e3},on:{input:function(e){return t.syncBaseRates(t.rateOptions,"monthly")}},model:{value:t.rateOptions.monthlyRate,callback:function(e){t.$set(t.rateOptions,"monthlyRate",e)},expression:"rateOptions.monthlyRate"}}),n("label",[t._v("Weekly Rate")]),n("money-input",{attrs:{min:23.07,max:500},on:{input:function(e){return t.syncBaseRates(t.rateOptions,"weekly")}},model:{value:t.rateOptions.weeklyRate,callback:function(e){t.$set(t.rateOptions,"weeklyRate",e)},expression:"rateOptions.weeklyRate"}}),n("label",[t._v("PT Rate")]),n("money-input",{attrs:{min:50,max:500},on:{input:function(e){return t.setRateOptions(t.rateOptions)}},model:{value:t.rateOptions.ptRate,callback:function(e){t.$set(t.rateOptions,"ptRate",e)},expression:"rateOptions.ptRate"}})],1)])},V=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("label",[n("span",{on:{click:function(e){t.collapsed=!t.collapsed}}},[n("caret-icon",{attrs:{down:!t.collapsed}}),t._v(t._s(t.label))],1),n("help-icon",{attrs:{text:t.tooltip}})],1),n("div",{staticClass:"collapsable",class:{collapsed:!t.collapsed}},[t._t("default")],2)])},G=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticStyle:{"line-height":"0"}},[n("svg",{directives:[{name:"tooltip",rawName:"v-tooltip.click.top.start",value:t.tooltipOptions,expression:"tooltipOptions",modifiers:{click:!0,top:!0,start:!0}}],staticClass:"help-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22"}},[n("defs",[n("clipPath",[n("path",{attrs:{d:"m22.2 686.12h1447.73v-667.19h-1447.73v667.19"}})]),n("clipPath",[n("path",{attrs:{fill:"#f2f2f2",d:"m7 1023.36h1v1h-1z"}})]),n("clipPath",[n("path",{attrs:{d:"m0 706.47h1490.93v-706.47h-1490.93v706.47"}})]),n("clipPath",[n("path",{attrs:{fill:"#aade87","fill-opacity":".472",d:"m-6 1028.36h32v32h-32z"}})]),n("clipPath",[n("path",{attrs:{fill:"#00f","fill-opacity":".514",d:"m-7 1024.36h34v34h-34z"}})]),n("clipPath",[n("path",{attrs:{fill:"#f2f2f2",d:"m7 1023.36h1v1h-1z"}})])]),n("path",{attrs:{d:"M11 3A8 8 0 0 0 3 11 8 8 0 0 0 11 19 8 8 0 0 0 19 11 8 8 0 0 0 11 3M10.994 6.5C11.758 6.5 12.379 6.719 12.857 7.158 13.336 7.589 13.576 8.142 13.576 8.816 13.576 9.109 13.495 9.406 13.336 9.707 13.176 10.01 13.03 10.223 12.908 10.354 12.791 10.475 12.623 10.635 12.404 10.83L12.342 10.891C11.83 11.338 11.572 11.785 11.572 12.232V12.719H10.389V12.146C10.389 11.781 10.469 11.467 10.629 11.207 10.788 10.939 11.07 10.625 11.473 10.268 11.699 10.06 11.859 9.914 11.951 9.816 12.05 9.711 12.148 9.569 12.24 9.391 12.341 9.204 12.393 9.01 12.393 8.816 12.393 8.442 12.266 8.142 12.01 7.914 11.77 7.686 11.431 7.572 10.994 7.572 10.272 7.572 9.776 7.964 9.508 8.744L8.424 8.305C8.6 7.841 8.904 7.426 9.332 7.06 9.769 6.687 10.322 6.5 10.994 6.5M10.98 13.842C11.224 13.842 11.426 13.923 11.586 14.09 11.754 14.249 11.838 14.442 11.838 14.67 11.838 14.898 11.754 15.09 11.586 15.256 11.426 15.418 11.224 15.5 10.98 15.5 10.737 15.5 10.531 15.418 10.363 15.256 10.204 15.09 10.125 14.898 10.125 14.67 10.125 14.442 10.204 14.249 10.363 14.09 10.531 13.923 10.737 13.842 10.98 13.842",transform:"translate(0-.002)",fill:"#4d4d4d","fill-rule":"evenodd"}})])])},H=[],L={name:"HelpIcon",components:{},data:function(){return{}},props:{text:{type:String,default:""}},computed:{tooltipOptions:function(){return{content:this.text,offset:5,delay:20,class:"tooltip-custom"}}},methods:{}},U=L,z=(n("d932"),Object(f["a"])(U,T,H,!1,null,null,null)),J=z.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticStyle:{"line-height":"0"}},[n("svg",{staticClass:"caret-icon",class:{expanded:!t.down},attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"angle-down",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[n("path",{attrs:{fill:"currentColor",d:"M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"}})])])},Q=[],X={name:"CaretIcon",components:{},data:function(){return{}},props:{down:{type:Boolean,default:!0}},computed:{},methods:{}},Y=X,K=(n("7689"),Object(f["a"])(Y,W,Q,!1,null,null,null)),Z=K.exports,tt={name:"OptionGroup",components:{HelpIcon:J,CaretIcon:Z},data:function(){return{collapsed:!1}},props:["label","tooltip"],computed:{},methods:{}},et=tt,nt=(n("9504"),Object(f["a"])(et,B,G,!1,null,null,null)),at=nt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"text"},domProps:{value:t.amount},on:{change:t.change,input:function(e){e.target.composing||(t.amount=e.target.value)}}})},it=[],rt=(n("a481"),n("87f3"),n("c5f6"),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})),st={name:"MoneyInput",data:function(){return{amount:0}},props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:Number.MAX_SAFE_INTEGER}},computed:{},methods:{forceInRange:function(t){return t>this.max?t=this.max:t<this.min&&(t=this.min),t},format:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.target.value;n=n.replace(/\D/g,"")/100,e&&(n=this.forceInRange(n)),this.amount=rt.format(n),this.$emit("input",n)},change:function(t){this.format(t,!0)},setAmount:function(t){var e=this.forceInRange(t);this.amount=rt.format(e)}},created:function(){this.setAmount(this.value)},watch:{value:function(t){this.setAmount(t)}}},lt=st,ct=Object(f["a"])(lt,ot,it,!1,null,"6c289394",null),ut=ct.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{directives:[{name:"model",rawName:"v-model",value:t.gymName,expression:"gymName"}],attrs:{id:"gym-name-input",type:"text"},domProps:{value:t.gymName},on:{input:[function(e){e.target.composing||(t.gymName=e.target.value)},t.handleInput]}})},dt=[],mt={name:"GymNameInput",computed:Object(r["a"])({},Object(s["d"])(["gymName"])),methods:Object(r["a"])({},Object(s["c"])(["setGymName"]),{handleInput:function(t){this.setGymName(t.target.value)}})},ft=mt,ht=Object(f["a"])(ft,pt,dt,!1,null,"7dda1110",null),vt=ht.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-uploader",style:"width: "+t.width},[n("input",{directives:[{name:"show",rawName:"v-show",value:!t.logo,expression:"!logo"}],ref:"image-uploader",style:"width: "+t.width+";",attrs:{type:"file",name:"fileToUpload",id:"fileToUpload",accept:"image/png, image/jpeg, image/gif"},on:{change:t.handleFileInput}}),n("img",{style:"max-width: "+t.width+"; max-height: "+t.width+"; margin: .5rem auto;",attrs:{src:t.logo}}),t.logo?n("button",{staticClass:"edit icon",on:{click:t.edit}},[n("svg",{attrs:{height:"32",viewBox:"0 0 48 48",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"}})])]):t._e(),t.logo?n("button",{staticClass:"delete icon",on:{click:t.maybeDelete}},[n("svg",{attrs:{"enable-background":"new 0 0 80 80",height:"32px",width:"32px",version:"1.1",viewBox:"0 0 80 80","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("polygon",{attrs:{points:"56.971,52.728 44.243,40 56.971,27.272 52.728,23.029 40,35.757 27.272,23.029 23.029,27.272 35.757,40   23.029,52.728 27.272,56.971 40,44.243 52.728,56.971 "}})])]):t._e(),n("div",{ref:"imageHolder",staticClass:"temp-image"})])},yt=[],gt=(n("28a5"),n("5118")),Ot={name:"ImageUploader",components:{},data:function(){return{tooltip:"",showUpload:!0}},props:["width"],computed:Object(r["a"])({},Object(s["b"])(["logo"])),methods:Object(r["a"])({},Object(s["c"])(["setLogo"]),{maybeDelete:function(){confirm("Are you sure you would like to delete this logo?")&&this.setLogo()},edit:function(){this.$refs["image-uploader"].click()},handleFileInput:function(t){var e=this,n=t.target.files[0],a=new FileReader;a.onload=function(){var t=a.result,n=90,o=t.split(";base64")[0].replace("data:",""),i=null;e.downscaleImage(t,n,o,i).then(function(t){e.setLogo(t)})},a.onerror=function(t){console.log(t)},a.onabort=function(){},a.readAsDataURL(n)},downscaleImage:function(t,e){var n,a,o,i,r,s,l,c=this,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"image/jpeg",p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.7;return n=new Image,n.src=t,this.$refs.imageHolder.appendChild(n),this.delay(1).then(function(){return a=n.width,o=n.height,i=Math.floor(a/o*e),r=document.createElement("canvas"),r.width=i,r.height=e,s=r.getContext("2d"),s.drawImage(n,0,0,i,e),l=r.toDataURL(u,p),c.$refs.imageHolder.removeChild(c.$refs.imageHolder.childNodes[0]),Promise.resolve(l)})},delay:function(t){return new Promise(function(e){return Object(gt["setTimeout"])(e,t)})}})},wt=Ot,_t=(n("59fc"),Object(f["a"])(wt,bt,yt,!1,null,null,null)),xt=_t.exports,kt={name:"RateInputCard",components:{OptionGroup:at,MoneyInput:ut,GymNameInput:vt,ImageUploader:xt},data:function(){return{tooltip:"Enter gym name, monthly (or weekly) unlimited class rate (rate BEFORE any PT hybrid sessions are included), and PT session rate"}},props:["rateOptions"],computed:{},methods:Object(r["a"])({},Object(s["c"])(["setRateOptions"]),{syncBaseRates:function(t,e){"monthly"==e?t.weeklyRate=12*t.monthlyRate/52:"weekly"==e&&(t.monthlyRate=52*t.weeklyRate/12),this.setRateOptions(t)}})},Ct=kt,jt=(n("9b3d"),Object(f["a"])(Ct,A,V,!1,null,null,null)),Pt=jt.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("option-group",{attrs:{id:"plan-input-card",label:"Plan Options",tooltip:t.tooltip}},[n("div",{staticClass:"list"},[t._l(t.planOptions,function(e){return[n("checkbox",{key:"plan-check-"+e.id,attrs:{id:e.id,disabled:t.disabled(e)},on:{input:function(e){return t.setPlanOptions(t.planOptions)}},model:{value:e.checked,callback:function(n){t.$set(e,"checked",n)},expression:"option.checked"}}),n("label",{key:"plan-label-"+e.id,attrs:{for:e.id}},[t._v(t._s(e.label))]),n("integer-input",{key:"plan-input-"+e.id,attrs:{min:0,max:365},on:{input:function(e){return t.setPlanOptions(t.planOptions)}},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"option.value"}})]})],2)])},Rt=[],It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"text"},domProps:{value:t.amount},on:{change:t.change,input:function(e){e.target.composing||(t.amount=e.target.value)}}})},St=[],$t={name:"IntegerInput",data:function(){return{amount:0}},props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:5}},computed:{},methods:{forceRange:function(t){return t>this.max?t=this.max:t<this.min&&(t=this.min),t},format:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.target.value;n=n.replace(/\D/g,""),n=""===n?0:parseInt(n),e&&(n=this.forceRange(n)),this.amount=n,this.$emit("input",this.amount)},change:function(t){this.format(t,!0)},setAmount:function(t){var e=this.forceRange(t);this.amount=e}},created:function(){this.setAmount(this.value)},watch:{value:function(t){this.setAmount(t)}}},qt=$t,Et=Object(f["a"])(qt,It,St,!1,null,"133a5d5c",null),Mt=Et.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{ref:"checkbox",staticClass:"checkbox",attrs:{for:t.id+"-checkbox"}},[n("input",{attrs:{type:"checkbox",id:t.id+"-checkbox",disabled:t.disabled},domProps:{checked:t.value},on:{input:t.handleInput}}),n("div",{staticClass:"box"},[n("svg",{directives:[{name:"show",rawName:"v-show",value:t.internalValue,expression:"internalValue"}],staticClass:"check",attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.em,height:t.em,viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"}})])])])},Ft=[],At={name:"checkbox",data:function(){return{internalValue:!1,em:"16"}},props:{value:{type:Boolean,default:!1},id:{type:String,default:""},disabled:{type:Boolean,default:!1}},methods:{handleInput:function(t){this.$emit("input",t.target.checked)},setInternalValue:function(t){this.internalValue=t}},created:function(){this.setInternalValue(this.value)},mounted:function(){this.em=window.getComputedStyle(this.$refs.checkbox)["font-size"].replace(/px/g,"")},watch:{value:function(t){this.setInternalValue(t)}}},Vt=At,Bt=(n("4859"),Object(f["a"])(Vt,Dt,Ft,!1,null,"6b4a9822",null)),Gt=Bt.exports,Tt={name:"PlanInputCard",components:{OptionGroup:at,IntegerInput:Mt,Checkbox:Gt},data:function(){return{tooltip:"The number of pt session per year"}},props:["planOptions"],computed:{count:function(){return this.planOptions.filter(function(t){return!0===t.checked}).length}},methods:Object(r["a"])({},Object(s["c"])(["setPlanOptions"]),{disabled:function(t){return 1>=this.count&&t.checked}})},Ht=Tt,Lt=(n("cd73"),Object(f["a"])(Ht,Nt,Rt,!1,null,null,null)),Ut=Lt.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("option-group",{attrs:{id:"payments-input-card",label:"Payment Options",tooltip:t.tooltip}},[n("div",{staticClass:"list"},[t._l(t.paymentsOptions,function(e){return[n("checkbox",{key:"payments-input-"+e.id,attrs:{id:e.id,disabled:t.disabled(e)},on:{input:function(e){return t.setPaymentsOptions(t.paymentsOptions)}},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"option.value"}}),n("label",{key:"payments-label-"+e.id,attrs:{for:e.id}},[t._v(t._s(e.label))])]})],2)])},Jt=[],Wt={name:"PaymentsInputCard",components:{OptionGroup:at,Checkbox:Gt},data:function(){return{tooltip:"How often client payments are due"}},props:["paymentsOptions"],computed:{count:function(){return this.paymentsOptions.filter(function(t){return!0===t.value}).length}},methods:Object(r["a"])({},Object(s["c"])(["setPaymentsOptions"]),{disabled:function(t){return 1>=this.count&&t.value}})},Qt=Wt,Xt=(n("05d5"),Object(f["a"])(Qt,zt,Jt,!1,null,null,null)),Yt=Xt.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("option-group",{attrs:{id:"frequency-input-card",label:"Frequency Options",tooltip:t.tooltip}},[n("div",{staticClass:"list"},[t._l(t.frequencyOptions,function(e){return[n("checkbox",{key:"plan-check-"+e.id,attrs:{id:e.id,disabled:t.disabled(e)},on:{input:function(e){return t.setFrequencyOptions(t.frequencyOptions)}},model:{value:e.checked,callback:function(n){t.$set(e,"checked",n)},expression:"option.checked"}}),n("label",{key:"plan-label-"+e.id,attrs:{for:e.id}},[t._v(t._s(e.label))])]})],2)])},Zt=[],te={name:"FrequencyInputCard",components:{OptionGroup:at,Checkbox:Gt},data:function(){return{tooltip:"How many client sessions allowed per week"}},props:["frequencyOptions"],computed:{count:function(){return this.frequencyOptions.filter(function(t){return!0===t.checked}).length}},methods:Object(r["a"])({},Object(s["c"])(["setFrequencyOptions"]),{disabled:function(t){return 1>=this.count&&t.checked}})},ee=te,ne=(n("dd30"),Object(f["a"])(ee,Kt,Zt,!1,null,null,null)),ae=ne.exports,oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"pdf",on:{click:t.createPDF}},[t._v("Create PDF")])},ie=[],re=n("d67e"),se=n.n(re),le={name:"PDF",components:{},props:[],computed:Object(r["a"])({},Object(s["d"])(["gymName","logo","frequencyOptions"]),{numCards:function(){return this.frequencyOptions.filter(function(t){return!0===t.checked}).length}}),methods:{createPDF:function(){var t=this.getTime(),e="".concat(this.gymName.replace(/\s/g,"_"),"_price_matrix_").concat(t,".pdf"),n=this.getDisplay(),a=2===this.numCards?.25:1,o={margin:[a,0,0,0],filename:e,image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"landscape"}};se()().from(n).set(o).save()},getTime:function(){var t=new Date(Date.now()),e={year:"numeric",month:"short",day:"numeric"};return t.toLocaleDateString("en-US",e).replace(/\s/g,"_").replace(/,/g,"")},getDisplay:function(){var t=2===this.numCards?0:64,e=document.createElement("header");if(e.setAttribute("style","display: flex; justify-content: center; margin: 0 0 ".concat(t,"px; align-items: center;")),this.logo){var n=new Image;n.src=this.logo,n.setAttribute("style","margin-right: 1em"),e.appendChild(n)}var a=document.createElement("h1");a.setAttribute("style","font-size: 2.75em; margin: 0");var o=document.createTextNode(this.gymName);a.appendChild(o),e.appendChild(a);var i=document.querySelector("#display-container"),r=i.cloneNode(!0);return r.setAttribute("style","display: flex; flex-flow: column nowrap; align-items: center;"),r.insertBefore(e,r.firstChild),r}}},ce=le,ue=(n("4f58"),Object(f["a"])(ce,oe,ie,!1,null,null,null)),pe=ue.exports,de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:t.switchView}},[t._v(t._s(t.btnText))])},me=[],fe={name:"SwitchView",computed:Object(r["a"])({},Object(s["d"])(["view"]),{btnText:function(){var t="Client";return"Client"===this.view&&(t="Coach"),"Switch to ".concat(t," View")}}),methods:Object(r["a"])({},Object(s["c"])(["switchView"]))},he=fe,ve=Object(f["a"])(he,de,me,!1,null,null,null),be=ve.exports,ye=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"reset-button"}},[n("button",{on:{click:t.maybeReset}},[t._v("Reset Options")]),n("help-icon",{attrs:{text:t.tooltip}})],1)},ge=[],Oe={name:"ResetButton",components:{HelpIcon:J},data:function(){return{tooltip:"Careful! This will reset the Gym Rate Options, Plan Options, and Payment Options!"}},methods:Object(r["a"])({},Object(s["c"])(["resetStore"]),{maybeReset:function(){confirm("Are you sure you want to reset the option values?")&&this.resetStore()}})},we=Oe,_e=(n("25f3"),Object(f["a"])(we,ye,ge,!1,null,"3707e919",null)),xe=_e.exports,ke={name:"AllOptions",components:{RateInputCard:Pt,PlanInputCard:Ut,PaymentsInputCard:Yt,FrequencyInputCard:ae,PDF:pe,SwitchView:be,ResetButton:xe},computed:Object(r["a"])({},Object(s["d"])(["paymentsOptions","rateOptions","planOptions","frequencyOptions"])),methods:Object(r["a"])({},Object(s["c"])(["resetStore"]))},Ce=ke,je=(n("67bd"),Object(f["a"])(Ce,D,F,!1,null,null,null)),Pe=je.exports,Ne={name:"CoachView",components:{MadlabHeader:v,Display:M,AllOptions:Pe},computed:{},methods:{}},Re=Ne,Ie=(n("b99a"),Object(f["a"])(Re,l,c,!1,null,null,null)),Se=Ie.exports,$e=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"client-view"}},[n("madlab-header",{attrs:{view:"Client"}}),n("main",[n("div",{staticClass:"options"},[n("switch-view"),n("p-d-f")],1),n("display")],1),t._m(0)],1)},qe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("span",[t._v("©2019 Madlab Group")]),n("span",[t._v("Developed by  "),n("a",{attrs:{href:"http://dcenatiempo.com/",target:"_blank"}},[t._v("dcenatiempo.com")])])])}],Ee={name:"ClientView",components:{MadlabHeader:v,Display:M,PDF:pe,SwitchView:be},computed:Object(r["a"])({},Object(s["d"])(["gymName"])),methods:Object(r["a"])({},Object(s["c"])(["resetStore"]))},Me=Ee,De=(n("e53c"),Object(f["a"])(Me,$e,qe,!1,null,null,null)),Fe=De.exports,Ae={name:"app",components:{CoachView:Se,ClientView:Fe},computed:Object(r["a"])({},Object(s["d"])(["view"]))},Ve=Ae,Be=(n("5c0b"),Object(f["a"])(Ve,o,i,!1,null,null,null)),Ge=Be.exports,Te=n("7f37"),He=n.n(Te);a["a"].use(s["a"]);var Le={rateOptions:{monthlyRate:100,weeklyRate:23.08,ptRate:60},planOptions:[{id:"base",checked:!0,value:2,label:"Base"},{id:"bronze",checked:!0,value:6,label:"Bronze"},{id:"silver",checked:!0,value:12,label:"Silver"},{id:"gold",checked:!0,value:24,label:"Gold"},{id:"platinum",checked:!0,value:48,label:"Platinum"}],paymentsOptions:[{id:"weekly",value:!0,label:"Weekly",divisor:52},{id:"twoWeeks",value:!0,label:"2 Weeks",divisor:26},{id:"biMonthly",value:!0,label:"2x/ Month",divisor:24},{id:"fourWeeks",value:!0,label:"4 Weeks",divisor:13},{id:"monthly",value:!0,label:"Monthly",divisor:12},{id:"quarterly",value:!0,label:"Quarterly",divisor:4},{id:"sixMonths",value:!0,label:"6 Months",divisor:2},{id:"yearly",value:!0,label:"Yearly",divisor:1}],frequencyOptions:[{id:"unlimited",label:"Unlimited",checked:!0,multiplier:1},{id:"2x-week",label:"2x/Week",checked:!1,multiplier:.7}]},Ue=new s["a"].Store({state:Object(r["a"])({},JSON.parse(JSON.stringify(Le)),{view:"Coach",gymName:"Madlab School of Fitness",logo:null}),getters:{logo:function(t){return t.logo}},mutations:{setRateOptions:function(t,e){t.rateOptions=e},setPaymentsOptions:function(t,e){t.paymentsOptions=e},setPlanOptions:function(t,e){t.planOptions=e},setFrequencyOptions:function(t,e){t.frequencyOptions=e},setGymName:function(t,e){t.gymName=e},setLogo:function(t,e){t.logo=e},resetStore:function(t){t.rateOptions=JSON.parse(JSON.stringify(Le.rateOptions)),t.paymentsOptions=JSON.parse(JSON.stringify(Le.paymentsOptions)),t.planOptions=JSON.parse(JSON.stringify(Le.planOptions)),t.frequencyOptions=JSON.parse(JSON.stringify(Le.frequencyOptions))},switchView:function(t){"Client"===t.view?t.view="Coach":t.view="Client"}},actions:{},plugins:[He()({keys:["rateOptions","planOptions","paymentsOptions","gymName","logo"],namespace:"madlab-price-point-calculator-persist"})]}),ze=n("9483");Object(ze["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Je=n("3222"),We=n.n(Je);n("cfbd");a["a"].use(We.a),a["a"].config.productionTip=!1,new a["a"]({store:Ue,render:function(t){return t(Ge)}}).$mount("#app")},"59fc":function(t,e,n){"use strict";var a=n("8098"),o=n.n(a);o.a},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),o=n.n(a);o.a},"5e27":function(t,e,n){},6334:function(t,e,n){},"67bd":function(t,e,n){"use strict";var a=n("90b2"),o=n.n(a);o.a},7689:function(t,e,n){"use strict";var a=n("3498"),o=n.n(a);o.a},8098:function(t,e,n){},"90b2":function(t,e,n){},"931b":function(t,e,n){"use strict";var a=n("1539"),o=n.n(a);o.a},9504:function(t,e,n){"use strict";var a=n("1da8"),o=n.n(a);o.a},"96ba":function(t,e,n){},"9b3d":function(t,e,n){"use strict";var a=n("265d"),o=n.n(a);o.a},aa0e:function(t,e,n){},aa3b:function(t,e,n){},b842:function(t,e,n){"use strict";var a=n("96ba"),o=n.n(a);o.a},b99a:function(t,e,n){"use strict";var a=n("bc89"),o=n.n(a);o.a},bc89:function(t,e,n){},cd73:function(t,e,n){"use strict";var a=n("dbf0"),o=n.n(a);o.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.d5358702.png"},d171:function(t,e,n){"use strict";var a=n("02a7"),o=n.n(a);o.a},d2be:function(t,e,n){},d932:function(t,e,n){"use strict";var a=n("0a8f"),o=n.n(a);o.a},daca:function(t,e,n){},dbf0:function(t,e,n){},dd30:function(t,e,n){"use strict";var a=n("d2be"),o=n.n(a);o.a},e53c:function(t,e,n){"use strict";var a=n("aa3b"),o=n.n(a);o.a}});
//# sourceMappingURL=app.936a3864.js.map