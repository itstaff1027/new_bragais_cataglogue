import{j as e,U as d,h as l}from"./app-B4dOFrf1.js";import{A as i}from"./AuthenticatedLayout-B7rc28rE.js";import"./ApplicationLogo-CIutDoVk.js";const x=({Filters:s})=>e.jsx(i,{header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Product Filters"}),children:e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 bg-white border-b border-gray-200",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("h1",{className:"text-lg font-semibold",children:"Filter List"}),e.jsx(d,{href:"/settings_filters/create",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Create New Filter"})]}),e.jsxs("table",{className:"min-w-full table-auto border-collapse border border-gray-200",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"#"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Name"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Category"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"Actions"})]})}),e.jsx("tbody",{children:s==null?void 0:s.map((r,t)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:t+1}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:r.filter_name}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:r.category}),e.jsxs("td",{className:"border border-gray-300 px-4 py-2",children:[e.jsx(d,{href:`/settings_filters/${r.id}/edit`,className:"text-blue-500 hover:underline mr-2",children:"Edit"}),e.jsx(d,{href:`/settings_filters/${r.id}`,method:"delete",className:"text-red-500 hover:underline",as:"button",onClick:a=>{a.preventDefault(),confirm("Are you sure you want to remove this Filter?")&&l.delete(`/settings_filters/${r.id}`)},children:"Delete"})]})]},r.id))})]})]})})})})});export{x as default};
