import{a as H,r as w,j as e}from"./app-BNSju4wP.js";import{A as V}from"./AuthenticatedLayout-CIiCk1Ex.js";import{T as y,I as c}from"./TextInput-RSlY_q1M.js";import{I as m}from"./InputLabel-Dhg0UBHQ.js";import{C as U,S as P,H as I,a as K}from"./Categories-DASt6L8g.js";import"./ApplicationLogo-B0t-eVEP.js";import"./Dropdown-CTpNTxPH.js";import"./transition-B7wfT_WR.js";const B=({product:r,product_variants:f,colors:b,sizes:z,size_values:N,heel_heights:v,categories:S})=>{const{data:i,setData:o,post:C,errors:n}=H({product_name:r.product_name||"",status:r.status||"",cost:r.cost||0,srp:r.srp||0,colors:r.colors||[],sizes:r.sizes||[],heel_heights:r.heel_heights||[],categories:r.categories||[],product_variants:[]}),k=s=>{s.preventDefault(),console.log(x),console.log(i),C("/inventory/products/variants")},[x,_]=w.useState([]),E=()=>{const s=[];r.colors.forEach(t=>{r.heel_heights.forEach(a=>{r.sizes.forEach(h=>{h.size_values.forEach(g=>{f.some(d=>d.color_id===t.id&&d.heel_height_id===a.id&&d.size_id===h.id&&d.size_value_id===g.id)||s.push({product_id:r.id,color_id:t.id,heel_height_id:a.id,size_id:h.id,size_value_id:g.id,category_id:r.categories[0].id,sku:""})})})})}),_([...x,...s]),o("product_variants",[...x,...s])};return w.useEffect(()=>{console.log(r),console.log(N)},[]),e.jsx(V,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Products Management"}),children:e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-md rounded-lg",children:e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"container mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"View Product"}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(m,{for:"name",value:"Product Name"}),e.jsx(y,{type:"text",id:"name",name:"name",value:i.product_name,onChange:s=>o("product_name",s.target.value),className:"w-full border px-4 py-2",disabled:!0}),e.jsx(c,{message:n.product_name})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(m,{for:"status",value:"Status"}),e.jsx(y,{type:"text",id:"status",name:"status",value:i.status,onChange:s=>o("status",s.target.value),className:"w-full border px-4 py-2",disabled:!0}),e.jsx(c,{message:n.status})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(m,{for:"cost",value:"Cost"}),e.jsx(y,{type:"number",id:"cost",name:"cost",value:i.cost,onChange:s=>o("cost",s.target.value),className:"w-full border px-4 py-2",disabled:!0}),e.jsx(c,{message:n.status})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(m,{for:"srp",value:"SRP"}),e.jsx(y,{type:"number",id:"srp",name:"srp",value:i.srp,onChange:s=>o("srp",s.target.value),className:"w-full border px-4 py-2",disabled:!0}),e.jsx(c,{message:n.srp})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(m,{for:"colors",value:"Colors"}),e.jsx(U.Selection,{handleSelectedColor:(s,t=!1)=>{t?o("colors",i.colors.filter(a=>a.id!==s.id)):i.colors.some(a=>a.id===s.id)||o("colors",[...i.colors,s])},colors:i.colors,availableColors:b}),e.jsx(c,{message:n.colors})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(m,{for:"sizes",value:"Sizes"}),e.jsx(P.Selection,{handleSelectedSizes:(s,t=!1)=>{t?o("sizes",i.sizes.filter(a=>a.id!==s.id)):i.sizes.some(a=>a.id===s.id)||o("sizes",[...i.sizes,s])},sizes:i.sizes,availableSizes:z}),e.jsx(c,{message:n.sizes})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(m,{for:"heel_height",value:"Heel Heights"}),e.jsx(I.Selection,{handleSelectedHeelHeights:(s,t=!1)=>{t?o("heel_heights",i.heel_heights.filter(a=>a.id!==s.id)):i.heel_heights.some(a=>a.id===s.id)||o("heel_heights",[...i.heel_heights,s])},heelHeights:i.heel_heights,availableHeelHeights:v}),e.jsx(c,{message:n.HeelHeights})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(m,{for:"categories",value:"Category"}),e.jsx(K.Selection,{handleSelectedCategories:(s,t=!1)=>{t?o("categories",i.categories.filter(a=>a.id!==s.id)):i.categories.some(a=>a.id===s.id)||o("categories",[...i.categories,s])},categories:i.categories,availableCategories:S}),e.jsx(c,{message:n.categories})]}),e.jsx("button",{type:"submit",className:"bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600",onClick:s=>E(),children:"Generate Variants"}),e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4 text-gray-800",children:"Product Variants"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full text-sm text-left text-gray-500 bg-gray-50 border border-gray-200 rounded-lg shadow",children:[e.jsx("thead",{className:"bg-gray-100 text-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 font-medium",children:"Color"}),e.jsx("th",{className:"px-4 py-3 font-medium",children:"Heel Height"}),e.jsx("th",{className:"px-4 py-3 font-medium",children:"Size Value"}),e.jsx("th",{className:"px-4 py-3 font-medium",children:"SKU"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:x.map((s,t)=>{var u,d,p;const a=((u=b.find(l=>l.id===s.color_id))==null?void 0:u.color_name)||"Unknown",h=((d=v.find(l=>l.id===s.heel_height_id))==null?void 0:d.value)||"Unknown",g=((p=N.find(l=>l.id===s.size_value_id))==null?void 0:p.size_values)||"Unknown";return e.jsxs("tr",{className:"hover:bg-gray-50 transition",children:[e.jsx("td",{className:"px-4 py-2 text-gray-900",children:a}),e.jsx("td",{className:"px-4 py-2 text-gray-900",children:h}),e.jsx("td",{className:"px-4 py-2 text-gray-900",children:g}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("input",{type:"text",value:s.sku,onChange:l=>{const j=[...x];j[t].sku=l.target.value,_(j)},placeholder:"Enter SKU",className:"w-full border border-gray-300 rounded-md px-3 py-1 focus:ring focus:ring-green-300 focus:outline-none transition"})})]},t)})})]})}),x.length>0&&e.jsx("div",{className:"flex justify-end mt-6",children:e.jsx("button",{type:"button",onClick:s=>k(s),className:"bg-green-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition",children:"Save Variants"})})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4 text-gray-800",children:"Existing Product Variants"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full text-sm text-left text-gray-500 bg-gray-50 border border-gray-200 rounded-lg shadow",children:[e.jsx("thead",{className:"bg-gray-100 text-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 font-medium",children:"Color"}),e.jsx("th",{className:"px-4 py-3 font-medium",children:"Heel Height"}),e.jsx("th",{className:"px-4 py-3 font-medium",children:"Size Value"}),e.jsx("th",{className:"px-4 py-3 font-medium",children:"SKU"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:f==null?void 0:f.map((s,t)=>{var u,d,p;const a=((u=b.find(l=>l.id===s.color_id))==null?void 0:u.color_name)||"Unknown",h=((d=v.find(l=>l.id===s.heel_height_id))==null?void 0:d.value)||"Unknown",g=((p=N.find(l=>l.id===s.size_value_id))==null?void 0:p.size_values)||"Unknown";return e.jsxs("tr",{className:"hover:bg-gray-50 transition",children:[e.jsx("td",{className:"px-4 py-2 text-gray-900",children:a}),e.jsx("td",{className:"px-4 py-2 text-gray-900",children:h}),e.jsx("td",{className:"px-4 py-2 text-gray-900",children:g}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("input",{type:"text",value:s.sku,onChange:l=>{const j=[...x];j[t].sku=l.target.value,_(j)},placeholder:"Enter SKU",className:"w-full border border-gray-300 rounded-md px-3 py-1 focus:ring focus:ring-green-300 focus:outline-none transition"})})]},t)})})]})})]})]})]})})})})})})};export{B as default};
