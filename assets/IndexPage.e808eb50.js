import{_ as w,a as t,S as $,s as N,Q as F,g as j,b as G,c as K,l as z,d as y,e as H,v as J}from"./app.2bfb5431.js";import{c as W,v as T,p as X,af as Y,ag as ee,o as te,h as le,e as ae,g as oe,ah as se,S as B,y as ne,ac as de,ai as ce,w as E,I as Q,aj as Z,L as n,ak as ie,al as v,am as ue,d as re,H as me,K as g,an as M,ao as o,N as R,ap as x,aq as fe,Q as _,M as U,ar as q}from"./index.6415a45e.js";var ve=W({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(r,{slots:u,emit:p}){const C=oe(),s=T(null);let f=0;const i=[];function d(l){const A=typeof l=="boolean"?l:r.noErrorFocus!==!0,h=++f,k=(c,m)=>{p(`validation${c===!0?"Success":"Error"}`,m)},L=c=>{const m=c.validate();return typeof m.then=="function"?m.then(O=>({valid:O,comp:c}),O=>({valid:!1,comp:c,err:O})):Promise.resolve({valid:m,comp:c})};return(r.greedy===!0?Promise.all(i.map(L)).then(c=>c.filter(m=>m.valid!==!0)):i.reduce((c,m)=>c.then(()=>L(m).then(O=>{if(O.valid===!1)return Promise.reject(O)})),Promise.resolve()).catch(c=>[c])).then(c=>{if(c===void 0||c.length===0)return h===f&&k(!0),!0;if(h===f){const{comp:m,err:O}=c[0];if(O!==void 0&&console.error(O),k(!1,m),A===!0){const D=c.find(({comp:P})=>typeof P.focus=="function"&&se(P.$)===!1);D!==void 0&&D.comp.focus()}}return!1})}function e(){f++,i.forEach(l=>{typeof l.resetValidation=="function"&&l.resetValidation()})}function S(l){l!==void 0&&B(l);const A=f+1;d().then(h=>{A===f&&h===!0&&(r.onSubmit!==void 0?p("submit",l):l!==void 0&&l.target!==void 0&&typeof l.target.submit=="function"&&l.target.submit())})}function I(l){l!==void 0&&B(l),p("reset"),ne(()=>{e(),r.autofocus===!0&&r.noResetFocus!==!0&&a()})}function a(){de(()=>{if(s.value===null)return;const l=s.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(s.value.querySelectorAll("[tabindex]"),A=>A.tabIndex!==-1);l!=null&&l.focus({preventScroll:!0})})}X(ce,{bindComponent(l){i.push(l)},unbindComponent(l){const A=i.indexOf(l);A!==-1&&i.splice(A,1)}});let b=!1;return Y(()=>{b=!0}),ee(()=>{b===!0&&r.autofocus===!0&&a()}),te(()=>{r.autofocus===!0&&a()}),Object.assign(C.proxy,{validate:d,resetValidation:e,submit:S,reset:I,focus:a,getValidationComponents:()=>i}),()=>le("form",{class:"q-form",ref:s,onSubmit:S,onReset:I},ae(u.default))}});const pe={class:"input-container"},Se={__name:"InputFixed",props:{modelValue:{type:String,default:""},tipo:{type:String,default:"text"},label1:{type:String,default:""},label2:{type:String,default:"Fixar"},textSelect:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(r,{emit:u}){const p=r,C=u,s=T({modelValue:String(p.modelValue),checked:!1}),f=i=>{p.textSelect&&i.target.select()};return E(()=>p.modelValue,i=>{s.value.checked?C("update:modelValue",s.value.modelValue):s.value.modelValue=i},{immediate:!0}),E(()=>s.value.modelValue,i=>{s.value.checked||C("update:modelValue",i)},{immediate:!0}),(i,d)=>(Q(),Z("div",pe,[n(ie,{dense:"",outlined:"",modelValue:s.value.modelValue,"onUpdate:modelValue":d[0]||(d[0]=e=>s.value.modelValue=e),label:r.label1,type:r.tipo,disable:s.value.checked,onFocus:f},null,8,["modelValue","label","type","disable"]),v("i",{class:ue(["lock",s.value.checked?"mdi mdi-lock":"mdi mdi-lock-open-outline"]),onClick:d[1]||(d[1]=e=>s.value.checked=!s.value.checked)},null,2)]))}};var V=w(Se,[["__scopeId","data-v-3a5d1d72"]]);const Oe={class:"q-pa-md row items-start q-gutter-md"},be={class:"row q-mt-sm q-gutter-md"},Ae={class:""},Ce={class:""},_e={class:"row center q-mt-lg"},Ie={class:"col"},ge={class:"col"},Ve={class:"col"},he={class:"col"},ye={__name:"IndexPage",setup(r){const u=T({npat:"",search1:"",search2:"",searchSelecteds:"",searchColumn:""}),p=()=>{y(),u.value.npat=""},C=()=>{H(),u.value.npat="",y(),N()},s=d=>{const e=t.selects.find(S=>S.id===d.id);e&&(u.value.npat=e.NRPATRIMONIO1,setTimeout(()=>{t.selected.id=e.id,t.selected.NRPATRIMONIO1=e.NRPATRIMONIO1,t.selected.DESCRICAO=e.DESCRICAO||"",t.selected.LOCALIZA\u00C7\u00C3O=e.LOCALIZA\u00C7\u00C3O||"",t.selected.ESTADO=e.ESTADO||"",t.selected.OBSERVA\u00C7\u00C3O=e.OBSERVA\u00C7\u00C3O||""},1e3))},f=d=>{t.selects=t.selects.filter(e=>e.id!==d.id),N()},i=re(()=>["SEM PLACA"].includes(t.selected.SITUA\u00C7\u00C3O)?"":t.selected.SITUA\u00C7\u00C3O);E(()=>u.value.npat,()=>{var d;try{y(),t.selected.NRPATRIMONIO1=u.value.npat;const e=(d=t.values)==null?void 0:d.find(S=>S.NRPATRIMONIO1===String(u.value.npat));e&&(t.selected.id=e.id||J(),t.selected.DESCRICAO=e.DESCRICAO||"",t.selected.LOCALIZA\u00C7\u00C3O=e.LOCALIZA\u00C7\u00C3O||"",t.selected.ESTADO=e.ESTADO||"",t.selected.OBSERVA\u00C7\u00C3O=e.OBSERVA\u00C7\u00C3O||""),u.value.npat?e?t.selected.SITUA\u00C7\u00C3O="REGULAR":t.selected.SITUA\u00C7\u00C3O="SEM REGISTRO":t.selected.SITUA\u00C7\u00C3O="SEM PLACA"}catch(e){console.log("npat: ",e),y()}},{immediate:!0});try{u.value.npat=null}catch(d){console.log("Erro ao carregar dados localStorage: ",d)}return(d,e)=>{const S=me("router-link");return Q(),Z(fe,null,[n(ve,{onSubmit:M(C,["prevent"])},{default:g(()=>{var I;return[v("div",Oe,[n(S,{to:"/settings"},{default:g(()=>[n(F,null,{default:g(()=>{var a,b;return[R(x(((b=(a=o(t))==null?void 0:a.values)==null?void 0:b.length)||0)+" registros ",1)]}),_:1})]),_:1}),n(S,{to:"/"},{default:g(()=>[n(F,null,{default:g(()=>{var a,b;return[R(x((b=(a=o(t))==null?void 0:a.selects)==null?void 0:b.length)+" verificados ",1)]}),_:1})]),_:1})]),n(V,{tipo:"number",textSelect:!0,modelValue:u.value.npat,"onUpdate:modelValue":e[0]||(e[0]=a=>u.value.npat=a),label1:"NPAT "+i.value},null,8,["modelValue","label1"]),n(V,{modelValue:o(t).selected.DESCRICAO,"onUpdate:modelValue":e[1]||(e[1]=a=>o(t).selected.DESCRICAO=a),label1:"Descri\xE7\xE3o"},null,8,["modelValue"]),n(V,{modelValue:o(t).selected.LOCALIZA\u00C7\u00C3O,"onUpdate:modelValue":e[2]||(e[2]=a=>o(t).selected.LOCALIZA\u00C7\u00C3O=a),label1:"Local"},null,8,["modelValue"]),n(V,{modelValue:o(t).selected.ESTADO,"onUpdate:modelValue":e[3]||(e[3]=a=>o(t).selected.ESTADO=a),label1:"Estado"},null,8,["modelValue"]),n(V,{modelValue:o(t).selected.OBSERVA\u00C7\u00C3O,"onUpdate:modelValue":e[4]||(e[4]=a=>o(t).selected.OBSERVA\u00C7\u00C3O=a),label1:"Observa\xE7\xE3o"},null,8,["modelValue"]),v("div",be,[v("div",Ae,[n(_,{color:"green-9",type:"button",icon:"send",label:"Salvar",onClick:C})]),v("div",Ce,[U(n(_,{color:"yellow-9",type:"button",icon:"close",label:"Cancelar",onClick:p},null,512),[[q,o(t).selected.NRPATRIMONIO1||o(t).selected.LOCALIZA\u00C7\u00C3O]])])]),v("div",_e,[v("div",Ie,[n(_,{flat:"",class:"col-2 col-sm-6",icon:"description",label:"CSV",type:"button",onClick:e[5]||(e[5]=a=>o(j)(o(t).selects))})]),v("div",ge,[n(_,{flat:"",class:"col-2 col-sm-2",icon:"code",label:"Relat\xF3rio",onClick:M(o(G),["prevent"])},null,8,["onClick"])]),v("div",Ve,[n(_,{flat:"",class:"col-3 col-sm-4",icon:"code",label:"Termo",type:"button",onClick:o(K)},null,8,["onClick"])]),U(v("div",he,[n(_,{flat:"",class:"col-3 col-sm-4",icon:"clear",label:"Limpar",type:"button",onClick:o(z)},null,8,["onClick"])],512),[[q,(I=o(t).selects)==null?void 0:I.length]])])]}),_:1}),n($,{tableData:o(t).selects,headers:o(t).colunas,onRemove:f,onClicked:s,reverse:!0},null,8,["tableData","headers"]),R(" Itens selecionados: "+x(o(t).selects.length),1)],64)}}};var Te=w(ye,[["__scopeId","data-v-1e1a5277"]]);export{Te as default};
