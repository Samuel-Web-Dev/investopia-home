import{j as e}from"./index-DtJyNnPh.js";import{C as a,d as n}from"./card-LuGwFhsV.js";const s=()=>e.jsx("div",{className:"py-20 bg-gradient-to-b from-white to-gray-50",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",children:"Payment Methods"}),e.jsx("p",{className:"text-gray-600 text-center mb-12 max-w-2xl mx-auto",children:"We support multiple payment methods for your convenience"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4",children:[{name:"Perfect Money",image:"/payment-logos/perfect-money.png"},{name:"Coinpayments",image:"/payment-logos/coinpayments.png"},{name:"Advcash",image:"/payment-logos/advcash.png"},{name:"Payeer",image:"/payment-logos/payeer.png"},{name:"Best Change",image:"/payment-logos/bestchange.png"},{name:"Block Chain",image:"/payment-logos/blockchain.png"},{name:"Coin Base",image:"/payment-logos/coinbase.png"}].map(((s,t)=>e.jsx(a,{className:"hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-accent/50 group",children:e.jsxs(n,{className:"p-4 flex flex-col items-center justify-center min-h-[140px] space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform",children:e.jsx("img",{src:s.image,alt:s.name,className:"w-full h-full object-contain",onError:e=>{e.target.src="/placeholder.svg"}})}),e.jsx("span",{className:"font-semibold text-center text-sm text-gray-700",children:s.name})]})},t)))})]})});export{s as PaymentMethods};
