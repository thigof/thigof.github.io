import{c as Ue,az as We,aA as mt,aB as St,aC as gt,d as f,h as V,e as Et,n as Lt,v as T,w as ge,aD as Rt,aE as Dt,af as Ht,ag as Pt,k as ht,y as G,g as yt,aF as Nt,aG as jt,aH as st,aI as ke,aJ as Kt,aK as Qt,V as Ke,av as $t,aL as Ut,aM as ve,aN as ct,G as Wt,aO as Xt,S as me,aP as Yt,C as Gt,aQ as Jt,A as Zt,I as el,aj as tl,al as Se,L as Ee,Q as ll,N as ul,ap as nl,ao as al,ak as ol,aq as il}from"./index.17a61db5.js";import{Q as rl,a as ne,S as sl,h as cl,s as dl}from"./app.9f1bdcee.js";import{Q as fl,b as vl,a as ml}from"./QMenu.c0ae4b02.js";var Sl=Ue({name:"QField",inheritAttrs:!1,props:{...We,tag:{type:String,default:"label"}},emits:mt,setup(){return St(gt({tagProp:!0}))}}),gl=Ue({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:s}){const o=f(()=>parseInt(e.lines,10)),c=f(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),I=f(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>V("div",{style:I.value,class:c.value},Et(s.default))}});let Le=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const s=document.createElement("div");Object.assign(s.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(s),e.scrollLeft=-1e3,Le=e.scrollLeft>=0,e.remove()}const j=1e3,hl=["start","center","end","start-force","center-force","end-force"],bt=Array.prototype.filter,yl=window.getComputedStyle(document.body).overflowAnchor===void 0?Lt:function(e,s){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const o=e.children||[];bt.call(o,I=>I.dataset&&I.dataset.qVsAnchor!==void 0).forEach(I=>{delete I.dataset.qVsAnchor});const c=o[s];c&&c.dataset&&(c.dataset.qVsAnchor="")}))};function he(e,s){return e+s}function Qe(e,s,o,c,I,i,O,y){const h=e===window?document.scrollingElement||document.documentElement:e,b=I===!0?"offsetWidth":"offsetHeight",r={scrollStart:0,scrollViewSize:-O-y,scrollMaxSize:0,offsetStart:-O,offsetEnd:-y};if(I===!0?(e===window?(r.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r.scrollViewSize+=document.documentElement.clientWidth):(r.scrollStart=h.scrollLeft,r.scrollViewSize+=h.clientWidth),r.scrollMaxSize=h.scrollWidth,i===!0&&(r.scrollStart=(Le===!0?r.scrollMaxSize-r.scrollViewSize:0)-r.scrollStart)):(e===window?(r.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,r.scrollViewSize+=document.documentElement.clientHeight):(r.scrollStart=h.scrollTop,r.scrollViewSize+=h.clientHeight),r.scrollMaxSize=h.scrollHeight),o!==null)for(let v=o.previousElementSibling;v!==null;v=v.previousElementSibling)v.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetStart+=v[b]);if(c!==null)for(let v=c.nextElementSibling;v!==null;v=v.nextElementSibling)v.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetEnd+=v[b]);if(s!==e){const v=h.getBoundingClientRect(),p=s.getBoundingClientRect();I===!0?(r.offsetStart+=p.left-v.left,r.offsetEnd-=p.width):(r.offsetStart+=p.top-v.top,r.offsetEnd-=p.height),e!==window&&(r.offsetStart+=r.scrollStart),r.offsetEnd+=r.scrollMaxSize-r.offsetStart}return r}function dt(e,s,o,c){s==="end"&&(s=(e===window?document.body:e)[o===!0?"scrollWidth":"scrollHeight"]),e===window?o===!0?(c===!0&&(s=(Le===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):o===!0?(c===!0&&(s=(Le===!0?e.scrollWidth-e.offsetWidth:0)-s),e.scrollLeft=s):e.scrollTop=s}function Ae(e,s,o,c){if(o>=c)return 0;const I=s.length,i=Math.floor(o/j),O=Math.floor((c-1)/j)+1;let y=e.slice(i,O).reduce(he,0);return o%j!==0&&(y-=s.slice(i*j,o).reduce(he,0)),c%j!==0&&c!==I&&(y-=s.slice(c,O*j).reduce(he,0)),y}const bl={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},ft={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...bl};function wl({virtualScrollLength:e,getVirtualScrollTarget:s,getVirtualScrollEl:o,virtualScrollItemSizeComputed:c}){const I=yt(),{props:i,emit:O,proxy:y}=I,{$q:h}=y;let b,r,v,p=[],x;const F=T(0),N=T(0),L=T({}),U=T(null),W=T(null),R=T(null),q=T({from:0,to:0}),Ie=f(()=>i.tableColspan!==void 0?i.tableColspan:100);c===void 0&&(c=f(()=>i.virtualScrollItemSize));const _=f(()=>c.value+";"+i.virtualScrollHorizontal),X=f(()=>_.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);ge(X,()=>{K()}),ge(_,J);function J(){ae(r,!0)}function ye(l){ae(l===void 0?r:l)}function Z(l,a){const m=s();if(m==null||m.nodeType===8)return;const A=Qe(m,o(),U.value,W.value,i.virtualScrollHorizontal,h.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);v!==A.scrollViewSize&&K(A.scrollViewSize),D(m,A,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,hl.indexOf(a)!==-1?a:r!==-1&&l>r?"end":"start")}function ze(){const l=s();if(l==null||l.nodeType===8)return;const a=Qe(l,o(),U.value,W.value,i.virtualScrollHorizontal,h.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),m=e.value-1,A=a.scrollMaxSize-a.offsetStart-a.offsetEnd-N.value;if(b===a.scrollStart)return;if(a.scrollMaxSize<=0){D(l,a,0,0);return}v!==a.scrollViewSize&&K(a.scrollViewSize),be(q.value.from);const M=Math.floor(a.scrollMaxSize-Math.max(a.scrollViewSize,a.offsetEnd)-Math.min(x[m],a.scrollViewSize/2));if(M>0&&Math.ceil(a.scrollStart)>=M){D(l,a,m,a.scrollMaxSize-a.offsetEnd-p.reduce(he,0));return}let w=0,g=a.scrollStart-a.offsetStart,B=g;if(g<=A&&g+a.scrollViewSize>=F.value)g-=F.value,w=q.value.from,B=g;else for(let S=0;g>=p[S]&&w<m;S++)g-=p[S],w+=j;for(;g>0&&w<m;)g-=x[w],g>-a.scrollViewSize?(w++,B=g):B=x[w]+g;D(l,a,w,B)}function D(l,a,m,A,M){const w=typeof M=="string"&&M.indexOf("-force")!==-1,g=w===!0?M.replace("-force",""):M,B=g!==void 0?g:"start";let S=Math.max(0,m-L.value[B]),H=S+L.value.total;H>e.value&&(H=e.value,S=Math.max(0,H-L.value.total)),b=a.scrollStart;const Y=S!==q.value.from||H!==q.value.to;if(Y===!1&&g===void 0){we(m);return}const{activeElement:_e}=document,Q=R.value;Y===!0&&Q!==null&&Q!==_e&&Q.contains(_e)===!0&&(Q.addEventListener("focusout",qe),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",qe)})),yl(Q,m-S);const Oe=g!==void 0?x.slice(S,m).reduce(he,0):0;if(Y===!0){const ee=H>=q.value.from&&S<=q.value.to?q.value.to:H;q.value={from:S,to:ee},F.value=Ae(p,x,0,S),N.value=Ae(p,x,H,e.value),requestAnimationFrame(()=>{q.value.to!==H&&b===a.scrollStart&&(q.value={from:q.value.from,to:H},N.value=Ae(p,x,H,e.value))})}requestAnimationFrame(()=>{if(b!==a.scrollStart)return;Y===!0&&be(S);const ee=x.slice(S,m).reduce(he,0),te=ee+a.offsetStart+F.value,Fe=te+x[m];let Ve=te+A;if(g!==void 0){const De=ee-Oe,Ce=a.scrollStart+De;Ve=w!==!0&&Ce<te&&Fe<Ce+a.scrollViewSize?Ce:g==="end"?Fe-a.scrollViewSize:te-(g==="start"?0:Math.round((a.scrollViewSize-x[m])/2))}b=Ve,dt(l,Ve,i.virtualScrollHorizontal,h.lang.rtl),we(m)})}function be(l){const a=R.value;if(a){const m=bt.call(a.children,S=>S.classList&&S.classList.contains("q-virtual-scroll--skip")===!1),A=m.length,M=i.virtualScrollHorizontal===!0?S=>S.getBoundingClientRect().width:S=>S.offsetHeight;let w=l,g,B;for(let S=0;S<A;){for(g=M(m[S]),S++;S<A&&m[S].classList.contains("q-virtual-scroll--with-prev")===!0;)g+=M(m[S]),S++;B=g-x[w],B!==0&&(x[w]+=B,p[Math.floor(w/j)]+=B),w++}}}function qe(){R.value!==null&&R.value!==void 0&&R.value.focus()}function ae(l,a){const m=1*c.value;(a===!0||Array.isArray(x)===!1)&&(x=[]);const A=x.length;x.length=e.value;for(let w=e.value-1;w>=A;w--)x[w]=m;const M=Math.floor((e.value-1)/j);p=[];for(let w=0;w<=M;w++){let g=0;const B=Math.min((w+1)*j,e.value);for(let S=w*j;S<B;S++)g+=x[S];p.push(g)}r=-1,b=void 0,F.value=Ae(p,x,0,q.value.from),N.value=Ae(p,x,q.value.to,e.value),l>=0?(be(q.value.from),G(()=>{Z(l)})):oe()}function K(l){if(l===void 0&&typeof window!="undefined"){const g=s();g!=null&&g.nodeType!==8&&(l=Qe(g,o(),U.value,W.value,i.virtualScrollHorizontal,h.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}v=l;const a=parseFloat(i.virtualScrollSliceRatioBefore)||0,m=parseFloat(i.virtualScrollSliceRatioAfter)||0,A=1+a+m,M=l===void 0||l<=0?1:Math.ceil(l/c.value),w=Math.max(1,M,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/A));L.value={total:Math.ceil(w*A),start:Math.ceil(w*a),center:Math.ceil(w*(.5+a)),end:Math.ceil(w*(1+a)),view:M}}function Re(l,a){const m=i.virtualScrollHorizontal===!0?"width":"height",A={["--q-virtual-scroll-item-"+m]:c.value+"px"};return[l==="tbody"?V(l,{class:"q-virtual-scroll__padding",key:"before",ref:U},[V("tr",[V("td",{style:{[m]:`${F.value}px`,...A},colspan:Ie.value})])]):V(l,{class:"q-virtual-scroll__padding",key:"before",ref:U,style:{[m]:`${F.value}px`,...A}}),V(l,{class:"q-virtual-scroll__content",key:"content",ref:R,tabindex:-1},a.flat()),l==="tbody"?V(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[V("tr",[V("td",{style:{[m]:`${N.value}px`,...A},colspan:Ie.value})])]):V(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[m]:`${N.value}px`,...A}})]}function we(l){r!==l&&(i.onVirtualScroll!==void 0&&O("virtualScroll",{index:l,from:q.value.from,to:q.value.to-1,direction:l<r?"decrease":"increase",ref:y}),r=l)}K();const oe=Rt(ze,h.platform.is.ios===!0?120:35);Dt(()=>{K()});let pe=!1;return Ht(()=>{pe=!0}),Pt(()=>{if(pe!==!0)return;const l=s();b!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?dt(l,b,i.virtualScrollHorizontal,h.lang.rtl):Z(r)}),ht(()=>{oe.cancel()}),Object.assign(y,{scrollTo:Z,reset:J,refresh:ye}),{virtualScrollSliceRange:q,virtualScrollSliceSizeComputed:L,setVirtualScrollSize:K,onVirtualScrollEvt:oe,localResetVirtualScroll:ae,padVirtualScroll:Re,scrollTo:Z,reset:J,refresh:ye}}const vt=e=>["add","add-unique","toggle"].includes(e),pl=".*+?^${}()|[]\\",Vl=Object.keys(We);function $e(e,s){if(typeof e=="function")return e;const o=e!==void 0?e:s;return c=>c!==null&&typeof c=="object"&&o in c?c[o]:c}var Cl=Ue({name:"QSelect",inheritAttrs:!1,props:{...ft,...Nt,...We,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:vt},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:ft.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...mt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:s,emit:o}){const{proxy:c}=yt(),{$q:I}=c,i=T(!1),O=T(!1),y=T(-1),h=T(""),b=T(!1),r=T(!1);let v=null,p=null,x,F,N,L=null,U,W,R,q;const Ie=T(null),_=T(null),X=T(null),J=T(null),ye=T(null),Z=jt(e),ze=Ut(nt),D=f(()=>e.options.length),be=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:qe,virtualScrollSliceSizeComputed:ae,localResetVirtualScroll:K,padVirtualScroll:Re,onVirtualScrollEvt:we,scrollTo:oe,setVirtualScrollSize:pe}=wl({virtualScrollLength:D,getVirtualScrollTarget:Ct,getVirtualScrollEl:lt,virtualScrollItemSizeComputed:be}),l=gt(),a=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0){const n=e.mapOptions===!0&&x!==void 0?x:[],d=u.map(k=>Vt(k,n));return e.modelValue===null&&t===!0?d.filter(k=>k!==null):d}return u}),m=f(()=>{const t={};return Vl.forEach(u=>{const n=e[u];n!==void 0&&(t[u]=n)}),t}),A=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),M=f(()=>st(a.value)),w=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||a.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),g=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),B=f(()=>D.value===0),S=f(()=>a.value.map(t=>P.value(t)).join(", ")),H=f(()=>e.displayValue!==void 0?e.displayValue:S.value),Y=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),_e=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||a.value.some(Y.value))),Q=f(()=>l.focused.value===!0?e.tabindex:-1),Oe=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return y.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${y.value}`),t}),ee=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=f(()=>a.value.map((t,u)=>({index:u,opt:t,html:Y.value(t),selected:!0,removeAtIndex:pt,toggleOption:le,tabindex:Q.value}))),Fe=f(()=>{if(D.value===0)return[];const{from:t,to:u}=qe.value;return e.options.slice(t,u).map((n,d)=>{const k=ie.value(n)===!0,C=Pe(n)===!0,E=t+d,z={clickable:!0,active:C,activeClass:Ce.value,manualFocus:!0,focused:!1,disable:k,tabindex:-1,dense:e.optionsDense,dark:A.value,role:"option","aria-selected":C===!0?"true":"false",id:`${l.targetUid.value}_${E}`,onClick:()=>{le(n)}};return k!==!0&&(y.value===E&&(z.focused=!0),I.platform.is.desktop===!0&&(z.onMousemove=()=>{i.value===!0&&re(E)})),{index:E,opt:n,html:Y.value(n),label:P.value(n),selected:z.active,focused:z.focused,toggleOption:le,setOptionIndex:re,itemProps:z}})}),Ve=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:I.iconSet.arrow.dropdown),De=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ce=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),$=f(()=>$e(e.optionValue,"value")),P=f(()=>$e(e.optionLabel,"label")),ie=f(()=>$e(e.optionDisable,"disable")),Me=f(()=>a.value.map($.value)),wt=f(()=>{const t={onInput:nt,onChange:ze,onKeydown:tt,onKeyup:Ze,onKeypress:et,onFocus:Ge,onClick(u){F===!0&&ve(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=ze,t});ge(a,t=>{x=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(O.value!==!0&&i.value!==!0||M.value!==!0)&&(N!==!0&&fe(),(O.value===!0||i.value===!0)&&se(""))},{immediate:!0}),ge(()=>e.fillInput,fe),ge(i,Ne),ge(D,Tt);function Xe(t){return e.emitValue===!0?$.value(t):t}function He(t){if(t!==-1&&t<a.value.length)if(e.multiple===!0){const u=e.modelValue.slice();o("remove",{index:t,value:u.splice(t,1)[0]}),o("update:modelValue",u)}else o("update:modelValue",null)}function pt(t){He(t),l.focus()}function Ye(t,u){const n=Xe(t);if(e.multiple!==!0){e.fillInput===!0&&xe(P.value(t),!0,!0),o("update:modelValue",n);return}if(a.value.length===0){o("add",{index:0,value:n}),o("update:modelValue",e.multiple===!0?[n]:n);return}if(u===!0&&Pe(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();o("add",{index:d.length,value:n}),d.push(n),o("update:modelValue",d)}function le(t,u){if(l.editable.value!==!0||t===void 0||ie.value(t)===!0)return;const n=$.value(t);if(e.multiple!==!0){u!==!0&&(xe(e.fillInput===!0?P.value(t):"",!0,!0),ue()),_.value!==null&&_.value.focus(),(a.value.length===0||ke($.value(a.value[0]),n)!==!0)&&o("update:modelValue",e.emitValue===!0?n:t);return}if((F!==!0||b.value===!0)&&l.focus(),Ge(),a.value.length===0){const C=e.emitValue===!0?n:t;o("add",{index:0,value:C}),o("update:modelValue",e.multiple===!0?[C]:C);return}const d=e.modelValue.slice(),k=Me.value.findIndex(C=>ke(C,n));if(k!==-1)o("remove",{index:k,value:d.splice(k,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const C=e.emitValue===!0?n:t;o("add",{index:d.length,value:C}),d.push(C)}o("update:modelValue",d)}function re(t){if(I.platform.is.desktop!==!0)return;const u=t!==-1&&t<D.value?t:-1;y.value!==u&&(y.value=u)}function Be(t=1,u){if(i.value===!0){let n=y.value;do n=ct(n+t,-1,D.value-1);while(n!==-1&&n!==y.value&&ie.value(e.options[n])===!0);y.value!==n&&(re(n),oe(n),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Te(n>=0?P.value(e.options[n]):U,!0))}}function Vt(t,u){const n=d=>ke($.value(d),t);return e.options.find(n)||u.find(n)||t}function Pe(t){const u=$.value(t);return Me.value.find(n=>ke(n,u))!==void 0}function Ge(t){e.useInput===!0&&_.value!==null&&(t===void 0||_.value===t.target&&t.target.value===S.value)&&_.value.select()}function Je(t){Wt(t,27)===!0&&i.value===!0&&(ve(t),ue(),fe()),o("keyup",t)}function Ze(t){const{value:u}=t.target;if(t.keyCode!==void 0){Je(t);return}if(t.target.value="",v!==null&&(clearTimeout(v),v=null),p!==null&&(clearTimeout(p),p=null),fe(),typeof u=="string"&&u.length!==0){const n=u.toLocaleLowerCase(),d=C=>{const E=e.options.find(z=>C.value(z).toLocaleLowerCase()===n);return E===void 0?!1:(a.value.indexOf(E)===-1?le(E):ue(),!0)},k=C=>{d($)!==!0&&(d(P)===!0||C===!0||se(u,!0,()=>k(!0)))};k()}else l.clearValue(t)}function et(t){o("keypress",t)}function tt(t){if(o("keydown",t),Xt(t)===!0)return;const u=h.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),n=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(y.value!==-1||u===!0);if(t.keyCode===27){Ke(t);return}if(t.keyCode===9&&n===!1){ce();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){me(t),de();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&o("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(me(t),y.value=-1,Be(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ae.value!==void 0&&(me(t),y.value=Math.max(-1,Math.min(D.value,y.value+(t.keyCode===33?-1:1)*ae.value.view)),Be(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(me(t),Be(t.keyCode===38?-1:1,e.multiple));const d=D.value;if((R===void 0||q<Date.now())&&(R=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||R.length!==0)){i.value!==!0&&de(t);const k=t.key.toLocaleLowerCase(),C=R.length===1&&R[0]===k;q=Date.now()+1500,C===!1&&(me(t),R+=k);const E=new RegExp("^"+R.split("").map(je=>pl.indexOf(je)!==-1?"\\"+je:je).join(".*"),"i");let z=y.value;if(C===!0||z<0||E.test(P.value(e.options[z]))!==!0)do z=ct(z+1,-1,d-1);while(z!==y.value&&(ie.value(e.options[z])===!0||E.test(P.value(e.options[z]))!==!0));y.value!==z&&G(()=>{re(z),oe(z),z>=0&&e.useInput===!0&&e.fillInput===!0&&Te(P.value(e.options[z]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||R!=="")&&(t.keyCode!==9||n===!1))){if(t.keyCode!==9&&me(t),y.value!==-1&&y.value<d){le(e.options[y.value]);return}if(u===!0){const k=(C,E)=>{if(E){if(vt(E)!==!0)return}else E=e.newValueMode;if(xe("",e.multiple!==!0,!0),C==null)return;(E==="toggle"?le:Ye)(C,E==="add-unique"),e.multiple!==!0&&(_.value!==null&&_.value.focus(),ue())};if(e.onNewValue!==void 0?o("newValue",h.value,k):k(h.value),e.multiple!==!0)return}i.value===!0?ce():l.innerLoading.value!==!0&&de()}}function lt(){return F===!0?ye.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Ct(){return lt()}function xt(){return e.hideSelected===!0?[]:s["selected-item"]!==void 0?te.value.map(t=>s["selected-item"](t)).slice():s.selected!==void 0?[].concat(s.selected()):e.useChips===!0?te.value.map((t,u)=>V(rl,{key:"option-"+u,removable:l.editable.value===!0&&ie.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(u)}},()=>V("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:P.value(t.opt)}))):[V("span",{[_e.value===!0?"innerHTML":"textContent"]:H.value})]}function ut(){if(B.value===!0)return s["no-option"]!==void 0?s["no-option"]({inputValue:h.value}):void 0;const t=s.option!==void 0?s.option:n=>V(ml,{key:n.index,...n.itemProps},()=>V(vl,()=>V(gl,()=>V("span",{[n.html===!0?"innerHTML":"textContent"]:n.label}))));let u=Re("div",Fe.value.map(t));return s["before-options"]!==void 0&&(u=s["before-options"]().concat(u)),Gt(s["after-options"],u)}function kt(t,u){const n=u===!0?{...Oe.value,...l.splitAttrs.attributes.value}:void 0,d={ref:u===!0?_:void 0,key:"i_t",class:w.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...n,id:u===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...wt.value};return t!==!0&&F===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),V("input",d)}function nt(t){v!==null&&(clearTimeout(v),v=null),p!==null&&(clearTimeout(p),p=null),!(t&&t.target&&t.target.qComposing===!0)&&(Te(t.target.value||""),N=!0,U=h.value,l.focused.value!==!0&&(F!==!0||b.value===!0)&&l.focus(),e.onFilter!==void 0&&(v=setTimeout(()=>{v=null,se(h.value)},e.inputDebounce)))}function Te(t,u){h.value!==t&&(h.value=t,u===!0||e.inputDebounce===0||e.inputDebounce==="0"?o("inputValue",t):p=setTimeout(()=>{p=null,o("inputValue",t)},e.inputDebounce))}function xe(t,u,n){N=n!==!0,e.useInput===!0&&(Te(t,!0),(u===!0||n!==!0)&&(U=t),u!==!0&&se(t))}function se(t,u,n){if(e.onFilter===void 0||u!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?o("filterAbort"):(l.innerLoading.value=!0,r.value=!0),t!==""&&e.multiple!==!0&&a.value.length!==0&&N!==!0&&t===P.value(a.value[0])&&(t="");const d=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);L!==null&&clearTimeout(L),L=d,o("filter",t,(k,C)=>{(u===!0||l.focused.value===!0)&&L===d&&(clearTimeout(L),typeof k=="function"&&k(),r.value=!1,G(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(u===!0?i.value===!0&&ue():i.value===!0?Ne(!0):i.value=!0),typeof C=="function"&&G(()=>{C(c)}),typeof n=="function"&&G(()=>{n(c)})}))},()=>{l.focused.value===!0&&L===d&&(clearTimeout(L),l.innerLoading.value=!1,r.value=!1),i.value===!0&&(i.value=!1)})}function At(){return V(fl,{ref:X,class:g.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&B.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:A.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:De.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:we,onBeforeShow:ot,onBeforeHide:It,onShow:zt},ut)}function It(t){it(t),ce()}function zt(){pe()}function qt(t){ve(t),_.value!==null&&_.value.focus(),b.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function _t(t){ve(t),G(()=>{b.value=!1})}function Ot(){const t=[V(Sl,{class:`col-auto ${l.fieldClass.value}`,...m.value,for:l.targetUid.value,dark:A.value,square:!0,loading:r.value,itemAligned:!1,filled:!0,stackLabel:h.value.length!==0,...l.splitAttrs.listeners.value,onFocus:qt,onBlur:_t},{...s,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(V("div",{ref:ye,class:g.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:Ke,onScrollPassive:we},ut())),V(Yt,{ref:J,modelValue:O.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ot,onBeforeHide:Ft,onHide:Mt,onShow:Bt},()=>V("div",{class:"q-select__dialog"+(A.value===!0?" q-select__dialog--dark q-dark":"")+(b.value===!0?" q-select__dialog--focused":"")},t))}function Ft(t){it(t),J.value!==null&&J.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Mt(t){ue(),l.focused.value===!1&&o("blur",t),fe()}function Bt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&_.value!==null&&_.value!==t&&_.value.focus(),pe()}function ce(){O.value!==!0&&(y.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(L!==null&&(clearTimeout(L),L=null),l.innerLoading.value===!0&&(o("filterAbort"),l.innerLoading.value=!1,r.value=!1)))}function de(t){l.editable.value===!0&&(F===!0?(l.onControlFocusin(t),O.value=!0,G(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?se(h.value):(B.value!==!0||s["no-option"]!==void 0)&&(i.value=!0))}function ue(){O.value=!1,ce()}function fe(){e.useInput===!0&&xe(e.multiple!==!0&&e.fillInput===!0&&a.value.length!==0&&P.value(a.value[0])||"",!0,!0)}function Ne(t){let u=-1;if(t===!0){if(a.value.length!==0){const n=$.value(a.value[0]);u=e.options.findIndex(d=>ke($.value(d),n))}K(u)}re(u)}function Tt(t,u){i.value===!0&&l.innerLoading.value===!1&&(K(-1,!0),G(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>u?K():Ne(!0))}))}function at(){O.value===!1&&X.value!==null&&X.value.updatePosition()}function ot(t){t!==void 0&&ve(t),o("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function it(t){t!==void 0&&ve(t),o("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function rt(){F=I.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?s["no-option"]!==void 0||e.onFilter!==void 0||B.value===!1:!0),W=I.platform.is.ios===!0&&F===!0&&e.useInput===!0?"fade":e.transitionShow}return Kt(rt),Qt(at),rt(),ht(()=>{v!==null&&clearTimeout(v),p!==null&&clearTimeout(p)}),Object.assign(c,{showPopup:de,hidePopup:ue,removeAtIndex:He,add:Ye,toggleOption:le,getOptionIndex:()=>y.value,setOptionIndex:re,moveOptionSelection:Be,filter:se,updateMenuPosition:at,updateInputValue:xe,isOptionSelected:Pe,getEmittingOptionValue:Xe,isOptionDisabled:(...t)=>ie.value.apply(null,t)===!0,getOptionValue:(...t)=>$.value.apply(null,t),getOptionLabel:(...t)=>P.value.apply(null,t)}),Object.assign(l,{innerValue:a,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:Ie,targetRef:_,hasValue:M,showPopup:de,floatingLabel:f(()=>e.hideSelected!==!0&&M.value===!0||typeof h.value=="number"||h.value.length!==0||st(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(O.value===!0||B.value!==!0||s["no-option"]!==void 0))return F===!0?Ot():At();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{fe(),ce()})},onClick(t){if(Ke(t),F!==!0&&i.value===!0){ce(),_.value!==null&&_.value.focus();return}de(t)}},getControl:t=>{const u=xt(),n=t===!0||O.value!==!0||F!==!0;if(e.useInput===!0)u.push(kt(t,n));else if(l.editable.value===!0){const k=n===!0?Oe.value:void 0;u.push(V("input",{ref:n===!0?_:void 0,key:"d_t",class:"q-select__focus-target",id:n===!0?l.targetUid.value:void 0,value:H.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...k,onKeydown:tt,onKeyup:Je,onKeypress:et})),n===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&u.push(V("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ze}))}if(Z.value!==void 0&&e.disable!==!0&&Me.value.length!==0){const k=Me.value.map(C=>V("option",{value:C,selected:!0}));u.push(V("select",{class:"hidden",name:Z.value,multiple:e.multiple},k))}const d=e.useInput===!0||n!==!0?void 0:l.splitAttrs.attributes.value;return V("div",{class:"q-field__native row items-center",...d,...l.splitAttrs.listeners.value},u)},getInnerAppend:()=>e.loading!==!0&&r.value!==!0&&e.hideDropdownIcon!==!0?[V($t,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:Ve.value})]:null}),St(l)}});const xl={class:"row q-ma-lg flex items-center"},kl={class:"q-ml-sm"},Al={class:"q-pa-sm row items-center q-gutter-md"},Il={class:"q-mt-lg",style:{"padding-top":"25px"}},Ol={__name:"SettingsPage",setup(e){const s=Jt(),o=Zt({search:"",multiple:"10"}),c=f(()=>!ne.values||ne.values.length===0?[]:Object.keys(ne.values[0]).filter(b=>!["UPDATED","OBSERVA\xC7\xC3O","SITUA\xC7\xC3O","id"].includes(b)).map(b=>({field:b,label:b}))),I=f(()=>{var r,v;const b=o.search.toLowerCase();return((r=ne.values)==null?void 0:r.length)===0?[]:(v=ne.values)==null?void 0:v.filter(p=>Object.values(p).some(x=>String(x).toLowerCase().includes(b))).slice(0,parseInt(o.multiple))}),i=b=>{const r=b.target.files[0];r&&cl(b).then(()=>{ne.fileName=r.name,dl(),s.push("/")})},O=b=>{console.log("Remover tabela:",b)},y=b=>{console.log("Tabela clicada:",b)},h=()=>{s.back()};return(b,r)=>(el(),tl(il,null,[Se("div",xl,[Ee(ll,{flat:"",round:"",icon:"arrow_back",onClick:h}),r[2]||(r[2]=ul(" Arquivo ")),Se("b",kl,nl(al(ne).fileName),1)]),Se("div",Al,[Ee(ol,{dense:"",outlined:"",modelValue:o.search,"onUpdate:modelValue":r[0]||(r[0]=v=>o.search=v),label:"Pesquisar",style:{flex:"1"}},null,8,["modelValue"]),Ee(Cl,{dense:"",outlined:"",modelValue:o.multiple,"onUpdate:modelValue":r[1]||(r[1]=v=>o.multiple=v),options:["10","50","100","1000","10000"],label:"Limite",style:{width:"100px"}},null,8,["modelValue"])]),Ee(sl,{tableData:Array.isArray(I.value)?I.value:[],headers:c.value,onRemove:O,onClicked:y},null,8,["tableData","headers"]),Se("div",Il,[Se("fieldset",null,[Se("input",{type:"file",onChange:i,label:"Selecionar banco de dados csv",accept:".xls, .csv"},null,32)])])],64))}};export{Ol as default};
