const d="modulepreload",b=function(a,s){return new URL(a,s).href},_={},h=function(s,i,c){let u=Promise.resolve();if(i&&i.length>0){const o=document.getElementsByTagName("link");u=Promise.all(i.map(e=>{if(e=b(e,c),e in _)return;_[e]=!0;const r=e.endsWith(".css"),f=r?'[rel="stylesheet"]':"";if(!!c)for(let n=o.length-1;n>=0;n--){const l=o[n];if(l.href===e&&(!r||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const t=document.createElement("link");if(t.rel=r?"stylesheet":d,r||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),r)return new Promise((n,l)=>{t.addEventListener("load",n),t.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})}))}return u.then(()=>s()).catch(o=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=o,window.dispatchEvent(e),!e.defaultPrevented)throw o})},y=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),g=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),v=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),S=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),p=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{h as _,y as a,g as b,v as c,S as d,p as e};