import{j as e,M as i}from"./app-DIWd9oaY.js";import"./Dropdown-CNWQ7tWt.js";import{R as o}from"./ResponsiveNavLink-d9Gj8cLN.js";import{A as d}from"./AuthenticatedLayout-k0vPXHFY.js";import"./transition-Dj-qCnRs.js";import"./ApplicationLogo-Z6fSXooa.js";function l({header:r,children:s}){const n=[{id:"0",name:"Inventory",route:"inventory"},{id:"1",name:"Products",route:"products.index"}];return e.jsxs(d,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Inventory"}),children:[e.jsx(i,{title:"Inventory"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 text-gray-900",children:[e.jsx("div",{className:"flex flex-wrap gap-3 justify-center sm:justify-start p-4",children:n.map((t,a)=>e.jsx(o,{href:route(`${t.route}`),active:route().current(`${t.route}`),className:"px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition",children:t.name},a))}),e.jsx("main",{children:s})]})})})})]})}const y=({sizes:r})=>e.jsx(l,{header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Inventory"}),children:"Inventory"});export{y as default};
