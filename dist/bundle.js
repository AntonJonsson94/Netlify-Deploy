(()=>{var e={872:e=>{e.exports={printAnswer:function(e){if("number"==typeof e)return e>=18?"You can apply for a driver's license":"Sorry, you're not old enough to apply for a driver's license..."}}},322:(e,t,r)=>{"use strict";var n=r(872);e=r.hmd(e);const o=document.body;function i(e){o.innerHTML="";const t=document.createElement("p");t.innerText=e>=18?`${(0,n.printAnswer)(e)}. Take a ride around town!`:`${(0,n.printAnswer)(e)} GO HOME!`,o.appendChild(t)}!function(){o.innerHTML="";const e=document.createElement("input");e.setAttribute("type","number");const t=document.createElement("button");t.innerText="Send",t.addEventListener("click",(()=>{const t=parseFloat(e.value);e.innerText="",i(t)})),o.append(e,t)}(),e.exports={story:i}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n](i,i.exports,r),i.loaded=!0,i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(322);window.printInput=e.K})()})();