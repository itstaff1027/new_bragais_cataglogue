import{a as d,j as e}from"./app-BNSju4wP.js";import{A as h}from"./AuthenticatedLayout-CIiCk1Ex.js";import{T as n,I as m}from"./TextInput-RSlY_q1M.js";import{I as r}from"./InputLabel-Dhg0UBHQ.js";import"./ApplicationLogo-B0t-eVEP.js";const j=({heel_height:u})=>{const{data:s,setData:t,post:i,errors:l}=d({name:"inches",value:0}),o=a=>{a.preventDefault(),i("/settings_heel-heights")};return e.jsx(h,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Create Heel Heights"}),children:e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 text-gray-900",children:[e.jsx("h1",{className:"text-xl font-semibold mb-6",children:"Create Heel Height"}),e.jsxs("form",{onSubmit:o,children:[e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{for:"name",value:"Heel Height Name"}),e.jsx(n,{id:"name",name:"name",value:s.name,onChange:a=>t("name",a.target.value),className:"w-full"}),e.jsx(m,{message:l.name})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{for:"value",value:"Value Code"}),e.jsx(n,{id:"value",name:"value",type:"number",value:s.value,onChange:a=>t("value",a.target.value),className:"w-full"}),e.jsx(m,{message:l.value})]}),e.jsx("button",{type:"submit",className:"bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Create Heel Height"})]})]})})})})})};export{j as default};
