import{V as t,j as e,U as d,h as i}from"./app-BNSju4wP.js";import{A as o}from"./AuthenticatedLayout-CIiCk1Ex.js";import"./ApplicationLogo-B0t-eVEP.js";const m=()=>{const{users:a}=t().props;return e.jsx(o,{header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Users"}),children:e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 bg-white border-b border-gray-200",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("h1",{className:"text-lg font-semibold",children:"User List"}),e.jsx(d,{href:"/admin-users/create",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Create New User"})]}),e.jsxs("table",{className:"min-w-full table-auto border-collapse border border-gray-200",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"#"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Name"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Email"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Roles"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Actions"})]})}),e.jsx("tbody",{children:a.map((r,l)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:l+1}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:r.name}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:r.email}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:r.roles.map(s=>e.jsx("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2",children:s.name},s.id))}),e.jsxs("td",{className:"border border-gray-300 px-4 py-2",children:[e.jsx(d,{href:`/admin-users/${r.id}/edit`,className:"text-blue-500 hover:underline mr-2",children:"Edit"}),e.jsx(d,{href:`/admin-users/${r.id}`,method:"delete",className:"text-red-500 hover:underline",as:"button",onClick:s=>{s.preventDefault(),confirm("Are you sure you want to remove this user?")&&i.delete(`/admin-users/${r.id}`)},children:"Delete"})]})]},r.id))})]})]})})})})})};export{m as default};
