import{r as l}from"./index-09443a53.js";const S=t=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",fill:"none",...t},l.createElement("g",{clipPath:"url(#a)"},l.createElement("path",{fill:"#FFDA44",d:"M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"}),l.createElement("path",{fill:"#338AF3",d:"M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16"})),l.createElement("defs",null,l.createElement("clipPath",{id:"a"},l.createElement("path",{fill:"#fff",d:"M0 0h32v32H0z"})))),M=t=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",fill:"none",...t},l.createElement("g",{clipPath:"url(#a)"},l.createElement("path",{fill:"#F0F0F0",d:"M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"}),l.createElement("path",{fill:"#0052B4",d:"M3.308 6.259A15.942 15.942 0 0 0 .55 11.826h8.324L3.308 6.26ZM31.449 11.826a15.944 15.944 0 0 0-2.756-5.567l-5.568 5.567h8.324ZM.551 20.174a15.943 15.943 0 0 0 2.757 5.567l5.567-5.567H.55ZM25.741 3.308A15.943 15.943 0 0 0 20.174.55v8.324l5.567-5.567ZM6.259 28.692a15.944 15.944 0 0 0 5.567 2.757v-8.324L6.26 28.692ZM11.826.551A15.943 15.943 0 0 0 6.26 3.308l5.567 5.567V.55ZM20.174 31.449a15.946 15.946 0 0 0 5.567-2.757l-5.567-5.567v8.324ZM23.125 20.174l5.568 5.567a15.944 15.944 0 0 0 2.756-5.567h-8.324Z"}),l.createElement("path",{fill:"#D80027",d:"M31.865 13.913H18.087V.135a16.16 16.16 0 0 0-4.174 0v13.778H.135a16.16 16.16 0 0 0 0 4.174h13.778v13.778a16.166 16.166 0 0 0 4.174 0V18.087h13.778a16.166 16.166 0 0 0 0-4.174Z"}),l.createElement("path",{fill:"#D80027",d:"m20.174 20.174 7.14 7.14c.328-.329.641-.672.94-1.027l-6.113-6.113h-1.967ZM11.826 20.174l-7.14 7.14c.329.328.672.641 1.027.94l6.113-6.113v-1.967ZM11.826 11.826l-7.14-7.14c-.328.329-.641.672-.94 1.027l6.113 6.113h1.967ZM20.174 11.826l7.14-7.14a16.017 16.017 0 0 0-1.027-.94l-6.113 6.113v1.967Z"})),l.createElement("defs",null,l.createElement("clipPath",{id:"a"},l.createElement("path",{fill:"#fff",d:"M0 0h32v32H0z"}))));function o(t){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(t)}function h(t,e){if(o(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(o(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function g(t){var e=h(t,"string");return o(e)==="symbol"?e:String(e)}function v(t,e,r){return e=g(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?p(Object(r),!0).forEach(function(n){v(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function d(t){if(Array.isArray(t))return t}function O(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,a,i,f,u=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(b){s=!0,a=b}finally{try{if(!c&&r.return!=null&&(f=r.return(),Object(f)!==f))return}finally{if(s)throw a}}return u}}function y(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function w(t,e){if(t){if(typeof t=="string")return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(t,e){return d(t)||O(t,e)||w(t,e)||j()}function P(t,e){if(t==null)return{};var r={},n=Object.keys(t),a,i;for(i=0;i<n.length;i++)a=n[i],!(e.indexOf(a)>=0)&&(r[a]=t[a]);return r}function _(t,e){if(t==null)return{};var r=P(t,e),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function m(){return m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},m.apply(this,arguments)}export{S,_,Z as a,A as b,g as c,o as d,y as e,w as f,v as g,m as h,M as i};