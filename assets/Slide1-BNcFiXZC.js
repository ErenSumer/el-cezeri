import{r as f,j as e,m as u}from"./index-XzTUkNvo.js";const g=()=>{const h=f.useRef(null);return f.useEffect(()=>{const t=h.current;if(!t)return;const a=t.getContext("2d");if(!a)return;const o=()=>{t.width=window.innerWidth,t.height=window.innerHeight};o(),window.addEventListener("resize",o);const p=30;class c{constructor(i,r,n,l,s){this.amplitude=i,this.period=r,this.phase=n,this.verticalShift=l,this.color=s}draw(i,r,n,l){i.beginPath(),i.moveTo(0,n/2);for(let s=0;s<r;s++){const v=Math.sin(s/r*this.period+this.phase+l*.2)*this.amplitude+Math.sin(l*.1)*this.verticalShift+n/2;i.lineTo(s,v)}i.strokeStyle=this.color,i.stroke()}}const w=[new c(30,4,0,10,"rgba(0, 255, 0, 0.2)"),new c(20,6,1,15,"rgba(0, 200, 0, 0.2)"),new c(40,3,2,5,"rgba(0, 150, 0, 0.2)")];let d=0;const x=()=>{a&&(a.clearRect(0,0,t.width,t.height),w.forEach(m=>m.draw(a,t.width,t.height,d)),d+=.05,setTimeout(()=>requestAnimationFrame(x),1e3/p))};return x(),()=>{window.removeEventListener("resize",o)}},[]),e.jsxs("div",{className:"relative h-full flex items-center justify-center overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-900 to-black filter blur-3xl opacity-50"}),e.jsx("canvas",{ref:h,className:"absolute inset-0"}),e.jsxs("div",{className:"relative z-10 flex justify-center items-center max-w-6xl mx-auto px-4 pr-16",children:[e.jsxs(u.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.5},className:"w-1/2 pr-8 text-left",children:[e.jsx("h2",{className:"text-3xl text-gray-300 mb-4",children:"Bir Mühendislik Dehası"}),e.jsx("h1",{className:"text-6xl font-bold mb-4 text-white",children:"El-Cezeri"}),e.jsx("p",{className:"text-xl text-gray-400",children:"Zeynep Türk, Sebahattin Deha, Meryem Betül Çakır, Uraz Erselih"})]}),e.jsx(u.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"w-1/2 pl-8 flex justify-center",children:e.jsx("img",{src:"/pfp.jpg",alt:"El-Cezeri",className:"w-80 h-80 object-cover shadow-2xl rounded-lg"})})]})]})};export{g as default};
