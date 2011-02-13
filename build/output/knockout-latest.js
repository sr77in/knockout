// Knockout JavaScript library v1.2.0pre
// (c) 2010 Steven Sanderson - http://knockoutjs.com/
// License: Ms-Pl (http://www.opensource.org/licenses/ms-pl.html)

(function(window,undefined){ 
function a(f){throw f;}var m=true,o=null,p=false,q=window.ko={};q.b=function(f,b){for(var c=f.split("."),d=window,e=0;e<c.length-1;e++)d=d[c[e]];d[c[c.length-1]]=b};q.i=function(f,b,c){f[b]=c};
q.a=new function(){var f=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;return{ba:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],h:function(b,c){for(var d=0,e=b.length;d<e;d++)c(b[d])},g:function(b,c){if(typeof b.indexOf=="function")return b.indexOf(c);for(var d=0,e=b.length;d<e;d++)if(b[d]==c)return d;return-1},ya:function(b,c,d){for(var e=0,g=b.length;e<g;e++)if(c.call(d,b[e]))return b[e];return o},$:function(b,c){var d=q.a.g(b,c);d>=0&&b.splice(d,1)},Z:function(b){b=b||[];for(var c=[],d=0,e=b.length;d<
e;d++)q.a.g(c,b[d])<0&&c.push(b[d]);return c},K:function(b,c){b=b||[];for(var d=[],e=0,g=b.length;e<g;e++)d.push(c(b[e]));return d},J:function(b,c){b=b||[];for(var d=[],e=0,g=b.length;e<g;e++)c(b[e])&&d.push(b[e]);return d},L:function(b,c){for(var d=0,e=c.length;d<e;d++)b.push(c[d])},aa:function(b){for(;b.firstChild;){q.a.e.N(b.firstChild);b.removeChild(b.firstChild)}},Va:function(b,c){q.a.aa(b);c&&q.a.h(c,function(d){b.appendChild(d)})},ka:function(b,c){var d=b.nodeType?[b]:b;if(d.length>0){for(var e=
d[0],g=e.parentNode,h=0,i=c.length;h<i;h++)g.insertBefore(c[h],e);h=0;for(i=d.length;h<i;h++){q.a.e.N(d[h]);g.removeChild(d[h])}}},na:function(b,c){if(navigator.userAgent.indexOf("MSIE 6")>=0)b.setAttribute("selected",c);else b.selected=c},Ja:function(b,c){if(!b||b.nodeType!=1)return[];var d=[];b.getAttribute(c)!==o&&d.push(b);for(var e=b.getElementsByTagName("*"),g=0,h=e.length;g<h;g++)e[g].getAttribute(c)!==o&&d.push(e[g]);return d},l:function(b){return(b||"").replace(f,"")},$a:function(b,c){for(var d=
[],e=(b||"").split(c),g=0,h=e.length;g<h;g++){var i=q.a.l(e[g]);i!==""&&d.push(i)}return d},Wa:function(b,c){b=b||"";if(c.length>b.length)return p;return b.substring(0,c.length)===c},Ha:function(b,c){if(c===undefined)return(new Function("return "+b))();with(c)return eval("("+b+")")},Fa:function(b,c){if(c.compareDocumentPosition)return(c.compareDocumentPosition(b)&16)==16;for(;b!=o;){if(b==c)return m;b=b.parentNode}return p},A:function(b){return q.a.Fa(b,document)},o:function(b,c,d){if(typeof jQuery!=
"undefined")jQuery(b).bind(c,d);else if(typeof b.addEventListener=="function")b.addEventListener(c,d,p);else if(typeof b.attachEvent!="undefined")b.attachEvent("on"+c,function(e){d.call(b,e)});else a(Error("Browser doesn't support addEventListener or attachEvent"))},ra:function(b,c){if(!(b&&b.nodeType))a(Error("element must be a DOM node when calling triggerEvent"));if(typeof document.createEvent=="function")if(typeof b.dispatchEvent=="function"){var d=document.createEvent(c=="click"?"MouseEvents":
"HTMLEvents");d.initEvent(c,m,m,window,0,0,0,0,0,p,p,p,p,0,b);b.dispatchEvent(d)}else a(Error("The supplied element doesn't support dispatchEvent"));else if(typeof b.fireEvent!="undefined"){if(c=="click")if(b.tagName=="INPUT"&&(b.type.toLowerCase()=="checkbox"||b.type.toLowerCase()=="radio"))b.checked=b.checked!==m;b.fireEvent("on"+c)}else a(Error("Browser doesn't support triggering events"))},d:function(b){return q.C(b)?b():b},Ea:function(b,c){return q.a.g((b.className||"").split(/\s+/),c)>=0},qa:function(b,
c,d){var e=q.a.Ea(b,c);if(d&&!e)b.className=(b.className||"")+" "+c;else if(e&&!d){d=(b.className||"").split(/\s+/);e="";for(var g=0;g<d.length;g++)if(d[g]!=c)e+=d[g]+" ";b.className=q.a.l(e)}},Sa:function(b,c){b=q.a.d(b);c=q.a.d(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},ga:function(b){for(var c=[],d=b.length-1;d>=0;d--)c.push(b[d]);return c},Q:/MSIE 6/i.test(navigator.userAgent),Ma:/MSIE 7/i.test(navigator.userAgent),da:function(b,c){for(var d=q.a.ga(b.getElementsByTagName("INPUT")).concat(q.a.ga(b.getElementsByTagName("TEXTAREA"))),
e=typeof c=="string"?function(i){return i.name===c}:function(i){return c.test(i.name)},g=[],h=d.length-1;h>=0;h--)e(d[h])&&g.push(d[h]);return g},F:function(b){if(typeof b=="string")if(b=q.a.l(b)){if(window.JSON&&window.JSON.parse)return window.JSON.parse(b);return(new Function("return "+b))()}return o},U:function(b){if(typeof JSON=="undefined"||typeof JSON.stringify=="undefined")a(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));
return JSON.stringify(q.a.d(b))},Ra:function(b,c,d){d=d||{};var e=d.params||{},g=d.includeFields||this.ba,h=b;if(typeof b=="object"&&b.tagName=="FORM"){h=b.action;for(var i=g.length-1;i>=0;i--)for(var j=q.a.da(b,g[i]),k=j.length-1;k>=0;k--)e[j[k].name]=j[k].value}c=q.a.d(c);var l=document.createElement("FORM");l.style.display="none";l.action=h;l.method="post";for(var n in c){b=document.createElement("INPUT");b.name=n;b.value=q.a.U(q.a.d(c[n]));l.appendChild(b)}for(n in e){b=document.createElement("INPUT");
b.name=n;b.value=e[n];l.appendChild(b)}document.body.appendChild(l);d.submitter?d.submitter(l):l.submit();setTimeout(function(){l.parentNode.removeChild(l)},0)},e:{Ya:0,w:"__ko__"+(new Date).getTime(),Za:{},u:function(b,c){var d=q.a.e.ca(b,p);return d===undefined?undefined:d[c]},la:function(b,c,d){q.a.e.ca(b,m)[c]=d},ca:function(b,c){var d=b[q.a.e.w];if(!d){if(!c)return;d=b[q.a.e.w]="ko"+q.a.e.Ya++;q.a.e[d]={}}return q.a.e[d]},M:function(b){var c=b[q.a.e.w];if(c){delete q.a.e[c];b[q.a.e.w]=o}},N:function(b){if(!(b.nodeType!=
1&&b.nodeType!=9)){q.a.e.M(b);b=b.getElementsByTagName("*");for(var c=0,d=b.length;c<d;c++)q.a.e.M(b[c])}}}}};q.b("ko.utils",q.a);q.b("ko.utils.arrayForEach",q.a.h);q.b("ko.utils.arrayFirst",q.a.ya);q.b("ko.utils.arrayFilter",q.a.J);q.b("ko.utils.arrayGetDistinctValues",q.a.Z);q.b("ko.utils.arrayIndexOf",q.a.g);q.b("ko.utils.arrayMap",q.a.K);q.b("ko.utils.arrayPushAll",q.a.L);q.b("ko.utils.arrayRemoveItem",q.a.$);q.b("ko.utils.fieldsIncludedWithJsonPost",q.a.ba);q.b("ko.utils.getFormFields",q.a.da);
q.b("ko.utils.postJson",q.a.Ra);q.b("ko.utils.parseJson",q.a.F);q.b("ko.utils.registerEventHandler",q.a.o);q.b("ko.utils.stringifyJson",q.a.U);q.b("ko.utils.range",q.a.Sa);q.b("ko.utils.toggleDomNodeCssClass",q.a.qa);q.b("ko.utils.triggerEvent",q.a.ra);q.b("ko.utils.unwrapObservable",q.a.d);Function.prototype.bind||(Function.prototype.bind=function(f){var b=this,c=Array.prototype.slice.call(arguments);f=c.shift();return function(){return b.apply(f,c.concat(Array.prototype.slice.call(arguments)))}});
q.j=function(){function f(){return((1+Math.random())*4294967296|0).toString(16).substring(1)}function b(d,e){if(d)if(d.nodeType==8){var g=q.j.ia(d.nodeValue);g!=o&&e.push({Da:d,Oa:g})}else if(d.nodeType==1){g=0;for(var h=d.childNodes,i=h.length;g<i;g++)b(h[g],e)}}var c={};return{S:function(d){if(typeof d!="function")a(Error("You can only pass a function to ko.memoization.memoize()"));var e=f()+f();c[e]=d;return"<!--[ko_memo:"+e+"]--\>"},sa:function(d,e){var g=c[d];if(g===undefined)a(Error("Couldn't find any memo with ID "+
d+". Perhaps it's already been unmemoized."));try{g.apply(o,e||[]);return m}finally{delete c[d]}},ta:function(d,e){var g=[];b(d,g);for(var h=0,i=g.length;h<i;h++){var j=g[h].Da,k=[j];e&&q.a.L(k,e);q.j.sa(g[h].Oa,k);j.nodeValue="";j.parentNode&&j.parentNode.removeChild(j)}},ia:function(d){return(d=d.match(/^\[ko_memo\:(.*?)\]$/))?d[1]:o}}}();q.b("ko.memoization",q.j);q.b("ko.memoization.memoize",q.j.S);q.b("ko.memoization.unmemoize",q.j.sa);q.b("ko.memoization.parseMemoText",q.j.ia);
q.b("ko.memoization.unmemoizeDomNodeAndDescendants",q.j.ta);q.Xa=function(f,b){this.Aa=f;this.t=b;q.i(this,"dispose",this.t)};q.V=function(){var f=[];this.W=function(b,c){var d=new q.Xa(c?function(){b.call(c)}:b,function(){q.a.$(f,d)});f.push(d);return d};this.v=function(b){q.a.h(f.slice(0),function(c){c&&c.Aa(b)})};this.Ka=function(){return f.length};q.i(this,"subscribe",this.W);q.i(this,"notifySubscribers",this.v);q.i(this,"getSubscriptionsCount",this.Ka)};
q.fa=function(f){return typeof f.W=="function"&&typeof f.v=="function"};q.b("ko.subscribable",q.V);q.b("ko.isSubscribable",q.fa);q.z=function(){var f=[];return{za:function(){f.push([])},end:function(){return f.pop()},ja:function(b){if(!q.fa(b))a("Only subscribable things can act as dependencies");f.length>0&&f[f.length-1].push(b)}}}();
q.r=function(f){function b(){if(arguments.length>0){c=arguments[0];b.v(c);return this}else{q.z.ja(b);return c}}var c=f;b.n=q.r;b.H=function(){b.v(c)};q.V.call(b);q.i(b,"valueHasMutated",b.H);return b};q.C=function(f){if(f===o||f===undefined||f.n===undefined)return p;if(f.n===q.r)return m;return q.C(f.n)};q.D=function(f){if(typeof f=="function"&&f.n===q.r)return m;if(typeof f=="function"&&f.n===q.m&&f.La)return m;return p};q.b("ko.observable",q.r);q.b("ko.isObservable",q.C);
q.b("ko.isWriteableObservable",q.D);
q.Qa=function(f){var b=new q.r(f);q.a.h(["pop","push","reverse","shift","sort","splice","unshift"],function(c){b[c]=function(){var d=b();d=d[c].apply(d,arguments);b.H();return d}});q.a.h(["slice"],function(c){b[c]=function(){var d=b();return d[c].apply(d,arguments)}});b.remove=function(c){for(var d=b(),e=[],g=[],h=typeof c=="function"?c:function(l){return l===c},i=0,j=d.length;i<j;i++){var k=d[i];h(k)?g.push(k):e.push(k)}b(e);return g};b.Ta=function(c){if(c===undefined){var d=b();b([]);return d}if(!c)return[];
return b.remove(function(e){return q.a.g(c,e)>=0})};b.O=function(c){for(var d=b(),e=typeof c=="function"?c:function(h){return h===c},g=d.length-1;g>=0;g--)if(e(d[g]))d[g]._destroy=m;b.H()};b.Ca=function(c){if(c===undefined)return b.O(function(){return m});if(!c)return[];return b.O(function(d){return q.a.g(c,d)>=0})};b.indexOf=function(c){var d=b();return q.a.g(d,c)};b.replace=function(c,d){var e=b.indexOf(c);if(e>=0){b()[e]=d;b.H()}};q.i(b,"remove",b.remove);q.i(b,"removeAll",b.Ta);q.i(b,"destroy",
b.O);q.i(b,"destroyAll",b.Ca);q.i(b,"indexOf",b.indexOf);return b};q.b("ko.observableArray",q.Qa);
q.m=function(f,b,c){function d(){q.a.h(i,function(l){l.t()});i=[]}function e(l){d();q.a.h(l,function(n){i.push(n.W(g))})}function g(){if(k&&typeof c.disposeWhen=="function")if(c.disposeWhen()){h.t();return}try{q.z.za();j=c.owner?c.read.call(c.owner):c.read()}finally{var l=q.a.Z(q.z.end());e(l)}h.v(j);k=m}function h(){if(arguments.length>0)if(typeof c.write==="function"){var l=arguments[0];c.owner?c.write.call(c.owner,l):c.write(l)}else a("Cannot write a value to a dependentObservable unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
else{k||g();q.z.ja(h);return j}}if(f&&typeof f=="object")c=f;else{c=c||{};c.read=f||c.read;c.owner=b||c.owner}if(typeof c.read!="function")a("Pass a function that returns the value of the dependentObservable");var i=[],j,k=p;h.n=q.m;h.Ia=function(){return i.length};h.La=typeof c.write==="function";h.t=function(){d()};q.V.call(h);c.deferEvaluation!==m&&g();q.i(h,"dispose",h.t);q.i(h,"getDependenciesCount",h.Ia);return h};q.m.n=q.r;q.b("ko.dependentObservable",q.m);
(function(){function f(d,e,g){g=g||new c;d=e(d);if(!(typeof d=="object"&&d!==o&&d!==undefined))return d;var h=d instanceof Array?[]:{};g.save(d,h);b(d,function(i){var j=e(d[i]);switch(typeof j){case "boolean":case "number":case "string":case "function":h[i]=j;break;case "object":case "undefined":var k=g.u(j);h[i]=k!==undefined?k:f(j,e,g)}});return h}function b(d,e){if(d instanceof Array)for(var g=0;g<d.length;g++)e(g);else for(g in d)e(g)}function c(){var d=[],e=[];this.save=function(g,h){var i=q.a.g(d,
g);if(i>=0)e[i]=h;else{d.push(g);e.push(h)}};this.u=function(g){g=q.a.g(d,g);return g>=0?e[g]:undefined}}q.pa=function(d){if(arguments.length==0)a(Error("When calling ko.toJS, pass the object you want to convert."));return f(d,function(e){for(var g=0;q.C(e)&&g<10;g++)e=e();return e})};q.toJSON=function(d){d=q.pa(d);return q.a.U(d)}})();q.b("ko.toJS",q.pa);q.b("ko.toJSON",q.toJSON);
q.f={k:function(f){if(f.tagName=="OPTION"){if(f.__ko__hasDomDataOptionValue__===m)return q.a.e.u(f,q.c.options.ha);return f.getAttribute("value")}else return f.tagName=="SELECT"?f.selectedIndex>=0?q.f.k(f.options[f.selectedIndex]):undefined:f.value},I:function(f,b){if(f.tagName=="OPTION")switch(typeof b){case "string":case "number":q.a.e.M(f);"__ko__hasDomDataOptionValue__"in f&&delete f.__ko__hasDomDataOptionValue__;f.value=b;break;default:q.a.e.la(f,q.c.options.ha,b);f.__ko__hasDomDataOptionValue__=
m;f.value=""}else if(f.tagName=="SELECT")for(var c=f.options.length-1;c>=0;c--){if(q.f.k(f.options[c])==b){f.selectedIndex=c;break}}else{if(b===o||b===undefined)b="";f.value=b}}};q.b("ko.selectExtensions",q.f);q.b("ko.selectExtensions.readValue",q.f.k);q.b("ko.selectExtensions.writeValue",q.f.I);
q.q=function(){function f(e,g){return e.replace(b,function(h,i){return g[i]})}var b=/\[ko_token_(\d+)\]/g,c=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,d=["true","false"];return{F:function(e){e=q.a.l(e);if(e.length<3)return{};for(var g=[],h=o,i,j=e.charAt(0)=="{"?1:0;j<e.length;j++){var k=e.charAt(j);if(h===o)switch(k){case '"':case "'":case "/":h=j;i=k;break;case "{":h=j;i="}";break;case "[":h=j;i="]"}else if(k==i){k=e.substring(h,j+1);g.push(k);var l="[ko_token_"+(g.length-
1)+"]";e=e.substring(0,h)+l+e.substring(j+1);j-=k.length-l.length;h=o}}h={};e=e.split(",");i=0;for(j=e.length;i<j;i++){l=e[i];var n=l.indexOf(":");if(n>0&&n<l.length-1){k=q.a.l(l.substring(0,n));l=q.a.l(l.substring(n+1));if(k.charAt(0)=="{")k=k.substring(1);if(l.charAt(l.length-1)=="}")l=l.substring(0,l.length-1);k=q.a.l(f(k,g));l=q.a.l(f(l,g));h[k]=l}}return h},P:function(e){var g=q.q.F(e),h=[],i;for(i in g){var j=g[i],k;k=j;k=q.a.g(d,q.a.l(k).toLowerCase())>=0?p:k.match(c)!==o;if(k){h.length>0&&
h.push(", ");h.push(i+" : function(__ko_value) { "+j+" = __ko_value; }")}}if(h.length>0)e=e+", '_ko_property_writers' : { "+h.join("")+" } ";return e}}}();q.b("ko.jsonExpressionRewriting",q.q);q.b("ko.jsonExpressionRewriting.parseJson",q.q.F);q.b("ko.jsonExpressionRewriting.insertPropertyAccessorsIntoJson",q.q.P);q.c={};
q.Y=function(f,b,c){function d(i){return function(){return h[i]}}function e(){return h}var g=m,h;new q.m(function(){var i;if(!(i=typeof b=="function"?b():b)){var j=f.getAttribute("data-bind");try{var k=" { "+q.q.P(j)+" } ";i=q.a.Ha(k,c===o?window:c)}catch(l){a(Error("Unable to parse binding attribute.\nMessage: "+l+";\nAttribute value: "+j))}}h=i;if(g)for(var n in h)q.c[n]&&typeof q.c[n].init=="function"&&(0,q.c[n].init)(f,d(n),e,c);for(n in h)q.c[n]&&typeof q.c[n].update=="function"&&(0,q.c[n].update)(f,
d(n),e,c)},o,{disposeWhen:function(){return!q.a.A(f)}});g=p};q.va=function(f,b){if(b&&b.nodeType==undefined)a(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node (note: this is a breaking change since KO version 1.05)"));b=b||window.document.body;var c=q.a.Ja(b,"data-bind");q.a.h(c,function(d){q.Y(d,o,f)})};q.b("ko.bindingHandlers",q.c);q.b("ko.applyBindings",q.va);
q.a.h(["click"],function(f){q.c[f]={init:function(b,c,d,e){return q.c.event.init.call(this,b,function(){var g={};g[f]=c();return g},d,e)}}});q.c.event={init:function(f,b,c,d){var e=b()||{},g;for(g in e)(function(){var h=g;typeof h=="string"&&q.a.o(f,h,function(i){var j,k=b()[h],l=c();try{j=k.apply(d,arguments)}finally{if(j!==m)if(i.preventDefault)i.preventDefault();else i.returnValue=p}if(l[h+"Bubble"]===p){i.cancelBubble=m;i.stopPropagation&&i.stopPropagation()}})})()}};
q.c.submit={init:function(f,b,c,d){if(typeof b()!="function")a(Error("The value for a submit binding must be a function to invoke on submit"));q.a.o(f,"submit",function(e){var g,h=b();try{g=h.call(d,f)}finally{if(g!==m)if(e.preventDefault)e.preventDefault();else e.returnValue=p}})}};q.c.visible={update:function(f,b){var c=q.a.d(b()),d=f.style.display!="none";if(c&&!d)f.style.display="";else if(!c&&d)f.style.display="none"}};
q.c.enable={update:function(f,b){var c=q.a.d(b());if(c&&f.disabled)f.removeAttribute("disabled");else if(!c&&!f.disabled)f.disabled=m}};q.c.disable={update:function(f,b){q.c.enable.update(f,function(){return!q.a.d(b())})}};
q.c.value={init:function(f,b,c){var d=c().valueUpdate||"change",e=p;if(q.a.Wa(d,"after")){e=m;d=d.substring(5)}var g=e?function(h){setTimeout(h,0)}:function(h){h()};q.a.o(f,d,function(){g(function(){var h=b(),i=q.f.k(f);if(q.D(h))h(i);else{h=c();h._ko_property_writers&&h._ko_property_writers.value&&h._ko_property_writers.value(i)}})})},update:function(f,b){var c=q.a.d(b()),d=q.f.k(f),e=c!=d;if(c===0&&d!==0&&d!=="0")e=m;if(e){d=function(){q.f.I(f,c)};d();f.tagName=="SELECT"&&setTimeout(d,0)}if(f.tagName==
"SELECT"){d=q.f.k(f);d!==c&&q.a.ra(f,"change")}}};
q.c.options={update:function(f,b,c){if(f.tagName!="SELECT")a(Error("options binding applies only to SELECT elements"));var d=q.a.K(q.a.J(f.childNodes,function(l){return l.tagName&&l.tagName=="OPTION"&&l.selected}),function(l){return q.f.k(l)||l.innerText||l.textContent}),e=f.scrollTop,g=q.a.d(b());q.a.aa(f);if(g){var h=c();if(typeof g.length!="number")g=[g];if(h.optionsCaption){var i=document.createElement("OPTION");i.innerHTML=h.optionsCaption;q.f.I(i,undefined);f.appendChild(i)}c=0;for(b=g.length;c<
b;c++){i=document.createElement("OPTION");var j=typeof h.optionsValue=="string"?g[c][h.optionsValue]:g[c],k=h.optionsText;optionText=typeof k=="function"?k(g[c]):typeof k=="string"?g[c][k]:j;j=q.a.d(j);optionText=q.a.d(optionText);q.f.I(i,j);i.innerHTML=optionText.toString();f.appendChild(i)}g=f.getElementsByTagName("OPTION");c=h=0;for(b=g.length;c<b;c++)if(q.a.g(d,q.f.k(g[c]))>=0){q.a.na(g[c],m);h++}if(e)f.scrollTop=e}}};q.c.options.ha="__ko.bindingHandlers.options.optionValueDomData__";
q.c.selectedOptions={ea:function(f){var b=[];f=f.childNodes;for(var c=0,d=f.length;c<d;c++){var e=f[c];e.tagName=="OPTION"&&e.selected&&b.push(q.f.k(e))}return b},init:function(f,b,c){q.a.o(f,"change",function(){var d=b();if(q.D(d))d(q.c.selectedOptions.ea(this));else{d=c();d._ko_property_writers&&d._ko_property_writers.value&&d._ko_property_writers.value(q.c.selectedOptions.ea(this))}})},update:function(f,b){if(f.tagName!="SELECT")a(Error("values binding applies only to SELECT elements"));var c=
q.a.d(b());if(c&&typeof c.length=="number")for(var d=f.childNodes,e=0,g=d.length;e<g;e++){var h=d[e];h.tagName=="OPTION"&&q.a.na(h,q.a.g(c,q.f.k(h))>=0)}}};q.c.text={update:function(f,b){var c=q.a.d(b());if(c===o||c===undefined)c="";typeof f.innerText=="string"?f.innerText=c:f.textContent=c}};q.c.html={update:function(f,b){var c=q.a.d(b());if(c===o||c===undefined)c="";f.innerHTML=c}};
q.c.css={update:function(f,b){var c=q.a.d(b()||{}),d;for(d in c)if(typeof d=="string"){var e=q.a.d(c[d]);q.a.qa(f,d,e)}}};q.c.style={update:function(f,b){var c=q.a.d(b()||{}),d;for(d in c)if(typeof d=="string"){var e=q.a.d(c[d]);f.style[d]=e||""}}};q.c.uniqueName={init:function(f,b){if(b()){f.name="ko_unique_"+ ++q.c.uniqueName.Ba;q.a.Q&&f.mergeAttributes(document.createElement("<input name='"+f.name+"'/>"),p)}}};q.c.uniqueName.Ba=0;
q.c.checked={init:function(f,b,c){function d(){var e;if(f.type=="checkbox")e=f.checked;else if(f.type=="radio"&&f.checked)e=f.value;else return;var g=b();if(f.type=="checkbox"&&q.a.d(g)instanceof Array){e=q.a.g(q.a.d(g),f.value);if(f.checked&&e<0)g.push(f.value);else!f.checked&&e>=0&&g.splice(e,1)}else if(q.D(g))g()!==e&&g(e);else{g=c();g._ko_property_writers&&g._ko_property_writers.checked&&g._ko_property_writers.checked(e)}}q.a.o(f,"change",d);q.a.o(f,"click",d);f.type=="radio"&&!f.name&&q.c.uniqueName.init(f,
function(){return m})},update:function(f,b){var c=q.a.d(b());if(f.type=="checkbox"){f.checked=c instanceof Array?q.a.g(c,f.value)>=0:c;c&&q.a.Q&&f.mergeAttributes(document.createElement("<input type='checkbox' checked='checked' />"),p)}else if(f.type=="radio"){f.checked=f.value==c;if(f.value==c&&(q.a.Q||q.a.Ma))f.mergeAttributes(document.createElement("<input type='radio' checked='checked' />"),p)}}};
q.c.attr={update:function(f,b){var c=q.a.d(b())||{},d;for(d in c)if(typeof d=="string"){var e=q.a.d(c[d]);e===p||e===o||e===undefined?f.removeAttribute(d):f.setAttribute(d,e.toString())}}};
q.X=function(){this.renderTemplate=function(){a("Override renderTemplate in your ko.templateEngine subclass")};this.isTemplateRewritten=function(){a("Override isTemplateRewritten in your ko.templateEngine subclass")};this.rewriteTemplate=function(){a("Override rewriteTemplate in your ko.templateEngine subclass")};this.createJavaScriptEvaluatorBlock=function(){a("Override createJavaScriptEvaluatorBlock in your ko.templateEngine subclass")}};q.b("ko.templateEngine",q.X);
q.G=function(){var f=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi;return{Ga:function(b,c){c.isTemplateRewritten(b)||c.rewriteTemplate(b,function(d){return q.G.Pa(d,c)})},Pa:function(b,c){return b.replace(f,function(d,e,g,h,i,j,k){d=k;d=q.q.P(d);return c.createJavaScriptEvaluatorBlock("ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {                     return (function() { return { "+d+" } })()                 })")+e})},
wa:function(b){return q.j.S(function(c,d){c.nextSibling&&q.Y(c.nextSibling,b,d)})}}}();q.b("ko.templateRewriting",q.G);q.b("ko.templateRewriting.applyMemoizedBindingsToNextSibling",q.G.wa);
(function(){function f(c,d,e,g,h){var i=q.a.d(g);h=h||{};var j=h.templateEngine||b;q.G.Ga(e,j);e=j.renderTemplate(e,i,h);if(typeof e.length!="number"||e.length>0&&typeof e[0].nodeType!="number")a("Template engine must return an array of DOM nodes");e&&q.a.h(e,function(k){q.j.ta(k,[g])});switch(d){case "replaceChildren":q.a.Va(c,e);break;case "replaceNode":q.a.ka(c,e);break;case "ignoreTargetNode":break;default:a(Error("Unknown renderMode: "+d))}h.afterRender&&h.afterRender(e,g);return e}var b;q.oa=
function(c){if(c!=undefined&&!(c instanceof q.X))a("templateEngine must inherit from ko.templateEngine");b=c};q.T=function(c,d,e,g,h){e=e||{};if((e.templateEngine||b)==undefined)a("Set a template engine before calling renderTemplate");h=h||"replaceChildren";if(g){var i=g.nodeType?g:g.length>0?g[0]:o;return new q.m(function(){var j=typeof c=="function"?c(d):c;j=f(g,h,j,d,e);if(h=="replaceNode"){g=j;i=g.nodeType?g:g.length>0?g[0]:o}},o,{disposeWhen:function(){return!i||!q.a.A(i)}})}else return q.j.S(function(j){q.T(c,
d,e,j,"replaceNode")})};q.Ua=function(c,d,e,g){new q.m(function(){var h=q.a.d(d)||[];if(typeof h.length=="undefined")h=[h];h=q.a.J(h,function(i){return e.includeDestroyed||!i._destroy});q.a.ma(g,h,function(i){var j=typeof c=="function"?c(i):c;return f(o,"ignoreTargetNode",j,i,e)},e)},o,{disposeWhen:function(){return!q.a.A(g)}})};q.c.template={update:function(c,d,e,g){d=q.a.d(d());e=typeof d=="string"?d:d.name;if(typeof d.foreach!="undefined")q.Ua(e,d.foreach||[],{templateOptions:d.templateOptions,
afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,includeDestroyed:d.includeDestroyed,afterRender:d.afterRender},c);else{var h=d.data;q.T(e,typeof h=="undefined"?g:h,{templateOptions:d.templateOptions,afterRender:d.afterRender},c)}}}})();q.b("ko.setTemplateEngine",q.oa);q.b("ko.renderTemplate",q.T);
q.a.s=function(f,b,c){if(c===undefined)return q.a.s(f,b,1)||q.a.s(f,b,10)||q.a.s(f,b,Number.MAX_VALUE);else{f=f||[];b=b||[];for(var d=f,e=b,g=[],h=0;h<=e.length;h++)g[h]=[];h=0;for(var i=Math.min(d.length,c);h<=i;h++)g[0][h]=h;h=1;for(i=Math.min(e.length,c);h<=i;h++)g[h][0]=h;i=d.length;var j,k=e.length;for(h=1;h<=i;h++){var l=Math.min(k,h+c);for(j=Math.max(1,h-c);j<=l;j++)g[j][h]=d[h-1]===e[j-1]?g[j-1][h-1]:Math.min(g[j-1][h]===undefined?Number.MAX_VALUE:g[j-1][h]+1,g[j][h-1]===undefined?Number.MAX_VALUE:
g[j][h-1]+1)}f=f;b=b;c=f.length;d=b.length;e=[];h=g[d][c];if(h===undefined)g=o;else{for(;c>0||d>0;){i=g[d][c];j=d>0?g[d-1][c]:h+1;k=c>0?g[d][c-1]:h+1;l=d>0&&c>0?g[d-1][c-1]:h+1;if(j===undefined||j<i-1)j=h+1;if(k===undefined||k<i-1)k=h+1;if(l<i-1)l=h+1;if(j<=k&&j<l){e.push({status:"added",value:b[d-1]});d--}else{if(k<j&&k<l)e.push({status:"deleted",value:f[c-1]});else{e.push({status:"retained",value:f[c-1]});d--}c--}}g=e.reverse()}return g}};q.b("ko.utils.compareArrays",q.a.s);
(function(){function f(b,c){var d=[];q.m(function(){var e=b(c)||[];d.length>0&&q.a.ka(d,e);d.splice(0,d.length);q.a.L(d,e)},o,{disposeWhen:function(){return d.length==0||!q.a.A(d[0])}});return d}q.a.ma=function(b,c,d,e){c=c||[];e=e||{};var g=q.a.e.u(b,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===undefined,h=q.a.e.u(b,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],i=q.a.K(h,function(s){return s.xa}),j=q.a.s(i,c);c=[];var k=0,l=[];i=[];for(var n=o,r=0,w=j.length;r<w;r++)switch(j[r].status){case "retained":var t=
h[k];c.push(t);if(t.B.length>0)n=t.B[t.B.length-1];k++;break;case "deleted":q.a.h(h[k].B,function(s){l.push({element:s,index:r,value:j[r].value});n=s});k++;break;case "added":t=f(d,j[r].value);c.push({xa:j[r].value,B:t});for(var v=0,x=t.length;v<x;v++){var u=t[v];i.push({element:u,index:r,value:j[r].value});if(n==o)b.firstChild?b.insertBefore(u,b.firstChild):b.appendChild(u);else n.nextSibling?b.insertBefore(u,n.nextSibling):b.appendChild(u);n=u}}q.a.h(l,function(s){q.a.e.N(s.element)});d=p;if(!g){if(e.afterAdd)for(r=
0;r<i.length;r++)e.afterAdd(i[r].element,i[r].index,i[r].value);if(e.beforeRemove){for(r=0;r<l.length;r++)e.beforeRemove(l[r].element,l[r].index,l[r].value);d=m}}d||q.a.h(l,function(s){s.element.parentNode&&s.element.parentNode.removeChild(s.element)});q.a.e.la(b,"setDomNodeChildrenFromArrayMapping_lastMappingResult",c)}})();q.b("ko.utils.setDomNodeChildrenFromArrayMapping",q.a.ma);
q.R=function(){function f(c){var d=document.getElementById(c);if(d==o)a(Error("Cannot find template with ID="+c));return d}this.p=function(){if(typeof jQuery=="undefined"||!jQuery.tmpl)return 0;if(jQuery.tmpl.tag){if(jQuery.tmpl.tag.tmpl&&jQuery.tmpl.tag.tmpl.open)if(jQuery.tmpl.tag.tmpl.open.toString().indexOf("__")>=0)return 3;return 2}return 1}();var b=RegExp("__ko_apos__","g");this.renderTemplate=function(c,d,e){e=e||{};if(this.p==0)a(Error("jquery.tmpl not detected.\nTo use KO's default template engine, reference jQuery and jquery.tmpl. See Knockout installation documentation for more details."));
if(this.p==1){c='<script type="text/html">'+f(c).text+"<\/script>";d=jQuery.tmpl(c,d)[0].text.replace(b,"'");return jQuery.clean([d],document)}if(!(c in jQuery.template)){var g=f(c).text;jQuery.template(c,g)}d=[d];return jQuery.tmpl(c,d,e.templateOptions)};this.isTemplateRewritten=function(c){if(c in jQuery.template)return m;return f(c).Na===m};this.rewriteTemplate=function(c,d){var e=f(c),g=d(e.text);if(this.p==1){g=q.a.l(g);g=g.replace(/([\s\S]*?)(\${[\s\S]*?}|{{[\=a-z][\s\S]*?}}|$)/g,function(h,
i,j){return i.replace(/\'/g,"__ko_apos__")+j})}e.text=g;e.Na=m};this.createJavaScriptEvaluatorBlock=function(c){if(this.p==1)return"{{= "+c+"}}";return"{{ko_code ((function() { return "+c+" })()) }}"};this.ua=function(c,d){document.write("<script type='text/html' id='"+c+"'>"+d+"<\/script>")};q.i(this,"addTemplate",this.ua);if(this.p>1)jQuery.tmpl.tag.ko_code={open:(this.p<3?"_":"__")+".push($1 || '');"}};q.R.prototype=new q.X;q.oa(new q.R);q.b("ko.jqueryTmplTemplateEngine",q.R);
})(window);                  
