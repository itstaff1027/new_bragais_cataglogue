import{a as _,j as e}from"./app-B4dOFrf1.js";import{A as g}from"./AuthenticatedLayout-B7rc28rE.js";import{I as t,T as o}from"./TextInput-Coah4Z1j.js";import{I as r}from"./InputLabel-DFRUgycL.js";import"./ApplicationLogo-CIutDoVk.js";const w=({FilterProduct:d,products:u,filters:m})=>{const{data:a,setData:c,post:x,errors:i}=_({filter_id:d.filter_id||0,product_id:d.product_id||0,header:d.header||"",sub_header:d.sub_header||"",description_1:d.description_1||"",description_2:d.description_2||""}),p=s=>{s.preventDefault(),x("/settings_filter_products")},l={header:50,sub_header:50,description_1:200,description_2:200},n=(s,h)=>{h.length<=l[s]&&c(s,h)};return e.jsx(g,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Edit Filter Products"}),children:e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 text-gray-900",children:[e.jsx("h1",{className:"text-xl font-semibold mb-6",children:"Edit Filter Product"}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{for:"filter_id",value:"Choose Filter"}),e.jsxs("select",{id:"filter_id",name:"filter_id",value:a.filter_id,onChange:s=>c("filter_id",s.target.value),className:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",children:[e.jsx("option",{value:"",disabled:!0,children:"Select a Filter"}),e.jsx("option",{value:"0",children:"Choose"}),m.map(s=>e.jsx("option",{value:s.id,children:s.filter_name},s.id))]}),e.jsx(t,{message:i.filter_id})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{for:"product_id",value:"Choose Product To Display"}),e.jsxs("select",{id:"product_id",name:"product_id",value:a.product_id,onChange:s=>c("product_id",s.target.value),className:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",children:[e.jsx("option",{value:"",disabled:!0,children:"Select a Product"}),e.jsx("option",{value:"0",children:"Choose"}),u.map(s=>e.jsx("option",{value:s.id,children:s.product_name},s.id))]}),e.jsx(t,{message:i.product_id})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{for:"header",value:"Header"}),e.jsx(o,{id:"header",name:"header",value:a.header,onChange:s=>n("header",s.target.value),className:"w-full"}),e.jsxs("p",{className:`text-sm ${a.header.length===0?"text-gray-500":"text-red-500"}`,children:[a.header.length,"/",l.header]}),e.jsx(t,{message:i.header})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{for:"sub_header",value:"Sub Header (Optional)"}),e.jsx(o,{id:"sub_header",name:"sub_header",value:a.sub_header,onChange:s=>n("sub_header",s.target.value),className:"w-full"}),e.jsxs("p",{className:`text-sm ${a.sub_header.length===0?"text-gray-500":"text-red-500"}`,children:[a.sub_header.length,"/",l.sub_header]}),e.jsx(t,{message:i.sub_header})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{for:"description_1",value:"Description 1 "}),e.jsx(o,{id:"description_1",name:"description_1",value:a.description_1,onChange:s=>n("description_1",s.target.value),className:"w-full"}),e.jsxs("p",{className:`text-sm ${a.description_1.length===0?"text-gray-500":"text-red-500"}`,children:[a.description_1.length,"/",l.description_1]}),e.jsx(t,{message:i.description_1})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{for:"description_2",value:"Description 2 (Optional)"}),e.jsx(o,{id:"description_2",name:"description_2",value:a.description_2,onChange:s=>n("description_2",s.target.value),className:"w-full"}),e.jsxs("p",{className:`text-sm ${a.description_2.length===0?"text-gray-500":"text-red-500"}`,children:[a.description_2.length,"/",l.description_2]}),e.jsx(t,{message:i.description_2})]}),e.jsx("button",{type:"submit",className:"bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Edit Filter Product"})]})]})})})})})};export{w as default};
