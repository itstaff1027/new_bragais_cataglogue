import{a as d,j as e}from"./app-BNSju4wP.js";import{A as x}from"./AuthenticatedLayout-CIiCk1Ex.js";import{T as r,I as o}from"./TextInput-RSlY_q1M.js";import{I as m}from"./InputLabel-Dhg0UBHQ.js";import"./ApplicationLogo-B0t-eVEP.js";const j=({categories:u})=>{const{data:s,setData:t,post:n,errors:l}=d({name:"",label:""}),i=a=>{a.preventDefault(),n("/settings_categories")};return e.jsx(x,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Create Categories/Item Group"}),children:e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 text-gray-900",children:[e.jsx("h1",{className:"text-xl font-semibold mb-6",children:"Create Categories/Item Group"}),e.jsxs("form",{onSubmit:i,children:[e.jsxs("div",{className:"mb-6",children:[e.jsx(m,{for:"name",value:"Categories/Item Group Name"}),e.jsx(r,{id:"name",name:"name",value:s.name,onChange:a=>t("name",a.target.value),className:"w-full"}),e.jsx(o,{message:l.name})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(m,{for:"label",value:"Label Code - Gender ['male', 'female', 'others']"}),e.jsx(r,{id:"label",name:"label",value:s.label,onChange:a=>t("label",a.target.value),className:"w-full"}),e.jsx(o,{message:l.label})]}),e.jsx("button",{type:"submit",className:"bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Create Categories"})]})]})})})})})};export{j as default};
