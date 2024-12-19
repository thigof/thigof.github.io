import{c as Fe,u as je,as as ze,a as Ve,at as $e,d as me,au as He,g as Ke,h as _e,av as Ce,aw as We,ax as Qe,S as Je,I as K,aj as W,al as pe,aq as ve,ay as ye,ap as Oe,L as De,an as xe,ao as Le,Q as Ne,N as Ze,A as Ge,O as Ye}from"./index.b6f280f8.js";const Xe={xs:8,sm:10,md:14,lg:20,xl:24};var mt=Fe({name:"QChip",props:{...je,...ze,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(n,{slots:f,emit:h}){const{proxy:{$q:u}}=Ke(),w=Ve(n,u),V=$e(n,Xe),$=me(()=>n.selected===!0||n.icon!==void 0),H=me(()=>n.selected===!0?n.iconSelected||u.iconSet.chip.selected:n.icon),l=me(()=>n.iconRemove||u.iconSet.chip.remove),Q=me(()=>n.disable===!1&&(n.clickable===!0||n.selected!==null)),R=me(()=>{const m=n.outline===!0&&n.color||n.textColor;return"q-chip row inline no-wrap items-center"+(n.outline===!1&&n.color!==void 0?` bg-${n.color}`:"")+(m?` text-${m} q-chip--colored`:"")+(n.disable===!0?" disabled":"")+(n.dense===!0?" q-chip--dense":"")+(n.outline===!0?" q-chip--outline":"")+(n.selected===!0?" q-chip--selected":"")+(Q.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(n.square===!0?" q-chip--square":"")+(w.value===!0?" q-chip--dark q-dark":"")}),X=me(()=>{const m=n.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:n.tabindex||0},de={...m,role:"button","aria-hidden":"false","aria-label":n.removeAriaLabel||u.lang.label.remove};return{chip:m,remove:de}});function B(m){m.keyCode===13&&ne(m)}function ne(m){n.disable||(h("update:selected",!n.selected),h("click",m))}function ue(m){(m.keyCode===void 0||m.keyCode===13)&&(Je(m),n.disable===!1&&(h("update:modelValue",!1),h("remove")))}function be(){const m=[];Q.value===!0&&m.push(_e("div",{class:"q-focus-helper"})),$.value===!0&&m.push(_e(Ce,{class:"q-chip__icon q-chip__icon--left",name:H.value}));const de=n.label!==void 0?[_e("div",{class:"ellipsis"},[n.label])]:void 0;return m.push(_e("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},We(f.default,de))),n.iconRight&&m.push(_e(Ce,{class:"q-chip__icon q-chip__icon--right",name:n.iconRight})),n.removable===!0&&m.push(_e(Ce,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:l.value,...X.value.remove,onClick:ue,onKeyup:ue})),m}return()=>{if(n.modelValue===!1)return;const m={class:R.value,style:V.value};return Q.value===!0&&Object.assign(m,X.value.chip,{onClick:ne,onKeyup:B}),He("div",m,be(),"ripple",n.ripple!==!1&&n.disable!==!0,()=>[[Qe,n.ripple]])}}});var et=(n,f)=>{const h=n.__vccOpts||n;for(const[u,w]of f)h[u]=w;return h};const tt={key:0},nt=["align"],rt=["onClick"],it={key:1,class:"card-grid"},st=["onClick"],at={class:"actions"},ot={__name:"ShowTables",props:{headers:{type:Array,required:!0},tableData:{type:Array,required:!0}},emits:["remove","clicked"],setup(n,{emit:f}){const h=n,u=f,w=window.innerWidth<600,V=()=>[...h.tableData].reverse()||[],$=l=>{u("clicked",l)},H=l=>{u("remove",l)};return(l,Q)=>(K(),W("div",null,[w?(K(),W("div",it,[(K(!0),W(ve,null,ye(V(),(R,X)=>(K(),W("div",{key:X,class:"card",onClick:B=>$(R)},[(K(!0),W(ve,null,ye(n.headers,({field:B,label:ne})=>(K(),W("div",{key:B},[pe("strong",null,Oe(ne)+":",1),Ze(" "+Oe(R[B]),1)]))),128)),pe("div",at,[De(Le(Ne),{icon:"delete",color:"negative",onClick:xe(B=>H(R),["stop"]),size:"sm"},null,8,["onClick"])])],8,st))),128))])):(K(),W("table",tt,[pe("thead",null,[pe("tr",null,[(K(!0),W(ve,null,ye(n.headers,R=>(K(),W("th",{key:R.field,align:R.align},Oe(R.label),9,nt))),128)),Q[0]||(Q[0]=pe("th",null,"A\xE7\xF5es",-1))])]),pe("tbody",null,[(K(!0),W(ve,null,ye(V(),(R,X)=>(K(),W("tr",{key:X,onClick:B=>$(R)},[(K(!0),W(ve,null,ye(n.headers,B=>(K(),W("td",{key:B.field},Oe(R[B.field]),1))),128)),pe("td",null,[De(Le(Ne),{icon:"delete",color:"negative",onClick:xe(B=>H(R),["stop"]),size:"sm"},null,8,["onClick"])])],8,rt))),128))])]))]))}};var _t=et(ot,[["__scopeId","data-v-74ed4db2"]]);const U=[];for(let n=0;n<256;++n)U.push((n+256).toString(16).slice(1));function lt(n,f=0){return(U[n[f+0]]+U[n[f+1]]+U[n[f+2]]+U[n[f+3]]+"-"+U[n[f+4]]+U[n[f+5]]+"-"+U[n[f+6]]+U[n[f+7]]+"-"+U[n[f+8]]+U[n[f+9]]+"-"+U[n[f+10]]+U[n[f+11]]+U[n[f+12]]+U[n[f+13]]+U[n[f+14]]+U[n[f+15]]).toLowerCase()}let Se;const ct=new Uint8Array(16);function ut(){if(!Se){if(typeof crypto=="undefined"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Se=crypto.getRandomValues.bind(crypto)}return Se(ct)}const dt=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var qe={randomUUID:dt};function Ae(n,f,h){if(qe.randomUUID&&!f&&!n)return qe.randomUUID();n=n||{};const u=n.random||(n.rng||ut)();if(u[6]=u[6]&15|64,u[8]=u[8]&63|128,f){h=h||0;for(let w=0;w<16;++w)f[h+w]=u[w];return f}return lt(u)}var ht=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Me={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(n,f){(function(h,u){n.exports=u()})(ht,function h(){var u=typeof self!="undefined"?self:typeof window!="undefined"?window:u!==void 0?u:{},w=!u.document&&!!u.postMessage,V=u.IS_PAPA_WORKER||!1,$={},H=0,l={parse:function(t,e){var r=(e=e||{}).dynamicTyping||!1;if(b(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=!!b(e.transform)&&e.transform,e.worker&&l.WORKERS_SUPPORTED){var i=function(){if(!l.WORKERS_SUPPORTED)return!1;var p=(M=u.URL||u.webkitURL||null,A=h.toString(),l.BLOB_URL||(l.BLOB_URL=M.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",A,")();"],{type:"text/javascript"})))),g=new u.Worker(p),M,A;return g.onmessage=Be,g.id=H++,$[g.id]=g}();return i.userStep=e.step,i.userChunk=e.chunk,i.userComplete=e.complete,i.userError=e.error,e.step=b(e.step),e.chunk=b(e.chunk),e.complete=b(e.complete),e.error=b(e.error),delete e.worker,void i.postMessage({input:t,config:e,workerId:i.id})}var a=null;return l.NODE_STREAM_INPUT,typeof t=="string"?(t=function(p){return p.charCodeAt(0)===65279?p.slice(1):p}(t),a=e.download?new X(e):new ne(e)):t.readable===!0&&b(t.read)&&b(t.on)?a=new ue(e):(u.File&&t instanceof File||t instanceof Object)&&(a=new B(e)),a.stream(t)},unparse:function(t,e){var r=!1,i=!0,a=",",p=`\r
`,g='"',M=g+g,A=!1,o=null,T=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||l.BAD_DELIMITERS.filter(function(s){return e.delimiter.indexOf(s)!==-1}).length||(a=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(A=e.skipEmptyLines),typeof e.newline=="string"&&(p=e.newline),typeof e.quoteChar=="string"&&(g=e.quoteChar),typeof e.header=="boolean"&&(i=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");o=e.columns}e.escapeChar!==void 0&&(M=e.escapeChar+g),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(T=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var d=new RegExp(m(g),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return ee(null,t,A);if(typeof t[0]=="object")return ee(o||Object.keys(t[0]),t,A)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||o),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),ee(t.fields||[],t.data||[],A);throw new Error("Unable to serialize unrecognized input");function ee(s,E,j){var I="";typeof s=="string"&&(s=JSON.parse(s)),typeof E=="string"&&(E=JSON.parse(E));var P=Array.isArray(s)&&0<s.length,N=!Array.isArray(E[0]);if(P&&i){for(var q=0;q<s.length;q++)0<q&&(I+=a),I+=F(s[q],q);0<E.length&&(I+=p)}for(var c=0;c<E.length;c++){var _=P?s.length:E[c].length,C=!1,L=P?Object.keys(E[c]).length===0:E[c].length===0;if(j&&!P&&(C=j==="greedy"?E[c].join("").trim()==="":E[c].length===1&&E[c][0].length===0),j==="greedy"&&P){for(var k=[],z=0;z<_;z++){var D=N?s[z]:z;k.push(E[c][D])}C=k.join("").trim()===""}if(!C){for(var O=0;O<_;O++){0<O&&!L&&(I+=a);var te=P&&N?s[O]:O;I+=F(E[c][te],O)}c<E.length-1&&(!j||0<_&&!L)&&(I+=p)}}return I}function F(s,E){if(s==null)return"";if(s.constructor===Date)return JSON.stringify(s).slice(1,25);var j=!1;T&&typeof s=="string"&&T.test(s)&&(s="'"+s,j=!0);var I=s.toString().replace(d,M);return(j=j||r===!0||typeof r=="function"&&r(s,E)||Array.isArray(r)&&r[E]||function(P,N){for(var q=0;q<N.length;q++)if(-1<P.indexOf(N[q]))return!0;return!1}(I,l.BAD_DELIMITERS)||-1<I.indexOf(a)||I.charAt(0)===" "||I.charAt(I.length-1)===" ")?g+I+g:I}}};if(l.RECORD_SEP=String.fromCharCode(30),l.UNIT_SEP=String.fromCharCode(31),l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!w&&!!u.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=de,l.ParserHandle=be,l.NetworkStreamer=X,l.FileStreamer=B,l.StringStreamer=ne,l.ReadableStreamStreamer=ue,u.jQuery){var Q=u.jQuery;Q.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(p){if(!(Q(this).prop("tagName").toUpperCase()==="INPUT"&&Q(this).attr("type").toLowerCase()==="file"&&u.FileReader)||!this.files||this.files.length===0)return!0;for(var g=0;g<this.files.length;g++)r.push({file:this.files[g],inputElem:this,instanceConfig:Q.extend({},e)})}),i(),this;function i(){if(r.length!==0){var p,g,M,A,o=r[0];if(b(t.before)){var T=t.before(o.file,o.inputElem);if(typeof T=="object"){if(T.action==="abort")return p="AbortError",g=o.file,M=o.inputElem,A=T.reason,void(b(t.error)&&t.error({name:p},g,M,A));if(T.action==="skip")return void a();typeof T.config=="object"&&(o.instanceConfig=Q.extend(o.instanceConfig,T.config))}else if(T==="skip")return void a()}var d=o.instanceConfig.complete;o.instanceConfig.complete=function(ee){b(d)&&d(ee,o.file,o.inputElem),a()},l.parse(o.file,o.instanceConfig)}else b(t.complete)&&t.complete()}function a(){r.splice(0,1),i()}}}function R(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var r=Ee(e);r.chunkSize=parseInt(r.chunkSize),e.step||e.chunk||(r.chunkSize=null),this._handle=new be(r),(this._handle.streamer=this)._config=r}.call(this,t),this.parseChunk=function(e,r){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);i!==void 0&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var a=this._partialLine+e;this._partialLine="";var p=this._handle.parse(a,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var g=p.meta.cursor;this._finished||(this._partialLine=a.substring(g-this._baseIndex),this._baseIndex=g),p&&p.data&&(this._rowCount+=p.data.length);var M=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(V)u.postMessage({results:p,workerId:l.WORKER_ID,finished:M});else if(b(this._config.chunk)&&!r){if(this._config.chunk(p,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);p=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(p.data),this._completeResults.errors=this._completeResults.errors.concat(p.errors),this._completeResults.meta=p.meta),this._completed||!M||!b(this._config.complete)||p&&p.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),M||p&&p.meta.paused||this._nextChunk(),p}this._halted=!0},this._sendError=function(e){b(this._config.error)?this._config.error(e):V&&this._config.error&&u.postMessage({workerId:l.WORKER_ID,error:e,finished:!1})}}function X(t){var e;(t=t||{}).chunkSize||(t.chunkSize=l.RemoteChunkSize),R.call(this,t),this._nextChunk=w?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),w||(e.onload=ae(this._chunkLoaded,this),e.onerror=ae(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!w),this._config.downloadRequestHeaders){var r=this._config.downloadRequestHeaders;for(var i in r)e.setRequestHeader(i,r[i])}if(this._config.chunkSize){var a=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+a)}try{e.send(this._config.downloadRequestBody)}catch(p){this._chunkError(p.message)}w&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(r){var i=r.getResponseHeader("Content-Range");return i===null?-1:parseInt(i.substring(i.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(r){var i=e.statusText||r;this._sendError(new Error(i))}}function B(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=l.LocalChunkSize),R.call(this,t);var i=typeof FileReader!="undefined";this.stream=function(a){this._input=a,r=a.slice||a.webkitSlice||a.mozSlice,i?((e=new FileReader).onload=ae(this._chunkLoaded,this),e.onerror=ae(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var a=this._input;if(this._config.chunkSize){var p=Math.min(this._start+this._config.chunkSize,this._input.size);a=r.call(a,this._start,p)}var g=e.readAsText(a,this._config.encoding);i||this._chunkLoaded({target:{result:g}})},this._chunkLoaded=function(a){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(a.target.result)},this._chunkError=function(){this._sendError(e.error)}}function ne(t){var e;R.call(this,t=t||{}),this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r,i=this._config.chunkSize;return i?(r=e.substring(0,i),e=e.substring(i)):(r=e,e=""),this._finished=!e,this.parseChunk(r)}}}function ue(t){R.call(this,t=t||{});var e=[],r=!0,i=!1;this.pause=function(){R.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){R.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(a){this._input=a,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=ae(function(a){try{e.push(typeof a=="string"?a:a.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(p){this._streamError(p)}},this),this._streamError=ae(function(a){this._streamCleanUp(),this._sendError(a)},this),this._streamEnd=ae(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=ae(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function be(t){var e,r,i,a=Math.pow(2,53),p=-a,g=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,M=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,A=this,o=0,T=0,d=!1,ee=!1,F=[],s={data:[],errors:[],meta:{}};if(b(t.step)){var E=t.step;t.step=function(c){if(s=c,P())I();else{if(I(),s.data.length===0)return;o+=c.data.length,t.preview&&o>t.preview?r.abort():(s.data=s.data[0],E(s,A))}}}function j(c){return t.skipEmptyLines==="greedy"?c.join("").trim()==="":c.length===1&&c[0].length===0}function I(){return s&&i&&(q("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),i=!1),t.skipEmptyLines&&(s.data=s.data.filter(function(c){return!j(c)})),P()&&function(){if(!s)return;function c(C,L){b(t.transformHeader)&&(C=t.transformHeader(C,L)),F.push(C)}if(Array.isArray(s.data[0])){for(var _=0;P()&&_<s.data.length;_++)s.data[_].forEach(c);s.data.splice(0,1)}else s.data.forEach(c)}(),function(){if(!s||!t.header&&!t.dynamicTyping&&!t.transform)return s;function c(C,L){var k,z=t.header?{}:[];for(k=0;k<C.length;k++){var D=k,O=C[k];t.header&&(D=k>=F.length?"__parsed_extra":F[k]),t.transform&&(O=t.transform(O,D)),O=N(D,O),D==="__parsed_extra"?(z[D]=z[D]||[],z[D].push(O)):z[D]=O}return t.header&&(k>F.length?q("FieldMismatch","TooManyFields","Too many fields: expected "+F.length+" fields but parsed "+k,T+L):k<F.length&&q("FieldMismatch","TooFewFields","Too few fields: expected "+F.length+" fields but parsed "+k,T+L)),z}var _=1;return!s.data.length||Array.isArray(s.data[0])?(s.data=s.data.map(c),_=s.data.length):s.data=c(s.data,0),t.header&&s.meta&&(s.meta.fields=F),T+=_,s}()}function P(){return t.header&&F.length===0}function N(c,_){return C=c,t.dynamicTypingFunction&&t.dynamicTyping[C]===void 0&&(t.dynamicTyping[C]=t.dynamicTypingFunction(C)),(t.dynamicTyping[C]||t.dynamicTyping)===!0?_==="true"||_==="TRUE"||_!=="false"&&_!=="FALSE"&&(function(L){if(g.test(L)){var k=parseFloat(L);if(p<k&&k<a)return!0}return!1}(_)?parseFloat(_):M.test(_)?new Date(_):_===""?null:_):_;var C}function q(c,_,C,L){var k={type:c,code:_,message:C};L!==void 0&&(k.row=L),s.errors.push(k)}this.parse=function(c,_,C){var L=t.quoteChar||'"';if(t.newline||(t.newline=function(D,O){D=D.substring(0,1048576);var te=new RegExp(m(O)+"([^]*?)"+m(O),"gm"),J=(D=D.replace(te,"")).split("\r"),re=D.split(`
`),ie=1<re.length&&re[0].length<J[0].length;if(J.length===1||ie)return`
`;for(var Z=0,S=0;S<J.length;S++)J[S][0]===`
`&&Z++;return Z>=J.length/2?`\r
`:"\r"}(c,L)),i=!1,t.delimiter)b(t.delimiter)&&(t.delimiter=t.delimiter(c),s.meta.delimiter=t.delimiter);else{var k=function(D,O,te,J,re){var ie,Z,S,x;re=re||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var he=0;he<re.length;he++){var v=re[he],ge=0,se=0,fe=0;S=void 0;for(var oe=new de({comments:J,delimiter:v,newline:O,preview:10}).parse(D),le=0;le<oe.data.length;le++)if(te&&j(oe.data[le]))fe++;else{var ce=oe.data[le].length;se+=ce,S!==void 0?0<ce&&(ge+=Math.abs(ce-S),S=ce):S=ce}0<oe.data.length&&(se/=oe.data.length-fe),(Z===void 0||ge<=Z)&&(x===void 0||x<se)&&1.99<se&&(Z=ge,ie=v,x=se)}return{successful:!!(t.delimiter=ie),bestDelimiter:ie}}(c,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);k.successful?t.delimiter=k.bestDelimiter:(i=!0,t.delimiter=l.DefaultDelimiter),s.meta.delimiter=t.delimiter}var z=Ee(t);return t.preview&&t.header&&z.preview++,e=c,r=new de(z),s=r.parse(e,_,C),I(),d?{meta:{paused:!0}}:s||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,r.abort(),e=b(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){A.streamer._halted?(d=!1,A.streamer.parseChunk(e,!0)):setTimeout(A.resume,3)},this.aborted=function(){return ee},this.abort=function(){ee=!0,r.abort(),s.meta.aborted=!0,b(t.complete)&&t.complete(s),e=""}}function m(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function de(t){var e,r=(t=t||{}).delimiter,i=t.newline,a=t.comments,p=t.step,g=t.preview,M=t.fastMode,A=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(A=t.escapeChar),(typeof r!="string"||-1<l.BAD_DELIMITERS.indexOf(r))&&(r=","),a===r)throw new Error("Comment character same as delimiter");a===!0?a="#":(typeof a!="string"||-1<l.BAD_DELIMITERS.indexOf(a))&&(a=!1),i!==`
`&&i!=="\r"&&i!==`\r
`&&(i=`
`);var o=0,T=!1;this.parse=function(d,ee,F){if(typeof d!="string")throw new Error("Input must be a string");var s=d.length,E=r.length,j=i.length,I=a.length,P=b(p),N=[],q=[],c=[],_=o=0;if(!d)return G();if(t.header&&!ee){var C=d.split(i)[0].split(r),L=[],k={},z=!1;for(var D in C){var O=C[D];b(t.transformHeader)&&(O=t.transformHeader(O,D));var te=O,J=k[O]||0;for(0<J&&(z=!0,te=O+"_"+J),k[O]=J+1;L.includes(te);)te=te+"_"+J;L.push(te)}if(z){var re=d.split(i);re[0]=L.join(r),d=re.join(i)}}if(M||M!==!1&&d.indexOf(e)===-1){for(var ie=d.split(i),Z=0;Z<ie.length;Z++){if(c=ie[Z],o+=c.length,Z!==ie.length-1)o+=i.length;else if(F)return G();if(!a||c.substring(0,I)!==a){if(P){if(N=[],fe(c.split(r)),ke(),T)return G()}else fe(c.split(r));if(g&&g<=Z)return N=N.slice(0,g),G(!0)}}return G()}for(var S=d.indexOf(r,o),x=d.indexOf(i,o),he=new RegExp(m(A)+m(e),"g"),v=d.indexOf(e,o);;)if(d[o]!==e)if(a&&c.length===0&&d.substring(o,o+I)===a){if(x===-1)return G();o=x+j,x=d.indexOf(i,o),S=d.indexOf(r,o)}else if(S!==-1&&(S<x||x===-1))c.push(d.substring(o,S)),o=S+E,S=d.indexOf(r,o);else{if(x===-1)break;if(c.push(d.substring(o,x)),ce(x+j),P&&(ke(),T))return G();if(g&&N.length>=g)return G(!0)}else for(v=o,o++;;){if((v=d.indexOf(e,v+1))===-1)return F||q.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:N.length,index:o}),le();if(v===s-1)return le(d.substring(o,v).replace(he,e));if(e!==A||d[v+1]!==A){if(e===A||v===0||d[v-1]!==A){S!==-1&&S<v+1&&(S=d.indexOf(r,v+1)),x!==-1&&x<v+1&&(x=d.indexOf(i,v+1));var ge=oe(x===-1?S:Math.min(S,x));if(d.substr(v+1+ge,E)===r){c.push(d.substring(o,v).replace(he,e)),d[o=v+1+ge+E]!==e&&(v=d.indexOf(e,o)),S=d.indexOf(r,o),x=d.indexOf(i,o);break}var se=oe(x);if(d.substring(v+1+se,v+1+se+j)===i){if(c.push(d.substring(o,v).replace(he,e)),ce(v+1+se+j),S=d.indexOf(r,o),v=d.indexOf(e,o),P&&(ke(),T))return G();if(g&&N.length>=g)return G(!0);break}q.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:N.length,index:o}),v++}}else v++}return le();function fe(Y){N.push(Y),_=o}function oe(Y){var Te=0;if(Y!==-1){var Re=d.substring(v+1,Y);Re&&Re.trim()===""&&(Te=Re.length)}return Te}function le(Y){return F||(Y===void 0&&(Y=d.substring(o)),c.push(Y),o=s,fe(c),P&&ke()),G()}function ce(Y){o=Y,fe(c),c=[],x=d.indexOf(i,o)}function G(Y){return{data:N,errors:q,meta:{delimiter:r,linebreak:i,aborted:T,truncated:!!Y,cursor:_+(ee||0)}}}function ke(){p(G()),N=[],q=[]}},this.abort=function(){T=!0},this.getCharIndex=function(){return o}}function Be(t){var e=t.data,r=$[e.workerId],i=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var a={abort:function(){i=!0,Ie(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:we,resume:we};if(b(r.userStep)){for(var p=0;p<e.results.data.length&&(r.userStep({data:e.results.data[p],errors:e.results.errors,meta:e.results.meta},a),!i);p++);delete e.results}else b(r.userChunk)&&(r.userChunk(e.results,a,e.file),delete e.results)}e.finished&&!i&&Ie(e.workerId,e.results)}function Ie(t,e){var r=$[t];b(r.userComplete)&&r.userComplete(e),r.terminate(),delete $[t]}function we(){throw new Error("Not implemented.")}function Ee(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=Ee(t[r]);return e}function ae(t,e){return function(){t.apply(e,arguments)}}function b(t){return typeof t=="function"}return V&&(u.onmessage=function(t){var e=t.data;if(l.WORKER_ID===void 0&&e&&(l.WORKER_ID=e.workerId),typeof e.input=="string")u.postMessage({workerId:l.WORKER_ID,results:l.parse(e.input,e.config),finished:!0});else if(u.File&&e.input instanceof File||e.input instanceof Object){var r=l.parse(e.input,e.config);r&&u.postMessage({workerId:l.WORKER_ID,results:r,finished:!0})}}),(X.prototype=Object.create(R.prototype)).constructor=X,(B.prototype=Object.create(R.prototype)).constructor=B,(ne.prototype=Object.create(ne.prototype)).constructor=ne,(ue.prototype=Object.create(R.prototype)).constructor=ue,l})})(Me);var ft=Me.exports;const y=Ge({values:null,csv:"",selected:{id:Ae(),NRPATRIMONIO1:"",DESCRICAO:"",LOCALIZA\u00C7\u00C3O:"",ESTADO:"",OBSERVA\u00C7\u00C3O:"",SITUA\u00C7\u00C3O:"",UPDATED:""},selects:[],fields:[],colunas:[{field:"NRPATRIMONIO1",label:"NPAT",align:"left"},{field:"DESCRICAO",label:"Descri\xE7\xE3o",align:"left"},{field:"LOCALIZA\xC7\xC3O",label:"Local",align:"left"},{field:"ESTADO",label:"Estado",align:"left"},{field:"OBSERVA\xC7\xC3O",label:"Observa\xE7\xE3o",align:"left"},{field:"SITUA\xC7\xC3O",label:"Situa\xE7\xE3o",align:"left"}]}),vt=()=>{y.selected.id=Ae(),y.selected.NRPATRIMONIO1="",y.selected.DESCRICAO="",y.selected.LOCALIZA\u00C7\u00C3O="",y.selected.ESTADO="",y.selected.OBSERVA\u00C7\u00C3O="",y.selected.UPDATED=""},yt=()=>{const n=Object.fromEntries(y.fields.map(h=>[h,""]));return Object.assign(n,JSON.parse(JSON.stringify(y.selected))),n.UPDATED=new Date,(y.selected.NRPATRIMONIO1&&!!y.selects.find(h=>h.NRPATRIMONIO1===y.selected.NRPATRIMONIO1)||!n.INSERTED)&&(n.INSERTED=new Date),n.id&&(y.selects=y.selects.filter(h=>h.id!==n.id||n.NRPATRIMONIO1&&h.NRPATRIMONIO1!==n.NRPATRIMONIO1)),y.selects.push(n),!0},bt=n=>{const f=n.target.files[0];if(!f)return;const h=new FileReader;h.onload=u=>{const w=u.target.result;y.csv=w;const V=ft.parse(w,{header:!0});y.values=V.data.map($=>Object.keys($).reduce((H,l)=>(l.trim()&&(H[l]=$[l]),H),{SITUA\u00C7\u00C3O:"",OBSERVA\u00C7\u00C3O:"",UPDATED:""})),y.fields=V.meta.fields,Pe()},h.readAsText(f)},Pe=()=>{try{localStorage.setItem("data",JSON.stringify(y))}catch(n){console.log("erro ao salvar: ",n)}};function kt(n,f="data.csv",h="	"){const u=Object.keys(n[0]),w=JSON.parse(JSON.stringify(n)).map(H=>Object.values(H)).map(H=>H.join(h)),V=[u.join(h),...w].join(`
`);Object.assign(document.createElement("a"),{href:URL.createObjectURL(new Blob([V],{type:"text/csv"})),download:f}).click()}const Ot=()=>{Ue(y.selects.map(n=>({NPAT:n.NRPATRIMONIO1||"",Setor:n.NOME_SETOR||"",Local:n.LOCALIZA\u00C7\u00C3O||"",Valor:Number(n.VALOR).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})||"",Estado:n.DESC_ESTADO||""})))},Et=()=>{Ue(y.selects.map(n=>({NPAT:n.NRPATRIMONIO1||"",Descri\u00E7\u00E3o:n.DESCRICAO||"",Local:n.LOCALIZA\u00C7\u00C3O||"",Setor:n.NOME_SETOR,Estado:n.DESC_ESTADO||"",Valor:Number(n.VALOR).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})||""})))},pt=n=>{const f=`<table border="1" cellpadding="1" cellspacing="1" style="width:100%;" align="center"><thead><tr>${Object.keys(n[0]).map(h=>`<th><strong>${h}<strong></th>`).join("")}</tr></thead><tbody>${n.map(h=>`<tr>${Object.values(h).map(u=>`<td>${u}</td>`).join("")}</tr>`).join("")}</tbody></table>`;return navigator.clipboard.writeText(f),f},Ue=n=>{const f=pt(n),h=document.createElement("div");h.innerHTML=f,document.body.appendChild(h);const u=document.createRange();u.selectNodeContents(h),window.getSelection().removeAllRanges(),window.getSelection().addRange(u),document.execCommand("copy"),document.body.removeChild(h)},Rt=()=>{Ye.create({title:"Apagar tudo",message:"Deseja apagar todos os registros?",ok:"Confirmar",cancel:"Cancelar",persistent:!0}).onOk(()=>{y.selects=[],Pe(),console.log("Apagado...")}).onCancel(()=>{console.log(">>>> Cancel")}).onDismiss(()=>{console.log("Cancelado")})};try{const n=localStorage.getItem("data");if(n){const f=JSON.parse(n);y.csv=f.csv,y.fields=f.fields||[],y.selects=f.selects.map(h=>(h.INSERTED||(h.INSERTED=new Date),h))||[],y.selected=f.selected||{},y.values=[...f.values||[]].map(h=>(h.id||(h.id=Ae()),h))}}catch(n){console.log("Erro ao carregar dados localStorage: ",n)}export{mt as Q,_t as S,et as _,y as a,Ot as b,Et as c,vt as d,yt as e,kt as g,bt as h,Rt as l,Pe as s,Ae as v};
