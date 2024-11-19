import{c as _,a as p,h as w,d as N,u as ne,e as Ge,f as le,g as Je,r as S,i as B,j as oe,s as Pe,k as _e,P as Ze,p as ve,n as Z,l as he,w as k,o as A,m as M,q as et,t as Q,v as me,x as tt,y as V,z as nt,A as lt,B as Be,C as ot,D as it,E as at,F as rt,G as ut,H as st,I as ct,J as dt,K as ft,L as ge,M as $e,N as vt,T as ht,O as mt,Q as gt,R as bt,S as Re,U as Me,V as We,W,X as ie,Y as Qe,Z as yt,_ as pt,$ as xt,a0 as O,a1 as wt,a2 as qt,a3 as St,a4 as Tt,a5 as kt,a6 as Et,a7 as Y,a8 as G,a9 as P,aa as $,ab as Ct,ac as be,ad as ye}from"./index.2f7d4565.js";import{_ as zt}from"./plugin-vue_export-helper.21dcd24c.js";var pe=_({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const n=p(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>w("div",{class:n.value},N(l.default))}}),xe=_({name:"QItem",props:{...ne,...Ge,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=B(),o=le(e,t),{hasLink:u,linkAttrs:a,linkClass:m,linkTag:s,navigateOnClick:r}=Je(),f=S(null),y=S(null),x=p(()=>e.clickable===!0||u.value===!0||e.tag==="label"),i=p(()=>e.disable!==!0&&x.value===!0),v=p(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?m.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),H=p(()=>{if(e.insetLevel===void 0)return null;const c=t.lang.rtl===!0?"Right":"Left";return{["padding"+c]:16+e.insetLevel*56+"px"}});function z(c){i.value===!0&&(y.value!==null&&(c.qKeyEvent!==!0&&document.activeElement===f.value?y.value.focus():document.activeElement===y.value&&f.value.focus()),r(c))}function C(c){if(i.value===!0&&oe(c,[13,32])===!0){Pe(c),c.qKeyEvent=!0;const h=new MouseEvent("click",c);h.qKeyEvent=!0,f.value.dispatchEvent(h)}n("keyup",c)}function d(){const c=_e(l.default,[]);return i.value===!0&&c.unshift(w("div",{class:"q-focus-helper",tabindex:-1,ref:y})),c}return()=>{const c={ref:f,class:v.value,style:H.value,role:"listitem",onClick:z,onKeyup:C};return i.value===!0?(c.tabindex=e.tabindex||"0",Object.assign(c,a.value)):x.value===!0&&(c["aria-disabled"]="true"),w(s.value,c,d())}}});const Lt=["ul","ol"];var Ht=_({name:"QList",props:{...ne,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const n=B(),t=le(e,n.proxy.$q),o=p(()=>Lt.includes(e.tag)?null:"list"),u=p(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>w(e.tag,{class:u.value,role:o.value},N(l.default))}});function Pt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ze.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const _t={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Bt={..._t,contextMenu:Boolean};function $t({showing:e,avoidEmit:l,configureAnchorEl:n}){const{props:t,proxy:o,emit:u}=B(),a=S(null);let m=null;function s(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const r={};n===void 0&&(Object.assign(r,{hide(i){o.hide(i)},toggle(i){o.toggle(i),i.qAnchorHandled=!0},toggleKey(i){oe(i,13)===!0&&r.toggle(i)},contextClick(i){o.hide(i),ve(i),Z(()=>{o.show(i),i.qAnchorHandled=!0})},prevent:ve,mobileTouch(i){if(r.mobileCleanup(i),s(i)!==!0)return;o.hide(i),a.value.classList.add("non-selectable");const v=i.target;he(r,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),m=setTimeout(()=>{m=null,o.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),m!==null&&(clearTimeout(m),m=null),e.value===!0&&i!==void 0&&Pt()}}),n=function(i=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let v;i===!0?o.$q.platform.is.mobile===!0?v=[[a.value,"touchstart","mobileTouch","passive"]]:v=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:v=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],he(r,"anchor",v)});function f(){et(r,"anchor")}function y(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;n()}function x(){if(t.target===!1||t.target===""||o.$el.parentNode===null)a.value=null;else if(t.target===!0)y(o.$el.parentNode);else{let i=t.target;if(typeof t.target=="string")try{i=document.querySelector(t.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,n()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return k(()=>t.contextMenu,i=>{a.value!==null&&(f(),n(i))}),k(()=>t.target,()=>{a.value!==null&&f(),x()}),k(()=>t.noParentEvent,i=>{a.value!==null&&(i===!0?f():n())}),A(()=>{x(),l!==!0&&t.modelValue===!0&&a.value===null&&u("update:modelValue",!1)}),M(()=>{m!==null&&clearTimeout(m),f()}),{anchorEl:a,canShow:s,anchorEvents:r}}function Rt(e,l){const n=S(null);let t;function o(m,s){const r=`${s!==void 0?"add":"remove"}EventListener`,f=s!==void 0?s:t;m!==window&&m[r]("scroll",f,Q.passive),window[r]("scroll",f,Q.passive),t=s}function u(){n.value!==null&&(o(n.value),n.value=null)}const a=k(()=>e.noParentEvent,()=>{n.value!==null&&(u(),l())});return M(a),{localScrollTarget:n,unconfigureScrollTarget:u,changeScrollEvent:o}}const{notPassiveCapture:D}=Q,R=[];function K(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let n=me.length-1;for(;n>=0;){const t=me[n].$;if(t.type.name==="QTooltip"){n--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;n--}for(let t=R.length-1;t>=0;t--){const o=R[t];if((o.anchorEl.value===null||o.anchorEl.value.contains(l)===!1)&&(l===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(l)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Mt(e){R.push(e),R.length===1&&(document.addEventListener("mousedown",K,D),document.addEventListener("touchstart",K,D))}function we(e){const l=R.findIndex(n=>n===e);l!==-1&&(R.splice(l,1),R.length===0&&(document.removeEventListener("mousedown",K,D),document.removeEventListener("touchstart",K,D)))}let qe,Se;function Te(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Wt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ee={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ee[`${e}#ltr`]=e,ee[`${e}#rtl`]=e});function ke(e,l){const n=e.split(" ");return{vertical:n[0],horizontal:ee[`${n[1]}#${l===!0?"rtl":"ltr"}`]}}function Qt(e,l){let{top:n,left:t,right:o,bottom:u,width:a,height:m}=e.getBoundingClientRect();return l!==void 0&&(n-=l[1],t-=l[0],u+=l[1],o+=l[0],a+=l[0],m+=l[1]),{top:n,bottom:u,height:m,left:t,right:o,width:a,middle:t+(o-t)/2,center:n+(u-n)/2}}function Ft(e,l,n){let{top:t,left:o}=e.getBoundingClientRect();return t+=l.top,o+=l.left,n!==void 0&&(t+=n[1],o+=n[0]),{top:t,bottom:t+1,height:1,left:o,right:o+1,width:1,middle:o,center:t}}function At(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function Ee(e,l,n,t){return{top:e[n.vertical]-l[t.vertical],left:e[n.horizontal]-l[t.horizontal]}}function Fe(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Fe(e,l+1)},10);return}const{targetEl:n,offset:t,anchorEl:o,anchorOrigin:u,selfOrigin:a,absoluteOffset:m,fit:s,cover:r,maxHeight:f,maxWidth:y}=e;if(tt.is.ios===!0&&window.visualViewport!==void 0){const T=document.body.style,{offsetLeft:q,offsetTop:E}=window.visualViewport;q!==qe&&(T.setProperty("--q-pe-left",q+"px"),qe=q),E!==Se&&(T.setProperty("--q-pe-top",E+"px"),Se=E)}const{scrollLeft:x,scrollTop:i}=n,v=m===void 0?Qt(o,r===!0?[0,0]:t):Ft(o,m,t);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:y,maxHeight:f,visibility:"visible"});const{offsetWidth:H,offsetHeight:z}=n,{elWidth:C,elHeight:d}=s===!0||r===!0?{elWidth:Math.max(v.width,H),elHeight:r===!0?Math.max(v.height,z):z}:{elWidth:H,elHeight:z};let c={maxWidth:y,maxHeight:f};(s===!0||r===!0)&&(c.minWidth=v.width+"px",r===!0&&(c.minHeight=v.height+"px")),Object.assign(n.style,c);const h=At(C,d);let b=Ee(v,h,u,a);if(m===void 0||t===void 0)J(b,v,h,u,a);else{const{top:T,left:q}=b;J(b,v,h,u,a);let E=!1;if(b.top!==T){E=!0;const L=2*t[1];v.center=v.top-=L,v.bottom-=L+2}if(b.left!==q){E=!0;const L=2*t[0];v.middle=v.left-=L,v.right-=L+2}E===!0&&(b=Ee(v,h,u,a),J(b,v,h,u,a))}c={top:b.top+"px",left:b.left+"px"},b.maxHeight!==void 0&&(c.maxHeight=b.maxHeight+"px",v.height>b.maxHeight&&(c.minHeight=c.maxHeight)),b.maxWidth!==void 0&&(c.maxWidth=b.maxWidth+"px",v.width>b.maxWidth&&(c.minWidth=c.maxWidth)),Object.assign(n.style,c),n.scrollTop!==i&&(n.scrollTop=i),n.scrollLeft!==x&&(n.scrollLeft=x)}function J(e,l,n,t,o){const u=n.bottom,a=n.right,m=V(),s=window.innerHeight-m,r=document.body.clientWidth;if(e.top<0||e.top+u>s)if(o.vertical==="center")e.top=l[t.vertical]>s/2?Math.max(0,s-u):0,e.maxHeight=Math.min(u,s);else if(l[t.vertical]>s/2){const f=Math.min(s,t.vertical==="center"?l.center:t.vertical===o.vertical?l.bottom:l.top);e.maxHeight=Math.min(u,f),e.top=Math.max(0,f-u)}else e.top=Math.max(0,t.vertical==="center"?l.center:t.vertical===o.vertical?l.top:l.bottom),e.maxHeight=Math.min(u,s-e.top);if(e.left<0||e.left+a>r)if(e.maxWidth=Math.min(a,r),o.horizontal==="middle")e.left=l[t.horizontal]>r/2?Math.max(0,r-a):0;else if(l[t.horizontal]>r/2){const f=Math.min(r,t.horizontal==="middle"?l.middle:t.horizontal===o.horizontal?l.right:l.left);e.maxWidth=Math.min(a,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?l.middle:t.horizontal===o.horizontal?l.left:l.right),e.maxWidth=Math.min(a,r-e.left)}var Ot=_({name:"QMenu",inheritAttrs:!1,props:{...Bt,...nt,...ne,...lt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Te},self:{type:String,validator:Te},offset:{type:Array,validator:Wt},scrollTarget:Be,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ot,"click","escapeKey"],setup(e,{slots:l,emit:n,attrs:t}){let o=null,u,a,m;const s=B(),{proxy:r}=s,{$q:f}=r,y=S(null),x=S(!1),i=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),v=le(e,f),{registerTick:H,removeTick:z}=it(),{registerTimeout:C}=at(),{transitionProps:d,transitionStyle:c}=rt(e),{localScrollTarget:h,changeScrollEvent:b,unconfigureScrollTarget:T}=Rt(e,de),{anchorEl:q,canShow:E}=$t({showing:x}),{hide:L}=ut({showing:x,canShow:E,handleShow:Ne,handleHide:je,hideOnRouteChange:i,processOnMount:!0}),{showPortal:ae,hidePortal:re,renderPortal:Oe}=st(s,y,Ue,"menu"),j={anchorEl:q,innerRef:y,onClickOutside(g){if(e.persistent!==!0&&x.value===!0)return L(g),(g.type==="touchstart"||g.target.classList.contains("q-dialog__backdrop"))&&Pe(g),!0}},ue=p(()=>ke(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),Ve=p(()=>e.cover===!0?ue.value:ke(e.self||"top start",f.lang.rtl)),De=p(()=>(e.square===!0?" q-menu--square":"")+(v.value===!0?" q-menu--dark q-dark":"")),Ke=p(()=>e.autoClose===!0?{onClick:Ie}:{}),se=p(()=>x.value===!0&&e.persistent!==!0);k(se,g=>{g===!0?(gt(U),Mt(j)):(ge(U),we(j))});function I(){mt(()=>{let g=y.value;g&&g.contains(document.activeElement)!==!0&&(g=g.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||g.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||g.querySelector("[autofocus], [data-autofocus]")||g,g.focus({preventScroll:!0}))})}function Ne(g){if(o=e.noRefocus===!1?document.activeElement:null,ct(fe),ae(),de(),u=void 0,g!==void 0&&(e.touchPosition||e.contextMenu)){const X=dt(g);if(X.left!==void 0){const{top:Xe,left:Ye}=q.value.getBoundingClientRect();u={left:X.left-Ye,top:X.top-Xe}}}a===void 0&&(a=k(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,F)),e.noFocus!==!0&&document.activeElement.blur(),H(()=>{F(),e.noFocus!==!0&&I()}),C(()=>{f.platform.is.ios===!0&&(m=e.autoClose,y.value.click()),F(),ae(!0),n("show",g)},e.transitionDuration)}function je(g){z(),re(),ce(!0),o!==null&&(g===void 0||g.qClickOutside!==!0)&&(((g&&g.type.indexOf("key")===0?o.closest('[tabindex]:not([tabindex^="-"])'):void 0)||o).focus(),o=null),C(()=>{re(!0),n("hide",g)},e.transitionDuration)}function ce(g){u=void 0,a!==void 0&&(a(),a=void 0),(g===!0||x.value===!0)&&(ft(fe),T(),we(j),ge(U)),g!==!0&&(o=null)}function de(){(q.value!==null||e.scrollTarget!==void 0)&&(h.value=$e(q.value,e.scrollTarget),b(h.value,F))}function Ie(g){m!==!0?(vt(r,g),n("click",g)):m=!1}function fe(g){se.value===!0&&e.noFocus!==!0&&bt(y.value,g.target)!==!0&&I()}function U(g){n("escapeKey"),L(g)}function F(){Fe({targetEl:y.value,offset:e.offset,anchorEl:q.value,anchorOrigin:ue.value,selfOrigin:Ve.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ue(){return w(ht,d.value,()=>x.value===!0?w("div",{role:"menu",...t,ref:y,tabindex:-1,class:["q-menu q-position-engine scroll"+De.value,t.class],style:[t.style,c.value],...Ke.value},N(l.default)):null)}return M(ce),Object.assign(r,{focus:I,updatePosition:F}),Oe}});function Vt(){const e=S(!Re.value);return e.value===!1&&A(()=>{e.value=!0}),{isHydrated:e}}const Ae=typeof ResizeObserver!="undefined",Ce=Ae===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var te=_({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let n=null,t,o={width:-1,height:-1};function u(s){s===!0||e.debounce===0||e.debounce==="0"?a():n===null&&(n=setTimeout(a,e.debounce))}function a(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:s,offsetHeight:r}=t;(s!==o.width||r!==o.height)&&(o={width:s,height:r},l("resize",o))}}const{proxy:m}=B();if(m.trigger=u,Ae===!0){let s;const r=f=>{t=m.$el.parentNode,t?(s=new ResizeObserver(u),s.observe(t),a()):f!==!0&&Z(()=>{r(!0)})};return A(()=>{r()}),M(()=>{n!==null&&clearTimeout(n),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),Me}else{let f=function(){n!==null&&(clearTimeout(n),n=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",u,Q.passive),r=void 0)},y=function(){f(),t&&t.contentDocument&&(r=t.contentDocument.defaultView,r.addEventListener("resize",u,Q.passive),a())};const{isHydrated:s}=Vt();let r;return A(()=>{Z(()=>{t=m.$el,t&&y()})}),M(f),()=>{if(s.value===!0)return w("object",{class:"q--avoid-card-border",style:Ce.style,tabindex:-1,type:"text/html",data:Ce.url,"aria-hidden":"true",onLoad:y})}}}}),Dt=_({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=B(),o=We(ie,W);if(o===W)return console.error("QHeader needs to be child of QLayout"),W;const u=S(parseInt(e.heightHint,10)),a=S(!0),m=p(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||t.platform.is.ios&&o.isContainer.value===!0),s=p(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return a.value===!0?u.value:0;const d=u.value-o.scroll.value.position;return d>0?d:0}),r=p(()=>e.modelValue!==!0||m.value===!0&&a.value!==!0),f=p(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),y=p(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=p(()=>{const d=o.rows.value.top,c={};return d[0]==="l"&&o.left.space===!0&&(c[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),d[2]==="r"&&o.right.space===!0&&(c[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),c});function i(d,c){o.update("header",d,c)}function v(d,c){d.value!==c&&(d.value=c)}function H({height:d}){v(u,d),i("size",d)}function z(d){f.value===!0&&v(a,!0),n("focusin",d)}k(()=>e.modelValue,d=>{i("space",d),v(a,!0),o.animate()}),k(s,d=>{i("offset",d)}),k(()=>e.reveal,d=>{d===!1&&v(a,e.modelValue)}),k(a,d=>{o.animate(),n("reveal",d)}),k(o.scroll,d=>{e.reveal===!0&&v(a,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const C={};return o.instances.header=C,e.modelValue===!0&&i("size",u.value),i("space",e.modelValue),i("offset",s.value),M(()=>{o.instances.header===C&&(o.instances.header=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const d=_e(l.default,[]);return e.elevated===!0&&d.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(w(te,{debounce:0,onResize:H})),w("header",{class:y.value,style:x.value,onFocusin:z},d)}}}),Kt=_({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:n}}=B(),t=We(ie,W);if(t===W)return console.error("QPageContainer needs to be child of QLayout"),W;Qe(yt,!0);const o=p(()=>{const u={};return t.header.space===!0&&(u.paddingTop=`${t.header.size}px`),t.right.space===!0&&(u[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(u.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(u[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),u});return()=>w("div",{class:"q-page-container",style:o.value},N(l.default))}});const{passive:ze}=Q,Nt=["both","horizontal","vertical"];var jt=_({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Nt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Be},emits:["scroll"],setup(e,{emit:l}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,u;k(()=>e.scrollTarget,()=>{s(),m()});function a(){t!==null&&t();const y=Math.max(0,pt(o)),x=xt(o),i={top:y-n.position.top,left:x-n.position.left};if(e.axis==="vertical"&&i.top===0||e.axis==="horizontal"&&i.left===0)return;const v=Math.abs(i.top)>=Math.abs(i.left)?i.top<0?"up":"down":i.left<0?"left":"right";n.position={top:y,left:x},n.directionChanged=n.direction!==v,n.delta=i,n.directionChanged===!0&&(n.direction=v,n.inflectionPoint=n.position),l("scroll",{...n})}function m(){o=$e(u,e.scrollTarget),o.addEventListener("scroll",r,ze),r(!0)}function s(){o!==void 0&&(o.removeEventListener("scroll",r,ze),o=void 0)}function r(y){if(y===!0||e.debounce===0||e.debounce==="0")a();else if(t===null){const[x,i]=e.debounce?[setTimeout(a,e.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];t=()=>{i(x),t=null}}}const{proxy:f}=B();return k(()=>f.$q.lang.rtl,a),A(()=>{u=f.$el.parentNode,m()}),M(()=>{t!==null&&t(),s()}),Object.assign(f,{trigger:r,getPosition:()=>n}),Me}}),It=_({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=B(),o=S(null),u=S(t.screen.height),a=S(e.container===!0?0:t.screen.width),m=S({position:0,direction:"down",inflectionPoint:0}),s=S(0),r=S(Re.value===!0?0:V()),f=p(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=p(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),x=p(()=>r.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),i=p(()=>r.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function v(h){if(e.container===!0||document.qScrollPrevented!==!0){const b={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};m.value=b,e.onScroll!==void 0&&n("scroll",b)}}function H(h){const{height:b,width:T}=h;let q=!1;u.value!==b&&(q=!0,u.value=b,e.onScrollHeight!==void 0&&n("scrollHeight",b),C()),a.value!==T&&(q=!0,a.value=T),q===!0&&e.onResize!==void 0&&n("resize",h)}function z({height:h}){s.value!==h&&(s.value=h,C())}function C(){if(e.container===!0){const h=u.value>s.value?V():0;r.value!==h&&(r.value=h)}}let d=null;const c={instances:{},view:p(()=>e.view),isContainer:p(()=>e.container),rootRef:o,height:u,containerHeight:s,scrollbarWidth:r,totalWidth:p(()=>a.value+r.value),rows:p(()=>{const h=e.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:O({size:0,offset:0,space:!1}),right:O({size:300,offset:0,space:!1}),footer:O({size:0,offset:0,space:!1}),left:O({size:300,offset:0,space:!1}),scroll:m,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(h,b,T){c[h][b]=T}};if(Qe(ie,c),V()>0){let T=function(){h=null,b.classList.remove("hide-scrollbar")},q=function(){if(h===null){if(b.scrollHeight>t.screen.height)return;b.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(T,300)},E=function(L){h!==null&&L==="remove"&&(clearTimeout(h),T()),window[`${L}EventListener`]("resize",q)},h=null;const b=document.body;k(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),wt(()=>{E("remove")})}return()=>{const h=qt(l.default,[w(jt,{onScroll:v}),w(te,{onResize:H})]),b=w("div",{class:f.value,style:y.value,ref:e.container===!0?void 0:o,tabindex:-1},h);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:o},[w(te,{onResize:z}),w("div",{class:"absolute-full",style:x.value},[w("div",{class:"scroll",style:i.value},[b])])]):b}}});function Le(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const l=parseInt(e,10);return isNaN(l)?0:l}var He=St({name:"close-popup",beforeMount(e,{value:l}){const n={depth:Le(l),handler(t){n.depth!==0&&setTimeout(()=>{const o=Tt(e);o!==void 0&&kt(o,t,n.depth)})},handlerKey(t){oe(t,13)===!0&&n.handler(t)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:l,oldValue:n}){l!==n&&(e.__qclosepopup.depth=Le(l))},beforeUnmount(e){const l=e.__qclosepopup;e.removeEventListener("click",l.handler),e.removeEventListener("keyup",l.handlerKey),delete e.__qclosepopup}});const Ut={};function Xt(e,l){const n=Et("router-view");return Y(),G(It,{view:"lHh lpr lFf"},{default:P(()=>[$(Dt,null,{default:P(()=>[$(Ct,{color:"primary",flat:"",round:"",icon:"more_vert",class:"print-hide z-top absolute-top-right q-pa-md"},{default:P(()=>[$(Ot,{anchor:"top right",self:"top end",class:"z-top"},{default:P(()=>[$(Ht,null,{default:P(()=>[be((Y(),G(xe,{to:"/",clickable:""},{default:P(()=>[$(pe,null,{default:P(()=>l[0]||(l[0]=[ye("Principal")])),_:1})]),_:1})),[[He]]),be((Y(),G(xe,{to:"/settings",clickable:""},{default:P(()=>[$(pe,null,{default:P(()=>l[1]||(l[1]=[ye("Configura\xE7\xF5es")])),_:1})]),_:1})),[[He]])]),_:1})]),_:1})]),_:1})]),_:1}),$(Kt,{style:{padding:"3px 4px 3px 3px"}},{default:P(()=>[$(n)]),_:1})]),_:1})}var Jt=zt(Ut,[["render",Xt]]);export{Jt as default};