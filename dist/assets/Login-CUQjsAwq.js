import{r as e,u as s,j as a,B as t,L as r,b as l}from"./index-KrjSCS3J.js";import{L as i,y as n}from"./ReactToastify-BES1bQf4.js";import{I as o}from"./input-DO2ZWA01.js";import{C as c,a as m,b as d,c as h,d as p}from"./card-B7BNxfey.js";const x=({setIsAuthenticated:x})=>{const[u,j]=e.useState({email:"",password:""}),[f,g]=e.useState(!1),y=s(),w=e=>{j({...u,[e.target.id]:e.target.value})};return a.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-primary-dark px-4 py-20",children:[a.jsx(i,{}),a.jsxs(c,{className:"w-full max-w-md bg-white",children:[a.jsxs(m,{className:"space-y-1",children:[a.jsx(d,{className:"text-2xl font-bold",children:"Welcome Back"}),a.jsx(h,{children:"Enter your credentials to access your account"})]}),a.jsx(p,{children:a.jsxs("form",{className:"space-y-4",onSubmit:async e=>{if(e.preventDefault(),s=u.email,!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))return n.error("Invalid email format!");var s;if(u.password.length<6)return n.error("Password must be at least 6 characters long!");g(!0);try{const e=await fetch("https://investpro-h8qu.onrender.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}),s=await e.json();if(!e.ok)throw new Error(s.message||"Login failed. Please try again.");n.success("Login successful!");const a=(new Date).getTime()+36e5;localStorage.setItem("token",s.token),localStorage.setItem("expiryDate",a.toString()),x(!0),y(`/${s.user.role}/dashboard`)}catch(a){n.error(a.message)}finally{g(!1)}},children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),a.jsx(o,{id:"email",type:"email",placeholder:"name@example.com",className:"w-full",value:u.email,onChange:w})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{htmlFor:"password",className:"text-sm font-medium",children:"Password"}),a.jsx(o,{id:"password",type:"password",className:"w-full",value:u.password,onChange:w})]}),a.jsx("div",{className:"flex items-center justify-between",children:a.jsx("a",{href:"#",className:"text-sm text-primary hover:underline",children:"Forgot password?"})}),a.jsx(t,{type:"submit",className:"w-full bg-primary hover:bg-primary/90",disabled:f,children:f?"Signing in...":a.jsxs(a.Fragment,{children:[a.jsx(r,{className:"mr-2 h-4 w-4"})," Sign In"]})}),a.jsxs("p",{className:"text-center text-sm text-gray-600",children:["Don't have an account?"," ",a.jsx(l,{to:"/signup",className:"text-primary hover:underline",children:"Sign up"})]})]})})]})]})};export{x as default};
