import{a as l,S as o,h as c}from"./app.26478271.js";import{az as d,a as r,a7 as u,ap as i,ar as a,aa as p,au as m,aw as h}from"./index.8087b319.js";const b={class:"q-mt-lg",style:{"padding-top":"25px"}},k={__name:"SettingsPage",setup(f){const s=d(),t=r(()=>Object.keys(l.values[0]).filter(e=>!["UPDATED","OBSERVA\xC7\xC3O","SITUA\xC7\xC3O","id"].includes(e)).map(e=>({field:e,label:e}))),n=e=>{c(e),s.push("/")};return(e,v)=>(u(),i(h,null,[a("div",b,[a("fieldset",null,[a("input",{type:"file",onChange:n,label:"Selecionar banco de dados csv",accept:".xls, .csv"},null,32)])]),p(o,{tableData:m(l).values,headers:t.value,onRemove:e.handleRemoveTable,onClicked:e.handleClickedTable},null,8,["tableData","headers","onRemove","onClicked"])],64))}};export{k as default};