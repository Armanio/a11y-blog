!function(){"use strict";!function(){const e=document.querySelector(".body"),t="theme-preference",r=document.querySelectorAll(".theme-switcher__button"),a=()=>localStorage.getItem(t)?localStorage.getItem(t):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",o=e=>{for(let e of r)e.setAttribute("aria-pressed","false");e.setAttribute("aria-pressed","true")},c=()=>{localStorage.setItem(t,i.value),l()},l=()=>{e.setAttribute("data-theme",i.value)},i={value:a()};(()=>{let e=a();const t=document.querySelector(`.theme-switcher__button[value=${e}]`);o(t)})(),l(),window.onload=()=>{l(),r.forEach((e=>e.addEventListener("click",(()=>{i.value="light"===e.getAttribute("value")?"light":"dark",o(e),c()}))))},window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(({matches:e})=>{i.value=e?"dark":"light",c()}))}()}();
