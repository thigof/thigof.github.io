import{c as W,u as H,af as J,f as X,ag as ee,a as A,ah as te,i as Y,h as V,ai as w,aj as le,ak as ae,s as N,r as M,Y as oe,al as ne,am as se,o as ie,d as ce,an as ue,n as re,O as de,ao as ve,a7 as p,ap as C,aq as h,ar as T,as as E,at as x,aa as m,au as $,av as u,ab as I,ad as P,w as F,aw as me,ax as fe,a6 as be,a9 as D,ac as Z,ay as j}from"./index.6a9dda95.js";import{a as l,s as K,g as he,b as _e,c as Se,l as ge,d as L,e as pe,v as Ce}from"./app.2c27b288.js";const ye={xs:8,sm:10,md:14,lg:20,xl:24};var G=W({name:"QChip",props:{...H,...J,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:d,emit:i}){const{proxy:{$q:f}}=Y(),n=X(e,f),S=ee(e,ye),r=A(()=>e.selected===!0||e.icon!==void 0),c=A(()=>e.selected===!0?e.iconSelected||f.iconSet.chip.selected:e.icon),t=A(()=>e.iconRemove||f.iconSet.chip.remove),_=A(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),g=A(()=>{const s=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(s?` text-${s} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(_.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(n.value===!0?" q-chip--dark q-dark":"")}),a=A(()=>{const s=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},q={...s,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||f.lang.label.remove};return{chip:s,remove:q}});function v(s){s.keyCode===13&&o(s)}function o(s){e.disable||(i("update:selected",!e.selected),i("click",s))}function y(s){(s.keyCode===void 0||s.keyCode===13)&&(N(s),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function R(){const s=[];_.value===!0&&s.push(V("div",{class:"q-focus-helper"})),r.value===!0&&s.push(V(w,{class:"q-chip__icon q-chip__icon--left",name:c.value}));const q=e.label!==void 0?[V("div",{class:"ellipsis"},[e.label])]:void 0;return s.push(V("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},le(d.default,q))),e.iconRight&&s.push(V(w,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&s.push(V(w,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:t.value,...a.value.remove,onClick:y,onKeyup:y})),s}return()=>{if(e.modelValue===!1)return;const s={class:g.value,style:S.value};return _.value===!0&&Object.assign(s,a.value.chip,{onClick:o,onKeyup:v}),te("div",s,R(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ae,e.ripple]])}}}),ke=W({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:d,emit:i}){const f=Y(),n=M(null);let S=0;const r=[];function c(o){const y=typeof o=="boolean"?o:e.noErrorFocus!==!0,R=++S,s=(b,k)=>{i(`validation${b===!0?"Success":"Error"}`,k)},q=b=>{const k=b.validate();return typeof k.then=="function"?k.then(O=>({valid:O,comp:b}),O=>({valid:!1,comp:b,err:O})):Promise.resolve({valid:k,comp:b})};return(e.greedy===!0?Promise.all(r.map(q)).then(b=>b.filter(k=>k.valid!==!0)):r.reduce((b,k)=>b.then(()=>q(k).then(O=>{if(O.valid===!1)return Promise.reject(O)})),Promise.resolve()).catch(b=>[b])).then(b=>{if(b===void 0||b.length===0)return R===S&&s(!0),!0;if(R===S){const{comp:k,err:O}=b[0];if(O!==void 0&&console.error(O),s(!1,k),y===!0){const z=b.find(({comp:Q})=>typeof Q.focus=="function"&&ue(Q.$)===!1);z!==void 0&&z.comp.focus()}}return!1})}function t(){S++,r.forEach(o=>{typeof o.resetValidation=="function"&&o.resetValidation()})}function _(o){o!==void 0&&N(o);const y=S+1;c().then(R=>{y===S&&R===!0&&(e.onSubmit!==void 0?i("submit",o):o!==void 0&&o.target!==void 0&&typeof o.target.submit=="function"&&o.target.submit())})}function g(o){o!==void 0&&N(o),i("reset"),re(()=>{t(),e.autofocus===!0&&e.noResetFocus!==!0&&a()})}function a(){de(()=>{if(n.value===null)return;const o=n.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(n.value.querySelectorAll("[tabindex]"),y=>y.tabIndex!==-1);o!=null&&o.focus({preventScroll:!0})})}oe(ve,{bindComponent(o){r.push(o)},unbindComponent(o){const y=r.indexOf(o);y!==-1&&r.splice(y,1)}});let v=!1;return ne(()=>{v=!0}),se(()=>{v===!0&&e.autofocus===!0&&a()}),ie(()=>{e.autofocus===!0&&a()}),Object.assign(f.proxy,{validate:c,resetValidation:t,submit:_,reset:g,focus:a,getValidationComponents:()=>r}),()=>V("form",{class:"q-form",ref:n,onSubmit:_,onReset:g},ce(d.default))}});var U=(e,d)=>{const i=e.__vccOpts||e;for(const[f,n]of d)i[f]=n;return i};const Oe={key:0},Ae=["align"],Ie=["onClick"],Ve={key:1,class:"card-grid"},xe=["onClick"],Re={class:"actions"},qe={__name:"ShowTables",props:{headers:{type:Array,required:!0},tableData:{type:Array,required:!0},reverse:{type:Boolean,default:!1}},emits:["remove","clicked"],setup(e,{emit:d}){const i=e,f=d,n=A(()=>window.innerWidth<600),S=()=>i.reverse?[...i.tableData].reverse():i.tableData,r=t=>{const _=i.reverse||!n.value?i.tableData.length-1-t:t;f("clicked",_)},c=t=>{f("remove",t)};return(t,_)=>(p(),C("div",null,[n.value?(p(),C("div",Ve,[(p(!0),C(T,null,E(S(),(g,a)=>(p(),C("div",{key:a,class:"card",onClick:v=>r(a)},[(p(!0),C(T,null,E(e.headers,({field:v,label:o})=>(p(),C("div",{key:v},[h("strong",null,x(o)+":",1),P(" "+x(g[v]),1)]))),128)),h("div",Re,[m(u(I),{icon:"delete",color:"negative",onClick:$(v=>c(a),["stop"]),size:"sm"},null,8,["onClick"])])],8,xe))),128))])):(p(),C("table",Oe,[h("thead",null,[h("tr",null,[(p(!0),C(T,null,E(e.headers,g=>(p(),C("th",{key:g.field,align:g.align},x(g.label),9,Ae))),128)),_[0]||(_[0]=h("th",null,"A\xE7\xF5es",-1))])]),h("tbody",null,[(p(!0),C(T,null,E(S(),(g,a)=>(p(),C("tr",{key:a,onClick:v=>r(a)},[(p(!0),C(T,null,E(e.headers,v=>(p(),C("td",{key:v.field},x(g[v.field]),1))),128)),h("td",null,[m(u(I),{icon:"delete",color:"negative",onClick:$(v=>c(a),["stop"]),size:"sm"},null,8,["onClick"])])],8,Ie))),128))])]))]))}};var Te=U(qe,[["__scopeId","data-v-ccbf58d4"]]);const Ee={class:"input-container"},De={__name:"InputFixed",props:{modelValue:{type:String,default:""},tipo:{type:String,default:"text"},label1:{type:String,default:""},label2:{type:String,default:"Fixar"},textSelect:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:d}){const i=e,f=d,n=M({modelValue:String(i.modelValue),checked:!1}),S=r=>{i.textSelect&&r.target.select()};return F(()=>i.modelValue,r=>{n.value.checked?f("update:modelValue",n.value.modelValue):n.value.modelValue=r},{immediate:!0}),F(()=>n.value.modelValue,r=>{n.value.checked||f("update:modelValue",r)},{immediate:!0}),(r,c)=>(p(),C("div",Ee,[m(me,{dense:"",outlined:"",modelValue:n.value.modelValue,"onUpdate:modelValue":c[0]||(c[0]=t=>n.value.modelValue=t),label:e.label1,type:e.tipo,disable:n.value.checked,onFocus:S},null,8,["modelValue","label","type","disable"]),h("i",{class:fe(["lock",n.value.checked?"mdi mdi-lock":"mdi mdi-lock-open-outline"]),onClick:c[1]||(c[1]=t=>n.value.checked=!n.value.checked)},null,2)]))}};var B=U(De,[["__scopeId","data-v-3a5d1d72"]]);const Be={class:"q-pa-md row items-start q-gutter-md"},Le={class:"row q-mt-sm q-gutter-md"},Pe={class:""},$e={class:""},we={class:"row center q-mt-lg"},Ne={class:"col"},Fe={class:"col"},Me={class:"col"},Ue={class:"col"},ze={__name:"IndexPage",setup(e){const d=M({npat:"",search1:"",search2:"",searchSelecteds:"",searchColumn:""}),i=()=>{L(),d.value.npat=""},f=()=>{pe(),d.value.npat="",L(),K()},n=c=>{const t=l.selects[c];t&&(d.value.npat=t.NRPATRIMONIO1,setTimeout(()=>{l.selected.id=t.id,l.selected.NRPATRIMONIO1=t.NRPATRIMONIO1,l.selected.DESCRICAO=t.DESCRICAO||"",l.selected.LOCALIZA\u00C7\u00C3O=t.LOCALIZA\u00C7\u00C3O||"",l.selected.ESTADO=t.ESTADO||"",l.selected.OBSERVA\u00C7\u00C3O=t.OBSERVA\u00C7\u00C3O||""},1e3))},S=c=>{c>-1&&l.selects.splice(c,1),K()},r=A(()=>["SEM PLACA"].includes(l.selected.SITUA\u00C7\u00C3O)?"":l.selected.SITUA\u00C7\u00C3O);F(()=>d.value.npat,()=>{var c;try{L(),l.selected.NRPATRIMONIO1=d.value.npat;const t=(c=l.values)==null?void 0:c.find(_=>_.NRPATRIMONIO1===String(d.value.npat));t&&(l.selected.id=t.id||Ce(),l.selected.DESCRICAO=t.DESCRICAO||"",l.selected.LOCALIZA\u00C7\u00C3O=t.LOCALIZA\u00C7\u00C3O||"",l.selected.ESTADO=t.ESTADO||"",l.selected.OBSERVA\u00C7\u00C3O=t.OBSERVA\u00C7\u00C3O||""),d.value.npat?t?l.selected.SITUA\u00C7\u00C3O="REGULAR":l.selected.SITUA\u00C7\u00C3O="SEM REGISTRO":l.selected.SITUA\u00C7\u00C3O="SEM PLACA"}catch(t){console.log("npat: ",t),L()}},{immediate:!0});try{d.value.npat=null}catch(c){console.log("Erro ao carregar dados localStorage: ",c)}return(c,t)=>{const _=be("router-link");return p(),C(T,null,[m(ke,{onSubmit:$(f,["prevent"])},{default:D(()=>{var g;return[h("div",Be,[m(_,{to:"/settings"},{default:D(()=>[m(G,null,{default:D(()=>{var a,v;return[P(x(((v=(a=u(l))==null?void 0:a.values)==null?void 0:v.length)||0)+" registros ",1)]}),_:1})]),_:1}),m(_,{to:"/"},{default:D(()=>[m(G,null,{default:D(()=>{var a,v;return[P(x((v=(a=u(l))==null?void 0:a.selects)==null?void 0:v.length)+" verificados ",1)]}),_:1})]),_:1})]),m(B,{tipo:"number",textSelect:!0,modelValue:d.value.npat,"onUpdate:modelValue":t[0]||(t[0]=a=>d.value.npat=a),label1:"NPAT "+r.value},null,8,["modelValue","label1"]),m(B,{modelValue:u(l).selected.DESCRICAO,"onUpdate:modelValue":t[1]||(t[1]=a=>u(l).selected.DESCRICAO=a),label1:"Descri\xE7\xE3o"},null,8,["modelValue"]),m(B,{modelValue:u(l).selected.LOCALIZA\u00C7\u00C3O,"onUpdate:modelValue":t[2]||(t[2]=a=>u(l).selected.LOCALIZA\u00C7\u00C3O=a),label1:"Local"},null,8,["modelValue"]),m(B,{modelValue:u(l).selected.ESTADO,"onUpdate:modelValue":t[3]||(t[3]=a=>u(l).selected.ESTADO=a),label1:"Estado"},null,8,["modelValue"]),m(B,{modelValue:u(l).selected.OBSERVA\u00C7\u00C3O,"onUpdate:modelValue":t[4]||(t[4]=a=>u(l).selected.OBSERVA\u00C7\u00C3O=a),label1:"Observa\xE7\xE3o"},null,8,["modelValue"]),h("div",Le,[h("div",Pe,[m(I,{color:"green-9",type:"button",icon:"send",label:"Salvar",onClick:f})]),h("div",$e,[Z(m(I,{color:"yellow-9",type:"button",icon:"close",label:"Cancelar",onClick:i},null,512),[[j,u(l).selected.NRPATRIMONIO1||u(l).selected.LOCALIZA\u00C7\u00C3O]])])]),h("div",we,[h("div",Ne,[m(I,{flat:"",class:"col-2 col-sm-6",icon:"description",label:"CSV",type:"button",onClick:t[5]||(t[5]=a=>u(he)(u(l).selects))})]),h("div",Fe,[m(I,{flat:"",class:"col-2 col-sm-2",icon:"code",label:"Relat\xF3rio",onClick:$(u(_e),["prevent"])},null,8,["onClick"])]),h("div",Me,[m(I,{flat:"",class:"col-3 col-sm-4",icon:"code",label:"Termo",type:"button",onClick:u(Se)},null,8,["onClick"])]),Z(h("div",Ue,[m(I,{flat:"",class:"col-3 col-sm-4",icon:"clear",label:"Limpar",type:"button",onClick:u(ge)},null,8,["onClick"])],512),[[j,(g=u(l).selects)==null?void 0:g.length]])])]}),_:1}),m(Te,{tableData:u(l).selects,headers:u(l).colunas,onRemove:S,onClicked:n,reverse:!0},null,8,["tableData","headers"]),P(" Itens selecionados: "+x(u(l).selects.length),1)],64)}}};var Ke=U(ze,[["__scopeId","data-v-6e7ba5aa"]]);export{Ke as default};
