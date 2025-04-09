import{u as s,j as e,B as a}from"./index-DtJyNnPh.js";import{C as t,d as r}from"./card-LuGwFhsV.js";import{C as n}from"./clock-DDJj67oM.js";import{D as i}from"./dollar-sign-Z_zyQuhT.js";import{U as l}from"./users-Cfw1wwGa.js";import{A as c}from"./arrow-right-097eVKMc.js";const m=()=>{const m=s(),o=()=>{m("/investor/dashboard")};return e.jsx("div",{className:"py-20 bg-gradient-to-b from-gray-50 to-white",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",children:"Investment Plans"}),e.jsx("p",{className:"text-gray-600 text-center mb-12 max-w-2xl mx-auto",children:"Choose the perfect investment plan that suits your goals and start earning returns in as little as 24 hours."}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[{name:"Starter Plan",returns:"10%",duration:"24 Hours",min:200,max:2999,commission:"2.5%",features:["Instant Withdrawals","24/7 Support","Real-time Tracking"]},{name:"Pro Plan",returns:"35%",duration:"48 Hours",min:3e3,max:4999,commission:"5%",features:["Priority Support","Advanced Analytics","Referral Bonuses"]},{name:"Advanced Plan",returns:"50%",duration:"72 Hours",min:5e3,max:"Unlimited",commission:"10%",features:["VIP Support","Custom Strategy","Maximum Returns"]}].map(((s,m)=>e.jsxs(t,{className:"relative overflow-hidden transition-all duration-300 hover:scale-105 "+(1===m?"border-accent shadow-lg":"hover:border-accent/50"),children:[1===m&&e.jsx("div",{className:"absolute top-4 right-4",children:e.jsx("span",{className:"bg-accent text-white px-3 py-1 rounded-full text-sm animate-pulse",children:"Popular"})}),e.jsxs(r,{className:"p-6",children:[e.jsx("h3",{className:"text-2xl font-bold mb-4 text-primary-dark",children:s.name}),e.jsxs("div",{className:"mb-6",children:[e.jsx("span",{className:"text-4xl font-bold text-accent",children:s.returns}),e.jsx("span",{className:"text-gray-600",children:" returns in"}),e.jsxs("div",{className:"flex items-center gap-2 mt-1 text-gray-500",children:[e.jsx(n,{className:"w-4 h-4"}),e.jsx("span",{children:s.duration})]})]}),e.jsxs("div",{className:"space-y-3 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-600",children:[e.jsx(i,{className:"w-4 h-4"}),e.jsxs("span",{children:["Min: $",s.min]})]}),e.jsxs("div",{className:"flex items-center gap-2 text-gray-600",children:[e.jsx(i,{className:"w-4 h-4"}),e.jsxs("span",{children:["Max: $",s.max]})]}),e.jsxs("div",{className:"flex items-center gap-2 text-gray-600",children:[e.jsx(l,{className:"w-4 h-4"}),e.jsxs("span",{children:["Ref Commission: ",s.commission]})]})]}),e.jsx("ul",{className:"space-y-2 mb-6",children:s.features.map(((s,a)=>e.jsxs("li",{className:"flex items-center gap-2 text-gray-600",children:[e.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-accent"}),s]},a)))}),e.jsxs(a,{onClick:o,className:"w-full bg-accent hover:bg-accent/90 text-white group",children:["Choose Plan",e.jsx(c,{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"})]})]})]},m)))})]})})};export{m as InvestmentPlans};
