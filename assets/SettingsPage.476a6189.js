import{c as Ue,aB as We,aC as gt,aD as ht,aE as yt,d as g,h as p,e as Rt,n as Lt,v as E,w as ae,aF as Ht,aG as Pt,ah as Nt,ai as $t,k as bt,y as G,g as wt,aH as jt,aI as Kt,aJ as st,aK as xe,aL as Qt,aM as Ut,X as je,aw as Wt,aN as Xt,aO as me,aP as ct,G as Yt,aQ as Jt,U as Se,aR as Gt,C as Zt,H as el,A as tl,J as ll,al as ul,an as Ee,N as Be,aq as dt,Q as nl,am as al,ar as ft}from"./index.fe851cda.js";import{Q as ol,a as U,f as il,S as rl,h as sl,s as cl}from"./app.3939a059.js";import{Q as dl,b as fl,a as vl}from"./QMenu.1079fc35.js";var ml=Ue({name:"QField",inheritAttrs:!1,props:{...We,tag:{type:String,default:"label"}},emits:gt,setup(){return ht(yt({tagProp:!0}))}}),Sl=Ue({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const r=g(()=>parseInt(e.lines,10)),f=g(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(r.value===1?" ellipsis":"")),I=g(()=>e.lines!==void 0&&r.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":r.value}:null);return()=>p("div",{style:I.value,class:f.value},Rt(a.default))}});let De=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const a=document.createElement("div");Object.assign(a.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(a),e.scrollLeft=-1e3,De=e.scrollLeft>=0,e.remove()}const $=1e3,gl=["start","center","end","start-force","center-force","end-force"],pt=Array.prototype.filter,hl=window.getComputedStyle(document.body).overflowAnchor===void 0?Lt:function(e,a){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const r=e.children||[];pt.call(r,I=>I.dataset&&I.dataset.qVsAnchor!==void 0).forEach(I=>{delete I.dataset.qVsAnchor});const f=r[a];f&&f.dataset&&(f.dataset.qVsAnchor="")}))};function ge(e,a){return e+a}function Ke(e,a,r,f,I,i,T,c){const d=e===window?document.scrollingElement||document.documentElement:e,A=I===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-T-c,scrollMaxSize:0,offsetStart:-T,offsetEnd:-c};if(I===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=d.scrollLeft,s.scrollViewSize+=d.clientWidth),s.scrollMaxSize=d.scrollWidth,i===!0&&(s.scrollStart=(De===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=d.scrollTop,s.scrollViewSize+=d.clientHeight),s.scrollMaxSize=d.scrollHeight),r!==null)for(let y=r.previousElementSibling;y!==null;y=y.previousElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=y[A]);if(f!==null)for(let y=f.nextElementSibling;y!==null;y=y.nextElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=y[A]);if(a!==e){const y=d.getBoundingClientRect(),b=a.getBoundingClientRect();I===!0?(s.offsetStart+=b.left-y.left,s.offsetEnd-=b.width):(s.offsetStart+=b.top-y.top,s.offsetEnd-=b.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function vt(e,a,r,f){a==="end"&&(a=(e===window?document.body:e)[r===!0?"scrollWidth":"scrollHeight"]),e===window?r===!0?(f===!0&&(a=(De===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-a),window.scrollTo(a,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,a):r===!0?(f===!0&&(a=(De===!0?e.scrollWidth-e.offsetWidth:0)-a),e.scrollLeft=a):e.scrollTop=a}function ke(e,a,r,f){if(r>=f)return 0;const I=a.length,i=Math.floor(r/$),T=Math.floor((f-1)/$)+1;let c=e.slice(i,T).reduce(ge,0);return r%$!==0&&(c-=a.slice(i*$,r).reduce(ge,0)),f%$!==0&&f!==I&&(c-=a.slice(f,T*$).reduce(ge,0)),c}const yl={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},mt={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...yl};function bl({virtualScrollLength:e,getVirtualScrollTarget:a,getVirtualScrollEl:r,virtualScrollItemSizeComputed:f}){const I=wt(),{props:i,emit:T,proxy:c}=I,{$q:d}=c;let A,s,y,b=[],C;const _=E(0),N=E(0),D=E({}),W=E(null),X=E(null),R=E(null),O=E({from:0,to:0}),Ae=g(()=>i.tableColspan!==void 0?i.tableColspan:100);f===void 0&&(f=g(()=>i.virtualScrollItemSize));const q=g(()=>f.value+";"+i.virtualScrollHorizontal),Y=g(()=>q.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);ae(Y,()=>{j()}),ae(q,Z);function Z(){oe(s,!0)}function he(l){oe(l===void 0?s:l)}function ee(l,o){const m=a();if(m==null||m.nodeType===8)return;const k=Ke(m,r(),W.value,X.value,i.virtualScrollHorizontal,d.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);y!==k.scrollViewSize&&j(k.scrollViewSize),L(m,k,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,gl.indexOf(o)!==-1?o:s!==-1&&l>s?"end":"start")}function Ie(){const l=a();if(l==null||l.nodeType===8)return;const o=Ke(l,r(),W.value,X.value,i.virtualScrollHorizontal,d.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),m=e.value-1,k=o.scrollMaxSize-o.offsetStart-o.offsetEnd-N.value;if(A===o.scrollStart)return;if(o.scrollMaxSize<=0){L(l,o,0,0);return}y!==o.scrollViewSize&&j(o.scrollViewSize),ye(O.value.from);const F=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(C[m],o.scrollViewSize/2));if(F>0&&Math.ceil(o.scrollStart)>=F){L(l,o,m,o.scrollMaxSize-o.offsetEnd-b.reduce(ge,0));return}let w=0,h=o.scrollStart-o.offsetStart,M=h;if(h<=k&&h+o.scrollViewSize>=_.value)h-=_.value,w=O.value.from,M=h;else for(let S=0;h>=b[S]&&w<m;S++)h-=b[S],w+=$;for(;h>0&&w<m;)h-=C[w],h>-o.scrollViewSize?(w++,M=h):M=C[w]+h;L(l,o,w,M)}function L(l,o,m,k,F){const w=typeof F=="string"&&F.indexOf("-force")!==-1,h=w===!0?F.replace("-force",""):F,M=h!==void 0?h:"start";let S=Math.max(0,m-D.value[M]),H=S+D.value.total;H>e.value&&(H=e.value,S=Math.max(0,H-D.value.total)),A=o.scrollStart;const J=S!==O.value.from||H!==O.value.to;if(J===!1&&h===void 0){be(m);return}const{activeElement:ze}=document,K=R.value;J===!0&&K!==null&&K!==ze&&K.contains(ze)===!0&&(K.addEventListener("focusout",_e),setTimeout(()=>{K!==null&&K.removeEventListener("focusout",_e)})),hl(K,m-S);const Oe=h!==void 0?C.slice(S,m).reduce(ge,0):0;if(J===!0){const te=H>=O.value.from&&S<=O.value.to?O.value.to:H;O.value={from:S,to:te},_.value=ke(b,C,0,S),N.value=ke(b,C,H,e.value),requestAnimationFrame(()=>{O.value.to!==H&&A===o.scrollStart&&(O.value={from:O.value.from,to:H},N.value=ke(b,C,H,e.value))})}requestAnimationFrame(()=>{if(A!==o.scrollStart)return;J===!0&&ye(S);const te=C.slice(S,m).reduce(ge,0),le=te+o.offsetStart+_.value,qe=le+C[m];let pe=le+k;if(h!==void 0){const Le=te-Oe,Ve=o.scrollStart+Le;pe=w!==!0&&Ve<le&&qe<Ve+o.scrollViewSize?Ve:h==="end"?qe-o.scrollViewSize:le-(h==="start"?0:Math.round((o.scrollViewSize-C[m])/2))}A=pe,vt(l,pe,i.virtualScrollHorizontal,d.lang.rtl),be(m)})}function ye(l){const o=R.value;if(o){const m=pt.call(o.children,S=>S.classList&&S.classList.contains("q-virtual-scroll--skip")===!1),k=m.length,F=i.virtualScrollHorizontal===!0?S=>S.getBoundingClientRect().width:S=>S.offsetHeight;let w=l,h,M;for(let S=0;S<k;){for(h=F(m[S]),S++;S<k&&m[S].classList.contains("q-virtual-scroll--with-prev")===!0;)h+=F(m[S]),S++;M=h-C[w],M!==0&&(C[w]+=M,b[Math.floor(w/$)]+=M),w++}}}function _e(){R.value!==null&&R.value!==void 0&&R.value.focus()}function oe(l,o){const m=1*f.value;(o===!0||Array.isArray(C)===!1)&&(C=[]);const k=C.length;C.length=e.value;for(let w=e.value-1;w>=k;w--)C[w]=m;const F=Math.floor((e.value-1)/$);b=[];for(let w=0;w<=F;w++){let h=0;const M=Math.min((w+1)*$,e.value);for(let S=w*$;S<M;S++)h+=C[S];b.push(h)}s=-1,A=void 0,_.value=ke(b,C,0,O.value.from),N.value=ke(b,C,O.value.to,e.value),l>=0?(ye(O.value.from),G(()=>{ee(l)})):ie()}function j(l){if(l===void 0&&typeof window!="undefined"){const h=a();h!=null&&h.nodeType!==8&&(l=Ke(h,r(),W.value,X.value,i.virtualScrollHorizontal,d.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}y=l;const o=parseFloat(i.virtualScrollSliceRatioBefore)||0,m=parseFloat(i.virtualScrollSliceRatioAfter)||0,k=1+o+m,F=l===void 0||l<=0?1:Math.ceil(l/f.value),w=Math.max(1,F,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/k));D.value={total:Math.ceil(w*k),start:Math.ceil(w*o),center:Math.ceil(w*(.5+o)),end:Math.ceil(w*(1+o)),view:F}}function Re(l,o){const m=i.virtualScrollHorizontal===!0?"width":"height",k={["--q-virtual-scroll-item-"+m]:f.value+"px"};return[l==="tbody"?p(l,{class:"q-virtual-scroll__padding",key:"before",ref:W},[p("tr",[p("td",{style:{[m]:`${_.value}px`,...k},colspan:Ae.value})])]):p(l,{class:"q-virtual-scroll__padding",key:"before",ref:W,style:{[m]:`${_.value}px`,...k}}),p(l,{class:"q-virtual-scroll__content",key:"content",ref:R,tabindex:-1},o.flat()),l==="tbody"?p(l,{class:"q-virtual-scroll__padding",key:"after",ref:X},[p("tr",[p("td",{style:{[m]:`${N.value}px`,...k},colspan:Ae.value})])]):p(l,{class:"q-virtual-scroll__padding",key:"after",ref:X,style:{[m]:`${N.value}px`,...k}})]}function be(l){s!==l&&(i.onVirtualScroll!==void 0&&T("virtualScroll",{index:l,from:O.value.from,to:O.value.to-1,direction:l<s?"decrease":"increase",ref:c}),s=l)}j();const ie=Ht(Ie,d.platform.is.ios===!0?120:35);Pt(()=>{j()});let we=!1;return Nt(()=>{we=!0}),$t(()=>{if(we!==!0)return;const l=a();A!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?vt(l,A,i.virtualScrollHorizontal,d.lang.rtl):ee(s)}),bt(()=>{ie.cancel()}),Object.assign(c,{scrollTo:ee,reset:Z,refresh:he}),{virtualScrollSliceRange:O,virtualScrollSliceSizeComputed:D,setVirtualScrollSize:j,onVirtualScrollEvt:ie,localResetVirtualScroll:oe,padVirtualScroll:Re,scrollTo:ee,reset:Z,refresh:he}}const St=e=>["add","add-unique","toggle"].includes(e),wl=".*+?^${}()|[]\\",pl=Object.keys(We);function Qe(e,a){if(typeof e=="function")return e;const r=e!==void 0?e:a;return f=>f!==null&&typeof f=="object"&&r in f?f[r]:f}var Vl=Ue({name:"QSelect",inheritAttrs:!1,props:{...mt,...jt,...We,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:St},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:mt.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...gt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:a,emit:r}){const{proxy:f}=wt(),{$q:I}=f,i=E(!1),T=E(!1),c=E(-1),d=E(""),A=E(!1),s=E(!1);let y=null,b=null,C,_,N,D=null,W,X,R,O;const Ae=E(null),q=E(null),Y=E(null),Z=E(null),he=E(null),ee=Kt(e),Ie=Xt(nt),L=g(()=>e.options.length),ye=g(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:_e,virtualScrollSliceSizeComputed:oe,localResetVirtualScroll:j,padVirtualScroll:Re,onVirtualScrollEvt:be,scrollTo:ie,setVirtualScrollSize:we}=bl({virtualScrollLength:L,getVirtualScrollTarget:kt,getVirtualScrollEl:lt,virtualScrollItemSizeComputed:ye}),l=yt(),o=g(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0){const n=e.mapOptions===!0&&C!==void 0?C:[],v=u.map(x=>xt(x,n));return e.modelValue===null&&t===!0?v.filter(x=>x!==null):v}return u}),m=g(()=>{const t={};return pl.forEach(u=>{const n=e[u];n!==void 0&&(t[u]=n)}),t}),k=g(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),F=g(()=>st(o.value)),w=g(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),h=g(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),M=g(()=>L.value===0),S=g(()=>o.value.map(t=>P.value(t)).join(", ")),H=g(()=>e.displayValue!==void 0?e.displayValue:S.value),J=g(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ze=g(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(J.value))),K=g(()=>l.focused.value===!0?e.tabindex:-1),Oe=g(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return c.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${c.value}`),t}),te=g(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),le=g(()=>o.value.map((t,u)=>({index:u,opt:t,html:J.value(t),selected:!0,removeAtIndex:Ct,toggleOption:ue,tabindex:K.value}))),qe=g(()=>{if(L.value===0)return[];const{from:t,to:u}=_e.value;return e.options.slice(t,u).map((n,v)=>{const x=re.value(n)===!0,V=Pe(n)===!0,B=t+v,z={clickable:!0,active:V,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:x,tabindex:-1,dense:e.optionsDense,dark:k.value,role:"option","aria-selected":V===!0?"true":"false",id:`${l.targetUid.value}_${B}`,onClick:()=>{ue(n)}};return x!==!0&&(c.value===B&&(z.focused=!0),I.platform.is.desktop===!0&&(z.onMousemove=()=>{i.value===!0&&se(B)})),{index:B,opt:n,html:J.value(n),label:P.value(n),selected:z.active,focused:z.focused,toggleOption:ue,setOptionIndex:se,itemProps:z}})}),pe=g(()=>e.dropdownIcon!==void 0?e.dropdownIcon:I.iconSet.arrow.dropdown),Le=g(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=g(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),Q=g(()=>Qe(e.optionValue,"value")),P=g(()=>Qe(e.optionLabel,"label")),re=g(()=>Qe(e.optionDisable,"disable")),Te=g(()=>o.value.map(Q.value)),Vt=g(()=>{const t={onInput:nt,onChange:Ie,onKeydown:tt,onKeyup:Ze,onKeypress:et,onFocus:Je,onClick(u){_===!0&&me(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Ie,t});ae(o,t=>{C=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(T.value!==!0&&i.value!==!0||F.value!==!0)&&(N!==!0&&ve(),(T.value===!0||i.value===!0)&&ce(""))},{immediate:!0}),ae(()=>e.fillInput,ve),ae(i,Ne),ae(L,Dt);function Xe(t){return e.emitValue===!0?Q.value(t):t}function He(t){if(t!==-1&&t<o.value.length)if(e.multiple===!0){const u=e.modelValue.slice();r("remove",{index:t,value:u.splice(t,1)[0]}),r("update:modelValue",u)}else r("update:modelValue",null)}function Ct(t){He(t),l.focus()}function Ye(t,u){const n=Xe(t);if(e.multiple!==!0){e.fillInput===!0&&Ce(P.value(t),!0,!0),r("update:modelValue",n);return}if(o.value.length===0){r("add",{index:0,value:n}),r("update:modelValue",e.multiple===!0?[n]:n);return}if(u===!0&&Pe(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const v=e.modelValue.slice();r("add",{index:v.length,value:n}),v.push(n),r("update:modelValue",v)}function ue(t,u){if(l.editable.value!==!0||t===void 0||re.value(t)===!0)return;const n=Q.value(t);if(e.multiple!==!0){u!==!0&&(Ce(e.fillInput===!0?P.value(t):"",!0,!0),ne()),q.value!==null&&q.value.focus(),(o.value.length===0||xe(Q.value(o.value[0]),n)!==!0)&&r("update:modelValue",e.emitValue===!0?n:t);return}if((_!==!0||A.value===!0)&&l.focus(),Je(),o.value.length===0){const V=e.emitValue===!0?n:t;r("add",{index:0,value:V}),r("update:modelValue",e.multiple===!0?[V]:V);return}const v=e.modelValue.slice(),x=Te.value.findIndex(V=>xe(V,n));if(x!==-1)r("remove",{index:x,value:v.splice(x,1)[0]});else{if(e.maxValues!==void 0&&v.length>=e.maxValues)return;const V=e.emitValue===!0?n:t;r("add",{index:v.length,value:V}),v.push(V)}r("update:modelValue",v)}function se(t){if(I.platform.is.desktop!==!0)return;const u=t!==-1&&t<L.value?t:-1;c.value!==u&&(c.value=u)}function Fe(t=1,u){if(i.value===!0){let n=c.value;do n=ct(n+t,-1,L.value-1);while(n!==-1&&n!==c.value&&re.value(e.options[n])===!0);c.value!==n&&(se(n),ie(n),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Me(n>=0?P.value(e.options[n]):W,!0))}}function xt(t,u){const n=v=>xe(Q.value(v),t);return e.options.find(n)||u.find(n)||t}function Pe(t){const u=Q.value(t);return Te.value.find(n=>xe(n,u))!==void 0}function Je(t){e.useInput===!0&&q.value!==null&&(t===void 0||q.value===t.target&&t.target.value===S.value)&&q.value.select()}function Ge(t){Yt(t,27)===!0&&i.value===!0&&(me(t),ne(),ve()),r("keyup",t)}function Ze(t){const{value:u}=t.target;if(t.keyCode!==void 0){Ge(t);return}if(t.target.value="",y!==null&&(clearTimeout(y),y=null),b!==null&&(clearTimeout(b),b=null),ve(),typeof u=="string"&&u.length!==0){const n=u.toLocaleLowerCase(),v=V=>{const B=e.options.find(z=>V.value(z).toLocaleLowerCase()===n);return B===void 0?!1:(o.value.indexOf(B)===-1?ue(B):ne(),!0)},x=V=>{v(Q)!==!0&&(v(P)===!0||V===!0||ce(u,!0,()=>x(!0)))};x()}else l.clearValue(t)}function et(t){r("keypress",t)}function tt(t){if(r("keydown",t),Jt(t)===!0)return;const u=d.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),n=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(c.value!==-1||u===!0);if(t.keyCode===27){je(t);return}if(t.keyCode===9&&n===!1){de();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){Se(t),fe();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&d.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&r("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof d.value!="string"||d.value.length===0)&&(Se(t),c.value=-1,Fe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&oe.value!==void 0&&(Se(t),c.value=Math.max(-1,Math.min(L.value,c.value+(t.keyCode===33?-1:1)*oe.value.view)),Fe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(Se(t),Fe(t.keyCode===38?-1:1,e.multiple));const v=L.value;if((R===void 0||O<Date.now())&&(R=""),v>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||R.length!==0)){i.value!==!0&&fe(t);const x=t.key.toLocaleLowerCase(),V=R.length===1&&R[0]===x;O=Date.now()+1500,V===!1&&(Se(t),R+=x);const B=new RegExp("^"+R.split("").map($e=>wl.indexOf($e)!==-1?"\\"+$e:$e).join(".*"),"i");let z=c.value;if(V===!0||z<0||B.test(P.value(e.options[z]))!==!0)do z=ct(z+1,-1,v-1);while(z!==c.value&&(re.value(e.options[z])===!0||B.test(P.value(e.options[z]))!==!0));c.value!==z&&G(()=>{se(z),ie(z),z>=0&&e.useInput===!0&&e.fillInput===!0&&Me(P.value(e.options[z]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||R!=="")&&(t.keyCode!==9||n===!1))){if(t.keyCode!==9&&Se(t),c.value!==-1&&c.value<v){ue(e.options[c.value]);return}if(u===!0){const x=(V,B)=>{if(B){if(St(B)!==!0)return}else B=e.newValueMode;if(Ce("",e.multiple!==!0,!0),V==null)return;(B==="toggle"?ue:Ye)(V,B==="add-unique"),e.multiple!==!0&&(q.value!==null&&q.value.focus(),ne())};if(e.onNewValue!==void 0?r("newValue",d.value,x):x(d.value),e.multiple!==!0)return}i.value===!0?de():l.innerLoading.value!==!0&&fe()}}function lt(){return _===!0?he.value:Y.value!==null&&Y.value.contentEl!==null?Y.value.contentEl:void 0}function kt(){return lt()}function At(){return e.hideSelected===!0?[]:a["selected-item"]!==void 0?le.value.map(t=>a["selected-item"](t)).slice():a.selected!==void 0?[].concat(a.selected()):e.useChips===!0?le.value.map((t,u)=>p(ol,{key:"option-"+u,removable:l.editable.value===!0&&re.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:K.value,onRemove(){t.removeAtIndex(u)}},()=>p("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:P.value(t.opt)}))):[p("span",{[ze.value===!0?"innerHTML":"textContent"]:H.value})]}function ut(){if(M.value===!0)return a["no-option"]!==void 0?a["no-option"]({inputValue:d.value}):void 0;const t=a.option!==void 0?a.option:n=>p(vl,{key:n.index,...n.itemProps},()=>p(fl,()=>p(Sl,()=>p("span",{[n.html===!0?"innerHTML":"textContent"]:n.label}))));let u=Re("div",qe.value.map(t));return a["before-options"]!==void 0&&(u=a["before-options"]().concat(u)),Zt(a["after-options"],u)}function It(t,u){const n=u===!0?{...Oe.value,...l.splitAttrs.attributes.value}:void 0,v={ref:u===!0?q:void 0,key:"i_t",class:w.value,style:e.inputStyle,value:d.value!==void 0?d.value:"",type:"search",...n,id:u===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Vt.value};return t!==!0&&_===!0&&(Array.isArray(v.class)===!0?v.class=[...v.class,"no-pointer-events"]:v.class+=" no-pointer-events"),p("input",v)}function nt(t){y!==null&&(clearTimeout(y),y=null),b!==null&&(clearTimeout(b),b=null),!(t&&t.target&&t.target.qComposing===!0)&&(Me(t.target.value||""),N=!0,W=d.value,l.focused.value!==!0&&(_!==!0||A.value===!0)&&l.focus(),e.onFilter!==void 0&&(y=setTimeout(()=>{y=null,ce(d.value)},e.inputDebounce)))}function Me(t,u){d.value!==t&&(d.value=t,u===!0||e.inputDebounce===0||e.inputDebounce==="0"?r("inputValue",t):b=setTimeout(()=>{b=null,r("inputValue",t)},e.inputDebounce))}function Ce(t,u,n){N=n!==!0,e.useInput===!0&&(Me(t,!0),(u===!0||n!==!0)&&(W=t),u!==!0&&ce(t))}function ce(t,u,n){if(e.onFilter===void 0||u!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?r("filterAbort"):(l.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&N!==!0&&t===P.value(o.value[0])&&(t="");const v=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);D!==null&&clearTimeout(D),D=v,r("filter",t,(x,V)=>{(u===!0||l.focused.value===!0)&&D===v&&(clearTimeout(D),typeof x=="function"&&x(),s.value=!1,G(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(u===!0?i.value===!0&&ne():i.value===!0?Ne(!0):i.value=!0),typeof V=="function"&&G(()=>{V(f)}),typeof n=="function"&&G(()=>{n(f)})}))},()=>{l.focused.value===!0&&D===v&&(clearTimeout(D),l.innerLoading.value=!1,s.value=!1),i.value===!0&&(i.value=!1)})}function _t(){return p(dl,{ref:Y,class:h.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&M.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:k.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Le.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...te.value,onScrollPassive:be,onBeforeShow:ot,onBeforeHide:zt,onShow:Ot},ut)}function zt(t){it(t),de()}function Ot(){we()}function qt(t){me(t),q.value!==null&&q.value.focus(),A.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Tt(t){me(t),G(()=>{A.value=!1})}function Ft(){const t=[p(ml,{class:`col-auto ${l.fieldClass.value}`,...m.value,for:l.targetUid.value,dark:k.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:d.value.length!==0,...l.splitAttrs.listeners.value,onFocus:qt,onBlur:Tt},{...a,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(p("div",{ref:he,class:h.value+" scroll",style:e.popupContentStyle,...te.value,onClick:je,onScrollPassive:be},ut())),p(Gt,{ref:Z,modelValue:T.value,position:e.useInput===!0?"top":void 0,transitionShow:X,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ot,onBeforeHide:Mt,onHide:Et,onShow:Bt},()=>p("div",{class:"q-select__dialog"+(k.value===!0?" q-select__dialog--dark q-dark":"")+(A.value===!0?" q-select__dialog--focused":"")},t))}function Mt(t){it(t),Z.value!==null&&Z.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Et(t){ne(),l.focused.value===!1&&r("blur",t),ve()}function Bt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&q.value!==null&&q.value!==t&&q.value.focus(),we()}function de(){T.value!==!0&&(c.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(D!==null&&(clearTimeout(D),D=null),l.innerLoading.value===!0&&(r("filterAbort"),l.innerLoading.value=!1,s.value=!1)))}function fe(t){l.editable.value===!0&&(_===!0?(l.onControlFocusin(t),T.value=!0,G(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ce(d.value):(M.value!==!0||a["no-option"]!==void 0)&&(i.value=!0))}function ne(){T.value=!1,de()}function ve(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&P.value(o.value[0])||"",!0,!0)}function Ne(t){let u=-1;if(t===!0){if(o.value.length!==0){const n=Q.value(o.value[0]);u=e.options.findIndex(v=>xe(Q.value(v),n))}j(u)}se(u)}function Dt(t,u){i.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),G(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>u?j():Ne(!0))}))}function at(){T.value===!1&&Y.value!==null&&Y.value.updatePosition()}function ot(t){t!==void 0&&me(t),r("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function it(t){t!==void 0&&me(t),r("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function rt(){_=I.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?a["no-option"]!==void 0||e.onFilter!==void 0||M.value===!1:!0),X=I.platform.is.ios===!0&&_===!0&&e.useInput===!0?"fade":e.transitionShow}return Qt(rt),Ut(at),rt(),bt(()=>{y!==null&&clearTimeout(y),b!==null&&clearTimeout(b)}),Object.assign(f,{showPopup:fe,hidePopup:ne,removeAtIndex:He,add:Ye,toggleOption:ue,getOptionIndex:()=>c.value,setOptionIndex:se,moveOptionSelection:Fe,filter:ce,updateMenuPosition:at,updateInputValue:Ce,isOptionSelected:Pe,getEmittingOptionValue:Xe,isOptionDisabled:(...t)=>re.value.apply(null,t)===!0,getOptionValue:(...t)=>Q.value.apply(null,t),getOptionLabel:(...t)=>P.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:g(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:Ae,targetRef:q,hasValue:F,showPopup:fe,floatingLabel:g(()=>e.hideSelected!==!0&&F.value===!0||typeof d.value=="number"||d.value.length!==0||st(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(T.value===!0||M.value!==!0||a["no-option"]!==void 0))return _===!0?Ft():_t();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{ve(),de()})},onClick(t){if(je(t),_!==!0&&i.value===!0){de(),q.value!==null&&q.value.focus();return}fe(t)}},getControl:t=>{const u=At(),n=t===!0||T.value!==!0||_!==!0;if(e.useInput===!0)u.push(It(t,n));else if(l.editable.value===!0){const x=n===!0?Oe.value:void 0;u.push(p("input",{ref:n===!0?q:void 0,key:"d_t",class:"q-select__focus-target",id:n===!0?l.targetUid.value:void 0,value:H.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...x,onKeydown:tt,onKeyup:Ge,onKeypress:et})),n===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&u.push(p("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ze}))}if(ee.value!==void 0&&e.disable!==!0&&Te.value.length!==0){const x=Te.value.map(V=>p("option",{value:V,selected:!0}));u.push(p("select",{class:"hidden",name:ee.value,multiple:e.multiple},x))}const v=e.useInput===!0||n!==!0?void 0:l.splitAttrs.attributes.value;return p("div",{class:"q-field__native row items-center",...v,...l.splitAttrs.listeners.value},u)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[p(Wt,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:pe.value})]:null}),ht(l)}});const Cl={class:"container"},xl={class:"row title flex items-center justify-center"},kl={class:"q-mt-sm row items-center q-gutter-md"},Al={class:"row flex justify-end text-right"},Ol={__name:"SettingsPage",setup(e){el();const a=tl({search:"",multiple:"10",filteredTableData:[]}),r=g(()=>!U.values||U.values.length===0?[]:Object.keys(U.values[0]).filter(c=>!["UPDATED","OBSERVA\xC7\xC3O","SITUA\xC7\xC3O","id"].includes(c)).map(c=>({field:c,label:c}))),f=il.exports.debounce(()=>{var s,y;const c=a.search.toLowerCase();if(((s=U.values)==null?void 0:s.length)===0){a.filteredTableData=[];return}if(!c){a.filteredTableData=U.values.slice(0,parseInt(a.multiple));return}const d=c.split(" ").filter(b=>b),A=(y=U.values)==null?void 0:y.filter(b=>{const C=JSON.stringify([b.NRPATRIMONIO1,b.DESCRICAO]).toLowerCase();return d.every(_=>C.includes(_))}).slice(0,parseInt(a.multiple));a.filteredTableData=A},300);ae(()=>[a.search,a.multiple,U.values],f,{immediate:!0});const I=async c=>{const d=c.target.files[0];if(d)try{await sl(c),U.fileName=d.name,cl()}catch(A){console.error("Erro ao fazer upload do arquivo:",A)}},i=c=>{console.log("Remover tabela:",c)},T=c=>{console.log("Tabela clicada:",c)};return(c,d)=>{var A;return ll(),ul("div",Cl,[Ee("div",xl,[Be(nl,{class:"q-ml-sm",icon:"upload",label:dt(U).fileName||"Selecionar banco de dados CSV",onClick:d[0]||(d[0]=s=>c.$refs.fileInput.click())},null,8,["label"]),Ee("input",{type:"file",ref:"fileInput",onChange:I,accept:".xls,.csv",hidden:""},null,544)]),Ee("div",kl,[Be(al,{dense:"",outlined:"",modelValue:a.search,"onUpdate:modelValue":d[1]||(d[1]=s=>a.search=s),label:"Pesquisar",style:{flex:"1"}},null,8,["modelValue"]),Be(Vl,{dense:"",outlined:"",modelValue:a.multiple,"onUpdate:modelValue":d[2]||(d[2]=s=>a.multiple=s),options:["10","50","100","1000","10000"],label:"Limite",style:{width:"100px"}},null,8,["modelValue"])]),Ee("div",Al," Registros: "+ft(Math.min(a.multiple,a.filteredTableData.length))+" / "+ft((A=dt(U).values)==null?void 0:A.length),1),Be(rl,{tableData:Array.isArray(a.filteredTableData)?a.filteredTableData:[],headers:r.value,onRemove:i,onClicked:T},null,8,["tableData","headers"])])}}};export{Ol as default};
