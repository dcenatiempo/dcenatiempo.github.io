(function(t){function e(e){for(var s,r,o=e[0],l=e[1],u=e[2],h=0,p=[];h<o.length;h++)r=o[h],n[r]&&p.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1061:function(t,e,a){"use strict";var s=a("cc80"),n=a.n(s);n.a},"10fb":function(t,e,a){t.exports="./img/moosecock_rooster_final.f907ffab.png"},"129f":function(t,e,a){},"2a33":function(t,e,a){"use strict";var s=a("a10f"),n=a.n(s);n.a},"4c6e":function(t,e,a){"use strict";var s=a("df25"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("MadlabHeader"),a("h1",[t._v("When Will I Meet My Goal?")]),a("p",[t._v("The left column shows when your goal is reached.")]),a("p",[t._v("The right column show a snapshot of any selected month along your journey.")]),a("MadlabResults",{attrs:{results:t.results,assumptions:t.assumptions}}),a("MadlabMain",{attrs:{assumptions:t.assumptions}}),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("span",[t._v("©2019 Madlab Group")]),a("span",[t._v("Developed by  "),a("a",{attrs:{href:"http://dcenatiempo.com/",target:"_blank"}},[t._v("dcenatiempo.com")])])])}],r=a("5176"),o=a.n(r),l=(a("7f7f"),a("cebc")),u=(a("ac6a"),a("a4bb")),c=a.n(u),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("nav",[s("a",{attrs:{href:"http://madlabgroup.com/",target:"_blank"}},[s("img",{attrs:{src:a("cf05"),alt:"MadLab Group"}})]),s("img",{attrs:{src:a("10fb"),alt:"Moose Cock"}})]),s("h1",[t._v("What can I realistically expect to earn in the MadLab system?")]),s("p",[t._v("As an apprentice, you will learn under the direction of an experienced coach what it takes to be a professional. You will learn not only how to train your clients, but also how to build relationships with them and help them to reach their goals. As a professional, you have an amazing opportunity to earn a great living doing something that you love. We have the systems in place to do it, but it is up to you to set some realistic goals, and work hard to achieve them.")])])}],d={name:"MadlabHeader"},m=d,f=(a("ba06"),a("2877")),v=Object(f["a"])(m,h,p,!1,null,"2dada72c",null);v.options.__file="MadlabHeader.vue";var g=v.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("h1",[t._v("Assumptions:")]),a("section",[a("h2",[t._v("Goals")]),a("p",[t._v("Without a destination, it doesn't matter where you steer the ship. Set some realistic figures to shoot for, and the calculator will tell you how long it will take to get there.")]),a("Assumption",{attrs:{name:"desiredIncomePerMonth",assumption:t.assumptions.desiredIncomePerMonth}}),a("Assumption",{attrs:{name:"floorHours",assumption:t.assumptions.floorHours}})],1),a("section",[a("h2",[t._v("Gym's Determinants")]),a("p",[t._v("Not everything is in direct control of the coach. The following items are determined determined by the gym owners and your progress in the PCDP as you become a professional coach.")]),a("Assumption",{attrs:{name:"startingPayGrade",assumption:t.assumptions.startingPayGrade}}),a("a",{staticClass:"paygrade-link",attrs:{target:"_blank",href:"http://my.madlabgroup.com/professional-coach-diploma-program/#1504894591277-bdd30366-89c6"}},[t._v("view details")]),a("Assumption",{attrs:{name:"monthlyRate",assumption:t.assumptions.monthlyRate}}),a("Assumption",{attrs:{name:"hourlyRate",assumption:t.assumptions.hourlyRate}}),a("Assumption",{attrs:{name:"classHours",assumption:t.assumptions.classHours}})],1),a("section",[a("h2",[t._v("New Clients")]),a("p",[t._v("Are you starting with any clients? Great! Now how many clients can you bring in each month? No clients equals no money, no matter how much you charge!")]),a("Assumption",{attrs:{name:"startClients",assumption:t.assumptions.startClients}}),a("Assumption",{attrs:{name:"newClients1",assumption:t.assumptions.newClients1}}),a("Assumption",{attrs:{name:"newClients2",assumption:t.assumptions.newClients2}}),a("Assumption",{attrs:{name:"newClients3",assumption:t.assumptions.newClients3}}),a("Assumption",{attrs:{name:"sourceClients1",assumption:t.assumptions.sourceClients1}}),a("Assumption",{attrs:{name:"sourceClients2",assumption:t.assumptions.sourceClients2}}),a("Assumption",{attrs:{name:"sourceClients3",assumption:t.assumptions.sourceClients3}})],1),a("section",[a("h2",[t._v("Retention / Conversion")]),a("p",[t._v("Your retention and conversion rates play a huge role in how many hours you work compared with your revenue produced. Better retention equals more money with less work.")]),a("Assumption",{attrs:{name:"averagePT",assumption:t.assumptions.averagePT}}),a("Assumption",{attrs:{name:"salesmanship",assumption:t.assumptions.salesmanship}}),a("div",{attrs:{id:"sizing-template"}},[a("div",{staticClass:"left"},[a("div",{class:{hide:t.hide}},[a("br"),t._v("Intro ⇨ Fund"),a("br"),t._v("Fund ⇨ Group"),a("br"),t._v("Yearly Attrition Base")])]),a("div",{staticClass:"right"},[a("div",[t._v("Poor")]),a("div",[t._v("Average")]),a("div",[t._v("Awesome")]),a("div",{class:{hide:t.hide}},[t._v("25%"),a("br"),t._v("50%"),a("br"),t._v("40%")]),a("div",{class:{hide:t.hide}},[t._v("60%"),a("br"),t._v("70%"),a("br"),t._v("25%")]),a("div",{class:{hide:t.hide}},[t._v("90%"),a("br"),t._v("90%"),a("br"),t._v("10%")])])]),a("Assumption",{attrs:{name:"superstar",assumption:t.assumptions.superstar}})],1)])},b=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"assumption"},[a("div",{staticClass:"label"},[a("div",{staticClass:"value"},[t._v(t._s(t.formattedAssumption))]),a("div",{staticClass:"description"},[t._v(t._s(t.assumption.description))])]),a("SliderChart",{staticClass:"input",attrs:{graphData:t.assumption.graphData,graphDimensions:t.graphDimensions,sliderRange:t.assumption.sliderRange,sliderValue:t.assumption.value,name:t.name}})],1)},w=[],M=new s["a"],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider-chart"},[a("div",{staticClass:"slider-container"},[a("vue-slider",{attrs:{min:t.sliderRange.min,max:t.sliderRange.max,interval:t.sliderRange.interval},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("BarGraph",{attrs:{graphDimensions:t.graphDimensions,"d3-data":t.graphData,desiredIncome:t.desiredIncome}})],1)},D=[],x=(a("c5f6"),a("8809")),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bar-graph",attrs:{id:t.id}})},R=[],S=a("5698"),T=16,G={margin:{top:0,right:T/2,bottom:50,left:T/2}},H={name:"BarGraph",data:function(){return{axis:{x:{},y:{}},ddd:{},id:"d3-"+Math.round(1e6*Math.random()),chart:{width:0,height:100,scale:48,background:"",blue:"#64B5F6",red:"rgb(243, 151, 151)",gray:"#ccc",barOffset:0,barPadding:2}}},props:{d3Data:{type:Object,default:function(){return{x:[],y:[],tooltip:[]}}},graphDimensions:{type:Object,default:function(){return{h:0,w:0,scale:0}}},desiredIncome:{type:Number,default:0}},computed:{},methods:{makeGraph:function(){this.clearGraph(),this.initializeGraph(),this.refreshGraph()},clearGraph:function(){S["i"]("#".concat(this.id," svg")).remove()},initializeGraph:function(){S["h"]("#".concat(this.id)).append("svg").attr("width",this.chart.width).attr("height",this.chart.height+G.margin.top+G.margin.bottom),this.ddd.svg=S["h"]("#".concat(this.id," svg")),this.ddd.tooltip||(this.ddd.tooltip=S["h"]("body").append("div").attr("class","tooltip elevation-3").style("opacity",0))},refreshGraph:function(){this.axis.x.values=S["g"]().domain([S["e"](this.d3Data.x),S["d"](this.d3Data.x)]).range([0,this.chart.width-T]),this.axis.x.ticks=S["a"](this.axis.x.values).ticks(5),this.axis.x.scale=S["f"]().domain(this.d3Data.y).range([0,this.chart.width]),this.ddd.svg.append("g").attr("transform","translate(".concat(G.margin.left,", ").concat(G.margin.top+this.chart.height,")")).call(this.axis.x.ticks),this.axis.y.values=S["g"]().domain([0,S["d"](this.d3Data.y)]).range([this.chart.height,0]),this.axis.y.ticks=S["b"](this.axis.y.values).ticks(10),this.axis.y.scale=S["g"]().domain([0,S["d"](this.d3Data.y)]).range([0,this.chart.height]),this.draw(),this.addListeners()},draw:function(){var t=this;this.ddd.chart=this.ddd.svg.append("g").attr("transform","translate(".concat(G.margin.left+1,", 0)")).selectAll("rect").data(this.d3Data.y).enter().append("rect"),this.ddd.chart.attr("fill",function(e){return t.calculateColor(e)}).attr("width",function(e,a,s){return(t.chart.width-T)/s.length-2}).attr("x",function(e,a,s){return a*((t.chart.width-T)/s.length)}).attr("height",function(e){return t.calculateHeight(e)}).attr("y",function(e){return t.calculateY(e)})},addListeners:function(){var t=this;this.ddd.chart.on("mouseover",function(e,a){var s=S["c"].pageX+5,n=S["c"].pageY-50;t.ddd.tooltip.html(t.d3Data.tooltip[a]).style("left","".concat(s,"px")).style("top","".concat(n,"px")).style("opacity",1),S["h"](this).style("opacity",.5)}).on("mouseout",function(){t.ddd.tooltip.html("").style("opacity",0),S["h"](this).transition().duration(300).style("opacity",1)})},calculateDimension:function(){this.chart=o()({},this.chart,{width:this.graphDimensions.w,height:this.graphDimensions.h-G.margin.top-G.margin.bottom,scale:this.graphDimensions.scale})},calculateColor:function(t){return 48===this.chart.scale?0===t?this.chart.red:this.chart.blue:t>=this.desiredIncome?this.chart.blue:this.chart.gray},calculateHeight:function(t){return 48===this.chart.scale&&0===t&&(t=48),this.chart.height*t/this.chart.scale},calculateY:function(t){return 48===this.chart.scale&&0===t&&(t=48),this.chart.height-this.chart.height*t/this.chart.scale+G.margin.top}},mounted:function(){},watch:{graphDimensions:function(){this.calculateDimension(),this.makeGraph()},d3Data:function(){this.calculateDimension(),this.makeGraph()}}},P=H,k=(a("4c6e"),Object(f["a"])(P,A,R,!1,null,null,null));k.options.__file="BarGraph.vue";var O=k.exports,j={name:"SliderChart",components:{"vue-slider":x["a"],BarGraph:O},data:function(){return{value:1,initial:!0}},props:{graphData:{type:Object,default:function(){return{x:[],y:[],tooltip:[]}}},graphDimensions:{type:Object,default:function(){return{h:1,w:1,scale:1}}},sliderRange:{type:Object,default:function(){return{min:1,max:2,step:1,interval:1}}},sliderValue:{type:Number,default:1},name:{type:String},desiredIncome:{type:Number,default:0}},computed:{},methods:{},mounted:function(){this.value=this.sliderValue},watch:{value:function(t){M.$emit("slider-update",{sliderValue:t,name:this.name,initial:this.initial}),this.initial=!1}}},E=j,F=(a("2a33"),Object(f["a"])(E,C,D,!1,null,"11293458",null));F.options.__file="SliderChart.vue";var W=F.exports,I=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}),N=["JA1","JA2","SA1","SA2","Associate"],z={name:"Assumption",components:{SliderChart:W},data:function(){return{width:null}},props:{assumption:{type:Object,default:function(){}},name:{type:String}},computed:{graphDimensions:function(){return{w:this.width,h:120,scale:48}},formattedAssumption:function(){var t=this.assumption.value,e=this.assumption.format;return"currency"===e?I.format(t):"percent"===e?Math.round(t)+"%":"float"===e?Math.round(t,1):"paygrade"===e?N[t]:"int"===e?Math.round(t):t}},mounted:function(){var t=this;M.$on("resize",function(e){t.width=e})}},$=z,B=(a("6235"),Object(f["a"])($,_,w,!1,null,"31d4ec3c",null));B.options.__file="Assumption.vue";var V=B.exports,Y={name:"MadlabMain",components:{Assumption:V},props:{assumptions:{type:Object,default:function(){}}},data:function(){return{d3Data:{},right:void 0,left:void 0,hide:!0}},methods:{resize:function(){this.right.clientWidth===this.left.clientWidth?this.hide=!0:this.hide=!1}},mounted:function(){this.right=document.querySelector("#sizing-template .right"),this.left=document.querySelector("#sizing-template .left"),M.$on("resize",this.resize),this.resize()}},q=Y,J=(a("1061"),Object(f["a"])(q,y,b,!1,null,null,null));J.options.__file="MadlabMain.vue";var U=J.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"with-transition":t.withTransition,expanded:t.expanded},style:"top: -"+t.top+"px",attrs:{id:"results"}},[t._m(0),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"results-table",class:{"no-goal":0===t.results.tableData.goalMonth}},[a("span"),a("span",[t._v(t._s(t.goalMonthText))]),a("span",[t._v(t._s(t.selectedMonth))]),a("span",[t._v("Clients")]),a("span",[t._v(t._s(t.format(t.results.tableData.clients[0])))]),a("span",[t._v(t._s(t.format(t.results.tableData.clients[1])))]),a("span",[t._v("Floor hrs/wk")]),a("span",[t._v(t._s(t.format(t.results.tableData.hrsPerWeek[0])))]),a("span",[t._v(t._s(t.format(t.results.tableData.hrsPerWeek[1])))]),a("span",[t._v("$/month")]),a("span",[t._v(t._s(t.format(t.FORMATTER.format(Math.round(t.results.tableData.dollarsPerMonth[0])))))]),a("span",[t._v(t._s(t.format(t.FORMATTER.format(Math.round(t.results.tableData.dollarsPerMonth[1])))))]),a("span",[t._v("$/hour")]),a("span",[t._v(t._s(t.format(t.FORMATTER.format(t.results.tableData.dollarsPerHour[0]))))]),a("span",[t._v(t._s(t.format(t.FORMATTER.format(t.results.tableData.dollarsPerHour[1]))))]),a("span",[t._v("Total Income")]),a("span",[t._v(t._s(t.format(t.FORMATTER.format(Math.round(t.results.tableData.totalIncome[0])))))]),a("span",[t._v(t._s(t.format(t.FORMATTER.format(Math.round(t.results.tableData.totalIncome[1])))))]),a("span",[t._v("Pay Grade")]),a("span",[t._v(t._s(t.format(t.results.tableData.payGrade[0])))]),a("span",[t._v(t._s(t.format(t.results.tableData.payGrade[1])))]),a("span",[t._v("Est. Attrition")]),a("span",[t._v(t._s(t.format(t.results.tableData.attrition[0]))+"%")]),a("span",[t._v(t._s(t.format(t.results.tableData.attrition[1]))+"%")])]),a("SliderChart",{attrs:{graphData:t.results.graphData,graphDimensions:t.graphDimensions,sliderRange:t.results.sliderRange,sliderValue:t.results.selectedMonth,name:"results",desiredIncome:t.assumptions.desiredIncomePerMonth.value}})],1),a("div",{staticClass:"handle",class:{expanded:t.expanded},on:{click:t.expandResults}},[a("div",[t._v("»")])])])},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"results-sizing-template"}},[a("div",{staticClass:"left"}),a("div",{staticClass:"right"})])}],K=(a("6b54"),a("6762"),a("2fdb"),{name:"MadlabResults",components:{SliderChart:W},data:function(){return{width:null,FORMATTER:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}),top:0,ref:void 0,withTransition:!0,expanded:!0}},props:{results:{type:Object,default:function(){}},assumptions:{type:Object,default:function(){}}},computed:{graphDimensions:function(){return{w:this.width,h:120,scale:1e4}},goalMonthText:function(){var t=this.results.tableData.goalMonth;return 0==t?"3+ Years":"Month ".concat(t)},selectedMonth:function(){var t=this.results.selectedMonth;return"Month ".concat(t)}},methods:{format:function(t){return t?t.toString().includes("N/A")||t.toString().includes("NaN")?"?":t:"?"},expandResults:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=0!==this.top;t?(this.withTransition=!0,this.top=Math.abs(this.top-this.ref.clientHeight+16),this.expanded=!this.expanded):e&&(this.withTransition=!1,this.top=this.ref.clientHeight-16),window.scrollTo(window.scrollX,window.scrollY)}},mounted:function(){var t=this;this.ref=document.querySelector("#results"),this.width=document.querySelector("#results-sizing-template .right").clientWidth,setTimeout(function(){window.dispatchEvent(new Event("resize"))},0),M.$on("resize",function(){t.width=document.querySelector("#results-sizing-template .right").clientWidth,t.expandResults(!1)})}}),Q=K,Z=(a("82ed"),Object(f["a"])(Q,L,X,!1,null,"2579abab",null));Z.options.__file="MadlabResults.vue";var tt=Z.exports,et=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}),at=["JA1","JA2","SA1","SA2","Associate"],st={x:[],y:[],tooltip:[]},nt={name:"app",components:{MadlabHeader:g,MadlabMain:U,MadlabResults:tt},data:function(){return{Months:[],results:{selectedMonth:1,sliderRange:{min:1,max:48,step:1,interval:1},graphData:st,tableData:{goalMonth:0,clients:[],hrsPerWeek:[],dollarsPerMonth:[],dollarsPerHour:[],totalIncome:[],payGrade:[],attrition:[]}},assumptions:{desiredIncomePerMonth:{description:"Desired Income per Month",value:4e3,format:"currency",sliderRange:{min:0,max:1e4,step:500,interval:500},graphData:st},floorHours:{description:"Max Floor Hours per Week",value:30,format:"int",sliderRange:{min:5,max:40,step:2,interval:1},graphData:st},startingPayGrade:{description:"Starting Pay Grade",value:0,format:"paygrade",sliderRange:{min:0,max:4,step:1,interval:1},graphData:st},monthlyRate:{description:"Average Monthly Membership Rate",value:200,format:"currency",sliderRange:{min:100,max:400,step:10,interval:5},graphData:st},hourlyRate:{description:"Average PT Hourly Rate",value:75,format:"currency",sliderRange:{min:0,max:150,step:5,interval:5},graphData:st},classHours:{description:"Minimum Class Hours per Week",value:1,format:"int",sliderRange:{min:1,max:40,step:2,interval:2},graphData:st},startClients:{description:"Starting Clients",value:0,format:"int",sliderRange:{min:0,max:100,step:5,interval:5},graphData:st},newClients1:{description:"Y1: New PT Clients/month",value:2,format:"float",sliderRange:{min:0,max:10,step:1,interval:.5},graphData:st},newClients2:{description:"Y2: New PT Clients/month",value:3,format:"float",sliderRange:{min:0,max:10,step:1,interval:.5},graphData:st},newClients3:{description:"Y3+: New PT Clients/month",value:4,format:"float",sliderRange:{min:0,max:10,step:1,interval:.5},graphData:st},sourceClients1:{description:"Y1: % of Clients Self Sourced",value:10,format:"percent",sliderRange:{min:0,max:100,step:5,interval:5},graphData:st},sourceClients2:{description:"Y2: % of Clients Self Sourced",value:50,format:"percent",sliderRange:{min:0,max:100,step:5,interval:5},graphData:st},sourceClients3:{description:"Y3+: % of Clients Self Sourced",value:80,format:"percent",sliderRange:{min:0,max:100,step:5,interval:5},graphData:st},averagePT:{description:"Average PT Sessions per Client",value:10,format:"int",sliderRange:{min:3,max:25,step:1,interval:1},graphData:st},salesmanship:{description:"Salesmanship",value:1,format:"int",sliderRange:{min:1,max:10,step:1,interval:1},graphData:st},superstar:{description:"Months to Awesome Salemanship",value:36,format:"int",sliderRange:{min:1,max:60,step:4,interval:1},graphData:st}}}},computed:{},methods:{getAssumptionSliderValues:function(t,e){var a=this.assumptions,s=c()(a),n={};return s.forEach(function(s){n[s]=s===t?e:a[s].value}),n},getCommission:function(t,e){var a=e/100*.1;return 0==t?0:1==t?.2+a:2==t?.3+a:3==t?.35+a:.4+a},getPaygrade:function(t,e){var a;return a=e>=50?4:e>=30?3:e>=10?2:e>=3?1:0,Math.max(a,t)},getClientsSource:function(t,e,a,s,n){var i;return i=n+2>24?a:n+2>12?s[n].clientsS+Math.abs(a-t)/12:s[n].clientsS+Math.abs(e-t)/12,i},introToFun:function(t){var e=25,a=90;return this.getSalesmanshipValue(e,a,t)},funToGroup:function(t){var e=50,a=90;return this.getSalesmanshipValue(e,a,t)},yearlyAttrition:function(t,e){var a=40,s=10,n=this.getSalesmanshipValue(a,s,t),i=Math.min(e/20,1);return Math.round(n/i)},getSalesmanshipValue:function(t,e,a){var s=(a-1)/9;return t-(t-e)*s},getCurrentSalesmanship:function(t,e,a){var s=10,n=(s-t)/e,i=t+a*n;return Math.min(s,i)},formatGraphData:function(t,e){var a={x:[],y:[],tooltip:[]};return t.forEach(function(t,s,n){var i=(e.max-e.min)/(n.length-1);a.x.push(e.min+s*i),a.y.push(t),a.tooltip.push(t)}),a},calculateAssumptionGraphData:function(){var t=this,e=this.assumptions,a=c()(e);a.forEach(function(a){var s=e[a].sliderRange.min,n=e[a].sliderRange.max,i=e[a].sliderRange.step,r=s,o=[s],l=[];while(r<n)o.push(r+i),r+=i;o.forEach(function(e){var s="assumptions",n=t.getAssumptionSliderValues(a,e);l.push(t.calculate(s,n))}),t.assumptions[a].graphData=t.formatGraphData(l,e[a].sliderRange),t.assumptions[a].graphData.tooltip=t.assumptions[a].graphData.tooltip.map(function(t){return 0===t?"48+ Months":"".concat(t," Months")})})},calculate:function(t,e){var a=e.desiredIncomePerMonth,s=e.floorHours,n=e.startingPayGrade,i=e.monthlyRate,r=e.hourlyRate,o=e.classHours,u=e.startClients,c=e.newClients1,h=e.newClients2,p=e.newClients3,d=e.sourceClients1,m=e.sourceClients2,f=e.sourceClients3,v=e.averagePT,g=e.salesmanship,y=e.superstar,b=[],_={introHours:void 0,introToFun:this.introToFun(g),funToGroup:this.funToGroup(g),yearlyAttrition:this.yearlyAttrition(g,v),newClients:c,fundamentalsClients:c,classClients:u,ptBucket:0,ptHours:void 0,hoursWeek:void 0,clientsS:d,revenue:void 0,incomeM:void 0,incomeH:void 0,incomeT:0,payGrade:void 0};_.introHours=_.newClients/_.introToFun*100;var w=4.3*(s-o)-_.introHours;_.ptBucket+=_.newClients*v,_.ptHours=Math.min(w,_.ptBucket),_.ptBucket-=_.ptHours,_.hoursWeek=(_.ptHours+4.3*o+_.introHours)/4.3;var M=_.ptHours/v;_.fundamentalsClients-=M,_.fundamentalsClients=Math.round(_.fundamentalsClients,2),_.classClients+=M*(_.funToGroup/100),_.revenue=i*_.classClients+r*_.ptHours,_.payGrade=this.getPaygrade(n,_.classClients);var C=this.getCommission(_.payGrade,_.clientsS);_.incomeM=_.revenue*C,_.incomeH=_.incomeM/(4.3*_.hoursWeek),_.incomeT+=_.incomeM,b.push(Object(l["a"])({},_));var D=0,x=0,A=0;0==x&&_.incomeM>a&&(x=D+1,A="results"===t?0:x);while(D<47&&0===A){var R=this.getCurrentSalesmanship(g,y,D+1);_.introToFun=this.introToFun(R),_.funToGroup=this.funToGroup(R),_.yearlyAttrition=this.yearlyAttrition(R,v),_.newClients=D+2>24?p:D+1==12?h:D+2>12?(p-h)/12+b[D].newClients:(h-c)/12+b[D].newClients,_.fundamentalsClients+=_.newClients;var S=Math.max(b[D].classClients/6,o);_.introHours=_.newClients/_.introToFun*100,w=4.3*(s-S)-_.introHours,w=w<=0?0:w,_.ptBucket+=_.newClients*v,_.ptHours=Math.min(w,_.ptBucket),_.ptBucket-=_.ptHours,_.hoursWeek=(_.ptHours+4.3*S+_.introHours)/4.3,M=_.ptHours/v,_.fundamentalsClients-=M,_.fundamentalsClients=Math.round(_.fundamentalsClients,2),_.classClients+=M*(_.funToGroup/100);var T=b[D].classClients*(b[D].yearlyAttrition/100)/12;_.classClients-=T,_.revenue=i*_.classClients+r*_.ptHours,_.clientsS=this.getClientsSource(d,m,f,b,D),_.payGrade=this.getPaygrade(n,_.classClients),C=this.getCommission(_.payGrade,_.clientsS),_.incomeM=_.revenue*C,_.incomeH=_.incomeM/(4.3*_.hoursWeek),_.incomeT+=_.incomeM,b.push(Object(l["a"])({},_)),0==x&&_.incomeM>a&&(x=D+2,A="results"===t?0:x),0==x&&34==D&&(A="results"===t?0:x),D++}return"results"===t&&(this.results.tableData.goalMonth=x,this.Months=b,this.setRawResultsGraphData(b,this.results.selectedMonth)),"assumptions"===t?A:"Error"},setRawResultsGraphData:function(t,e){var a=this.results.tableData,s=a.goalMonth>=48?47:a.goalMonth-1,n=e-1;a.clients[0]=-1===s?"N/A":Math.round(t[s].classClients),a.hrsPerWeek[0]=-1===s?"N/A":Math.round(10*t[s].hoursWeek)/10,a.dollarsPerMonth[0]=-1===s?"N/A":t[s].incomeM,a.dollarsPerHour[0]=-1===s?"N/A":t[s].incomeH,a.totalIncome[0]=-1===s?"N/A":t[s].incomeT,a.payGrade[0]=-1===s?"N/A":at[t[s].payGrade],a.attrition[0]=-1===s?"N/A":t[s].yearlyAttrition,a.clients[1]=Math.round(t[n].classClients),a.hrsPerWeek[1]=Math.round(10*t[n].hoursWeek)/10,a.dollarsPerMonth[1]=t[n].incomeM,a.dollarsPerHour[1]=t[n].incomeH,a.totalIncome[1]=t[n].incomeT,a.payGrade[1]=at[t[n].payGrade],a.attrition[1]=t[n].yearlyAttrition;var i=t.map(function(t){return t.incomeM});this.results.graphData=this.formatGraphData(i,this.results.sliderRange),this.results.graphData.tooltip=this.results.graphData.tooltip.map(function(t){return et.format(Math.round(t))})}},watch:{assumptions:function(){var t=this.getAssumptionSliderValues();this.calculate("results",t),this.calculateAssumptionGraphData()},"assumptions.classHours.value":function(t){t>=5&&(this.assumptions.floorHours.sliderRange.min=t)}},mounted:function(){var t,e=this;window.onresize=function(){clearTimeout(t),t=setTimeout(function(){M.$emit("resize",document.querySelector("#sizing-template .right").offsetWidth)},25)},M.$on("slider-update",function(t){var a=t.sliderValue,s=t.name,n=t.initial;n||("results"===s?(e.results.selectedMonth=a,e.setRawResultsGraphData(e.Months,a),e.results=o()({},e.results)):(e.assumptions[s].value=a,e.assumptions=o()({},e.assumptions)))}),M.$emit("resize",document.querySelector("#sizing-template .right").offsetWidth);var a=this.getAssumptionSliderValues();this.calculate("results",a),this.calculateAssumptionGraphData()}},it=nt,rt=(a("5c0b"),Object(f["a"])(it,n,i,!1,null,null,null));rt.options.__file="App.vue";var ot=rt.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(ot)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("5e27"),n=a.n(s);n.a},"5e27":function(t,e,a){},6235:function(t,e,a){"use strict";var s=a("129f"),n=a.n(s);n.a},"82ed":function(t,e,a){"use strict";var s=a("aa48"),n=a.n(s);n.a},"9afe":function(t,e,a){},a10f:function(t,e,a){},aa48:function(t,e,a){},ba06:function(t,e,a){"use strict";var s=a("9afe"),n=a.n(s);n.a},cc80:function(t,e,a){},cf05:function(t,e,a){t.exports="./img/logo.d5358702.png"},df25:function(t,e,a){}});
//# sourceMappingURL=app.5ce600aa.js.map