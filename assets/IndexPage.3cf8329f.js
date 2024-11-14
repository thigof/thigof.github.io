import{c as He,t as Ue,p as Ke,G as We,H as Ze,o as Qe,h as Je,d as Ge,g as Ye,I as Xe,J as Fe,v as et,K as tt,L as nt,a as rt,C as G,M as Y,N as ae,O as Oe,P as Ee,Q as ke,F as W,R as Te,S,T as ve,U as je,w as Ve,V as it,W as st,y as at,X as ot,E as lt,Y as ut,Z as dt}from"./index.8e6e9ef9.js";import{_ as qe}from"./plugin-vue_export-helper.21dcd24c.js";var ct=He({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(r,{slots:l,emit:m}){const h=Ye(),v=Ue(null);let b=0;const a=[];function U(y){const ee=typeof y=="boolean"?y:r.noErrorFocus!==!0,_e=++b,he=(P,X)=>{m(`validation${P===!0?"Success":"Error"}`,X)},Ce=P=>{const X=P.validate();return typeof X.then=="function"?X.then(te=>({valid:te,comp:P}),te=>({valid:!1,comp:P,err:te})):Promise.resolve({valid:X,comp:P})};return(r.greedy===!0?Promise.all(a.map(Ce)).then(P=>P.filter(X=>X.valid!==!0)):a.reduce((P,X)=>P.then(()=>Ce(X).then(te=>{if(te.valid===!1)return Promise.reject(te)})),Promise.resolve()).catch(P=>[P])).then(P=>{if(P===void 0||P.length===0)return _e===b&&he(!0),!0;if(_e===b){const{comp:X,err:te}=P[0];if(te!==void 0&&console.error(te),he(!1,X),ee===!0){const oe=P.find(({comp:O})=>typeof O.focus=="function"&&Xe(O.$)===!1);oe!==void 0&&oe.comp.focus()}}return!1})}function i(){b++,a.forEach(y=>{typeof y.resetValidation=="function"&&y.resetValidation()})}function k(y){y!==void 0&&Fe(y);const ee=b+1;U().then(_e=>{ee===b&&_e===!0&&(r.onSubmit!==void 0?m("submit",y):y!==void 0&&y.target!==void 0&&typeof y.target.submit=="function"&&y.target.submit())})}function N(y){y!==void 0&&Fe(y),m("reset"),et(()=>{i(),r.autofocus===!0&&r.noResetFocus!==!0&&q()})}function q(){tt(()=>{if(v.value===null)return;const y=v.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||v.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||v.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(v.value.querySelectorAll("[tabindex]"),ee=>ee.tabIndex!==-1);y!=null&&y.focus({preventScroll:!0})})}Ke(nt,{bindComponent(y){a.push(y)},unbindComponent(y){const ee=a.indexOf(y);ee!==-1&&a.splice(ee,1)}});let z=!1;return We(()=>{z=!0}),Ze(()=>{z===!0&&r.autofocus===!0&&q()}),Qe(()=>{r.autofocus===!0&&q()}),Object.assign(h.proxy,{validate:U,resetValidation:i,submit:k,reset:N,focus:q,getValidationComponents:()=>a}),()=>Je("form",{class:"q-form",ref:v,onSubmit:k,onReset:N},Ge(l.default))}});const ft={key:0},ht=["align"],pt=["onClick"],gt={key:1,class:"card-grid"},mt=["onClick"],vt={class:"actions"},_t={__name:"ShowTables",props:{headers:{type:Array,required:!0},tableData:{type:Array,required:!0},reverse:{type:Boolean,default:!1}},emits:["remove","clicked"],setup(r,{emit:l}){const m=r,h=l,v=rt(()=>window.innerWidth<600),b=()=>m.reverse?[...m.tableData].reverse():m.tableData,a=i=>{const k=m.reverse||!v.value?m.tableData.length-1-i:i;h("clicked",k)},U=i=>{h("remove",i)};return(i,k)=>(G(),Y("div",null,[v.value?(G(),Y("div",gt,[(G(!0),Y(Oe,null,Ee(b(),(N,q)=>(G(),Y("div",{key:q,class:"card",onClick:z=>a(q)},[(G(!0),Y(Oe,null,Ee(r.headers,({field:z,label:y})=>(G(),Y("div",{key:z},[ae("strong",null,ke(y)+":",1),je(" "+ke(N[z]),1)]))),128)),ae("div",vt,[W(S(ve),{icon:"delete",color:"negative",onClick:Te(z=>U(q),["stop"]),size:"sm"},null,8,["onClick"])])],8,mt))),128))])):(G(),Y("table",ft,[ae("thead",null,[ae("tr",null,[(G(!0),Y(Oe,null,Ee(r.headers,N=>(G(),Y("th",{key:N.field,align:N.align},ke(N.label),9,ht))),128)),k[0]||(k[0]=ae("th",null,"A\xE7\xF5es",-1))])]),ae("tbody",null,[(G(!0),Y(Oe,null,Ee(b(),(N,q)=>(G(),Y("tr",{key:q,onClick:z=>a(q)},[(G(!0),Y(Oe,null,Ee(r.headers,z=>(G(),Y("td",{key:z.field},ke(N[z.field]),1))),128)),ae("td",null,[W(S(ve),{icon:"delete",color:"negative",onClick:Te(z=>U(q),["stop"]),size:"sm"},null,8,["onClick"])])],8,pt))),128))])]))]))}};var yt=qe(_t,[["__scopeId","data-v-ccbf58d4"]]);const Re={__name:"InputFixed",props:{modelValue:{type:String,default:""},tipo:{type:String,default:"text"},label1:{type:String,default:""},label2:{type:String,default:"Fixar"},textSelect:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(r,{emit:l}){const m=r,h=l,v=Ue({modelValue:String(m.modelValue),checked:!1}),b=a=>{m.textSelect&&a.target.select()};return Ve(()=>m.modelValue,a=>{v.value.checked?h("update:modelValue",v.value.modelValue):v.value.modelValue=a},{immediate:!0}),Ve(()=>v.value.modelValue,a=>{v.value.checked||h("update:modelValue",a)},{immediate:!0}),(a,U)=>(G(),Y(Oe,null,[W(it,{dense:"",outlined:"",modelValue:v.value.modelValue,"onUpdate:modelValue":U[0]||(U[0]=i=>v.value.modelValue=i),label:r.label1,type:r.tipo,disable:v.value.checked,onFocus:b},null,8,["modelValue","label","type","disable"]),W(st,{dense:"",color:"blue-grey",class:"text-blue-grey",modelValue:v.value.checked,"onUpdate:modelValue":U[1]||(U[1]=i=>v.value.checked=i),label:r.label2},null,8,["modelValue","label"])],64))}},K=[];for(let r=0;r<256;++r)K.push((r+256).toString(16).slice(1));function bt(r,l=0){return(K[r[l+0]]+K[r[l+1]]+K[r[l+2]]+K[r[l+3]]+"-"+K[r[l+4]]+K[r[l+5]]+"-"+K[r[l+6]]+K[r[l+7]]+"-"+K[r[l+8]]+K[r[l+9]]+"-"+K[r[l+10]]+K[r[l+11]]+K[r[l+12]]+K[r[l+13]]+K[r[l+14]]+K[r[l+15]]).toLowerCase()}let Le;const Ot=new Uint8Array(16);function Ct(){if(!Le){if(typeof crypto=="undefined"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Le=crypto.getRandomValues.bind(crypto)}return Le(Ot)}const At=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var Me={randomUUID:At};function De(r,l,m){if(Me.randomUUID&&!l&&!r)return Me.randomUUID();r=r||{};const h=r.random||(r.rng||Ct)();if(h[6]=h[6]&15|64,h[8]=h[8]&63|128,l){m=m||0;for(let v=0;v<16;++v)l[m+v]=h[v];return l}return bt(h)}var kt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ze={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(r,l){(function(m,h){r.exports=h()})(kt,function m(){var h=typeof self!="undefined"?self:typeof window!="undefined"?window:h!==void 0?h:{},v=!h.document&&!!h.postMessage,b=h.IS_PAPA_WORKER||!1,a={},U=0,i={parse:function(t,e){var n=(e=e||{}).dynamicTyping||!1;if(O(n)&&(e.dynamicTypingFunction=n,n={}),e.dynamicTyping=n,e.transform=!!O(e.transform)&&e.transform,e.worker&&i.WORKERS_SUPPORTED){var s=function(){if(!i.WORKERS_SUPPORTED)return!1;var g=($=h.URL||h.webkitURL||null,D=m.toString(),i.BLOB_URL||(i.BLOB_URL=$.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",D,")();"],{type:"text/javascript"})))),_=new h.Worker(g),$,D;return _.onmessage=Ne,_.id=U++,a[_.id]=_}();return s.userStep=e.step,s.userChunk=e.chunk,s.userComplete=e.complete,s.userError=e.error,e.step=O(e.step),e.chunk=O(e.chunk),e.complete=O(e.complete),e.error=O(e.error),delete e.worker,void s.postMessage({input:t,config:e,workerId:s.id})}var d=null;return i.NODE_STREAM_INPUT,typeof t=="string"?(t=function(g){return g.charCodeAt(0)===65279?g.slice(1):g}(t),d=e.download?new q(e):new y(e)):t.readable===!0&&O(t.read)&&O(t.on)?d=new ee(e):(h.File&&t instanceof File||t instanceof Object)&&(d=new z(e)),d.stream(t)},unparse:function(t,e){var n=!1,s=!0,d=",",g=`\r
`,_='"',$=_+_,D=!1,c=null,L=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||i.BAD_DELIMITERS.filter(function(o){return e.delimiter.indexOf(o)!==-1}).length||(d=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(n=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(D=e.skipEmptyLines),typeof e.newline=="string"&&(g=e.newline),typeof e.quoteChar=="string"&&(_=e.quoteChar),typeof e.header=="boolean"&&(s=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");c=e.columns}e.escapeChar!==void 0&&($=e.escapeChar+_),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(L=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var p=new RegExp(he(_),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return le(null,t,D);if(typeof t[0]=="object")return le(c||Object.keys(t[0]),t,D)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||c),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),le(t.fields||[],t.data||[],D);throw new Error("Unable to serialize unrecognized input");function le(o,I,Q){var x="";typeof o=="string"&&(o=JSON.parse(o)),typeof I=="string"&&(I=JSON.parse(I));var H=Array.isArray(o)&&0<o.length,B=!Array.isArray(I[0]);if(H&&s){for(var j=0;j<o.length;j++)0<j&&(x+=d),x+=Z(o[j],j);0<I.length&&(x+=g)}for(var f=0;f<I.length;f++){var C=H?o.length:I[f].length,T=!1,M=H?Object.keys(I[f]).length===0:I[f].length===0;if(Q&&!H&&(T=Q==="greedy"?I[f].join("").trim()==="":I[f].length===1&&I[f][0].length===0),Q==="greedy"&&H){for(var E=[],J=0;J<C;J++){var V=B?o[J]:J;E.push(I[f][V])}T=E.join("").trim()===""}if(!T){for(var R=0;R<C;R++){0<R&&!M&&(x+=d);var ue=H&&B?o[R]:R;x+=Z(I[f][ue],R)}f<I.length-1&&(!Q||0<C&&!M)&&(x+=g)}}return x}function Z(o,I){if(o==null)return"";if(o.constructor===Date)return JSON.stringify(o).slice(1,25);var Q=!1;L&&typeof o=="string"&&L.test(o)&&(o="'"+o,Q=!0);var x=o.toString().replace(p,$);return(Q=Q||n===!0||typeof n=="function"&&n(o,I)||Array.isArray(n)&&n[I]||function(H,B){for(var j=0;j<B.length;j++)if(-1<H.indexOf(B[j]))return!0;return!1}(x,i.BAD_DELIMITERS)||-1<x.indexOf(d)||x.charAt(0)===" "||x.charAt(x.length-1)===" ")?_+x+_:x}}};if(i.RECORD_SEP=String.fromCharCode(30),i.UNIT_SEP=String.fromCharCode(31),i.BYTE_ORDER_MARK="\uFEFF",i.BAD_DELIMITERS=["\r",`
`,'"',i.BYTE_ORDER_MARK],i.WORKERS_SUPPORTED=!v&&!!h.Worker,i.NODE_STREAM_INPUT=1,i.LocalChunkSize=10485760,i.RemoteChunkSize=5242880,i.DefaultDelimiter=",",i.Parser=Ce,i.ParserHandle=_e,i.NetworkStreamer=q,i.FileStreamer=z,i.StringStreamer=y,i.ReadableStreamStreamer=ee,h.jQuery){var k=h.jQuery;k.fn.parse=function(t){var e=t.config||{},n=[];return this.each(function(g){if(!(k(this).prop("tagName").toUpperCase()==="INPUT"&&k(this).attr("type").toLowerCase()==="file"&&h.FileReader)||!this.files||this.files.length===0)return!0;for(var _=0;_<this.files.length;_++)n.push({file:this.files[_],inputElem:this,instanceConfig:k.extend({},e)})}),s(),this;function s(){if(n.length!==0){var g,_,$,D,c=n[0];if(O(t.before)){var L=t.before(c.file,c.inputElem);if(typeof L=="object"){if(L.action==="abort")return g="AbortError",_=c.file,$=c.inputElem,D=L.reason,void(O(t.error)&&t.error({name:g},_,$,D));if(L.action==="skip")return void d();typeof L.config=="object"&&(c.instanceConfig=k.extend(c.instanceConfig,L.config))}else if(L==="skip")return void d()}var p=c.instanceConfig.complete;c.instanceConfig.complete=function(le){O(p)&&p(le,c.file,c.inputElem),d()},i.parse(c.file,c.instanceConfig)}else O(t.complete)&&t.complete()}function d(){n.splice(0,1),s()}}}function N(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var n=te(e);n.chunkSize=parseInt(n.chunkSize),e.step||e.chunk||(n.chunkSize=null),this._handle=new _e(n),(this._handle.streamer=this)._config=n}.call(this,t),this.parseChunk=function(e,n){if(this.isFirstChunk&&O(this._config.beforeFirstChunk)){var s=this._config.beforeFirstChunk(e);s!==void 0&&(e=s)}this.isFirstChunk=!1,this._halted=!1;var d=this._partialLine+e;this._partialLine="";var g=this._handle.parse(d,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var _=g.meta.cursor;this._finished||(this._partialLine=d.substring(_-this._baseIndex),this._baseIndex=_),g&&g.data&&(this._rowCount+=g.data.length);var $=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(b)h.postMessage({results:g,workerId:i.WORKER_ID,finished:$});else if(O(this._config.chunk)&&!n){if(this._config.chunk(g,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);g=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(g.data),this._completeResults.errors=this._completeResults.errors.concat(g.errors),this._completeResults.meta=g.meta),this._completed||!$||!O(this._config.complete)||g&&g.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),$||g&&g.meta.paused||this._nextChunk(),g}this._halted=!0},this._sendError=function(e){O(this._config.error)?this._config.error(e):b&&this._config.error&&h.postMessage({workerId:i.WORKER_ID,error:e,finished:!1})}}function q(t){var e;(t=t||{}).chunkSize||(t.chunkSize=i.RemoteChunkSize),N.call(this,t),this._nextChunk=v?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(n){this._input=n,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),v||(e.onload=oe(this._chunkLoaded,this),e.onerror=oe(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!v),this._config.downloadRequestHeaders){var n=this._config.downloadRequestHeaders;for(var s in n)e.setRequestHeader(s,n[s])}if(this._config.chunkSize){var d=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+d)}try{e.send(this._config.downloadRequestBody)}catch(g){this._chunkError(g.message)}v&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(n){var s=n.getResponseHeader("Content-Range");return s===null?-1:parseInt(s.substring(s.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(n){var s=e.statusText||n;this._sendError(new Error(s))}}function z(t){var e,n;(t=t||{}).chunkSize||(t.chunkSize=i.LocalChunkSize),N.call(this,t);var s=typeof FileReader!="undefined";this.stream=function(d){this._input=d,n=d.slice||d.webkitSlice||d.mozSlice,s?((e=new FileReader).onload=oe(this._chunkLoaded,this),e.onerror=oe(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var d=this._input;if(this._config.chunkSize){var g=Math.min(this._start+this._config.chunkSize,this._input.size);d=n.call(d,this._start,g)}var _=e.readAsText(d,this._config.encoding);s||this._chunkLoaded({target:{result:_}})},this._chunkLoaded=function(d){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(d.target.result)},this._chunkError=function(){this._sendError(e.error)}}function y(t){var e;N.call(this,t=t||{}),this.stream=function(n){return e=n,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var n,s=this._config.chunkSize;return s?(n=e.substring(0,s),e=e.substring(s)):(n=e,e=""),this._finished=!e,this.parseChunk(n)}}}function ee(t){N.call(this,t=t||{});var e=[],n=!0,s=!1;this.pause=function(){N.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){N.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(d){this._input=d,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){s&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):n=!0},this._streamData=oe(function(d){try{e.push(typeof d=="string"?d:d.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(g){this._streamError(g)}},this),this._streamError=oe(function(d){this._streamCleanUp(),this._sendError(d)},this),this._streamEnd=oe(function(){this._streamCleanUp(),s=!0,this._streamData("")},this),this._streamCleanUp=oe(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function _e(t){var e,n,s,d=Math.pow(2,53),g=-d,_=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,$=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,D=this,c=0,L=0,p=!1,le=!1,Z=[],o={data:[],errors:[],meta:{}};if(O(t.step)){var I=t.step;t.step=function(f){if(o=f,H())x();else{if(x(),o.data.length===0)return;c+=f.data.length,t.preview&&c>t.preview?n.abort():(o.data=o.data[0],I(o,D))}}}function Q(f){return t.skipEmptyLines==="greedy"?f.join("").trim()==="":f.length===1&&f[0].length===0}function x(){return o&&s&&(j("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+i.DefaultDelimiter+"'"),s=!1),t.skipEmptyLines&&(o.data=o.data.filter(function(f){return!Q(f)})),H()&&function(){if(!o)return;function f(T,M){O(t.transformHeader)&&(T=t.transformHeader(T,M)),Z.push(T)}if(Array.isArray(o.data[0])){for(var C=0;H()&&C<o.data.length;C++)o.data[C].forEach(f);o.data.splice(0,1)}else o.data.forEach(f)}(),function(){if(!o||!t.header&&!t.dynamicTyping&&!t.transform)return o;function f(T,M){var E,J=t.header?{}:[];for(E=0;E<T.length;E++){var V=E,R=T[E];t.header&&(V=E>=Z.length?"__parsed_extra":Z[E]),t.transform&&(R=t.transform(R,V)),R=B(V,R),V==="__parsed_extra"?(J[V]=J[V]||[],J[V].push(R)):J[V]=R}return t.header&&(E>Z.length?j("FieldMismatch","TooManyFields","Too many fields: expected "+Z.length+" fields but parsed "+E,L+M):E<Z.length&&j("FieldMismatch","TooFewFields","Too few fields: expected "+Z.length+" fields but parsed "+E,L+M)),J}var C=1;return!o.data.length||Array.isArray(o.data[0])?(o.data=o.data.map(f),C=o.data.length):o.data=f(o.data,0),t.header&&o.meta&&(o.meta.fields=Z),L+=C,o}()}function H(){return t.header&&Z.length===0}function B(f,C){return T=f,t.dynamicTypingFunction&&t.dynamicTyping[T]===void 0&&(t.dynamicTyping[T]=t.dynamicTypingFunction(T)),(t.dynamicTyping[T]||t.dynamicTyping)===!0?C==="true"||C==="TRUE"||C!=="false"&&C!=="FALSE"&&(function(M){if(_.test(M)){var E=parseFloat(M);if(g<E&&E<d)return!0}return!1}(C)?parseFloat(C):$.test(C)?new Date(C):C===""?null:C):C;var T}function j(f,C,T,M){var E={type:f,code:C,message:T};M!==void 0&&(E.row=M),o.errors.push(E)}this.parse=function(f,C,T){var M=t.quoteChar||'"';if(t.newline||(t.newline=function(V,R){V=V.substring(0,1048576);var ue=new RegExp(he(R)+"([^]*?)"+he(R),"gm"),ne=(V=V.replace(ue,"")).split("\r"),de=V.split(`
`),ce=1<de.length&&de[0].length<ne[0].length;if(ne.length===1||ce)return`
`;for(var re=0,w=0;w<ne.length;w++)ne[w][0]===`
`&&re++;return re>=ne.length/2?`\r
`:"\r"}(f,M)),s=!1,t.delimiter)O(t.delimiter)&&(t.delimiter=t.delimiter(f),o.meta.delimiter=t.delimiter);else{var E=function(V,R,ue,ne,de){var ce,re,w,F;de=de||[",","	","|",";",i.RECORD_SEP,i.UNIT_SEP];for(var ye=0;ye<de.length;ye++){var A=de[ye],Ae=0,fe=0,be=0;w=void 0;for(var pe=new Ce({comments:ne,delimiter:A,newline:R,preview:10}).parse(V),ge=0;ge<pe.data.length;ge++)if(ue&&Q(pe.data[ge]))be++;else{var me=pe.data[ge].length;fe+=me,w!==void 0?0<me&&(Ae+=Math.abs(me-w),w=me):w=me}0<pe.data.length&&(fe/=pe.data.length-be),(re===void 0||Ae<=re)&&(F===void 0||F<fe)&&1.99<fe&&(re=Ae,ce=A,F=fe)}return{successful:!!(t.delimiter=ce),bestDelimiter:ce}}(f,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);E.successful?t.delimiter=E.bestDelimiter:(s=!0,t.delimiter=i.DefaultDelimiter),o.meta.delimiter=t.delimiter}var J=te(t);return t.preview&&t.header&&J.preview++,e=f,n=new Ce(J),o=n.parse(e,C,T),x(),p?{meta:{paused:!0}}:o||{meta:{paused:!1}}},this.paused=function(){return p},this.pause=function(){p=!0,n.abort(),e=O(t.chunk)?"":e.substring(n.getCharIndex())},this.resume=function(){D.streamer._halted?(p=!1,D.streamer.parseChunk(e,!0)):setTimeout(D.resume,3)},this.aborted=function(){return le},this.abort=function(){le=!0,n.abort(),o.meta.aborted=!0,O(t.complete)&&t.complete(o),e=""}}function he(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ce(t){var e,n=(t=t||{}).delimiter,s=t.newline,d=t.comments,g=t.step,_=t.preview,$=t.fastMode,D=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(D=t.escapeChar),(typeof n!="string"||-1<i.BAD_DELIMITERS.indexOf(n))&&(n=","),d===n)throw new Error("Comment character same as delimiter");d===!0?d="#":(typeof d!="string"||-1<i.BAD_DELIMITERS.indexOf(d))&&(d=!1),s!==`
`&&s!=="\r"&&s!==`\r
`&&(s=`
`);var c=0,L=!1;this.parse=function(p,le,Z){if(typeof p!="string")throw new Error("Input must be a string");var o=p.length,I=n.length,Q=s.length,x=d.length,H=O(g),B=[],j=[],f=[],C=c=0;if(!p)return ie();if(t.header&&!le){var T=p.split(s)[0].split(n),M=[],E={},J=!1;for(var V in T){var R=T[V];O(t.transformHeader)&&(R=t.transformHeader(R,V));var ue=R,ne=E[R]||0;for(0<ne&&(J=!0,ue=R+"_"+ne),E[R]=ne+1;M.includes(ue);)ue=ue+"_"+ne;M.push(ue)}if(J){var de=p.split(s);de[0]=M.join(n),p=de.join(s)}}if($||$!==!1&&p.indexOf(e)===-1){for(var ce=p.split(s),re=0;re<ce.length;re++){if(f=ce[re],c+=f.length,re!==ce.length-1)c+=s.length;else if(Z)return ie();if(!d||f.substring(0,x)!==d){if(H){if(B=[],be(f.split(n)),Se(),L)return ie()}else be(f.split(n));if(_&&_<=re)return B=B.slice(0,_),ie(!0)}}return ie()}for(var w=p.indexOf(n,c),F=p.indexOf(s,c),ye=new RegExp(he(D)+he(e),"g"),A=p.indexOf(e,c);;)if(p[c]!==e)if(d&&f.length===0&&p.substring(c,c+x)===d){if(F===-1)return ie();c=F+Q,F=p.indexOf(s,c),w=p.indexOf(n,c)}else if(w!==-1&&(w<F||F===-1))f.push(p.substring(c,w)),c=w+I,w=p.indexOf(n,c);else{if(F===-1)break;if(f.push(p.substring(c,F)),me(F+Q),H&&(Se(),L))return ie();if(_&&B.length>=_)return ie(!0)}else for(A=c,c++;;){if((A=p.indexOf(e,A+1))===-1)return Z||j.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:B.length,index:c}),ge();if(A===o-1)return ge(p.substring(c,A).replace(ye,e));if(e!==D||p[A+1]!==D){if(e===D||A===0||p[A-1]!==D){w!==-1&&w<A+1&&(w=p.indexOf(n,A+1)),F!==-1&&F<A+1&&(F=p.indexOf(s,A+1));var Ae=pe(F===-1?w:Math.min(w,F));if(p.substr(A+1+Ae,I)===n){f.push(p.substring(c,A).replace(ye,e)),p[c=A+1+Ae+I]!==e&&(A=p.indexOf(e,c)),w=p.indexOf(n,c),F=p.indexOf(s,c);break}var fe=pe(F);if(p.substring(A+1+fe,A+1+fe+Q)===s){if(f.push(p.substring(c,A).replace(ye,e)),me(A+1+fe+Q),w=p.indexOf(n,c),A=p.indexOf(e,c),H&&(Se(),L))return ie();if(_&&B.length>=_)return ie(!0);break}j.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:B.length,index:c}),A++}}else A++}return ge();function be(se){B.push(se),C=c}function pe(se){var Pe=0;if(se!==-1){var xe=p.substring(A+1,se);xe&&xe.trim()===""&&(Pe=xe.length)}return Pe}function ge(se){return Z||(se===void 0&&(se=p.substring(c)),f.push(se),c=o,be(f),H&&Se()),ie()}function me(se){c=se,be(f),f=[],F=p.indexOf(s,c)}function ie(se){return{data:B,errors:j,meta:{delimiter:n,linebreak:s,aborted:L,truncated:!!se,cursor:C+(le||0)}}}function Se(){g(ie()),B=[],j=[]}},this.abort=function(){L=!0},this.getCharIndex=function(){return c}}function Ne(t){var e=t.data,n=a[e.workerId],s=!1;if(e.error)n.userError(e.error,e.file);else if(e.results&&e.results.data){var d={abort:function(){s=!0,P(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:X,resume:X};if(O(n.userStep)){for(var g=0;g<e.results.data.length&&(n.userStep({data:e.results.data[g],errors:e.results.errors,meta:e.results.meta},d),!s);g++);delete e.results}else O(n.userChunk)&&(n.userChunk(e.results,d,e.file),delete e.results)}e.finished&&!s&&P(e.workerId,e.results)}function P(t,e){var n=a[t];O(n.userComplete)&&n.userComplete(e),n.terminate(),delete a[t]}function X(){throw new Error("Not implemented.")}function te(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var n in t)e[n]=te(t[n]);return e}function oe(t,e){return function(){t.apply(e,arguments)}}function O(t){return typeof t=="function"}return b&&(h.onmessage=function(t){var e=t.data;if(i.WORKER_ID===void 0&&e&&(i.WORKER_ID=e.workerId),typeof e.input=="string")h.postMessage({workerId:i.WORKER_ID,results:i.parse(e.input,e.config),finished:!0});else if(h.File&&e.input instanceof File||e.input instanceof Object){var n=i.parse(e.input,e.config);n&&h.postMessage({workerId:i.WORKER_ID,results:n,finished:!0})}}),(q.prototype=Object.create(N.prototype)).constructor=q,(z.prototype=Object.create(N.prototype)).constructor=z,(y.prototype=Object.create(y.prototype)).constructor=y,(ee.prototype=Object.create(N.prototype)).constructor=ee,i})})(ze);var Et=ze.exports;const u=at({values:null,csv:"",selected:{id:De(),NRPATRIMONIO1:"",DESCRICAO:"",LOCALIZACAO:"",ESTADO:"",OBSERVA\u00C7\u00C3O:"",SITUA\u00C7\u00C3O:"",UPDATED:""},selects:[],fields:[],colunas:[{field:"NRPATRIMONIO1",label:"NPAT",align:"left"},{field:"DESCRICAO",label:"Descri\xE7\xE3o",align:"left"},{field:"LOCALIZACAO",label:"Local",align:"left"},{field:"ESTADO",label:"Estado",align:"left"},{field:"OBSERVA\xC7\xC3O",label:"Observa\xE7\xE3o",align:"left"},{field:"SITUA\xC7\xC3O",label:"Situa\xE7\xE3o",align:"left"}]}),Ie=()=>{u.selected.id=De(),u.selected.NRPATRIMONIO1="",u.selected.DESCRICAO="",u.selected.LOCALIZACAO="",u.selected.ESTADO="",u.selected.OBSERVA\u00C7\u00C3O="",u.selected.UPDATED=""},Rt=()=>{const r=Object.fromEntries(u.fields.map(l=>[l,""]));return Object.assign(r,JSON.parse(JSON.stringify(u.selected))),r.UPDATED=new Date,r.id&&(u.selects=u.selects.filter(l=>l.id!==r.id)),u.selects.push(r),!0},Be=r=>{const l=r.target.files[0];if(!l)return;const m=new FileReader;m.onload=h=>{const v=h.target.result;u.csv=v;const b=Et.parse(v,{header:!0});u.values=b.data.map(a=>Object.keys(a).reduce((U,i)=>(i.trim()&&(U[i]=a[i]),U),{SITUA\u00C7\u00C3O:"",OBSERVA\u00C7\u00C3O:"",UPDATED:""})),u.fields=b.meta.fields,we()},m.readAsText(l)},we=()=>{try{localStorage.setItem("data",JSON.stringify(u))}catch(r){console.log("erro ao salvar: ",r)}};function St(r,l="data.csv",m=";"){const h=[Object.keys(r[0]).join(m),...r.map(b=>Object.values(b).join(m))].join(`
`);Object.assign(document.createElement("a"),{href:URL.createObjectURL(new Blob([h],{type:"text/csv"})),download:l}).click()}const It=()=>{$e(u.selects.map(r=>({NPAT:r.NRPATRIMONIO1||"",Setor:r.NOME_SETOR||"",Local:r.LOCALIZACAO||"",Valor:Number(r.VALOR).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})||"",Estado:r.DESC_ESTADO||""})))},Tt=()=>{$e(u.selects.map(r=>({NPAT:r.NRPATRIMONIO1||"",Descri\u00E7\u00E3o:r.DESCRICAO||"",Local:r.LOCALIZACAO||"",Setor:r.NOME_SETOR,Estado:r.DESC_ESTADO||"",Valor:Number(r.VALOR).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})||""})))},wt=r=>{const l=`<table border="1" cellpadding="1" cellspacing="1" style="width:100%;" align="center"><thead><tr>${Object.keys(r[0]).map(m=>`<th><strong>${m}<strong></th>`).join("")}</tr></thead><tbody>${r.map(m=>`<tr>${Object.values(m).map(h=>`<td>${h}</td>`).join("")}</tr>`).join("")}</tbody></table>`;return navigator.clipboard.writeText(l),l},$e=r=>{const l=wt(r),m=document.createElement("div");m.innerHTML=l,document.body.appendChild(m);const h=document.createRange();h.selectNodeContents(m),window.getSelection().removeAllRanges(),window.getSelection().addRange(h),document.execCommand("copy"),document.body.removeChild(m)},Dt=()=>{ot.create({title:"Apagar tudo",message:"Deseja apagar todos os registros?",ok:"Confirmar",cancel:"Cancelar",persistent:!0}).onOk(()=>{u.selects=[],we(),console.log("Apagado...")}).onCancel(()=>{console.log(">>>> Cancel")}).onDismiss(()=>{console.log("Cancelado")})};try{const r=localStorage.getItem("data");if(r){const l=JSON.parse(r);u.csv=l.csv,u.fields=l.fields||[],u.selects=l.selects||[],u.selected=l.selected||{},u.values=[...l.values||[]].map(m=>(m.id||(m.id=De()),m))}}catch(r){console.log("Erro ao carregar dados localStorage: ",r)}const xt={class:""},Lt={class:"row q-gutter-md q-pa-md"},Vt={class:"row justify-center items-center"},Ut={__name:"IndexPage",setup(r){const l=Ue({npat:"",search1:"",search2:"",searchSelecteds:"",searchColumn:""}),m=()=>{Rt(),l.value.npat="",Ie(),we()},h=b=>{const a=u.selects[b];a&&(l.value.npat=a.NRPATRIMONIO1,setTimeout(()=>{u.selected.id=a.id,u.selected.NRPATRIMONIO1=a.NRPATRIMONIO1,u.selected.DESCRICAO=a.DESCRICAO||"",u.selected.LOCALIZACAO=a.LOCALIZACAO||"",u.selected.ESTADO=a.ESTADO||"",u.selected.OBSERVA\u00C7\u00C3O=a.OBSERVA\u00C7\u00C3O||""},1e3))},v=b=>{b>-1&&u.selects.splice(b,1),we()};Ve(()=>l.value.npat,()=>{var b;try{const a=(b=u.values)==null?void 0:b.find(U=>U.NRPATRIMONIO1===String(l.value.npat));Ie(),a&&(console.log("Item::: ",a),u.selected.id=a.id||De(),u.selected.NRPATRIMONIO1=l.value.npat,u.selected.DESCRICAO=a.DESCRICAO||"",u.selected.LOCALIZACAO=a.LOCALIZACAO||"",u.selected.ESTADO=a.ESTADO||"",u.selected.OBSERVA\u00C7\u00C3O=a.OBSERVA\u00C7\u00C3O||""),l.value.npat?a?u.selected.SITUA\u00C7\u00C3O="REGULAR":u.selected.SITUA\u00C7\u00C3O="SEM REGISTRO":u.selected.SITUA\u00C7\u00C3O="SEM PLACA"}catch(a){console.log("npat: ",a),Ie()}},{immediate:!0});try{l.value.npat=null}catch(b){console.log("Erro ao carregar dados localStorage: ",b)}return(b,a)=>(G(),Y(Oe,null,[W(ct,{onSubmit:Te(m,["prevent"])},{default:lt(()=>{var U,i;return[ae("fieldset",null,[ae("input",{type:"file",accept:".csv",onChange:a[0]||(a[0]=(...k)=>S(Be)&&S(Be)(...k))},null,32)]),ae("p",xt,"Dados: "+ke((i=(U=S(u))==null?void 0:U.values)==null?void 0:i.length),1),W(Re,{tipo:"number",textSelect:!0,modelValue:l.value.npat,"onUpdate:modelValue":a[1]||(a[1]=k=>l.value.npat=k),label1:"NPAT "+S(u).selected.SITUA\u00C7\u00C3O},null,8,["modelValue","label1"]),W(Re,{modelValue:S(u).selected.DESCRICAO,"onUpdate:modelValue":a[2]||(a[2]=k=>S(u).selected.DESCRICAO=k),label1:"Descri\xE7\xE3o"},null,8,["modelValue"]),W(Re,{modelValue:S(u).selected.LOCALIZACAO,"onUpdate:modelValue":a[3]||(a[3]=k=>S(u).selected.LOCALIZACAO=k),label1:"Local"},null,8,["modelValue"]),W(Re,{modelValue:S(u).selected.ESTADO,"onUpdate:modelValue":a[4]||(a[4]=k=>S(u).selected.ESTADO=k),label1:"Estado"},null,8,["modelValue"]),W(Re,{modelValue:S(u).selected.OBSERVA\u00C7\u00C3O,"onUpdate:modelValue":a[5]||(a[5]=k=>S(u).selected.OBSERVA\u00C7\u00C3O=k),label1:"Observa\xE7\xE3o"},null,8,["modelValue"]),ae("div",Lt,[W(ve,{color:"green-9",type:"button",icon:"send",label:"Adicionar",onClick:m}),ut(W(ve,{color:"yellow-9",type:"button",icon:"close",label:"Cancelar",onClick:S(Ie)},null,8,["onClick"]),[[dt,S(u).selected.NRPATRIMONIO1||S(u).selected.LOCALIZACAO]])]),ae("div",Vt,[W(ve,{flat:"",icon:"description",label:"CSV",type:"button",onClick:a[6]||(a[6]=k=>S(St)(S(u).selects))}),W(ve,{flat:"",icon:"code",label:"Relat\xF3rio",class:"q-mx-sm",onClick:Te(S(It),["prevent"])},null,8,["onClick"]),W(ve,{flat:"",icon:"code",label:"Termo",type:"button",onClick:S(Tt)},null,8,["onClick"]),W(ve,{flat:"",icon:"clear",label:"Limpar",type:"button",onClick:S(Dt)},null,8,["onClick"])])]}),_:1}),W(yt,{tableData:S(u).selects,headers:S(u).colunas,onRemove:v,onClicked:h,reverse:!0},null,8,["tableData","headers"]),je(" Itens selecionados: "+ke(S(u).selects.length),1)],64))}};var Ft=qe(Ut,[["__scopeId","data-v-bd6598c6"]]);export{Ft as default};
