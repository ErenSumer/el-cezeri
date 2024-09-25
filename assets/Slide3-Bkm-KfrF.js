import{j as e,m,r as b}from"./index-DSd_21gU.js";const w=({innovation:a,onClose:l})=>e.jsx(m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:l,children:e.jsxs(m.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},className:"bg-black rounded-3xl p-8 shadow-2xl border border-black border-opacity-30 max-w-2xl w-full mx-4",onClick:s=>s.stopPropagation(),children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-green-300",children:a.title}),e.jsx("img",{src:a.image,alt:a.title,className:"w-full h-64 object-cover rounded-lg mb-6"}),e.jsx("p",{className:"text-gray-200 text-lg",children:a.fullDescription}),e.jsx("button",{className:"mt-6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors",onClick:l,children:"Kapat"})]})}),z=[{id:1,title:"Filli Su Saati",image:"/el-cezeri/Filli-Su-Saati.jpg",shortDescription:"El-Cezeri'nin ünlü Filli Su Saati.",fullDescription:"Filli Su Saati El-Cezeri'nin en ünlü icatlarından biri, Filli Su Saati'dir. Bu saat, hem mühendislik harikası hem de estetik açıdan etkileyici bir eserdir. Su akışını kullanarak çalışan saat, farklı zaman dilimlerinde sesli uyarılar vererek zamanın geçtiğini bildirir. İçindeki mekanizmalar, saatin işleyişini su seviyesindeki değişikliklere göre düzenler. Bu saat, sadece teknik bir başarı değil, aynı zamanda dönemin sanatsal ve kültürel değerlerini de yansıtır."},{id:2,title:"Otomatik Abdest Alma Makinesi",image:"/el-cezeri/otomatik-abdest.jpg",shortDescription:"El-Cezeri'nin otomatik abdest alma makinesi.",fullDescription:"El-Cezeri, suyun mekanik kullanımı üzerine yaptığı çalışmalarla tanınır. En dikkat çeken icatlarından biri, otomatik abdest alma makinesidir. Bu cihaz, suyu belirli bir miktarda ve uygun bir şekilde döken bir sistemle çalışır. El-Cezeri'nin bu projesi, günlük dini ritüellerin teknolojik bir çözümle nasıl kolaylaştırılabileceğine dair erken bir örnek sunar."},{id:3,title:"Otomatik Su Dağıtma Makinesi",image:"/el-cezeri/hydraulic.jpg",shortDescription:"El-Cezeri'nin mühendislik harikası; Otomatik Su Dağıtma Sistemi.",fullDescription:"Otomatik Su Dağıtma Sistemi Su mühendisliği alanında yaptığı çalışmalar, El-Cezeri'nin başyapıtları arasında yer alır. Geliştirdiği su dağıtma sistemi, suyu belirli bir hizada ve miktarda dağıtmayı sağlayan mekanik bir düzenek içerir. Bu sistem, dönemin şehirlerinde su dağıtımını optimize etmek için kullanılabilecek bir prototip olarak görülüyordu."}],C=()=>{const[a,l]=b.useState(null),s=b.useRef(null);b.useEffect(()=>{const i=s.current;if(!i)return;const n=i.getContext("2d");if(!n)return;const u=()=>{i.width=window.innerWidth,i.height=window.innerHeight};u(),window.addEventListener("resize",u);const f=30;class h{constructor(t,o,d,c,r){this.amplitude=t,this.period=o,this.phase=d,this.verticalShift=c,this.color=r}draw(t,o,d,c){t.beginPath(),t.moveTo(0,d/2);for(let r=0;r<o;r++){const j=Math.sin(r/o*this.period+this.phase+c*.2)*this.amplitude+Math.sin(c*.1)*this.verticalShift+d/2;t.lineTo(r,j)}t.strokeStyle=this.color,t.stroke()}}const v=[new h(30,4,0,10,"rgba(0, 255, 0, 0.2)"),new h(20,6,1,15,"rgba(0, 200, 0, 0.2)"),new h(40,3,2,5,"rgba(0, 150, 0, 0.2)")];let k=0;const p=()=>{n&&(n.clearRect(0,0,i.width,i.height),v.forEach(x=>x.draw(n,i.width,i.height,k)),k+=.05,setTimeout(()=>requestAnimationFrame(p),1e3/f))};return p(),()=>{window.removeEventListener("resize",u)}},[]);const g={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},y={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return e.jsxs("div",{className:"relative h-full flex items-center justify-center overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-900 to-black opacity-50"}),e.jsx("canvas",{ref:s,className:"absolute inset-0"}),e.jsxs(m.div,{className:"relative z-10 max-w-6xl mx-auto px-4",variants:g,initial:"hidden",animate:"visible",children:[e.jsx("h2",{className:"text-4xl font-bold mb-8 text-white text-center",children:"El-Cezeri'nin Projeleri"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:z.map(i=>e.jsxs(m.div,{variants:y,className:"bg-white bg-opacity-20 backdrop-filter backdrop-blur-[10px] rounded-xl p-6 shadow-lg border border-white border-opacity-30 cursor-pointer",onClick:()=>l(i),children:[e.jsx("img",{src:i.image,alt:i.title,className:"w-full h-40 object-cover rounded-xl mb-4"}),e.jsx("h3",{className:"text-2xl font-semibold text-white mb-2",children:i.title}),e.jsx("p",{className:"text-gray-200",children:i.shortDescription})]},i.id))})]}),a&&e.jsx(w,{innovation:a,onClose:()=>l(null)})]})};export{C as default};
